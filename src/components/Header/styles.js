import styled from 'styled-components';

export const HeaderWrapper = styled.header`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const Title = styled.h1`
	font-weight: 500;
	font-size: ${({ theme }) => theme.fontSizes.giant};
	line-height: 33px;
	margin-bottom: 16px;
	letter-spacing: -0.2px;
	color: ${({ theme }) => theme.palette.blue[900]};
`;

export const SetupChannelWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

export const SetupChannelSubTitle = styled.div`
	top: 99px;
	margin-bottom: 8px;
	font-weight: 600;
	font-size: ${({ theme }) => theme.fontSizes.increased};
	line-height: 25px;
	color: ${({ theme }) => theme.palette.blue[900]};
`;

export const SetupChannelDescription = styled.div`
	max-width: 678px;
	font-weight: 400;
	font-size: ${({ theme }) => theme.fontSizes.regular};
	line-height: 21px;
	color: ${({ theme }) => theme.palette.blue[400]};
`;
