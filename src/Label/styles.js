import styled from "styled-components";
import { inube } from "@inubekit/foundations";

const StyledLabel = styled.label`
  font-family: ${({ theme }) => {
    return (
      theme?.typography?.label?.large?.font || inube.typography.label.large.font
    );
  }};
  font-$size: ${({ $$size, theme }) =>
    $$size &&
    (theme?.typography?.label?.[$$size]?.$size ||
      inube.typography.label[$$size].$size)};
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
        theme?.color?.text?.dark?.disabled || inube.color.text.dark.disabled
      );
    }

    if ($invalid) {
      return (
        theme?.color?.text?.error?.regular || inube.color.text.error.regular
      );
    }

    if ($focused) {
      return (
        theme?.color?.text?.primary?.hover || inube.color.text.primary.hover
      );
    }

    return theme?.color?.text?.dark?.regular || inube.color.text.dark.regular;
  }};
`;

export { StyledLabel };
