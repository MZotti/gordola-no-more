import AsyncStorage from "@react-native-async-storage/async-storage";
import { Measurements } from "interfaces";

const storeMeasurements = async (measurements: Measurements[]): Promise<boolean> => {
    const parsed = await JSON.stringify(measurements)
    AsyncStorage.setItem('@measurements', parsed);
    return true
}

const getMeasurements = async (): Promise<Measurements[] | []> => {
    const store = await AsyncStorage.getItem('@measurements')
    if(!store || store === null) return []
    return JSON.parse(store)
}

export {
    storeMeasurements,
    getMeasurements
}