import { Input } from "antd";
import React, { ChangeEvent } from "react";

type SearchProps = {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function Search({ handleInputChange }: SearchProps) {
  return (
    <Input
      type="text"
      placeholder="Search by charity name"
      onChange={handleInputChange}
    />
  );
}

export default Search;
