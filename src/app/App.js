import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar, ThemeProvider } from 'react-native-magnus'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import InstagramStackNavigation from '../navigations/stack/Instagram/InstagramStackNavigation'
import { Provider as StoreProvider } from 'react-redux'
import store from './../redux/store'

const App = () => {
    return (
        <StoreProvider store={store}>
            <ThemeProvider>
                <SafeAreaProvider style={{ flex: 1 }}>
                    <NavigationContainer>
                        <StatusBar barStyle='dark-content' />
                        <InstagramStackNavigation />
                    </NavigationContainer>
                </SafeAreaProvider>
            </ThemeProvider>
        </StoreProvider>
    )
}

export default App