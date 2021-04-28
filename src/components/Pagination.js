import React from "react";
import styled from "styled-components";

const PaginationStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Pagination = ({ lastPage, nextPage, page, totalPages }) => {
  return (
    <PaginationStyle>
      <button onClick={lastPage}>
        <div>👈</div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={nextPage}>
        <div>👉</div>
      </button>
    </PaginationStyle>
  );
};

export default Pagination;
