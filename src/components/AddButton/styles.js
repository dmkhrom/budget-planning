import styled from 'styled-components';

export const CustomButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  background: linear-gradient(360deg, #FAFAFC 0%, #FFFFFF 100%);
	border: 1px solid rgba(178, 187, 213, 0.5);
	box-shadow: 0px 1px 2px #E6E8F0;
	border-radius: 3px;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #707ea7;
  padding: 0 16px;
  box-sizing: border-box;
  & img {
  	width: 10px;
  	height: 10px;
  	margin-right: 8px;
  }
`;
