import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ArrowDown } from 'assets/icons/arrow_down_icon.svg';
import { ReactComponent as ChannelLogo } from 'assets/icons/channel_icon.svg';
import { DefaultInput } from 'components';
import { ChannelInfoWrapper, ChannelNameWrapper } from 'features/FirstTab/Channel/styles';

export const ChannelInfo = ({
	channelName,
	inputRef,
	isEdit,
	onCloseNameEdit,
	changeChannelName
}) => (
	<ChannelInfoWrapper>
		<ArrowDown className="chevron-icon" />
		<ChannelNameWrapper>
			<ChannelLogo className="channel-logo" />
			{isEdit ? (
				<DefaultInput
					onBlur={onCloseNameEdit}
					inputRef={inputRef}
					onChange={changeChannelName}
					value={channelName}
				/>
			) : (
				channelName
			)}
		</ChannelNameWrapper>
	</ChannelInfoWrapper>
);

ChannelInfo.propTypes = {
	channelName: PropTypes.string,
	inputRef: PropTypes.oneOfType([
		PropTypes.func,
		PropTypes.shape({ current: PropTypes.instanceOf(HTMLInputElement) })
	]),
	isEdit: PropTypes.bool,
	onCloseNameEdit: PropTypes.func,
	changeChannelName: PropTypes.func
};
