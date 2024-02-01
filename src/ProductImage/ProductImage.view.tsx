import * as React from "react";
import useStyles from "./ProductImage.styles";
import { ViewPropTypes } from "./ProductImage.types";
import { ReactComponent as ErrorIcon } from "../assets/exclamation.svg";

const ProductImageView = (props: ViewPropTypes) => {
  const { model, classes } = props;
  const { data, imageData, errorImage } = model;
  return (
    <div className={classes.imageContainer} key={data.url}>
      {errorImage ? (
        <div>
          <ErrorIcon />
        </div>
      ) : (
        <img
          src={imageData}
          alt=""
          width={"38px"}
          height={"38px"}
          className={classes.productImage}
        />
      )}
    </div>
  );
};

export default ProductImageView;
