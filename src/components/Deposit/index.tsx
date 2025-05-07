import { useEffect, useMemo, useState } from "react";
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
import { ethers } from "ethers";
import { useWaitForTransactionReceipt } from "wagmi";
import { config } from "../../config";
import { Address } from "viem";

interface DepositProps {
  open: boolean;
  onClose: () => void;
}

export function Deposit({ open, onClose }: DepositProps) {
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [tx, setTx] = useState<Address | undefined>(undefined)
  const result = useWaitForTransactionReceipt({ hash: tx, config })
  const { depositFunds } = useZkContext();

  const txResult = useMemo(() => {
    if (tx) return result
    else return null
  }, [tx, result])

  const handleDeposit = async () => {
    if (!amount || isNaN(Number(amount))) return;

    try {
      const parsed = ethers.parseUnits(amount, 18);

      // Clear inputs
      setAmount("")

      // Close deposit modal and show loading
      onClose();
      setIsLoading(true);

      // Call deposit function and wait for confirmation
      const tx = await depositFunds(parsed);
      setTx(tx)
      // Hide loading and show confirmation
      setAmount(""); // Reset input
    } catch (err) {
      console.error("Transaction failed:", err);
      setIsLoading(false);
      setIsConfirmed(false);
    }
  };

  useEffect(() => {
    if (txResult && txResult.isSuccess) {
      setTx(undefined)
      setIsConfirmed(true);

      // Auto-close confirmation after a delay
      setTimeout(() => {
        setIsConfirmed(false);
      }, 15000);
    }
  }, [txResult])

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <h3 style={{ marginBottom: "-10px", color: colorSemiBlack }}>
          Deposit to zkNet Wallet
        </h3>
        <Text style={{ color: colorSemiBlack }}>
          Deposit R5 from your regular wallet to your zkNet wallet.
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
            Confirm
          </ButtonPrimary>
        </div>
      </Modal>

      <LoadingTx open={isLoading} onClose={() => setIsLoading(false)} />
      <ConfirmedTx open={isConfirmed} onClose={() => setIsConfirmed(false)} />
    </>
  );
}
