import React, { useRef, useState } from 'react';
import { ChannelRowBreakdownItem } from 'features/SecondTab/ChannelRow/components/ChannelRowBreakdownItem';
import { useDispatch } from 'react-redux';
import {ReactComponent as ChannelIcon} from 'assets/icons/channel_icon.svg';
import {ReactComponent as HorizontalScrollIcon} from 'assets/icons/scroll_icon.svg';
import {
	ChannelInfoWrapper,
	ChannelRowWrapper,
	ChannelLabel,
	ChannelInfo,
	ChannelName,
	BudgetDataWrapper,
	ScrollActionsBlock,
	BudgetDataRow
} from 'features/SecondTab/ChannelRow/styles';
import { recalculateAmount, updateBreakdownData } from 'features/utils';
import { updateChannelsData } from 'redux/channelsSlice';

export const ChannelRow = ({ channelData, channels }) => {

	const { breakdownData, name, allocation, frequency } = channelData;

	const dispatch = useDispatch();

	const [scrollGap, setScrollGap] = useState(0);
	const [editItem, setEditItem] = useState(null);
	const myRef = useRef(null);

	const onScroll = () => {
		const maxScrollLeft = myRef.current.scrollWidth - myRef.current.clientWidth;
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
			<ChannelInfoWrapper>
				<ChannelLabel>Channel</ChannelLabel>
				<ChannelInfo>
					<ChannelIcon />
					<ChannelName>{name}</ChannelName>
				</ChannelInfo>
			</ChannelInfoWrapper>
			<BudgetDataWrapper ref={myRef}>
				<BudgetDataRow scrollGap={scrollGap}>
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
