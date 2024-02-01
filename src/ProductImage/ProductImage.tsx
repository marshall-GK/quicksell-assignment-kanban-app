import * as React from "react";
import withStyles from "react-jss";
import ProductImageView from "./ProductImage.view";
import useModel from "./ProductImage.model";
import useStyles from "./ProductImage.styles";
import { PropTypes } from "./ProductImage.types";

const ProductImage: React.FC<PropTypes> = (props) => {
  const { theme, classes } = props;
  const model = useModel({ props })

  return <ProductImageView model={model} classes={classes} />;
};

export default withStyles(useStyles)(ProductImage);
