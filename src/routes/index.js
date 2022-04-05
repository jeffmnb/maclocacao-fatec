import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StackRoutes } from '../routes/stack.routes';
import { TabsRoute } from './tab.routes';

import { AuthProvider, userDataStoraged } from '../hooks/auth';

import { Load } from '../components/Load';

export const Routes = () => {

    const [user, setUser] = useState(undefined);

    useEffect(() => {
        setUser(userDataStoraged);

        setTimeout(() => {
            setUser(userDataStoraged);
        }, 2000);


        if (userDataStoraged != undefined) {
            setUser(true);
        } else {
            setUser(false);
        }

    }, []);

    return (
        <NavigationContainer>
            <AuthProvider>
                {user == undefined ? <StackRoutes /> : user ? <StackRoutes /> : <Load />}
            </AuthProvider>
        </NavigationContainer>
    )
};

