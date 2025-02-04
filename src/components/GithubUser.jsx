import { useEffect, useState } from 'react';

const GithubUser = () => {
  const [data, setData] = useState([]);

    //useEffect roda só uma vez

  useEffect(() => {
    fetch('https://api.github.com/users/lucianorp')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
        <>
            <img src={data.avatar_url} alt={data.name} />
            <p>{data.name}</p>
        </>
  );
};

export default GithubUser;