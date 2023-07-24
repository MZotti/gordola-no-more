import {format as fnsFormat} from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

type Formats = "dd/MM/yyyy" | "dd/MM/yyyy HH:mm:ss" | "dd/MM" | string

const dateFormat = (value: string | Date, format: Formats = "dd/MM/yyyy"): string | null => {
    if (!value) return value;
    try {
        if(typeof value === 'string') {
            return String(fnsFormat(new Date(value), format, {locale: ptBR}));
        } else {
            return String(fnsFormat(value, format, {locale: ptBR}));
        }
    } catch (e) {
        console.error('Ocorreu um erro ao formatar a data', e)
        return null;
    }
}

export default dateFormat