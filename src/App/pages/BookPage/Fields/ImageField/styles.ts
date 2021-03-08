import styled from 'styled-components';

import Form from '../../../../ui/Form';

export const ImageFieldStyled = styled(Form.FormField)`
  display: flex;
  flex-direction: column;
  grid-gap: 8px;
  width: 160px;
  input {
    display: none;
  }

  image {
    object-fit: contain;
  }
`;
