import AddButton from 'components/AddButton';
import styles from './Form.module.scss';
import Input from 'components/Input';

export default function Form() {
  return (
    <form className={ styles.form }>
      <Input id='item' description='Item' />
      <Input id='quantidade' description='Quantidade' />
      <AddButton />
    </form>
  );
}