import NumberFormat from 'react-number-format';
import styled from 'styled-components';

export const CustomInput = styled.input`
	width: ${({ width }) => width || '300px'};
	height: 40px;
	background: linear-gradient(360deg, #fafafc 0%, #ffffff 100%);
	border: 1px solid rgba(178, 187, 213, 0.5);
	box-sizing: border-box;
	box-shadow: 0 1px 2px #e6e8f0;
	border-radius: 3px;
	padding-left: 8px;
	&:focus {
		border: 1px solid rgba(178, 187, 213, 0.9);
	}
`;

export const CustomNumericInput = styled(NumberFormat)`
	width: ${({ width }) => width || '100%'};
	height: 40px;
	background: #fff;
	border: 1px solid rgba(178, 187, 213, 0.5);
	box-sizing: border-box;
	border-radius: 3px;
	padding-left: 8px;
	font-weight: 500;
	font-size: ${({ theme }) => theme.fontSizes.regular};
	line-height: 21px;
	color: ${({ theme, disabled }) => (disabled ? theme.colors.blue[400] : theme.colors.blue[700])};
`;
