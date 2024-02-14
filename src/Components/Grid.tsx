import React from "react";
import { Nonprofit } from "../@Types/Customtypes";
import CharityCard from "./CharityCard";
import { Card, Col } from "antd";

type GridProps = {
  charities: Nonprofit[] | null;
};

const CharitiesGrid = ({ charities }: GridProps) => {
  return (
    <div className="card">
      {charities &&
        charities.map((charity) => {
          return (
            <>
              <Col>
                <div key={charity.ein}>
                  <CharityCard
                    cover={charity.coverImageUrl}
                    avatar={charity.logoUrl}
                    title={charity.name}
                  />
                </div>
              </Col>
            </>
          );
        })}
    </div>
  );
};

export default CharitiesGrid;
