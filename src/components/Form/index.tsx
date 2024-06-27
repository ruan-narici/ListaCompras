import AddButton from 'components/AddButton';
import styles from './Form.module.scss';
import Input from 'components/Input';

interface Props {
  callback?: (event: React.FormEvent<HTMLFormElement>) => void,
  setItemName: (data: string) => void,
  setQuantity: (data: string) => void
}

export default function Form({ callback, setItemName, setQuantity }: Props) {
  return (
    <form 
      className={ styles.form } 
      onSubmit={ callback }>
      <Input 
        id='item' 
        description='Item'
        onChange={ setItemName } />
      <Input 
        id='quantidade' 
        description='Quantidade' 
        onChange={ setQuantity } />
      <AddButton />
    </form>
  );
}