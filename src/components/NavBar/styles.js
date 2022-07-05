import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
	display: flex;
	width: 100%;
	height: 50px;
	margin-top: 53px;
`;

export const CustomLink = styled(NavLink)`
	height: 16px;
	text-decoration: none;
	font-weight: 600;
	font-size: ${({ theme }) => theme.fontSizes.huge};
	line-height: 16px;
	color: ${({ theme }) => theme.palette.grey[800]};
	margin-right: 26px;
	padding-bottom: 10px;
	&.active {
		color: ${({ theme }) => theme.palette.black};
		border-bottom: 3px solid ${({ theme }) => theme.palette.black};
	}
`;
