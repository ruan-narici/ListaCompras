import Description from 'components/Description';
import styles from './Item.module.scss';
import RmButton from 'components/RmButton';
import RadioButton from 'components/RadioButton';
import IconComplete from 'components/IconComplete';

interface Props {
  data?: any,
  onRemove: (data: any) => void,
  onComplete: (data: any) => void
}

export default function Item({ data, onRemove, onComplete }: Props) {
  return (
    <li className={ !data.complete ? styles.item : `${ styles.item } ${styles.item_complete}` }>
      { !data.complete ? <RadioButton onComplete={ () => onComplete(data) } /> : <IconComplete /> }
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