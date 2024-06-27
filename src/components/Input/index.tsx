import styles from './Input.module.scss';

interface Props {
  id: string,
  description: string,
}

export default function Input({ id, description }: Props) {
  return (
    <div className={ styles.box }>
      <label 
        className={ styles.box__description } 
        htmlFor={ id }>
        { description }
      </label>
      <input 
        className={ styles.box__input } 
        id={ id } 
        type="text" 
        required />
    </div>
  );
}