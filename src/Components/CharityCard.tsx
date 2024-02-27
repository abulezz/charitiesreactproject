import {
  EllipsisOutlined,
  ShareAltOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Button, Modal } from "antd";
import { useContext, useEffect, useState } from "react";
import CardModal from "./CardModal";
import { Link, useNavigate } from "react-router-dom";
import { AuthContextV2 } from "./AuthContxtV2";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { auth } from "../firebaseConfig";

const { Meta } = Card;

type CharityCardProps = {
  cover: string;
  avatar: string;
  title: string;
  descreption: string;
  logoURL: string;
  location: string;
  ein: string;
};

function CharityCard({ cover, avatar, title, ein }: CharityCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favs, setFavs] = useState<Array<any>>([]);
  const navigate = useNavigate();
  const user = useContext(AuthContextV2);

  useEffect(() => {
    getUserData();
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const getUserData = async () => {
    // console.log("auth.currentUser.uid->", auth.currentUser?.uid);
    // console.log("auth.currentUser->", auth.currentUser);
    const id = user?.uid;
    console.log("id", id);
    const docRef = doc(db, "users", id);
    console.log("docRef", docRef);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      let userData: { favorites: Array<any> } = docSnap.data();
      console.log("userData", userData);
      setFavs(userData.favorites);
    }
  };

  const addCharityToFavorite = async (ein: string) => {
    console.log("auth.currentUser.uid->", auth.currentUser.uid);
    console.log("auth.currentUser->", auth.currentUser);
    // firestore -> add ein to favorites

    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      let userData: { favorites: Array<any> } = docSnap.data();
      console.log("userData.favorites->", userData.favorites);
      console.log("ein->", ein);
      if (userData.favorites?.includes(ein)) {
        // Handle unlike
        console.log("Handle unlike");
        const newList = userData.favorites.filter(
          (favorite) => favorite !== ein
        );
        const response = await updateDocument({ favorites: newList });
        console.log("response->", response);
      } else {
        console.log("Handle like");
        // Handle like
        if (!userData.favorites) {
          userData.favorites = [ein];
        } else {
          userData.favorites.push(ein);
        }

        let response = await updateDocument({ favorites: userData.favorites });
        console.log("response->", response);
      }
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
    console.log("docRef-> ", docRef);
    getUserData();
    // remove
  };

  const updateDocument = async (data) => {
    const docRef = await setDoc(
      doc(db, "users", auth.currentUser.uid),
      data
    ).catch((err) => {
      console.log("error->", err);
    });
    console.log("docRefdocRefdocRef", docRef);
  };

  return (
    <div>
      <Card
        style={{ width: 300, marginBottom: "25px" }}
        cover={
          <img
            alt={title}
            src={cover}
            style={{ width: "300px", height: "200px" }}
          />
        }
        actions={[
          <HeartOutlined
            style={{ color: favs?.includes(ein) ? "red" : "gray" }}
            key="favourite"
            onClick={() => {
              user ? addCharityToFavorite(ein) : showModal();
            }}
          />,
          <EllipsisOutlined
            key="ellipsis"
            onClick={() => {
              navigate("/charities/" + ein);
            }}
          />,
        ]}
      >
        <Meta avatar={<Avatar src={avatar} />} title={title} />
        <CardModal
          handleOk={handleOk}
          isModalOpen={isModalOpen}
          name="Sign In"
          description="Sign in or Sign up to view your favorites list"
        />
      </Card>
    </div>
  );
}

export default CharityCard;
