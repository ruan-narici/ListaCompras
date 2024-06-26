import Description from 'components/Description';
import styles from './Item.module.scss';
import RmButton from 'components/RmButton';

interface Props {
  data?: any
}

export default function Item({ data }: Props) {
  return (
    <li className={ styles.item }>
      <div>
        <p className={ styles.item__text }>{ data.text }</p>
        <Description description={ data.description } />
      </div>
      <RmButton />
    </li>
  );
}