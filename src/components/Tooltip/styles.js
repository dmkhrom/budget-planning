import styled from 'styled-components';

export const TooltipInfo = styled.div`
  display: flex;
  position: absolute;
  visibility: ${(props) => (props.isShow ? 'visible' : 'hidden')};
  left: 80%;
  bottom: 24px;
  width: 350px;
  font-size: 12px;
  background: linear-gradient(360deg, #f6f6f6 0%, #ffffff 100%);
  border: 1px solid rgba(178, 187, 213, 0.2);
  cursor: pointer;
  padding: 5px;
  z-ndex: 1;
`;
