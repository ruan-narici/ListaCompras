import styles from './Input.module.scss';

interface Props {
  id: string,
  description: string,
  onChange: (data: string) => void
}

export default function Input({ id, description, onChange }: Props) {
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
        required 
        onChange={ (event) => onChange(event.target.value) }
      />
    </div>
  );
}