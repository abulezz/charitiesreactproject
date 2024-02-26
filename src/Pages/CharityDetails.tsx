import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CharityDetailsType } from "../@Types/Customtypes";
import { Button } from "antd";

type Props = {};

function CharityDetails({}: Props) {
  const params: { ein: string } = useParams();
  const [charity, setCharity] = useState<{
    nonprofit: CharityDetailsType;
    nonprofitTags: Array<any>;
  }>(null);

  const fetchCharityDetails = async (): Promise<{
    nonprofit: any;
    nonprofitTags: Array<any>;
  }> => {
    const response = await fetch(
      `https://partners.every.org/v0.2/nonprofit/${params.ein}?apiKey=${
        import.meta.env.VITE_API_EVERY_KEY
      }`
    );
    const data = await response.json();
    return data.data;
  };

  useEffect(() => {
    fetchCharityDetails().then((charity) => {
      console.log("charity.nonprofit->", charity.nonprofit);
      setCharity(charity);
    });
  }, []);

  return (
    charity && (
      <>
        <div className="wrapper">
          <h3>
            {charity.nonprofit.name} - {charity.nonprofit.locationAddress}
          </h3>
          <p>{charity.nonprofit.description}</p>
          <img
            alt={charity.nonprofit.name}
            src={charity.nonprofit.coverImageUrl}
          />
        </div>
      </>
    )
  );
}

export default CharityDetails;
