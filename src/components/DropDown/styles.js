import styled from 'styled-components';

export const DropdownWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 40px;
	cursor: pointer;
	background: linear-gradient(
		360deg,
		${({ theme }) => theme.colors.grey[300]} 0%,
		${({ theme }) => theme.colors.white} 100%
	);
	border: 1px solid rgba(178, 187, 213, 0.5);
	box-sizing: border-box;
	box-shadow: 0 1px 2px ${({ theme }) => theme.colors.grey[600]};
	border-radius: 3px;
`;

export const DropdownList = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	background: ${({ theme }) => theme.colors.white};
	box-sizing: border-box;
	border: 1px solid rgba(178, 187, 213, 0.5);
	box-shadow: 0 1px 2px ${({ theme }) => theme.colors.grey[600]};
	border-radius: 3px;
	margin-top: 1px;
	z-index: 100;
`;

export const DropdownItem = styled.div`
	display: flex;
	width: 100%;
	font-weight: 500;
	font-size: ${({ theme }) => theme.fontSizes.regular};
	line-height: 18px;
	position: relative;
	background: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.blue[700]};
	justify-content: space-between;
	padding: 10px 14px;
	align-items: center;
	border-radius: 0;
	box-sizing: border-box;
	&:hover {
		background: ${({ theme }) => theme.colors.grey[700]};
	}
`;

export const DropdownSelectedItem = styled(DropdownItem)`
	box-shadow: 0 1px 2px ${({ theme }) => theme.colors.grey[600]};
	border-radius: 3px;
	& .chevron-icon {
		transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0')});
	}
`;
