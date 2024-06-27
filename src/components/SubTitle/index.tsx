import styles from './SubTitle.module.scss';

interface Props {
  text: string
}

export default function SubTitle({ text }: Props) {
  return (
    <div className={ styles.box }>
      <span className={ styles.box__border_top }></span>
      <h2 className={ styles.box__title }>
        { text }
      </h2>
    </div>
  );
}