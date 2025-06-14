import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import List from '../pages/list';
import User from '../pages/user';
import NewList from '../pages/newList';
import Edit from '../pages/edit';
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
            <Stack.Screen name="Edit" component={Edit} />
        </Stack.Navigator>
    );
}

export default function BottomRoutes({ route }) {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
            tabBar={(props) => <CustomTabBar {...props} />}
            initialParams={route.params}
        >
            <Tab.Screen 
                name="MainStack" 
                component={MainStack}
            />
            <Tab.Screen 
                name="User" 
                component={User}
                initialParams={route.params}
            />
        </Tab.Navigator>
    )
}