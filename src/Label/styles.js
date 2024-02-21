import styled from "styled-components";
import { inube } from "@inubekit/foundations";
import { typography } from "./ typography";

export const StyledLabel = styled.label`
  font-family: ${({ theme }) => {
    return (
      theme?.typography?.label?.large?.font || inube.typography.label.large.font
    );
  }};
  font-size: ${({ $size, theme }) =>
    $size &&
    (theme?.typography?.label?.[$size]?.size ||
      inube.typography.label[$size].size)};
  font-weight: ${({ $size, theme }) =>
    $size &&
    (theme?.typography?.label?.[$size]?.weight ||
      inube.typography.label[$size].weight)};
  letter-spacing: ${({ $size, theme }) =>
    $size &&
    (theme?.typography?.label?.[$size]?.tracking ||
      inube.typography.label[$size].tracking)};
  line-height: ${({ $size, theme }) =>
    $size &&
    (theme?.typography?.label?.[$size]?.lineHeight ||
      inube.typography.label[$size].lineHeight)};
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
        theme?.label?.content?.color?.regular ||
        inube.label.content.color.regular
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
