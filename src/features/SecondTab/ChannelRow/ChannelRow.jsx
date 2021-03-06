import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ScrollableLayout } from 'components';
import { ChannelInfo, ChannelRowBreakdownItem } from 'features/SecondTab/ChannelRow/components';
import { ChannelRowWrapper } from 'features/SecondTab/ChannelRow/styles';
import { updateChannel } from 'redux/channelsSlice';
import { recalculateAmount, updateBreakdownData } from 'utils';

export const ChannelRow = ({ channelData }) => {
	const { breakdownData, name, allocation } = channelData;

	const dispatch = useDispatch();

	const onUpdateChannelBudgetData = (name, value) => {
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

		dispatch(updateChannel(updatedChannel));
	};

	return (
		<ChannelRowWrapper>
			<ChannelInfo name={name} />
			<ScrollableLayout>
				{breakdownData.map((item) => (
					<ChannelRowBreakdownItem
						key={item.name}
						itemName={item.name}
						itemValue={item.value}
						onUpdateChannelBudgetData={onUpdateChannelBudgetData}
						isManualType={allocation === 'Manual'}
					/>
				))}
			</ScrollableLayout>
		</ChannelRowWrapper>
	);
};

ChannelRow.propTypes = {
	channelData: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		allocation: PropTypes.string,
		frequency: PropTypes.string,
		breakdownData: PropTypes.arrayOf(
			PropTypes.shape({
				name: PropTypes.string,
				value: PropTypes.number
			})
		),
		amount: PropTypes.number
	})
};
