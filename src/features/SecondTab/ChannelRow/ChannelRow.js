import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import channelIcon from 'assets/icons/channel_icon.svg';
import scrollIcon from 'assets/icons/scroll_icon.svg';
import { ChannelRowBreakdownItem } from 'features/SecondTab/ChannelRow/components/ChannelRowBreakdownItem';
import {
	ChannelInfoWrapper,
	ChannelRowWrapper,
	ChannelLabel,
	ChannelInfo,
	ChannelName,
	BudgetDataWrapper, ScrollActionsBlock, BudgetDataRow
} from 'features/SecondTab/ChannelRow/styles';
import { recalculateAmount, updateObjectValueInArrayOfObjects } from 'features/utils';
import useChannelsControl from 'hooks/useChannelsControl';

export const ChannelRow = ({ channelData, channels }) => {

	const [ scrollGap, setScrollGap ] = useState(0);
	const [ editItem, setEditItem ] = useState(null);
	const myRef = useRef(null);

	const {
		onUpdateChannels,
	} = useChannelsControl();

	const onScroll = () => {
		const maxScrollLeft = myRef.current.scrollWidth - myRef.current.clientWidth;
		if (!scrollGap) {
			setScrollGap(maxScrollLeft);
		} else {
			setScrollGap(0);
		}
	};

	const updateChannelBudgetData = (name, value) => {

		console.log('name, value', {name, value});
		const updatedBreakdownData = updateObjectValueInArrayOfObjects(
			[ ...channelData.breakdownData ],
			'name',
			name,
			{ value: parseFloat(value.replace(/,/g, '')) }
		);
		const updatedChannel = {
			...channelData,
			amount: recalculateAmount(updatedBreakdownData),
			breakdownData: updatedBreakdownData
		};
		onUpdateChannels([...channels], updatedChannel);
	};

	return (
		<ChannelRowWrapper>
			<ChannelInfoWrapper>
				<ChannelLabel>Channel</ChannelLabel>
				<ChannelInfo>
					<img src={channelIcon} alt='channel icon'/>
					<ChannelName>{channelData.name}</ChannelName>
				</ChannelInfo>
			</ChannelInfoWrapper>
			<BudgetDataWrapper ref={myRef}>
				<BudgetDataRow scrollGap={scrollGap}>
					{channelData.breakdownData.map(item => (
						<ChannelRowBreakdownItem
							key={item.name}
							itemName={item.name}
							itemValue={item.value}
							updateChannelBudgetData={updateChannelBudgetData}
							isEdit={editItem === item.name}
							setEditItem={setEditItem}
							isManualType={channelData.allocation === 'Manual'}
						/>
					))}
				</BudgetDataRow>
				{channelData.frequency !== 'Quarterly' && <ScrollActionsBlock scrollGap={scrollGap}>
					<img onClick={onScroll} src={scrollIcon} alt='scroll icon'/>
				</ScrollActionsBlock>}
			</BudgetDataWrapper>
		</ChannelRowWrapper>
	);
};
