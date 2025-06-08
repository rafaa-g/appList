import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import List from '../pages/list';
import User from '../pages/user';
import NewList from '../pages/newList';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="List" component={List} />
            <Stack.Screen name="NewList" component={NewList} />
        </Stack.Navigator>
    );
}

export default function BottomRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
            tabBar={(props) => <CustomTabBar {...props} />}
        >
            <Tab.Screen 
                name="MainStack" 
                component={MainStack}
            />
            <Tab.Screen name="User" component={User} />
        </Tab.Navigator>
    )
}