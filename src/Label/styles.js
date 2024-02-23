import styled from "styled-components";
import { inube } from "@inubekit/foundations";
import { typography } from "./typography.ts";

export const StyledLabel = styled.label`
  font-family: ${({ theme }) => theme?.font || "Roboto"}, sans-serif;
  font-size: ${({ $size }) => typography.label[$size].size};
  font-weight: ${({ $size }) => typography.label[$size].weight};
  letter-spacing: ${({ $size }) => typography.label[$size].tracking};
  line-height: ${({ $size }) => typography.label[$size].lineHeight};
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
