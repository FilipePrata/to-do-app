import { Modal } from "react-native";
import { ModalBody, Overlay } from './styles'
import { children } from "react";


export default function CustomModal({visible, onClose, children}) {
    return (
        <Modal
            visible={visible}
            transparent
            statusBarTranslucent
            animationType="fade"
            onRequestClose={onClose}
        >
            <Overlay>
                <ModalBody>
                    {children}
                </ModalBody>
            </Overlay>
        </Modal>
    );
}