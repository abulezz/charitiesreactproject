import React, { ChangeEvent, useEffect, useState } from "react";
import { Carousel, PaginationProps, Row } from "antd";
import { APIResponse, Nonprofit, PaginationType } from "../@Types/Customtypes";
import CharitiesGrid from "../Components/CharitiesGrid";
import Search from "../Components/Search";
import { Pagination } from "antd";
import image1 from "../../src/assets/Images/image1.jpg";
import image2 from "../../src/assets/Images/image2.jpg";
import image4 from "../../src/assets/Images/image4.jpg";
import image5 from "../../src/assets/Images/image5.jpg";

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
        console.log("data.pagination->", data.pagination);
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

  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <>
      <Carousel />
      <div className="wrapper">
        <div>
          <Carousel autoplay>
            <div style={contentStyle}>
              <img
                height="160px"
                width="480px"
                src={image1}
                alt="H2All Water Charity"
              ></img>
            </div>
            <div>
              <img
                height="160px"
                width="480px"
                src={image2}
                alt="Water Cause Donations"
              ></img>
            </div>
            <div>
              <img
                height="160px"
                width="480px"
                src={image4}
                alt="World Water Day"
              ></img>
            </div>
            <div>
              <img
                height="160px"
                width="480px"
                src={image5}
                alt="Verified Water Cause Intiative"
              ></img>
            </div>
          </Carousel>
        </div>

        <div style={{ marginTop: "25px" }} className="container">
          <Search handleInputChange={handleInputChange} />

          <Row style={{ marginTop: "25px" }}>
            {!isLoading && <CharitiesGrid charities={filteredCharities} />}
          </Row>
          <Pagination
            current={paginationValues.page}
            defaultCurrent={1}
            total={paginationValues.total_results}
            pageSize={paginationValues.page_size}
            showSizeChanger={false}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
}

export default Charities;
