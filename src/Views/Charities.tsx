import React, { useEffect, useState } from "react";
import { Button, Col, Grid, Row } from "antd";
import CharityCard from "../Components/CharityCard";
import { APIResponse, Nonprofit } from "../@Types/Customtypes";
import CharitiesGrid from "../Components/Grid";

function Charities() {
  const [charities, setCharities] = useState<Nonprofit[]>([
    {
      description: "",
      ein: "",
      name: "",
      profileUrl: "",
      logoUrl: "",
      coverImageUrl: "",
      logoCloudinaryId: "",
      location: "",
      websiteUrl: "",
    },
  ]);

  const getCharities = async () => {
    try {
      const response = await fetch(
        // `https://partners.every.org/v0.2/browse/water?apiKey=${
        //   import.meta.env.API_KEY
        // }`
        "https://partners.every.org/v0.2/browse/water?apiKey=pk_live_c02057a477bb2b1db7ab96376d48bd53"
      );
      if (response.ok) {
        const data = (await response.json()) as APIResponse;
        console.log("result :>>", data);
        setCharities(data.nonprofits);
      }
      //Handle errors here//
    } catch (error) {
      console.log("error :>>", error);
    }
  };

  useEffect(() => {
    getCharities();
  }, []);

  return (
    <>
      <div className="wrapper">
        <h2>Charities</h2>
        <div className="container">
          <Row>
            <CharitiesGrid charities={charities} />
          </Row>
        </div>
      </div>
    </>
  );
}

export default Charities;
