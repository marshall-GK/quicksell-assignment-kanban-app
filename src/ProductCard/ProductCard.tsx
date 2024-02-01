import * as React from "react";
import withStyles from "react-jss";
import ProductCardView from "./ProductCard.view";
import useModel from "./ProductCard.model";
import useStyles from "./ProductCard.styles";
import { PropTypes } from "./ProductCard.types";

const ProductCard: React.FC<PropTypes> = (props) => {
  const { theme, classes } = props;
  const model = useModel({ props })

  return <ProductCardView model={model} classes={classes} />;
};

export default withStyles(useStyles)(ProductCard);
