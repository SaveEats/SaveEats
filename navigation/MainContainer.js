import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import NotificationScreen from '../screens/NotificationScreen'
import UserScreen from '../screens/UserScreen'
import AddPostScreen from '../screens/AddPostScreen'

//Screen names
const homeName = 'Home';
const searchName = 'Search';
const notificationName = 'Notification';
const userName = 'User';
const addPostName = 'AddPost';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
				<Tab.Navigator
				initialRouteName={homeName}
				screenOptions={({route}) => ({
					tabBarIcon: ({focused, color, size}) => {
						let iconName;
						let rn = route.name;

						if(rn === homeName) {
							iconName = focused ? 'home' : 'home-outline'
						} else if (rn === searchName) {
							iconName = focused ? 'search' : 'search-outline'
						} else if(rn === notificationName) {
							iconName = focused ? 'notifications' : 'notifications-outline'
						} else if(rn === userName) {
							iconName = focused ? 'person-circle' : 'person-circle-outline'
						} else if(rn === addPostName) {
							iconName = focused ? 'add-circle' : 'add-circle-outline'
						}

						return <Ionicons name={iconName} size={size} color={color} />
					},
				})}
				tabBarOptions={{
					activeTintColor: '#F35B04',
				}}
				
				
				>
				
				<Tab.Screen options={{ headerShown: false }} name={homeName} component={HomeScreen}/>
				<Tab.Screen name={searchName} component={SearchScreen}/>
				<Tab.Screen options={{ headerShown: false }} name={addPostName} size={"large"} component={AddPostScreen}/>
				<Tab.Screen name={notificationName} component={NotificationScreen}/>
				<Tab.Screen name={userName} component={UserScreen}/>

				</Tab.Navigator>

    )
}