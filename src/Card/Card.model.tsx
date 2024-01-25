import React, { useState } from "react";
import { initialState } from "./Card.constants";
import { ModelPropTypes } from "./Card.types";

const useModel = (parentProps: ModelPropTypes) => {
  const { props } = parentProps;
  const { data, userName, userAvailable } = props;

  return {
    data,
    userName,
    userAvailable
  };
};


export default useModel;
