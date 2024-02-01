import React, { useEffect, useState } from "react";
import { apiResponse, initialState } from "./ProductCard.constants";
import { ModelPropTypes } from "./ProductCard.types";

const useModel = (parentProps: ModelPropTypes) => {
  const { props } = parentProps;

  const [errorInLoading, setErrorInLoading] = useState(false)

  const handleError = (value: boolean) => {
    setErrorInLoading(value);
  }

  return {
    apiResponse,
    errorInLoading,
    handleError
  };
};


export default useModel;
