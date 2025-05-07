import {
  BoxContentParent,
  colorPrimary,
  colorSemiBlack,
  Text
} from "../../theme";
import { Modal } from "../Modal";
import { BsTrash } from "react-icons/bs";

const DestroyIcon = BsTrash as React.FC<React.PropsWithChildren>;

interface DestroyConfirmationProps {
  open: boolean;
  onClose: () => void;
}

export function DestroyConfirmation({
  open,
  onClose
}: DestroyConfirmationProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <BoxContentParent style={{ gap: 20 }}>
        <div style={{ color: colorPrimary, marginTop: 10, marginBottom: -10 }}>
          <DestroyIcon />
        </div>
        <h3 style={{ marginBottom: "-10px", color: colorSemiBlack }}>
          Destroying Account
        </h3>
        <Text style={{ color: colorSemiBlack }}>
          Your account is being destroyed. This popup will close automatically
          in <b>20 seconds.</b> If by then your transaction still have not been
          confirmed by the blockchain, please wait for confirmation by your
          wallet provider and refresh the page. You can safely close this modal
          and refresh this page manually if you prefer. <b>You can create a new
          zkNet wallet at any time.</b>
        </Text>
      </BoxContentParent>
    </Modal>
  );
}
