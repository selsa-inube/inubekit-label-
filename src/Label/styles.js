import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledLabel = styled.label`
  font-family: ${({ theme, $size }) =>
      theme?.typography?.label?.[$size]?.font || "Roboto"},
    sans-serif;
  font-size: ${({ $size }) => inube.typography.label[$size].size};
  font-weight: 500;
  letter-spacing: ${({ $size }) => inube.typography.label[$size].tracking};
  line-height: ${({ $size }) => inube.typography.label[$size].lineHeight};
  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding }) => $padding};
  color: ${({ theme, $disabled, $focused, $invalid }) => {
    if ($disabled) {
      return (
        theme?.label?.content?.color?.disabled ||
        inube.label.content.color.disabled
      );
    }

    if ($invalid) {
      return (
        theme?.label?.content?.color?.invalid ||
        inube.label.content.color.invalid
      );
    }

    if ($focused) {
      return (
        theme?.label?.content?.color?.focus || inube.label.content.color.focus
      );
    }

    return (
      theme?.label?.content?.color?.regular || inube.label.content.color.regular
    );
  }};
`;

export { StyledLabel };
