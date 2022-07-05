import React from 'react';
import { useDispatch } from 'react-redux';
import { AddButton } from 'components';
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

	const addNewChannel = () => {
		dispatch(addChannel());
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
				<AddButton onClick={addNewChannel} name="Add channel" />
			</SetupChannelWrapper>
		</HeaderWrapper>
	);
};
