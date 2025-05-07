import {
  colorSemiBlack,
  Text
} from "../../theme";
import { Modal } from "../Modal";

interface ConfirmedTxProps {
  open: boolean;
  onClose: () => void;
}

export function ConfirmedTx({ open, onClose }: ConfirmedTxProps) {

  return (
    <Modal open={open} onClose={onClose}>
      <h3 style={{ marginBottom: "-10px", color: colorSemiBlack }}>
        Transaction Successful!
      </h3>
      <Text style={{ color: colorSemiBlack }}>
        Your transaction was processed and you can safely close this modal.
      </Text>
    </Modal>
  );
}
