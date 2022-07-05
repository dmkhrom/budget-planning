import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as HorizontalScrollIcon } from 'assets/icons/scroll_icon.svg';
import { Wrapper, Content, ActionsBlock } from './styles';

export const ScrollableLayout = ({ children }) => {
	const [scrollGap, setScrollGap] = useState(0);
	const [isScrollHidden, setIsScrollHidden] = useState(false);

	const wrapperRef = useRef(null);
	const contentRef = useRef(null);

	useEffect(() => {
		setIsScrollHidden((contentRef?.current?.clientWidth - wrapperRef?.current?.offsetWidth) > 0);
	}, []);

	const onScroll = () => {
		const maxScrollLeft = contentRef?.current?.clientWidth - wrapperRef?.current?.offsetWidth;
		if (!scrollGap) {
			setScrollGap(maxScrollLeft);
		} else {
			setScrollGap(0);
		}
	};

	return (
		<Wrapper ref={wrapperRef}>
			<Content scrollGap={scrollGap} ref={contentRef}>
				{children}
			</Content>
			{isScrollHidden && <ActionsBlock onClick={onScroll}>
				<HorizontalScrollIcon className={
					scrollGap
						? 'scroll-icon-to-right'
						: 'scroll-icon-to-left'
				}/>
			</ActionsBlock>}
		</Wrapper>
	);
};

ScrollableLayout.propTypes = {
	children: PropTypes.node
};