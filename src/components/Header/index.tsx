import Title from 'components/Title';
import styles from './Header.module.scss';
import Logo from 'components/Logo';
import Description from 'components/Description';

interface Props {
  text: string,
  description: string
}

export default function Header({ text, description }: Props) {
  return (
    <header className={ styles.header }>
      <Logo />
      <Title text={ text } />
      <Description description={ description } />
      <span className={ styles.header__border_bottom }></span>
    </header>
  );
}