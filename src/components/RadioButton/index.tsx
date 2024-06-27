import styles from './RadioButton.module.scss';

interface Props {
  onComplete: (data: any) => void
}

export default function RadioButton({ onComplete }: Props) {
  return (
    <>
      <input 
        onClick={ onComplete } 
        className={ styles.radio } 
        type="radio" />
    </>
  );
}