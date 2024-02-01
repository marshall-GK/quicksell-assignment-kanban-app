import * as React from "react";
import useStyles from "./ProductImage.styles";
import { ViewPropTypes } from "./ProductImage.types";
import { ReactComponent as ErrorIcon } from "../assets/exclamation.svg";
import { ReactComponent as Loader } from "../assets/spinning-dots.svg";

const ProductImageView = (props: ViewPropTypes) => {
  const { model, classes } = props;
  const { data, imageData, errorImage, loading } = model;
  const renderImage = () => {
    if (loading) return renderLoader();
    return (
      <img
        src={imageData}
        alt=""
        width={"38px"}
        height={"38px"}
        className={classes.productImage}
      />
    );
  };

  const renderLoader = () => {
    return <Loader />;
  };
  return (
    <div className={classes.imageContainer} key={data.url}>
      {errorImage ? (
        <div>
          <ErrorIcon />
        </div>
      ) : (
        renderImage()
      )}
    </div>
  );
};

export default ProductImageView;
