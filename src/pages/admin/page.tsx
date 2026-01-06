import React from "react";
import Admin from "../../components/Admin";
import type { PortfolioItem } from "../../types";

interface AdminProps {
  onAddPortfolio: (item: PortfolioItem) => void;
  portfolio: PortfolioItem[];
  onDeletePortfolio: (id: number) => void;
}

const page: React.FC<AdminProps> = ({
  onAddPortfolio,
  portfolio,
  onDeletePortfolio,
}) => {
  return (
    <Admin
      onAddPortfolio={onAddPortfolio}
      portfolio={portfolio}
      onDeletePortfolio={onDeletePortfolio}
    />
  );
};

export default page;
