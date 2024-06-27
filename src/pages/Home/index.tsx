import Header from 'components/Header';
import styles from './Home.module.scss';
import Form from 'components/Form';
import List from 'components/List';
import SubTitle from 'components/SubTitle';
import { useState } from 'react';
import { IItem } from 'types/IItem';

export default function Home() {
  const [itens, setItens] = useState<IItem[] | []>([]);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newItem: IItem = {
      id: itens.length ? itens.length - 1 : 1,
      text: event.currentTarget.item.value,
      description: event.currentTarget.quantidade.value,
      complete: false
    };
    setItens([...itens, newItem]);
    event.currentTarget.reset();
  }

  function onComplete(data: IItem) {
    data.complete = true;
    const newItens = [ ...itens ].filter(item => item.id !== data.id);
    setItens([...newItens, data]);
  } 

  function onRemove(data: IItem) {
    setItens([ ...itens ].filter(item => item.id !== data.id));
  }

  return (
    <section className={styles.box}>
      <Header
        text='Lista de Compras'
        description='Facilite sua ida ao supermercado!' />
      <Form callback={ (event) => onSubmit(event) } />
      <List 
        data={ itens.filter(item => !item.complete ) }
        onComplete={ onComplete }
        onRemove={ onRemove } />
      <SubTitle text='Itens já comprados' />
      <List 
        data={ itens.filter(item => item.complete ) }
        onComplete={ onComplete }
        onRemove={ onRemove } />
    </section>
  );
}