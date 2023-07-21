export interface Measurements {
    id: string
    height: number
    weight: number
    imc: number
    biceps: BodyPart
    legs: BodyPart
    chest: number
    abdomen: number
    calves: BodyPart
    created_at: Date
    updated_at: Date
}

interface BodyPart {
    left: number
    right: number
}