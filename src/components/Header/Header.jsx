import React from 'react';
import { AddButton } from 'components/AddButton/AddButton';
import { useDispatch } from 'react-redux';
import { getInitialChannelData } from 'features/utils';
import { addChannel } from 'redux/channelsSlice';
import {
	HeaderWrapper,
	Title,
	SetupChannelWrapper,
	SetupChannelSubTitle,
	SetupChannelDescription
} from './styles';

export const Header = () => {

	const dispatch = useDispatch();

	const addNewChannel = (e) => {
		e.stopPropagation();
		const newChannel = getInitialChannelData('month');
		dispatch(addChannel(newChannel));
	};
	return (
		<HeaderWrapper>
			<Title>Build your budget plan</Title>
			<SetupChannelSubTitle>Setup channels</SetupChannelSubTitle>
			<SetupChannelWrapper>
				<SetupChannelDescription>
          Setup your added channels by adding baseline budgets out of your total budget. See the
          forecast impact with the help of tips and insights.
				</SetupChannelDescription>
				<AddButton onClick={addNewChannel} name='Add channel' />
			</SetupChannelWrapper>
		</HeaderWrapper>
	);
};