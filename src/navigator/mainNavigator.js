import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen414743Navigator from '../features/BlankScreen414743/navigator';
import BlankScreen314710Navigator from '../features/BlankScreen314710/navigator';
import BlankScreen214550Navigator from '../features/BlankScreen214550/navigator';
import BlankScreen114503Navigator from '../features/BlankScreen114503/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen414743: { screen: BlankScreen414743Navigator },
BlankScreen314710: { screen: BlankScreen314710Navigator },
BlankScreen214550: { screen: BlankScreen214550Navigator },
BlankScreen114503: { screen: BlankScreen114503Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
