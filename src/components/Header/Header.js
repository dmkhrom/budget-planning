import React from 'react';
import { AddButton } from 'components/AddButton/AddButton';
import { BUTTONS_NAMES } from 'constants/common';
import useChannelsControl from 'hooks/useChannelsControl';
import {
	HeaderWrapper,
	Title,
	SetupChannelWrapper,
	SetupChannelSubTitle,
	SetupChannelDescription,
} from './styles';

export const Header = () => {
	const { onAddNewChannel } = useChannelsControl();
	return (
		<HeaderWrapper>
			<Title>Build your budget plan</Title>
			<SetupChannelSubTitle>Setup channels</SetupChannelSubTitle>
			<SetupChannelWrapper>
				<SetupChannelDescription>
					Setup your added channels by adding baseline budgets out of your total
					budget. See the forecast impact with the help of tips and insights.
				</SetupChannelDescription>
				<AddButton onClick={onAddNewChannel} name={BUTTONS_NAMES.addChannel}/>
			</SetupChannelWrapper>
		</HeaderWrapper>
	);
};
