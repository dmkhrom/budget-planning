import styled from 'styled-components';

export const IconButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	padding: 5px;
	box-sizing: border-box;
	border-radius: 50%;
	&:hover {
		background-color: ${({ theme }) => theme.palette.grey[600]};
	}
`;
