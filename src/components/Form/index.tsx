import AddButton from 'components/AddButton';
import styles from './Form.module.scss';
import Input from 'components/Input';

interface Props {
  callback?: (event: React.FormEvent<HTMLFormElement>) => void
}

export default function Form({ callback }: Props) {
  return (
    <form 
      className={ styles.form } 
      onSubmit={ callback }>
      <Input id='item' description='Item' />
      <Input id='quantidade' description='Quantidade' />
      <AddButton />
    </form>
  );
}