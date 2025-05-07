import React, { useState } from "react";
import { BoxContent, BoxContentParent, ButtonRound } from "../../theme";
import { ReceiveTx } from "../ReceiveTx";
import { BsQrCode } from "react-icons/bs";
import { LuArrowDownToLine } from "react-icons/lu";
import { LuArrowUpToLine } from "react-icons/lu";
import { BsTrash } from "react-icons/bs";
import { LuArrowUpRight } from "react-icons/lu";
import { useZkContext } from "../../contexts/ZkContext";

const ReceiveIcon = BsQrCode as React.FC<React.PropsWithChildren>;
const DepositIcon = LuArrowDownToLine as React.FC<React.PropsWithChildren>;
const SendInternalIcon = LuArrowUpRight as React.FC<React.PropsWithChildren>;
const SendExternalIcon = LuArrowUpToLine as React.FC<React.PropsWithChildren>;
const DestroyIcon = BsTrash as React.FC<React.PropsWithChildren>;

export function ActionBar() {
  const [showReceiveQR, setShowReceiveQR] = useState(false);
  const { destoryAccount, depositFunds, withdrawFunds, zkAccount } =
    useZkContext();

  const handleDeposit = () => {
    depositFunds(BigInt(1e18));
  };

  const handleWithdraw = () => {
    withdrawFunds(BigInt(1e18));
  };

  const handleDestory = () => {
    destoryAccount();
  };

  return (
    <>
      {zkAccount ? (
        <>
          <BoxContentParent style={{ marginBottom: '2rem' }}>
            <BoxContent>
              <ButtonRound title="Deposit Funds" onClick={handleDeposit}>
                <DepositIcon />
              </ButtonRound>
              <ButtonRound title="Withdraw Funds" onClick={handleWithdraw}>
                <SendExternalIcon />
              </ButtonRound>
              <ButtonRound title="Destroy Account" onClick={handleDestory}>
                <DestroyIcon />
              </ButtonRound>
              <ButtonRound title="Send Transaction">
                <SendInternalIcon />
              </ButtonRound>
              <ButtonRound
                title="Receive Transaction"
                onClick={() => setShowReceiveQR(true)}
              >
                <ReceiveIcon />
              </ButtonRound>
            </BoxContent>
            <BoxContent />
          </BoxContentParent>
          <ReceiveTx
            open={showReceiveQR}
            onClose={() => setShowReceiveQR(false)}
            address={"zk"}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
