import styled from 'styled-components';
import { CustomNumericInput } from 'components/Inputs/styles';

export const ChannelRowWrapper = styled.div`
	display: flex;
	position: relative;
	justify-content: flex-start;
	width: 1260px;
	height: 128px;
	cursor: pointer;
	margin-bottom: 10px;
	padding-right: 50px;
	box-sizing: border-box;
`;

export const ChannelInfoWrapper = styled.div`
	width: 223px;
	height: 128px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(169, 181, 210, 0.00005) 70%, rgba(112, 126, 167, 0.067227) 100%);
  mix-blend-mode: normal;
  padding: 14px 28px;
  box-sizing: border-box;
  border-right: 1px solid rgba(153, 164, 194, 0.5);
`;

export const ChannelLabel = styled.div`
	height: 16px;
	left: 41px;
	top: 15px;
	font-weight: 700;
	font-size: 11px;
	line-height: 16px;
	text-transform: uppercase;
	color: #99a4c2;
`;

export const ChannelInfo = styled.div`
	display: flex;
	align-items: center;
`;

export const ChannelName = styled.div`
	display: flex;
	align-items: center;
	max-width: 300px;
	font-weight: 500;
	font-size: 14px;
	line-height: 21px;
	color: #222a41;
	margin-left: 16px;
	text-overflow: ellipsis;
  overflow: hidden; 
  white-space: nowrap;
`;

export const BudgetDataWrapper = styled.div`
	display: flex;
	width: 100%;
	box-sizing: border-box;
	padding: 14px 28px;
	overflow: hidden;
	//overflow-y: hidden;
	//overflow-x: scroll;
`;

export const BudgetDataRow = styled.div`
	display: flex;
	width: 100%;
	box-sizing: border-box;
	gap: 32px;
	transition: 0.3s ease;
	transform: ${props => props.scrollGap ? `translateX(-${props.scrollGap}px)` : 'translateX(0)' };
`;

export const ScrollActionsBlock = styled.div`
	display: flex;
	position: absolute;
	height: 100%;
	top: 14px;
	right: 40px;
	& img {
		height: 8px;
		margin: 7px;
		box-sizing: border-box;
		transform: rotate(${props => props.scrollGap ? '180deg' : '0'});
	}
`;

export const ChannelRowBreakdownItemWrapper = styled.div`
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
	justify-content: space-between;
	min-width: 80px;
	max-width: 140px;
`;

export const CustomIcon = styled.img`
	width: 20px;
	heigth: 20px;
	margin-right: 2px;
`;

export const CustomEditIcon = styled.img`
	width: 13px;
	heigth: 13px;
	position: absolute;
	bottom: 10px;
	right: 0px;
	z-index: 100;
`;

export const EditActionsWrapper = styled.div`
	display: flex;
	bottom: 10px;
	right: 0px;
	z-index: 100;
`;

export const BreakdownValue = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	max-width: 100px;
	height: 36px;
	align-items: center;
	font-weight: 500;
	font-size: 14px;
	line-height: 20px;
	color: #222A41;
`;

export const BreakdownInputWrapper = styled.div`
	position: relative;
	display: flex;
	margin-left: -20px;
`;

export const BreakdownInput = styled(CustomNumericInput)`
	background: linear-gradient(360deg, #fafafc 0%, #ffffff 100%);
	box-shadow: 0px 1px 2px #e6e8f0;
	min-width: 80px;
	height: 32px;
	margin-right: 4px;
`;
