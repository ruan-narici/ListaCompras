import styles from './Description.module.scss';

interface Props {
  description?: string
}

export default function Description({ description }: Props) {
  return (
    <span className={ styles.text }>
      { description }
    </span>
  );
}