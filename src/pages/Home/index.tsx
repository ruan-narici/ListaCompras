import Header from 'components/Header';
import styles from './Home.module.scss';
import Form from 'components/Form';
import List from 'components/List';
import SubTitle from 'components/SubTitle';
import { useState } from 'react';

const dados = [
  {
    id: 1,
    text: 'Leite',
    description: '3 caixas',
    complete: false
  },
  {
    id: 2,
    text: 'Maçã',
    description: '500g',
    complete: false
  },
  {
    id: 3,
    text: 'Amaciante',
    description: '',
    complete: false
  },
  {
    id: 4,
    text: 'Refrigerante',
    description: '2 litros',
    complete: true
  },
  {
    id: 5,
    text: 'Pasta de dente',
    description: '2 caixas',
    complete: true
  }
];

export default function Home() {
  const [itens, setItens] = useState(dados);

  function onComplete(data: any) {
    data.complete = true;
  } 

  function onRemove(data: any) {
    setItens([ ...itens ].filter(item => item.id !== data.id));
  }

  return (
    <section className={styles.box}>
      <Header
        text='Lista de Compras'
        description='Facilite sua ida ao supermercado!' />
      <Form />
      <List 
        data={ itens }
        onComplete={ onComplete }
        onRemove={ onRemove } />
      <SubTitle text='Itens já comprados' />
    </section>
  );
}