import styled from "styled-components";
import { inube } from "@inubekit/foundations";

export const StyledLabel = styled.label`
  font-family: ${({ theme }) =>
      theme?.typography?.label?.[$size]?.font || "Roboto"},
    sans-serif;
  font-size: ${({ theme, $size }) =>
    theme?.typography?.label?.[$size]?.size ||
    inube.typography.label[$size].size};
  font-weight: ${({ theme, $size }) =>
    theme?.typography?.label?.[$size]?.weight ||
    inube.typography.label[$size].weight};
  letter-spacing: ${({ theme, $size }) =>
    theme?.typography?.label?.[$size]?.tracking ||
    inube.typography.label[$size].tracking};
  line-height: ${({ theme, $size }) =>
    theme?.typography?.label?.[$size]?.lineHeight ||
    inube.typography.label[$size].lineHeight};
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
