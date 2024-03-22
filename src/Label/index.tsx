import { ILabelSize } from "./props";
import { StyledLabel } from "./styles";

interface ILabel {
  disabled?: boolean;
  focused?: boolean;
  htmlFor: string;
  invalid?: boolean;
  margin?: string;
  padding?: string;
  size?: ILabelSize;
  children?: React.ReactNode;
}

const Label = (props: ILabel) => {
  const {
    disabled = false,
    focused = false,
    htmlFor,
    invalid = false,
    margin = "0px",
    padding = "0px",
    size = "large",
    children,
  } = props;

  return (
    <StyledLabel
      $disabled={disabled}
      $focused={focused}
      htmlFor={htmlFor}
      $invalid={invalid}
      $margin={margin}
      $padding={padding}
      $size={size}
    >
      {children}
    </StyledLabel>
  );
};

export { Label };
export type { ILabel };
