import styled from 'styled-components';

export const ModalStyled = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.8;
`;

export const ModalContentStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  padding: 8px 10px;
`;

export const ModalButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  grid-gap: 4px;
`;
