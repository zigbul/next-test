import MainContainer from '../components/MainContainer';
import Link from 'next/link';

const Users = ({users}) => {

   return (
      <MainContainer keywords={'users'}>
         <h1>Список пользователей</h1>
         <ul>
            {users.map(user => 
            <li key={user.id}>
               <Link href={`/users/${user.id}`}>
                  <a>
                  {user.name}
                  </a>
               </Link>
            </li>
            )}
         </ul>
      </MainContainer>
   );
};

export default Users;

export async function getStaticProps(context) {
   const response = await fetch('http://jsonplaceholder.typicode.com/users');
   const users = await response.json();
   return {
     props: {users}, // will be passed to the page component as props
   }
 }