import React, { ChangeEvent, FC, memo, useCallback, useState } from 'react';
import { AuthorsFieldProps } from './interfaces';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Form from '../../../../components/Form';
import { Author } from '../../../../interfaces';
import { AuthorWrapperStyled } from './styles';
import { AUTHOR_INPUT_ATTRIBUTES } from './constants';

/** поле с авторами */
const AuthorsField: FC<AuthorsFieldProps> = (props) => {
  const { authors, onChange } = props;

  const [authorsData, setAuthorsData] = useState<Author[]>(authors);

  const handleAddAuthor = useCallback(() => {
    setAuthorsData((prevAuthors) => {
      const updatedAuthors = [...prevAuthors, { name: '', surname: '' }];
      onChange(updatedAuthors);
      return updatedAuthors;
    });
  }, [onChange]);

  const handleEditAuthorName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { id } = event.target;
      const [, index] = id.split('-');

      setAuthorsData((prevAuthors) => {
        const updatedAuthors = [...prevAuthors];
        const indexNum = (index as unknown) as number;
        updatedAuthors[indexNum].name = event.target.value;
        onChange(updatedAuthors);
        return updatedAuthors;
      });
    },
    [onChange],
  );
  const handleEditAuthorSurname = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { id } = event.target;
      const [, index] = id.split('-');

      setAuthorsData((prevAuthors) => {
        const updatedAuthors = [...prevAuthors];
        const indexNum = (index as unknown) as number;
        updatedAuthors[indexNum].surname = event.target.value;
        onChange(updatedAuthors);
        return updatedAuthors;
      });
    },
    [onChange],
  );

  const handleRemoveAuthor = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const { id } = event.currentTarget;

      const [, index] = id.split('-');
      setAuthorsData((prevAuthors) => {
        const updatedAuthors = [...prevAuthors];
        const indexNum = (index as unknown) as number;
        updatedAuthors.splice(indexNum, 1);
        onChange(updatedAuthors);
        return updatedAuthors;
      });
    },
    [onChange],
  );

  return (
    <Form.FormField label="Авторы книги" isRequired>
      {authorsData.map((author, index) => (
        <AuthorWrapperStyled key={index}>
          <Input
            placeholder="Фамилия"
            value={author.surname}
            onChange={handleEditAuthorSurname}
            id={`authorSurname-${index}`}
            inputAttributes={AUTHOR_INPUT_ATTRIBUTES}
          />
          <Input
            placeholder="Имя"
            value={author.name}
            onChange={handleEditAuthorName}
            id={`authorName-${index}`}
            inputAttributes={AUTHOR_INPUT_ATTRIBUTES}
          />
          {authors.length > 0 && <Button text="Удалить" id={`authorRemoveBtn-${index}`} onClick={handleRemoveAuthor} />}
        </AuthorWrapperStyled>
      ))}
      <div>
        <Button text="Добавить" onClick={handleAddAuthor} />
      </div>
    </Form.FormField>
  );
};

export default memo(AuthorsField);
