import * as React from 'react';
import DataSource from '../DataSource';

export const useSubscription = (selector) => {
    const [data, setData] = React.useState(selector(DataSource));

    React.useEffect(() => {
        const subscription = DataSource.subscribe(() => {
            setData(selector(DataSource));
        });

        return () => {
            DataSource.unsubscribe(subscription);
        }
    }, [selector])

    return data;
};