import { BoxContent, BoxContentParent, FullContainerBox, TextTitle } from "../../theme";
import R5Logo from "../../assets/r5-small.png";
import { useZkContext } from "../../contexts/ZkContext";

function formatZkBalance(balance: bigint | number | string): string {
  if (!balance) return "0";

  const raw = BigInt(balance);
  const divisor = 10n ** 18n;
  const whole = raw / divisor;
  const fractional = raw % divisor;

  // Convert fractional to string with 18 digits, remove trailing zeros, then slice to 4 decimal places
  let fractionStr = fractional.toString().padStart(18, '0').slice(0, 4).replace(/0+$/, '');

  const formattedWhole = whole.toLocaleString(); // Adds commas for better formatting

  return fractionStr ? `${formattedWhole}.${fractionStr}` : formattedWhole;
}

export function Balance() {
  const { zkBalance, zkAccount } = useZkContext();

  return (
    <>
      {zkAccount ? (
        <BoxContentParent>
          <FullContainerBox style={{ margin: 15, maxWidth: '85%' }}>
            <BoxContent>
              <img src={R5Logo} alt="logo" />
              <TextTitle style={{ margin: "0" }}>
                {zkBalance ? formatZkBalance(zkBalance) : "0"}
              </TextTitle>
            </BoxContent>
          </FullContainerBox>
        </BoxContentParent>
      ) : (
        <></>
      )}
    </>
  );
}
