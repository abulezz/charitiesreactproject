import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Col, Grid, Input, PaginationProps, Row } from "antd";
import CharityCard from "../Components/CharityCard";
import { APIResponse, Nonprofit, PaginationType } from "../@Types/Customtypes";
import CharitiesGrid from "../Components/CharitiesGrid";
import Search from "../Components/Search";
import { Pagination } from "antd";

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
  const [paginationValues, setPaginationValues] = useState<PaginationType>({
    page: 1,
    pages: 1,
    page_size: 1,
    total_results: 1,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [inputText, setInputText] = useState("");

  const getCharities = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://partners.every.org/v0.2/browse/water?apiKey=${
          import.meta.env.VITE_API_EVERY_KEY
        }&page=${currentPage}`
      );
      if (response.ok) {
        const data = (await response.json()) as APIResponse;
        setCharities(data.nonprofits);
        setPaginationValues(data.pagination);
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
    console.log("useEffect run ");
    getCharities();
  }, [currentPage]);

  const onChange: PaginationProps["onChange"] = (page) => {
    console.warn("page number clicked: ", page);
    setCurrentPage(page);
  };

  return (
    <>
      <div className="wrapper">
        <h2>Charities</h2>

        <div className="container">
          <Search handleInputChange={handleInputChange} />

          <Row>
            {!isLoading && <CharitiesGrid charities={filteredCharities} />}
          </Row>
          <Pagination
            current={paginationValues.page}
            defaultCurrent={1}
            total={paginationValues.total_results}
            pageSize={paginationValues.page_size}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
}

export default Charities;
