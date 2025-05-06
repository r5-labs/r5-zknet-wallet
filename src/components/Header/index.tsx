import {
  BoxContent,
  BoxContentParent,
  BoxHeader,
  ButtonPrimary,
  ButtonSecondary,
  Spacer
} from "../../theme";
import { FaMask } from "react-icons/fa";
import { useAppKit, useAppKitAccount, useDisconnect } from "@reown/appkit/react";
import { useZkContext } from "../../contexts/ZkContext";

const StealthIcon = FaMask as React.FC<React.PropsWithChildren>;

export function Header() {
  const { open } = useAppKit();
  const { isConnected } =
    useAppKitAccount();
  const { disconnect } = useDisconnect();

  const { zkAccount, createWallet } = useZkContext()

  const handleConnect = () => {
    open({ view: "Connect", namespace: "eip155" });
  }

  const handleDisConnect = () => {
    disconnect();
  }

  
  const handleCreateWallet = () => {
    createWallet()
  }



  return (
    <BoxHeader>
      <BoxContentParent>
        <BoxContent>
          {!isConnected ? (
            <ButtonSecondary onClick={() => handleConnect()}>Connect Wallet</ButtonSecondary>
          ) : (
            <ButtonSecondary onClick={() => handleDisConnect()}>Disconnect</ButtonSecondary>
          )}
        </BoxContent>
        <Spacer />
        {isConnected &&
          <BoxContent>
            {zkAccount ?
              <>
                <StealthIcon />{zkAccount ?? ''}
              </> :
              <ButtonPrimary onClick={() => handleCreateWallet()}>Create Account</ButtonPrimary>}
          </BoxContent>
        }
      </BoxContentParent>
    </BoxHeader>
  );
}
