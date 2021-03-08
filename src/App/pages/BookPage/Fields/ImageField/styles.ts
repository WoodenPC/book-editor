import styled from 'styled-components';

import Form from '../../../../ui/Form';

export const ImageFieldStyled = styled(Form.FormField)`
  display: grid;
  grid-auto-rows: min-content;
  align-items: start;
  grid-gap: 8px;
  width: 160px;
  input {
    display: none;
  }

  image {
    object-fit: contain;
  }
`;
