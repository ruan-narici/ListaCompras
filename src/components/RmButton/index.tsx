import styles from './RmButton.module.scss';
import { ReactComponent as Icon } from 'assets/img/trash_icon.svg';

interface Props {
  callback?: () => void
}

export default function RmButton({ callback }: Props) {
  return (
    <button onClick={ callback } className={ styles.button }><Icon /></button>
  );
}