import styled from 'styled-components';
import { CustomNumericInput } from 'components/Inputs/styles';

export const ChannelWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const ChannelItem = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 100%;
  height: 52px;
  margin: 0 auto;
  background: #f6f7fb;
  border: 1px solid rgba(178, 187, 213, 0.5);
  border-radius: ${(props) => (props.isActive ? '4px 4px 0 0' : '4px')};
  padding: 0 15px 0 16px;
  cursor: pointer;
  box-sizing: border-box;
  & .chevron-icon {
    transform: rotate(${(props) => (props.isActive ? '180deg' : '0')});
  }
  & .channel-logo {
    margin-right: 12px;
  }
`;

export const ChannelInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ChannelNameWrapper = styled.div`
  display: flex;
  max-width: 80%;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #222a41;
  margin-left: 30px;
`;

export const ChannelActionsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ActionsMenu = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 160px;
  height: 92px;
  right: 7px;
  top: 40px;
  z-index: 100;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  background: #ffffff;
  border: 1px solid rgba(178, 187, 213, 0.5);
  box-shadow: 0px 4px 16px rgba(24, 32, 51, 0.12);
  border-radius: 4px;
`;

export const ActionsItem = styled.div`
  width: 146px;
  height: 40px;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #222a41;
  box-sizing: border-box;
  padding: 10px;
  &:hover {
    color: #ee2032;
    background: #fde8ea;
    border-radius: 4px;
  }
`;

export const ChannelCollapse = styled.div`
  width: 100%;
  margin-top: -1px;
  padding: 32px;
  border: 1px solid rgba(178, 187, 213, 0.5);
  border-radius: 0px 0px 4px 4px;
  box-sizing: border-box;
`;

export const BudgetCommonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BudgetControlsWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const BudgetFrequencyControlWrapper = styled(BudgetCommonWrapper)`
  width: 226px;
  margin-right: 56px;
`;

export const BudgetBaselineControlWrapper = styled(BudgetCommonWrapper)`
  width: 237px;
  margin-right: 56px;
`;

export const BudgetAllocationControlWrapper = styled(BudgetCommonWrapper)`
  width: 184px;
`;

export const AllocationSwitcherWrapper = styled.div`
  display: flex;
  background: #f5f6fa;
  border: 1px solid rgba(178, 187, 213, 0.5);
  box-shadow: 0px 1px 2px #e6e8f0;
  border-radius: 4px;
  overflow: hidden;
`;

export const AllocationSwitcherOption = styled.div`
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 11px 28px;
  cursor: pointer;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */
  text-align: center;
  color: #2a3558;
  &:hover {
    background: #f6f7fb;
  }
  &.active-item {
    background: linear-gradient(360deg, #fafafc 0%, #ffffff 100%);
    border: 1px solid rgba(178, 187, 213, 0.5);
    border-radius: 4px;
  }
`;

export const BudgetBreakdownWrapper = styled.div`
  width: 100%;
  margin-top: 46px;
  background: #f5f6fa;
  border: 1px solid rgba(178, 187, 213, 0.5);
  border-radius: 4px;
  padding: 24px;
  box-sizing: border-box;
`;

export const BreakdownTitle = styled.div`
  margin-bottom: 8px;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 24px;
  color: #182033;
`;

export const BreakdownSubtitle = styled.div`
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #99a4c2;
`;

export const BudgetBreakdownDataWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  box-sizing: border-box;
  gap: 23px;
`;

export const BudgetBreakdownItemWrapper = styled.div`
  width: 160px;
  margin-bottom: 24px;
`;

export const InputWrapper = styled.span`
  position: relative;
  &:before {
    position: absolute;
    display: flex;
    top: 0;
    left: 16px;
    content: '$';
    font-size: 14px;
    line-height: 21px;
    color: #2a3558;
    z-index: 1;
  }
`;

export const AmountInput = styled(CustomNumericInput)`
  background: linear-gradient(360deg, #fafafc 0%, #ffffff 100%);
  box-shadow: 0px 1px 2px #e6e8f0;
  padding-left: 28px;
`;
