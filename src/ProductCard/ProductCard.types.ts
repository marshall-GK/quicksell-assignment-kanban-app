import useModel from "./ProductCard.model";
import useStyles from "./ProductCard.styles";

interface StylesProps {
  classes: { [X in keyof ReturnType<typeof useStyles>]: string };
  theme?: any;
}

export interface PropTypes extends StylesProps {}

export type ModelPropTypes = {
  props: PropTypes;
};

export interface ViewPropTypes extends StylesProps{
  model: ReturnType<typeof useModel>;
};
