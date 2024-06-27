import styles from './NotFound.module.scss';
import Image from 'assets/img/page_not_found.png';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <section className={ styles.box }>
      <button onClick={ () => navigate('/') }>
        { '< Voltar' }
      </button>
      <img src={ Image } alt="Página não encontrada" />
    </section>
  );
}