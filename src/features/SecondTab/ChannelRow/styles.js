import styled from 'styled-components';
import { CustomNumericInput } from 'components/Inputs/styles';

export const ChannelRowWrapper = styled.div`
	display: flex;
	position: relative;
	justify-content: flex-start;
	width: 100%;
	height: 128px;
	cursor: pointer;
	margin-bottom: 10px;
	padding-right: 20px;
	box-sizing: border-box;
`;

export const ChannelInfoWrapper = styled.div`
	width: 265px;
	height: 128px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: linear-gradient(
		90deg,
		rgba(255, 255, 255, 1) 0%,
		rgba(169, 181, 210, 0.00005) 70%,
		rgba(112, 126, 167, 0.067227) 100%
	);
	mix-blend-mode: normal;
	padding: 14px 28px;
	box-sizing: border-box;
	border-right: 1px solid rgba(153, 164, 194, 0.5);
`;

export const ChannelLabel = styled.div`
	height: 16px;
	font-weight: 700;
	font-size: ${({ theme }) => theme.fontSizes.tiny};
	line-height: 16px;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.blue[400]};
`;

export const ChannelInfoBlock = styled.div`
	display: flex;
	align-items: center;
`;

export const ChannelName = styled.div`
	display: block;
	align-items: center;
	font-weight: 500;
	font-size: ${({ theme }) => theme.fontSizes.regular};
	line-height: 21px;
	color: ${({ theme }) => theme.colors.blue[800]};
	margin-left: 16px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;

export const ChannelRowBreakdownItemWrapper = styled.div`
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
	justify-content: space-between;
	min-width: 80px;
	max-width: 140px;
`;

export const EditActionsWrapper = styled.div`
	display: flex;
	width: 42px;
	justify-content: space-between;
`;

export const BreakdownValueWrapper = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	max-width: 100px;
	height: 36px;
	align-items: center;
	font-weight: 500;
	font-size: ${({ theme }) => theme.fontSizes.regular};
	line-height: 20px;
	color: ${({ theme }) => theme.colors.blue[800]};

	& .edit-icon {
		position: absolute;
		bottom: 10px;
		right: 0;
		z-index: 100;
	}
`;

export const ItemValue = styled.div`
	display: inline-block;
	width: 70px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;

export const BreakdownInputWrapper = styled.div`
	position: relative;
	display: flex;
	margin-left: -20px;
`;

export const BreakdownInput = styled(CustomNumericInput)`
	background: linear-gradient(360deg, #fafafc 0%, #ffffff 100%);
	box-shadow: 0 1px 2px #e6e8f0;
	min-width: 80px;
	height: 32px;
	margin-right: 4px;
`;

export const BreakdownItemLabel = styled.div`
	font-size: ${({ theme }) => theme.fontSizes.tiny};
	font-weight: 700;
	line-height: 16px;
	color: ${({ theme }) => theme.colors.blue[300]};
	margin-bottom: 8px;
`;
