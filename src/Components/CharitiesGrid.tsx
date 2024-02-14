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
    <div key="1" className="card">
      {charities &&
        charities.map((charity, i) => {
          return (
            <>
              <div key={i}>
                <Col key={charity.ein} span={24}>
                  <CharityCard
                    cover={charity.coverImageUrl}
                    avatar={charity.logoUrl}
                    title={charity.name}
                    descreption={charity.description}
                  />
                </Col>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default CharitiesGrid;
