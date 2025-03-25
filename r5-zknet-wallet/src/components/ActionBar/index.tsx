import {
  BoxContent,
  BoxContentParent,
  ButtonRound,
} from "../../theme";
import { BsQrCode } from "react-icons/bs";
import { LuArrowDownToLine } from "react-icons/lu";
import { LuArrowUpToLine } from "react-icons/lu";
import { BsTrash } from "react-icons/bs";
import { LuArrowUpRight } from "react-icons/lu";

const ReceiveIcon = BsQrCode as React.FC<React.PropsWithChildren>;
const DepositIcon = LuArrowDownToLine as React.FC<React.PropsWithChildren>;
const SendInternalIcon = LuArrowUpRight as React.FC<React.PropsWithChildren>;
const SendExternalIcon = LuArrowUpToLine as React.FC<React.PropsWithChildren>;
const DestroyIcon = BsTrash as React.FC<React.PropsWithChildren>;

export function ActionBar() {
  return (
    <BoxContentParent>
      <BoxContent>
        <ButtonRound title="Deposit Funds">
          <DepositIcon />
        </ButtonRound>
        <ButtonRound title="Withdraw Funds">
          <SendExternalIcon />
        </ButtonRound>
        <ButtonRound title="Destroy Account">
          <DestroyIcon />
        </ButtonRound>
        <ButtonRound title="Send Transaction">
          <SendInternalIcon />
        </ButtonRound>
        <ButtonRound title="Receive Transaction">
          <ReceiveIcon />
        </ButtonRound>
      </BoxContent>
      <BoxContent />
    </BoxContentParent>
  );
}
