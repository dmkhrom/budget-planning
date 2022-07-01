import styled from 'styled-components';

const X_POSITIONS = {
	right: '100%',
	left: '0%',
	middle: '50%',
};

export const TooltipInfo = styled.div`
  display: flex;
  position: absolute;
  visibility: ${(props) => (props.isShow ? 'visible' : 'hidden')};
  left: ${props => X_POSITIONS[props.positionX || 'right']};
  bottom: 30px;
  width: 200px;
  font-size: 12px;
  background: linear-gradient(360deg, #f6f6f6 0%, #ffffff 100%);
  border: 1px solid rgba(178, 187, 213, 0.2);
  cursor: pointer;
  padding: 5px;
  z-index: 10;
`;
