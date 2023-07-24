import { Button, Flex, FormControl, HStack, Input, Modal, VStack } from 'native-base';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { measurementsCreators, registerCreators } from '../../state';
import { State } from 'state/reducers';
import { calculateIMC } from 'functions/measurements';

const initialState = {
    biceps: {
        left: 0,
        right: 0
    },
    legs: {
        left: 0,
        right: 0
    },
    calves: {
        left: 0,
        right: 0
    },
    weight: 0,
    chest: 0,
    abdomen: 0
}

const RegisterModal = () => {
    const dispatch = useDispatch()
    const toEdit = useSelector(({ editMeasurements }: State) => editMeasurements)
    const register = useSelector(({ register }: State) => register)

    const { createMeasurements, updateMeasurements } = bindActionCreators(measurementsCreators, dispatch)
    const { openCloseRegister } = bindActionCreators(registerCreators, dispatch)

    const [data, setData] = useState(initialState);

    useEffect(() => {
        if (toEdit && toEdit !== null) setData(toEdit)
    }, [toEdit])

    const onSave = () => {
        const height = 173
        if (toEdit === null) {
            createMeasurements({
                ...data,
                id: String(Math.floor(Math.random() * (99999 - 1) + 1)),
                height,
                imc: calculateIMC(height, data.weight),
                created_at: new Date(),
                updated_at: new Date(),
            })
        } else {
            updateMeasurements({
                ...data,
                id: String(Math.floor(Math.random() * (99999 - 1) + 1)),
                height,
                imc: calculateIMC(height, data.weight),
                created_at: new Date(),
                updated_at: new Date(),
            })
        }
        onClose()
    }

    const onClose = () => {
        setData(initialState)
        openCloseRegister({ isOpen: false })
    }

    return (
        <Modal isOpen={register.isOpen} onClose={onClose}>
            <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Registrar Medidas</Modal.Header>
                <Modal.Body maxW="full">
                    <VStack w="full" space={2}>
                        <FormControl>
                            <FormControl.Label>Peso (kg)</FormControl.Label>
                            <Input
                                type='number'
                                keyboardType='numeric'
                                placeholder='kg'
                                value={data.weight}
                                onChangeText={weight => setData({ ...data, weight: Number(weight) })}
                            />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Peito (cm)</FormControl.Label>
                            <Input
                                type='number'
                                keyboardType='numeric'
                                placeholder='cm'
                                value={data.chest}
                                onChangeText={chest => setData({ ...data, chest })}
                            />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label>Abdomen (cm)</FormControl.Label>
                            <Input
                                type='number'
                                keyboardType='numeric'
                                placeholder='cm'
                                value={data.abdomen}
                                onChangeText={abdomen => setData({ ...data, abdomen })}
                            />
                        </FormControl>
                        <FormControl.Label>Bíceps (cm)</FormControl.Label>
                        <HStack space={2} maxW="full" w="full">
                            <FormControl w="1/2">
                                <FormControl.Label>Direito</FormControl.Label>
                                <Input
                                    type='number'
                                    keyboardType='numeric'
                                    placeholder='cm'
                                    value={data.biceps.right}
                                    onChangeText={right => setData({ ...data, biceps: { left: data.biceps.left, right } })}
                                />
                            </FormControl>
                            <FormControl w="1/2">
                                <FormControl.Label>Esquerdo</FormControl.Label>
                                <Input
                                    type='number'
                                    keyboardType='numeric'
                                    placeholder='cm'
                                    value={data.biceps.left}
                                    onChangeText={left => setData({ ...data, biceps: { right: data.biceps.right, left } })}
                                />
                            </FormControl>
                        </HStack>
                        <FormControl.Label>Pernas (cm)</FormControl.Label>
                        <HStack space={2} maxW="full" w="full">
                            <FormControl w="1/2">
                                <FormControl.Label>Direita</FormControl.Label>
                                <Input
                                    type='number'
                                    keyboardType='numeric'
                                    placeholder='cm'
                                    value={data.legs.right}
                                    onChangeText={right => setData({ ...data, legs: { left: data.legs.left, right } })}
                                />
                            </FormControl>
                            <FormControl w="1/2">
                                <FormControl.Label>Esquerda</FormControl.Label>
                                <Input
                                    type='number'
                                    keyboardType='numeric'
                                    placeholder='cm'
                                    value={data.legs.left}
                                    onChangeText={left => setData({ ...data, legs: { right: data.legs.right, left } })}
                                />
                            </FormControl>
                        </HStack>
                        <FormControl.Label>Panturrilhas (cm)</FormControl.Label>
                        <HStack space={2} maxW="full" w="full">
                            <FormControl w="1/2">
                                <FormControl.Label>Direita</FormControl.Label>
                                <Input
                                    type='number'
                                    keyboardType='numeric'
                                    placeholder='cm'
                                    value={data.calves.right}
                                    onChangeText={right => setData({ ...data, calves: { left: data.calves.left, right } })}
                                />
                            </FormControl>
                            <FormControl w="1/2">
                                <FormControl.Label>Esquerda</FormControl.Label>
                                <Input
                                    type='number'
                                    keyboardType='numeric'
                                    placeholder='cm'
                                    value={data.calves.left}
                                    onChangeText={left => setData({ ...data, calves: { right: data.calves.right, left } })}
                                />
                            </FormControl>
                        </HStack>
                    </VStack>
                </Modal.Body>
                <Modal.Footer>
                    <Button.Group space={2}>
                        <Button
                            variant="ghost"
                            colorScheme="blueGray"
                            onPress={onClose}
                        >
                            Cancelar
                        </Button>
                        <Button
                            colorScheme="green"
                            onPress={onSave}
                        >
                            Salvar
                        </Button>
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    )
}

export default RegisterModal