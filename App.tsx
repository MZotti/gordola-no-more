import React from "react";
import {
    StorageManager,
    NativeBaseProvider,
    ColorMode
} from "native-base";
import { SafeAreaView, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Provider } from "react-redux";

import Navigator from "./src/Navigator";
import RegisterModal from "./src/components/RegisterModal";

const colorModeManager: StorageManager = {
    get: async () => {
        try {
            let val = await AsyncStorage.getItem('@color-mode');
            return val === 'dark' ? 'dark' : 'light';
        } catch (e) {
            return 'dark';
        }
    },
    set: async (value: ColorMode) => {
        try {
            await AsyncStorage.setItem('@color-mode', String(value));
        } catch (e) {
            console.error(e);
        }
    },
};

import { store } from './src/state'

export default function App() {
    return (
        <Provider store={store}>
            <NativeBaseProvider colorModeManager={colorModeManager}>
                <SafeAreaView style={styles.container} >
                    <Navigator />
                    <RegisterModal />
                </SafeAreaView>
            </NativeBaseProvider>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    }
})