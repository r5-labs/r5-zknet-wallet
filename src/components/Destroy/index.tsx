import { useEffect, useState } from "react";
import { useZkContext } from "../../contexts/ZkContext";
import {
  ButtonPrimary,
  ButtonSecondaryModal,
  colorSemiBlack,
  Text
} from "../../theme";
import { Modal } from "../Modal";
import { LoadingTx } from "../LoadingTx";
import { DestroyConfirmation } from "../DestroyConfirmation";
interface DestroyProps {
  open: boolean;
  onClose: () => void;
}

export function Destroy({ open, onClose }: DestroyProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [wasConfirmed, setWasConfirmed] = useState(false);
  const { destroyAccount } = useZkContext();

  const handleDestory = async () => {
    try {
      // Close modal and show loading
      onClose();
      setIsLoading(true);

      // Call destroy fuction with await
      const tx = await destroyAccount();
      await tx; // wait confirmation

      // Hide loading and show confirmation
      setIsLoading(false);
      setIsConfirmed(true);
      setWasConfirmed(true);

      // Auto-close confirmation after a delay
      setTimeout(() => {
        setIsConfirmed(false);
      }, 20000);
    } catch (err) {
      console.error("Transaction failed:", err);
      setIsLoading(false);
      setIsConfirmed(false);
    }
  };

  useEffect(() => {
    if (!isConfirmed && wasConfirmed) {
      location.reload();
    }
  }, [isConfirmed, wasConfirmed]);

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <h3 style={{ marginBottom: "-10px", color: colorSemiBlack }}>
          Do you really want to proceed?
        </h3>
        <Text style={{ color: colorSemiBlack }}>
          This will destroy your current PIA and withdraw all funds to your main
          wallet. You will be able to create another PIA at any time.
        </Text>
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
          <ButtonPrimary style={{ width: "100%" }} onClick={handleDestory}>
            Confirm
          </ButtonPrimary>
        </div>
      </Modal>

      <LoadingTx open={isLoading} onClose={() => setIsLoading(false)} />
      <DestroyConfirmation open={isConfirmed} onClose={() => setIsConfirmed(false)} />
    </>
  );
}
