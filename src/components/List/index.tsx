import Item from './Item';
import styles from './List.module.scss';

const itens = [
  {
    id: 1,
    text: 'Leite',
    description: '3 caixas'
  },
  {
    id: 2,
    text: 'Maçã',
    description: '500g'
  },
  {
    id: 3,
    text: 'Amaciante',
    description: ''
  }
];

export default function List() {
  return (
    <ul className={ styles.list }>
      { itens.map(item => <Item key={ item.id } data={ item } />) }
    </ul>
  );
}