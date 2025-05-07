import {
  colorSemiBlack,
  Text
} from "../../theme";
import { Modal } from "../Modal";
import { Loading } from "../Loading";

interface LoadingTxProps {
  open: boolean;
  onClose: () => void;
}

export function LoadingTx({ open, onClose }: LoadingTxProps) {

  return (
    <Modal open={open} onClose={onClose}>
      <h3 style={{ marginBottom: "-10px", color: colorSemiBlack }}>
        Processing Transaction
      </h3>
      <Text style={{ color: colorSemiBlack }}>
        Your transaction is currently being processed. Please wait.
      </Text>
      <Loading />
    </Modal>
  );
}
