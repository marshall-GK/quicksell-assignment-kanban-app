import React, { useState } from "react";
import { ModelPropTypes } from "./CardFilter.types";

const useModel = (parentProps: ModelPropTypes) => {
  const { props } = parentProps;
  const { setFilter, selectedFilter } = props;
  const [showFilter, setShowFilter] = useState(false);

  const handleFilterExpansion = () => {
    setShowFilter((prev) => !prev);
  };

  const handleSetFilter = (
    key: string,
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilter({ key, value: event?.target?.value });
  };

  return {
    handleFilterExpansion,
    showFilter,
    handleSetFilter,
    selectedFilter,
  };
};

export default useModel;
