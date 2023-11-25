import styled from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.ORANGE};
  width: fit-content;

  border: none;
  font-size: 16px;
`;
