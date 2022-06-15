import { GetServerSideProps, NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <h1 className='text-blue-500'>Hello world</h1>
    </div>
  );
}


export const getServerSideProps:GetServerSideProps = async (ctx) => {


  return {
    props:{
      data:null
    }
  }
}

export default Home;