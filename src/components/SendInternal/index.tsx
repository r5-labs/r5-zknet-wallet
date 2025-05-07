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

interface SendInternalProps {
  open: boolean;
  onClose: () => void;
}

export function SendInternal({ open, onClose }: SendInternalProps) {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const { withdrawFunds } = useZkContext();

  const handleWithdraw = () => {
    withdrawFunds(BigInt(1e18));
  };

  return (
    <Modal open={open} onClose={onClose}>
      <h3 style={{ marginBottom: "-10px", color: colorSemiBlack }}>
        Send Internal Transaction
      </h3>
      <Text style={{ color: colorSemiBlack }}>
        Send funds to another zk Private Internal Address (PIA).
      </Text>
      <InputModal
        style={{
          width: "70ch",
          maxWidth: "100%"
        }}
        placeholder="Enter PIA, starting with zk..."
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <InputModal
        style={{
          width: "70ch",
          maxWidth: "100%"
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
