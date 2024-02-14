import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Col, Grid, Input, Row } from "antd";
import CharityCard from "../Components/CharityCard";
import { APIResponse, Nonprofit } from "../@Types/Customtypes";
import CharitiesGrid from "../Components/CharitiesGrid";
import Search from "../Components/Search";

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
  const [isLoading, setIsLoading] = useState(true);
  const [inputText, setInputText] = useState("");

  const getCharities = async () => {
    setIsLoading(true);
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
        setIsLoading(false);
      }
      //Handle errors here//
    } catch (error) {
      console.log("error :>>", error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const filteredCharities = charities?.filter((charity) => {
    return charity.name.toLowerCase().includes(inputText.toLowerCase());
  });

  useEffect(() => {
    getCharities();
  }, []);

  return (
    <>
      <div className="wrapper">
        <h2>Charities</h2>
        <Search handleInputChange={handleInputChange} />

        <div className="container">
          <Row>
            {!isLoading && <CharitiesGrid charities={filteredCharities} />}
          </Row>
        </div>
      </div>
    </>
  );
}

export default Charities;
