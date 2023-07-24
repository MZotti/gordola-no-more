import { differenceInDays } from "date-fns";
import { Measurements } from "interfaces"

const filterByDate = (values: Measurements[], difference: number = 30): Measurements[] => {
    const now = new Date()
    let filteredValues = values;

    if(difference === 0) return filteredValues;
    return values.filter(val => differenceInDays(new Date(val.created_at), now) <= difference)
}

export {
    filterByDate
}