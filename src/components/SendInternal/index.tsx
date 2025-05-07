import { useState } from "react";
import {
  ButtonPrimary,
  ButtonSecondaryModal,
  colorSemiBlack,
  InputModal,
  Text
} from "../../theme";
import { Modal } from "../Modal";
import { LoadingTx } from "../LoadingTx";
import { ConfirmedTx } from "../ConfirmedTx";
import { useZkContext } from "../../contexts/ZkContext";
import { parseUnits } from "viem";
import { isZkAddress } from "../../utils/isZkAddress";

interface SendInternalProps {
  open: boolean;
  onClose: () => void;
}

export function SendInternal({ open, onClose }: SendInternalProps) {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { transferFunds } = useZkContext();

  const handleTransfer = async () => {
    if (!isZkAddress(recipient)) {
        alert("Invalid address. Make sure it starts with zk and is correct.");
        return;
      }      
    if (!amount || isNaN(Number(amount))) {
      alert("Please enter a valid numeric amount.");
      return;
    }

    try {
      const parsedAmount = parseUnits(amount, 18);

      // Clear inputs
      setRecipient("")
      setAmount("")

      // Close input modal, show loading
      onClose();
      setIsLoading(true);

      const tx = await transferFunds(recipient, parsedAmount);
      await tx; // Wait for confirmation

      // Transition from loading to confirmed
      setIsLoading(false);
      setIsConfirmed(true);

      // Auto-close confirmation after delay
      setTimeout(() => {
        setIsConfirmed(false);
        setRecipient("");
        setAmount("");
      }, 15000);
    } catch (err) {
      console.error("Withdraw transaction failed:", err);
      setIsLoading(false);
      setIsConfirmed(false);
    }
  };

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <h3 style={{ marginBottom: "-10px", color: colorSemiBlack }}>
            Send Private Transaction
        </h3>
        <Text style={{ color: colorSemiBlack }}>
        Send funds to another private zkNet wallet. Make sure you use the correct address, prefixed with <b>zk</b>.
        </Text>
        <InputModal
          style={{ width: "100%", maxWidth: "100%" }}
          placeholder="Enter private address, starting with zk..."
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
        <InputModal
          style={{ width: "100%", maxWidth: "100%" }}
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
          <ButtonPrimary style={{ width: "100%" }} onClick={handleTransfer}>
            Send Transaction
          </ButtonPrimary>
        </div>
      </Modal>

      <LoadingTx open={isLoading} onClose={() => setIsLoading(false)} />
      <ConfirmedTx open={isConfirmed} onClose={() => setIsConfirmed(false)} />
    </>
  );
}
