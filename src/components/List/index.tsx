import Item from './Item';
import styles from './List.module.scss';

interface Props {
  data: any[],
  onRemove: (data: any) => void,
  onComplete: (data: any) => void
}

export default function List({ data, onRemove, onComplete }: Props) {
  return (
    <ul className={ styles.list }>
      { data.map(item => (
        <Item 
          key={ item.id } 
          onRemove={ onRemove } 
          onComplete={ onComplete } 
          data={ item } />
      ) ) }
    </ul>
  );
}