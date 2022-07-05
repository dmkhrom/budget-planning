import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	box-sizing: border-box;
	overflow: hidden;
	z-index: 100;
	margin-left: 24px;
`;

export const Content = styled.div`
	display: flex;
	box-sizing: border-box;
	gap: 32px;
	flex-wrap: nowrap;
	padding: 14px 0;
	transition: 0.3s ease;
	transform: ${({ scrollGap }) => (scrollGap ? `translateX(-${scrollGap}px)` : 'translateX(0)')};
	flex: 0 0 auto;
`;

export const ActionsBlock = styled.div`
	display: flex;
	position: absolute;
	width: 10px;
	height: 10px;
	top: 20px;
	right: 0;
	z-index: 100;
	& .scroll-icon-to-right {
		transform: rotate(180deg);
	}
	& .scroll-icon-to-left {
		transform: rotate(0);
	}
`;
