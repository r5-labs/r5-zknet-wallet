import { useState } from "react";
import {
  BoxContent,
  BoxContentParent,
  BoxHeader,
  ButtonPrimary,
  ButtonSecondary,
  Divider,
  FullContainerBox,
  Spacer,
  TextSubTitle,
  Text,
  TextTitle,
  Link,
  colorText,
  fontSize,
  colorLightGray,
  SmallText
} from "../../theme";
import { FaMask } from "react-icons/fa";
import { GoCopy, GoCheck } from "react-icons/go";
import {
  useAppKit,
  useAppKitAccount,
  useDisconnect
} from "@reown/appkit/react";
import { useZkContext } from "../../contexts/ZkContext";
import ZkLogo from "../../assets/zknet-wallet.png";
import { sliceAddress } from "../../utils/sliceAddress";

const StealthIcon = FaMask as React.FC<React.PropsWithChildren>;
const CopyIcon = GoCopy as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const CheckIcon = GoCheck as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

export function Header() {
  const [isCopied, setIsCopied] = useState(false);
  const { open } = useAppKit();
  const { isConnected, address } = useAppKitAccount();
  const { disconnect } = useDisconnect();

  const { zkAccount, createWallet } = useZkContext();

  const handleConnect = () => {
    open({ view: "Connect", namespace: "eip155" });
  };

  const handleDisConnect = () => {
    disconnect();
  };

  const handleCreateWallet = () => {
    createWallet();
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(zkAccount);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy address:", err);
    }
  };

  return (
    <BoxHeader>
      <BoxContentParent style={{ gap: 20 }}>
        <img
          src={ZkLogo}
          alt="zkNet"
          style={{ width: 64, height: 64, marginTop: "2rem" }}
        />
        <BoxContent>
          <TextTitle style={{ marginBottom: 0 }}>zkNet Web Wallet</TextTitle>
        </BoxContent>
        <BoxContent>
          {!isConnected ? (
            <>
              <BoxContentParent style={{ gap: 20 }}>
                <Text style={{ marginTop: "-20px" }}>
                  To use the zkNet protocol, first connect your R5 Wallet.
                </Text>
                <ButtonPrimary onClick={() => handleConnect()}>
                  Connect Wallet
                </ButtonPrimary>
              </BoxContentParent>
            </>
          ) : (
            <>
              <BoxContentParent style={{ gap: 20 }}>
                <Text style={{ marginTop: "-20px", color: colorLightGray }}>
                  {address}
                </Text>
                <ButtonSecondary onClick={() => handleDisConnect()}>
                  Disconnect Wallet
                </ButtonSecondary>
              </BoxContentParent>
            </>
          )}
        </BoxContent>
        <Spacer />
        {isConnected && (
          <BoxContent>
            {zkAccount ? (
              <>
                <BoxContentParent >
                  <BoxContent>
                    <StealthIcon />
                    <Text
                      style={{
                        fontSize: "1rem",
                        flexWrap: "wrap",
                        overflow: 'hidden',
                        whiteSpace: 'pre-wrap',
                        maxWidth: "100%"
                      }}
                    >
                      {zkAccount ? `${sliceAddress(zkAccount)}` : "N/A"}
                    </Text>
                    <span
                      onClick={handleCopy}
                      title="Copy Address"
                      style={{
                        cursor: "pointer",
                        display: "inline-flex",
                        color: colorText
                      }}
                    >
                      {isCopied ? (
                        <CheckIcon style={{ width: 12, height: 12 }} />
                      ) : (
                        <CopyIcon style={{ width: 12, height: 12 }} />
                      )}
                    </span>
                  </BoxContent>
                  <SmallText style={{ color: colorLightGray }}>
                    Your Private Internal Address (PIA)
                  </SmallText>
                </BoxContentParent>
              </>
            ) : (
              <>
                <FullContainerBox style={{ margin: 15, padding: 15, gap: 20 }}>
                  <TextSubTitle>
                    You don't have an active Private Internal Address (PIA)
                  </TextSubTitle>
                  <Text>
                    You will need to create a new Private Internal Address (PIA)
                    to use the zkNet protocol. Use the button below to create
                    one - there's no fees other than regular transaction gas
                    fees. If you're new to zkNet, you can{" "}
                    <Link
                      href="https://docs.r5.network/about-r5/zknet-privacy"
                      target="_blank"
                      style={{
                        color: colorText,
                        fontSize: fontSize,
                        fontWeight: "bold",
                        textDecoration: "underline"
                      }}
                    >
                      click here
                    </Link>{" "}
                    to read more about it before continuing.
                  </Text>
                  <Divider />
                  <ButtonPrimary onClick={() => handleCreateWallet()}>
                    Create New PIA
                  </ButtonPrimary>
                </FullContainerBox>
              </>
            )}
          </BoxContent>
        )}
      </BoxContentParent>
    </BoxHeader>
  );
}
