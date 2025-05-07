import {
  BoxContentParent,
  ButtonPrimary,
  colorPrimary,
  colorSemiBlack,
  Text
} from "../../theme";
import { Modal } from "../Modal";
import { GoCheck } from "react-icons/go";

const ConfirmationIcon = GoCheck as React.FC<React.PropsWithChildren>;

interface ConfirmedTxProps {
  open: boolean;
  onClose: () => void;
}

export function ConfirmedTx({ open, onClose }: ConfirmedTxProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <BoxContentParent style={{ gap: 20 }}>
        <div style={{ color: colorPrimary, marginTop: 10, marginBottom: -10 }}>
          <ConfirmationIcon />
        </div>
        <h3 style={{ marginBottom: "-10px", color: colorSemiBlack }}>
          Transaction Confirmed
        </h3>
        <Text style={{ color: colorSemiBlack }}>
          Your transaction has been confirmed and sent to the blockchain for
          processing. You can safely close this modal and wait for confirmation
          by your wallet provider.{" "}
          <b>It may take a few seconds for your zkNet Web Wallet to update.</b>
        </Text>
        <ButtonPrimary style={{ width: "100%" }} onClick={onClose}>
          Close
        </ButtonPrimary>
      </BoxContentParent>
    </Modal>
  );
}
