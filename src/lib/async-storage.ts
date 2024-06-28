import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../types/user.type';

export const storeUser = async (user: User) => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(user))
  } catch (err) {
    console.log(err)
    console.warn('Error storing user')
  }
}
export const getUser = async () => {
  try {
    const user = await AsyncStorage.getItem('user')
    return user != null ? JSON.parse(user) : null
  } catch (err) {
    console.log(err)
    console.warn('Error getting user')
  }
}
export const removeUser = async () => {
  try {
    const currentUser = await getUser()
    if(!currentUser) console.warn('No user to remove')
    await AsyncStorage.removeItem('user')
    
  } catch (err) {
    console.log(err)
    console.warn('Error removing user')
  }
}