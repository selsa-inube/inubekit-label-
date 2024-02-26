import { props, parameters } from "./props";
import { Label, ILabelProps } from ".";

const story = {
  title: "inputs/Label",
  components: [Label],
  parameters,
  argTypes: props,
};

export const Default = (args: ILabelProps) => {
  return <Label {...args}>{args.children}</Label>;
};
Default.args = {
  htmlFor: "id",
  children: "Label Text",
  size: "large",
  disabled: false,
  focused: false,
  invalid: false,
  margin: "0px",
  padding: "0px",
};

export default story;
