import styled from 'styled-components';

const X_POSITIONS = {
	right: '100%',
	left: '0%',
	middle: '50%'
};

export const TooltipContainer = styled.div`
	display: contents;
	position: relative;
`;

export const TooltipInfo = styled.div`
	display: flex;
	position: absolute;
	visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
	left: ${({ positionX }) => (positionX ? X_POSITIONS[positionX] : X_POSITIONS.right)};
	bottom: 30px;
	width: 200px;
	font-size: ${({ theme }) => theme.fontSizes.small};
	background: linear-gradient(
		360deg,
		${({ theme }) => theme.colors.grey[300]} 0%,
		${({ theme }) => theme.colors.white} 100%
	);
	border: 1px solid rgba(178, 187, 213, 0.2);
	cursor: pointer;
	padding: 5px;
	z-index: 10;
`;
