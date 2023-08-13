import React from 'react';

export const useFetchData = () => {
  const [data, setData] = React.useState({
    name: '',
    description: '',
    participants: [],
    catagory: [],
    tickeTime: '',
    loaction: '',
    date: '',
    time: '',
    organized: []
  });

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = require('../assets/data.json');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return {data};
};
