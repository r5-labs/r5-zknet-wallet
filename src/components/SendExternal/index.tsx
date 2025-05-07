import { useState } from "react";
import {
  ButtonPrimary,
  ButtonSecondaryModal,
  colorSemiBlack,
  InputModal,
  Text
} from "../../theme";
import { Modal } from "../Modal";
import { useZkContext } from "../../contexts/ZkContext";

interface SendExternalProps {
  open: boolean;
  onClose: () => void;
}

export function SendExternal({ open, onClose }: SendExternalProps) {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const { withdrawFunds } = useZkContext();

  const handleWithdraw = () => {
    withdrawFunds(BigInt(1e18));
  };

  return (
    <Modal open={open} onClose={onClose}>
      <h3 style={{ marginBottom: "-10px", color: colorSemiBlack }}>
        Send External Transaction
      </h3>
      <Text style={{ color: colorSemiBlack }}>
        Send funds to a regular 0x R5 wallet.
      </Text>
      <InputModal
        style={{
          minWidth: "48ch"
        }}
        placeholder="Enter public address, starting with 0x..."
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <InputModal
        style={{
          minWidth: "48ch"
        }}
        type="number"
        placeholder="Enter the amount to send..."
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          gap: 0,
          marginTop: 10
        }}
      >
        <ButtonSecondaryModal style={{ width: "100%" }} onClick={onClose}>
          Cancel
        </ButtonSecondaryModal>
        <ButtonPrimary style={{ width: "100%" }} onClick={handleWithdraw}>
          Send Transaction
        </ButtonPrimary>
      </div>
    </Modal>
  );
}
