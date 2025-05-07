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
import { ethers } from "ethers";

interface DepositProps {
  open: boolean;
  onClose: () => void;
}

export function Deposit({ open, onClose }: DepositProps) {
  const [amount, setAmount] = useState("");
  const { depositFunds } = useZkContext();

  const handleDeposit = () => {
    // Basic validation
    if (!amount || isNaN(Number(amount))) return;

    try {
      // Convert to BigInt with 18 decimals
      const parsed = ethers.parseUnits(amount, 18);
      // Pass BigInt to zkNet contract deposit function
      depositFunds(parsed);
    } catch (err) {
      console.error("Failed to parse amount:", err);
    }
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
          width: "48ch",
          maxWidth: "100%"
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
        <ButtonPrimary style={{ width: "100%" }} onClick={handleDeposit}>
          Confirm Deposit
        </ButtonPrimary>
      </div>
    </Modal>
  );
}
