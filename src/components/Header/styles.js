import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  margin-bottom: 16px;
  letter-spacing: -0.2px;
  color: #182033;
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
	font-size: 18px;
	line-height: 25px;
	color: #182033;
`;

export const SetupChannelDescription = styled.div`
  max-width: 678px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #99a4c2;
`;
