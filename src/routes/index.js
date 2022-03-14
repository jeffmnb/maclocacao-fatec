import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from '../routes/stack.routes';
import { TabsRoute } from './tab.routes';

export const Routes = () => {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    )
};

