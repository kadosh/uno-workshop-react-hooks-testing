import React from 'react';
import DataSource from '../../DataSource';

const useSubscription = (selectData) => {
  const [data, setData] = React.useState(selectData(DataSource));

  React.useEffect(() => {
    const unsubscribe = DataSource.subscribe(() => {
      setData(selectData(DataSource))
    });

    return () => {
      unsubscribe();
    };
  });

  return [data];
};

export default useSubscription;
