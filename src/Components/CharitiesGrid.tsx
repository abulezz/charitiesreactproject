import React from "react";
import { Nonprofit } from "../@Types/Customtypes";
import CharityCard from "./CharityCard";
import { Card, Col } from "antd";
import Title from "antd/es/skeleton/Title";

type GridProps = {
  charities: Nonprofit[] | null;
};

const CharitiesGrid = ({ charities }: GridProps) => {
  return (
    <>
      {charities &&
        charities.map((charity) => {
          return (
            <Col key={charity.ein} md={6} sm={8} xs={16}>
              <CharityCard
                ein={charity.ein}
                cover={charity.coverImageUrl}
                avatar={charity.logoUrl}
                title={charity.name}
                descreption={charity.description}
              />
            </Col>
          );
        })}
    </>
  );
};

export default CharitiesGrid;
