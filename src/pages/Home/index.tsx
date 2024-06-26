import Header from 'components/Header';
import styles from './Home.module.scss';
import Form from 'components/Form';
import List from 'components/List';

export default function Home() {
  return (
    <section className={styles.box}>
      <Header
        text='Lista de Compras'
        description='Facilite sua ida ao supermercado!' />
      <Form />
      <List />
    </section>
  );
}