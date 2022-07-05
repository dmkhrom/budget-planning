import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import {ReactComponent as HorizontalScrollIcon} from 'assets/icons/scroll_icon.svg';
import { ChannelInfo, ChannelRowBreakdownItem } from 'features/SecondTab/ChannelRow/components';
import {
	ChannelRowWrapper,
	BudgetDataWrapper,
	ScrollActionsBlock,
	BudgetDataRow
} from 'features/SecondTab/ChannelRow/styles';
import { updateChannelsData } from 'redux/channelsSlice';
import { recalculateAmount, updateBreakdownData } from 'utils';

export const ChannelRow = ({ channelData, channels }) => {

	const { breakdownData, name, allocation, frequency } = channelData;

	const dispatch = useDispatch();

	const [scrollGap, setScrollGap] = useState(0);
	const [editItem, setEditItem] = useState(null);
	const scrollParent = useRef(null);
	const myRef = useRef(null);

	const onScroll = () => {
		const maxScrollLeft = myRef.current?.clientWidth - scrollParent?.current?.offsetWidth;
		if (!scrollGap) {
			setScrollGap(maxScrollLeft);
		} else {
			setScrollGap(0);
		}
	};

	const updateChannelBudgetData = (name, value) => {
		const updatedBreakdownData = updateBreakdownData(
			breakdownData,
			name,
			parseFloat(value.replace(/,/g, ''))
		);
		const updatedChannel = {
			...channelData,
			amount: recalculateAmount(updatedBreakdownData),
			breakdownData: updatedBreakdownData
		};

		const dataToUpdate = {...channels, ...updatedChannel};

		dispatch(updateChannelsData(dataToUpdate));
	};

	return (
		<ChannelRowWrapper>
			<ChannelInfo name={name}/>
			<BudgetDataWrapper ref={scrollParent}>
				<BudgetDataRow scrollGap={scrollGap} ref={myRef}>
					{breakdownData.map((item) => (
						<ChannelRowBreakdownItem
							key={item.name}
							itemName={item.name}
							itemValue={item.value}
							updateChannelBudgetData={updateChannelBudgetData}
							isEdit={editItem === item.name}
							setEditItem={setEditItem}
							isManualType={allocation === 'Manual'}
						/>
					))}
				</BudgetDataRow>
			</BudgetDataWrapper>
			{frequency !== 'Quarterly' && (
				<ScrollActionsBlock scrollGap={scrollGap} onClick={onScroll}>
					<HorizontalScrollIcon className='horizontal-scroll-icon' />
				</ScrollActionsBlock>
			)}
		</ChannelRowWrapper>
	);
};
