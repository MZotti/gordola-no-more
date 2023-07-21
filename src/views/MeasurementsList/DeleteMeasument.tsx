import { Button, Flex, Modal, Text } from 'native-base'
import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { measurementsCreators } from '../../state';

interface Props {
    id: string,
    isOpen: boolean
    onClose: any
}

const DeleteMeasument = ({ id, isOpen, onClose }: Props) => {
    const dispatch = useDispatch()

    const { deleteMeasurements } = bindActionCreators(measurementsCreators, dispatch)

    const onRemove = () => {
        deleteMeasurements(id)
        onClose()
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Modal.Content maxWidth="400px">
                <Modal.CloseButton />
                <Modal.Header>Remover Medidas</Modal.Header>
                <Modal.Body maxW="full">
                </Modal.Body>
                <Flex pb={8} justifyContent="center" alignItems="center">
                    <Text fontSize="md">Confirme a ação de remoção.</Text>
                </Flex>
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
                            colorScheme="red"
                            onPress={onRemove}
                        >
                            Remover
                        </Button>
                    </Button.Group>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    )
}

export default DeleteMeasument