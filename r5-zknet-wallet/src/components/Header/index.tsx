import {
  BoxContent,
  BoxContentParent,
  BoxHeader,
  ButtonSecondary,
  Spacer
} from "../../theme";
import { FaMask } from "react-icons/fa";

const StealthIcon = FaMask as React.FC<React.PropsWithChildren>;

export function Header() {
  return (
    <BoxHeader>
      <BoxContentParent>
        <BoxContent>
          <ButtonSecondary>Connect Wallet</ButtonSecondary>
        </BoxContent>
        <Spacer />
        <BoxContent><StealthIcon />0xABC...XYZ</BoxContent>
      </BoxContentParent>
    </BoxHeader>
  );
}
