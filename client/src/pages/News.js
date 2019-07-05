import React, { useEffect, useState } from 'react';
import { URL, NEWSAPI_KEY } from '../config';

export default function News() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(URL + NEWSAPI_KEY)
      .then(data => {
        return data.json();
      })
      .then(data => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    <div>{data && data.articles.map(article => <p>{article.title}</p>)}</div>
  );
}
