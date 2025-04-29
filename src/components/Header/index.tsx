import {
  BoxContent,
  BoxContentParent,
  BoxHeader,
  ButtonSecondary,
  Spacer
} from "../../theme";
import { FaMask } from "react-icons/fa";
import { useAppKit, useAppKitAccount, useDisconnect } from "@reown/appkit/react";

const StealthIcon = FaMask as React.FC<React.PropsWithChildren>;

export function Header() {
  const { open } = useAppKit();
  const { address, isConnected } =
    useAppKitAccount();
    const { disconnect } = useDisconnect();

  const handleConnect = () => {
    open({ view: "Connect", namespace: "eip155" });
  }

  const handleDisConnect = () => {
    disconnect();
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
        {isConnected && address && <BoxContent><StealthIcon />{address}</BoxContent>}
      </BoxContentParent>
    </BoxHeader>
  );
}
