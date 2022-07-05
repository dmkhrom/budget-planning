import styled from 'styled-components';

export const CustomButton = styled.button`
	cursor: pointer;
	display: flex;
	align-items: center;
	background: linear-gradient(
		360deg,
		${({ theme }) => theme.palette.grey[300]} 0%,
		${({ theme }) => theme.palette.white} 100%
	);
	border: 1px solid rgba(178, 187, 213, 0.5);
	box-shadow: 0 1px 2px ${({ theme }) => theme.palette.grey[600]};
	border-radius: 3px;
	font-weight: 600;
	font-size: ${({ theme }) => theme.fontSizes.small};
	line-height: 16px;
	color: ${({ theme }) => theme.palette.blue[500]};
	padding: 0 16px;
	box-sizing: border-box;
	& span {
		margin-left: 8px;
	}
`;
