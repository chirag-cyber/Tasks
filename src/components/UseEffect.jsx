import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummy.restapiexample.com/api/v1/employee/1');
        const responseData = await response.json();
        setData(responseData);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
    return () => {
      console.log('Cleanup');
    };
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Data</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
