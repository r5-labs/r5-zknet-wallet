import { useZkContext } from "../../contexts/ZkContext";
import {
  ButtonPrimary,
  ButtonSecondaryModal,
  colorSemiBlack,
  Text
} from "../../theme";
import { Modal } from "../Modal";

interface DestroyProps {
  open: boolean;
  onClose: () => void;
}

export function Destroy({ open, onClose }: DestroyProps) {
  const { destoryAccount } = useZkContext();

  const handleDestory = () => {
    destoryAccount();
  };

  return (
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
  );
}
