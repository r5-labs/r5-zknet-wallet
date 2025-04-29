import {
  BoxContent,
  BoxContentParent,
  colorLightGray,
  Divider,
  Link,
  SmallText,
  Sp,
  TextSubTitle
} from "../../theme";

export function TxHistory() {
  return (
    <BoxContentParent>
      <TextSubTitle style={{ marginBottom: "-7px" }}>
        Deposit & Widthdraw History
      </TextSubTitle>
      <SmallText style={{ color: colorLightGray }}>
        Only <b>deposits</b> and <b>widthdraws.</b> Transfers to other PIAs are
        not tracked.
      </SmallText>
      <Sp />
      <BoxContent>
        Deposited <b>100 R5</b> to zkABC...XYZ{" "}
        <span>
          <Link href="#" style={{ fontSize: "10pt" }}>
            View on Explorer
          </Link>
        </span>
      </BoxContent>
      <BoxContent>
        Withdrew <b>99 R5</b> to 0xABC...XYZ{" "}
        <span>
          <Link href="#" style={{ fontSize: "10pt" }}>
            View on Explorer
          </Link>
        </span>
      </BoxContent>
      <Divider />
    </BoxContentParent>
  );
}
