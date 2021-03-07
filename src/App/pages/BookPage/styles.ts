import styled from 'styled-components';
import Form from '../../components/Form';

export const BottomMenuWrapperStyled = styled.div`
  float: right;
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-gap: 8px;
  width: auto;
`;

export const FormStyled = styled(Form)`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 24px;
`;

export const FieldsWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fill);
  grid-gap: 8px;
`;
