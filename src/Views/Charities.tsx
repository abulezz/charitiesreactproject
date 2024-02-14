import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "antd";
import CharityCard from "../Components/CharityCard";

interface APIResponse {
  nonprofits: Nonprofit[];
  pagination: Pagination;
}

type Nonprofit = {
  description: string;
  ein: string;
  name: string;
  profileUrl: string;
  logoUrl: string;
  coverImageUrl: string;
  logoCloudinaryId: string;
  location: string;
  websiteUrl?: string;
};

type Pagination = {
  page: number;
  pages: number;
  page_size: number;
  total_results: number;
};
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
            <div className="card">
              {charities &&
                charities.map((charity) => {
                  return (
                    <Col>
                      <div key={charity.ein}>
                        <CharityCard
                          cover={charity.coverImageUrl}
                          avatar={charity.logoUrl}
                          title={charity.name}
                        />
                      </div>
                    </Col>
                  );
                })}
            </div>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Charities;
