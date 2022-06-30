import React, { useEffect, useState } from 'react';
import cancelIcon from 'assets/icons/cancel_icon.svg';
import editIcon from 'assets/icons/edit_icon.svg';
import saveIcon from 'assets/icons/save_icon.svg';
import { ItemLabel } from 'components/ItemLabel/ItemLabel';
import { Tooltip } from 'components/Tooltip/Tooltip';
import {
	BreakdownValue,
	ChannelRowBreakdownItemWrapper,
	CustomIcon,
	CustomEditIcon,
	EditActionsWrapper, BreakdownInput, BreakdownInputWrapper
} from 'features/SecondTab/ChannelRow/styles';

const PREFIX = '$';

export const ChannelRowBreakdownItem = (
	{
		disabled,
		isEdit,
		isManualType,
		itemName,
		itemValue,
		setEditItem,
		updateChannelBudgetData
	}) => {

	const [ showEditIcon, setShowEditIcon ] = useState(false);
	const [ showTooltip, setShowTooltip ] = useState(false);
	const [ value, setValue ] = useState('');

	useEffect(() => {
		setValue(itemValue);
	},[]);

	const changeEditItem = () => {
		setEditItem(itemName);
	};

	const cancelItemChanges = () => {
		setEditItem(null);
		setValue(itemValue);
	};

	const saveItemChanges = () => {
		setEditItem(null);
		updateChannelBudgetData(itemName, value);
	};

	const handleChangeBreakdownItemValue = (e) => {
		setValue(e.target.value.substr(1));
	};

	return (
		<ChannelRowBreakdownItemWrapper
			onMouseEnter={() => !isEdit && !showEditIcon && setShowEditIcon(true)}
			onMouseLeave={() => {
				setShowEditIcon(false);
			}}
		>
			<ItemLabel value={`${itemName} ${new Date().getFullYear().toString().substr(-2)}`} />
			<BreakdownValue>
				{isEdit
					?
					<BreakdownInputWrapper>
						<BreakdownInput
							allowLeadingZeros={false}
							allowNegative={false}
							disabled={disabled}
							isNumericString={true}
							name={itemName}
							onChange={handleChangeBreakdownItemValue}
							placeholder={value}
							prefix={PREFIX}
							thousandSeparator={true}
							value={value}
						/>
						<EditActionsWrapper>
							<CustomIcon src={saveIcon} alt='edit icon' onClick={saveItemChanges}/>
							<CustomIcon src={cancelIcon} alt='edit icon' onClick={cancelItemChanges}/>
						</EditActionsWrapper>
					</BreakdownInputWrapper>
					: <>{`${PREFIX} ${itemValue}`} </>
				}
				{!isEdit && showEditIcon &&
					<CustomEditIcon
						src={editIcon}
						onClick={() => isManualType ? changeEditItem() : {} }
						onMouseEnter={() => !isManualType && setShowTooltip(true)}
						onMouseLeave={() => {
							setShowTooltip(false);
						}}
						alt='edit icon'
					/>
				}
				{showTooltip && <Tooltip
					isShow={true}
					tooltipDescription={'You can\'t edit items manually channel with budget allocation type "Equal". If you want it - please, edit channel allocation type'}
				/>}
			</BreakdownValue>
		</ChannelRowBreakdownItemWrapper>
	);
};
