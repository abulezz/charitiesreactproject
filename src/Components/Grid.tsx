import React from "react";
import { Nonprofit } from "../@Types/Customtypes";
import CharityCard from "./CharityCard";
import { Col } from "antd";

type GridProps = {
  charities: Nonprofit[];
};

const Grid = ({ charities }: GridProps) => {
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

export default Grid;
