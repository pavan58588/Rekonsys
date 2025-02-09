import React from 'react';
import ExampleComponent from '../components/ExampleComponent';

const HomePage = ({ initialData }) => {
  return (
    <div>
      <ExampleComponent />
      <div>{initialData}</div>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from an external API or database
  const initialData = await fetchData();

  return {
    props: {
      initialData,
    },
  };
}

export default HomePage;
