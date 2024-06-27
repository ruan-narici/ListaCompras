import Description from 'components/Description';
import styles from './Item.module.scss';
import RmButton from 'components/RmButton';

interface Props {
  data?: any,
  onRemove: (data: any) => void,
  onComplete: (data: any) => void
}

export default function Item({ data, onRemove, onComplete }: Props) {
  return (
    <li className={ styles.item }>
      <input onChange={ () => onComplete(data) } className={ styles.item__radio } type="radio" />
      <div className={ styles.item__box }>
        <div>
          <p className={ styles.item__text }>{ data.text }</p>
          <Description description={ data.description } />
        </div>
        <RmButton callback={ () => onRemove(data) } />
      </div>
    </li>
  );
}