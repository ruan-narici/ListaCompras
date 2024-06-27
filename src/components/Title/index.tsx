import styles from './Title.module.scss';

interface Props {
  text: string
}

export default function Title({ text }: Props) {
  return (
    <h1 className={ styles.title }>
      { text }
    </h1>
  );
}