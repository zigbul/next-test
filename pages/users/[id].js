import {useRouter} from 'next/router';
import MainContainer from '../../components/MainContainer';
import styles from '../../styles/user.module.scss';

export default function User({user}) {
   const {query} = useRouter();
   return (
      <MainContainer>
         <div className={styles.user}>
            <h1>Пользователь c id {query.id}</h1>
            <div>Имя пользователя - {user.name}</div>
         </div>
      </MainContainer>
   );
};

export async function getServerSideProps({params: {id}}) {
   const response = await fetch(`http://jsonplaceholder.typicode.com/users/${id}`);
   const user = await response.json();
   return {
     props: {user}, // will be passed to the page component as props
   }
 }