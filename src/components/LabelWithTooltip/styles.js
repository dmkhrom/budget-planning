import styled from 'styled-components';

export const LabelWithTooltipWrapper = styled.div`
  display: flex;
  width: fit-content;
  position: relative;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #2f3b66;
  margin-bottom: 8px;
  & .info-icon {
    cursor: pointer;
    margin-left: 10px;
  }
`;
