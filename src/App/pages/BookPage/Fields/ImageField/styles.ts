import styled from 'styled-components';
import Form from '../../../../components/Form';

export const ImageFieldStyled = styled(Form.FormField)`
  display: grid;
  grid-template-rows: 200px 40px;
  grid-gap: 8px;
  width: 200px;
  input {
    display: none;
  }

  image {
    object-fit: contain;
  }
`;
