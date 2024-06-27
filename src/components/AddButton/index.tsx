import styles from './AddButton.module.scss';

export default function AddButton() {
  return (
    <button 
      className={ styles.button } 
      type="submit">
      +
    </button>
  );
}