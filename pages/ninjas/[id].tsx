import { GetStaticPaths, GetStaticProps } from 'next';
import Ninja from '../../types/ninja';

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: Ninja[] = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<DetailsProps> = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data: Ninja = await res.json();

  return { props: { ninja: data } };
};

export interface DetailsProps {
  ninja: Ninja;
}

const Details: React.FC<DetailsProps> = ({ ninja }) => {
  return (
    <div>
      <h1> {ninja.name} </h1>
      <p> {ninja.email} </p>
      <p> {ninja.website} </p>
      <p> {ninja.address.city} </p>
    </div>
  );
};

export default Details;
