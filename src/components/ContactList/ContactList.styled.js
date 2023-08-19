import { styled } from 'styled-components';

export const StyledBox = styled.div`
  border-radius: 5px;
  min-width: 300px;
`;

export const StyledItem = styled.li`
  background: #a4a3a3;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  &: hover {
    transform: scale(1.05);
  }
`;

export const StyledForm = styled.form`
  border: purple;
`;

export const StyleContact = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

export const SlyledDotSeperator = styled.div`
  flex: 1;
  height: 1px;
  background-color: grey;
  margin-top: 20px;
`;
