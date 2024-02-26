import React, {useEffect, useState} from "react";
import {doc, getDoc} from "firebase/firestore";
import {auth, db} from "../firebaseConfig";
import CharityCard from "../Components/CharityCard";
import {Col} from "antd";

type Props = {};

function Favorites({}: Props) {
    const [userData,setUserData] = useState<{ favorites: Array<any> } >()
    const [favs,setFavs] = useState<Array<any>>([])

    useEffect(()=>{

        const docRef = doc(db, "users", auth.currentUser.uid);
        getDoc(docRef).then(async (docSnap)=>{
            if (docSnap.exists()) {
                let userData: { favorites: Array<any> } = docSnap.data()
                setUserData(userData)
                let resusltss = await Promise.all(userData.favorites.map(async (favEin)=>{
                    let result = await fetchCharityDetails(favEin)
                    console.log("ress->",result)
                    return result
                }))
                setFavs(resusltss)
            }
        })


    },[])

    const fetchCharityDetails = async (ein): Promise<{
        nonprofit: any;
        nonprofitTags: Array<any>;
    }> => {
        const response = await fetch(
            `https://partners.every.org/v0.2/nonprofit/${ein}?apiKey=${
                import.meta.env.VITE_API_EVERY_KEY
            }`
        );
        const data = await response.json();
        return data.data;
    };

  return (
    <>
      <h3>Favorites</h3>
        {favs.map((fav)=>{
            return <Col key={fav.nonprofit.ein} md={6} sm={8} xs={16}>
                <CharityCard
                    ein={fav.nonprofit.ein}
                    cover={fav.nonprofit.coverImageUrl}
                    avatar={fav.nonprofit.logoUrl}
                    title={fav.nonprofit.name}
                    descreption={fav.nonprofit.description}
                />
            </Col>
        })}
    </>
  );
}

export default Favorites;
