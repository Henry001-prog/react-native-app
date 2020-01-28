import Main from './pages/main';
import User from './pages/user';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const Routes = createStackNavigator(
    {
        Main: {
            screen: Main,
        },
        User: {
            screen: User,
        },
    }
);

const Router = createAppContainer(Routes);

export default Router;