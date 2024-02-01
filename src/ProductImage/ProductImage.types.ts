import useModel from "./ProductImage.model";
import useStyles from "./ProductImage.styles";

interface StylesProps {
  classes: { [X in keyof ReturnType<typeof useStyles>]: string };
  theme?: any;
}

export interface PropTypes extends StylesProps {
  data: { url: string; ready: boolean; error: boolean };
  totalRetry: number;
  setImageError: (isFailedToFetch: boolean) => void;
}

export type ModelPropTypes = {
  props: PropTypes;
};

export interface ViewPropTypes extends StylesProps {
  model: ReturnType<typeof useModel>;
}
