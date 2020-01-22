import Main from './pages/main';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const Routes = createStackNavigator(
    {
        Main: {
            screen: Main,
        },
    }
);

const Router = createAppContainer(Routes);

export default Router;