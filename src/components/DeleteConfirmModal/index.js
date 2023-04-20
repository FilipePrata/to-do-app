import { Modal } from "react-native";

import { Text } from '../Text';

import { Actions, ModalBody, Overlay } from './styles'
import Button from "../Button";

export default function DeleteConfirmModal({visible, onClose, onConfirm}){
    return(
        <Modal
            visible={visible}
            transparent
            statusBarTranslucent
        >
            <Overlay>
                <ModalBody>
                    <Text 
                    size={18}
                    weight="600"
                    >
                        Tem certeza que deseja remover a tarefa?
                    </Text>
                    <Text opacity={0.5} style={{marginTop: 4}}>
                        Esta ação não poderá ser desfeita
                    </Text>

                    <Actions>
                        <Button primary={false} onPress={onClose}>Cancelar</Button>
                        <Button disabled={false} onPress={onConfirm}>Confirmar</Button>
                    </Actions>
                </ModalBody>
            </Overlay>
        </Modal>
        
    );
}