import * as React from "react";
import useStyles from "./ProductCard.styles";
import { ViewPropTypes } from "./ProductCard.types";
import ProductImage from "../ProductImage/ProductImage";
import { ReactComponent as ErrorIcon } from '../assets/exclamation.svg';

const ProductCardView = (props: ViewPropTypes) => {
  const { model, classes } = props;
  const { apiResponse, errorInLoading, handleError } = model;
  return (
    <div className={classes.productCardContainer}>
      <div className={classes.productImageContainer}>
        {apiResponse.images.map((img) => {
          return <ProductImage data={img} totalRetry={3} setImageError={handleError}/>;
        })}
      </div>
      <div style={{textAlign: 'left'}}>
        <div style={{fontSize: '16px'}}>{apiResponse.name}</div>
        <div style={{fontSize: '12px'}}>{apiResponse.count} products</div>
      </div>
      {errorInLoading ? <div className={classes.errorImage}><ErrorIcon /></div> : ''}
    </div>
  );
};

export default ProductCardView;
