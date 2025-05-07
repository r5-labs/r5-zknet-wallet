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

interface DepositProps {
  open: boolean;
  onClose: () => void;
}

export function Deposit({ open, onClose }: DepositProps) {
  const [amount, setAmount] = useState("");
  const { withdrawFunds } = useZkContext();

  const handleWithdraw = () => {
    withdrawFunds(BigInt(1e18));
  };

  return (
    <Modal open={open} onClose={onClose}>
      <h3 style={{ marginBottom: "-10px", color: colorSemiBlack }}>
        Deposit Funds to PIA
      </h3>
      <Text style={{ color: colorSemiBlack }}>
        Deposit R5 from your regular wallet into your PIA.
      </Text>
      <InputModal
        style={{
          minWidth: "48ch"
        }}
        type="number"
        placeholder="Enter the amount to deposit..."
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
