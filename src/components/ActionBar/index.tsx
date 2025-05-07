import React, { useState } from "react";
import { BoxContent, BoxContentParent, ButtonRound } from "../../theme";
import { ReceiveTx } from "../ReceiveTx";
import { BsQrCode } from "react-icons/bs";
import { LuArrowDownToLine } from "react-icons/lu";
import { LuArrowUpToLine } from "react-icons/lu";
import { BsTrash } from "react-icons/bs";
import { LuArrowUpRight } from "react-icons/lu";
import { useZkContext } from "../../contexts/ZkContext";
import { SendExternal } from "../SendExternal";
import { SendInternal } from "../SendInternal";
import { Deposit } from "../Deposit";
import { LoadingTx } from "../LoadingTx";
import { ConfirmedTx } from "../ConfirmedTx";
import { Destroy } from "../Destroy";

const ReceiveIcon = BsQrCode as React.FC<React.PropsWithChildren>;
const DepositIcon = LuArrowDownToLine as React.FC<React.PropsWithChildren>;
const SendInternalIcon = LuArrowUpRight as React.FC<React.PropsWithChildren>;
const SendExternalIcon = LuArrowUpToLine as React.FC<React.PropsWithChildren>;
const DestroyIcon = BsTrash as React.FC<React.PropsWithChildren>;

export function ActionBar() {
  const [showReceiveQR, setShowReceiveQR] = useState(false);
  const [showSendExternal, setShowSendExternal] = useState(false);
  const [showSendInternal, setShowSendInternal] = useState(false);
  const [showDeposit, setShowDeposit] = useState(false);
  const [showLoadingTx, setShowLoadingTx] = useState(false);
  const [showConfirmedTx, setShowConfirmedTx] = useState(false);
  const [showDestroy, setShowDestroy] = useState(false);
  const { /* depositFunds, */ /* withdrawFunds, */ zkAccount } = useZkContext();

  /**
   * Example handler for depositing funds into PIA. It directly deposits
   * 1 R5 into the active PIA.
   */
  /*
    const handleDeposit = () => {
    depositFunds(BigInt(1e18));
  };
  */

  /**
   * Example handler for withdrawing funds (send external transaction)
   * where 1 R5 is sent back to the PIA owner on the main ledger.
   */
  /*
  const handleWithdraw = () => {
    withdrawFunds(BigInt(1e18));
  };
  */

  return (
    <>
      {zkAccount ? (
        <>
          <BoxContentParent style={{ marginBottom: "2rem" }}>
            <BoxContent style={{ gap: 0 }}>
              <ButtonRound
                title="Deposit Funds"
                onClick={() => setShowDeposit(true)}
              >
                <DepositIcon />
              </ButtonRound>
              <ButtonRound
                title="Sent External Transaction"
                onClick={() => setShowSendExternal(true)}
              >
                <SendExternalIcon />
              </ButtonRound>
              <ButtonRound
                title="Destroy Account & Withdraw Funds"
                onClick={() => setShowDestroy(true)}
              >
                <DestroyIcon />
              </ButtonRound>
              <ButtonRound
                title="Send Private Transaction"
                onClick={() => setShowSendInternal(true)}
              >
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
          />
          <SendExternal
            open={showSendExternal}
            onClose={() => setShowSendExternal(false)}
          />
          <SendInternal
            open={showSendInternal}
            onClose={() => setShowSendInternal(false)}
          />
          <Deposit open={showDeposit} onClose={() => setShowDeposit(false)} />
          <Destroy open={showDestroy} onClose={() => setShowDestroy(false)} />
          <LoadingTx
            open={showLoadingTx}
            onClose={() => setShowLoadingTx(false)}
          />
          <ConfirmedTx
            open={showConfirmedTx}
            onClose={() => setShowConfirmedTx}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
