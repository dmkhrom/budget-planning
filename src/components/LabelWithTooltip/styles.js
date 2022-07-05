import styled from 'styled-components';

export const LabelWithTooltipWrapper = styled.div`
  display: flex;
  width: fit-content;
  position: relative;
  font-weight: 400;
  font-size: ${({theme}) => theme.fontSizes.regular};
  line-height: 21px;
  color: ${({theme}) => theme.colors.blue[600]};
  margin-bottom: 8px;
  & .info-icon {
    cursor: pointer;
    margin-left: 10px;
  }
`;
