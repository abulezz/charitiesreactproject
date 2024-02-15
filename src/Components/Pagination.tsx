import React from "react";
// import { Pagination } from "antd";

type PaginationProps = {
  page: number;
  pages: number;
  page_size: number;
  total_results: number;
};

function Pagination({
  page,
  pages,
  page_size,
  total_results,
}: PaginationProps) {
  return (
    <Pagination
      current={page}
      defaultCurrent={1}
      total={total_results}
      PageSize={page_size}
    />
  );
}

export default Pagination;
