import Head from 'next/head';

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1>About</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, vero.
          Suscipit assumenda explicabo, voluptatibus repellat quam soluta ipsam
          architecto! Quibusdam non distinctio fugiat doloribus voluptatibus
          vero cupiditate explicabo, rem nihil.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          suscipit beatae deleniti enim libero magni debitis facere dolore nulla
          quam ex sint neque molestiae, exercitationem voluptate excepturi omnis
          est dicta.
        </p>
      </div>
    </>
  );
};

export default About;
