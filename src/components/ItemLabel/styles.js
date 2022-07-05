import styled from 'styled-components';

export const ItemLabelWrapper = styled.div`
  font-weight: 400;
  font-size: ${({theme}) => theme.fontSizes.regular};
  line-height: 21px;
  color: ${({theme}) => theme.colors.blue[600]};
  margin-bottom: 8px;
`;
