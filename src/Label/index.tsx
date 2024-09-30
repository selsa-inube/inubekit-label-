import { ILabelSize } from "./props";
import { ITextAppearance, Text } from "@inubekit/text";

interface ILabel {
  children?: React.ReactNode;
  disabled?: boolean;
  focused?: boolean;
  htmlFor?: string;
  invalid?: boolean;
  margin?: string;
  padding?: string;
  size?: ILabelSize;
}

const Label = (props: ILabel) => {
  const {
    children,
    disabled = false,
    focused = false,
    htmlFor,
    invalid = false,
    margin = "0px",
    padding = "0px",
    size = "large",
  } = props;

  const getAppearance = (
    disabled: boolean,
    focused: boolean,
    invalid: boolean,
  ) => {
    if (invalid) return "danger";
    if (focused) return "primary";
    if (disabled) return "dark";
    return "dark";
  };

  return (
    <label htmlFor={htmlFor}>
      <Text
        appearance={
          getAppearance(disabled, focused, invalid) as ITextAppearance
        }
        margin={margin}
        padding={padding}
        size={size}
        type="label"
        weight="bold"
      >
        {children}
      </Text>
    </label>
  );
};

export { Label };
export type { ILabel };
