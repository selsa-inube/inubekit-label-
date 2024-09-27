import { ILabelSize } from "./props";
import { ITextAppearance, Text } from "@inubekit/text";

interface ILabel {
  children?: React.ReactNode;
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
    focused = false,
    htmlFor,
    invalid = false,
    margin = "0px",
    padding = "0px",
    size = "large",
  } = props;

  const getAppearance = (invalid: boolean, focused: boolean) => {
    if (invalid) return "danger";
    if (focused) return "primary";
    return "dark";
  };

  return (
    <label htmlFor={htmlFor}>
      <Text
        appearance={getAppearance(invalid, focused) as ITextAppearance}
        padding={padding}
        margin={margin}
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
