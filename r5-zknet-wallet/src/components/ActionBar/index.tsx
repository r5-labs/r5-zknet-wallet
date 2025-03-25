import {
  BoxContent,
  BoxContentParent,
  ButtonRound,
  ButtonSecondary
} from "../../theme";

export function ActionBar() {
  return (
    <BoxContentParent>
      <BoxContent>
        <ButtonRound>D</ButtonRound>
        <ButtonRound>S</ButtonRound>
        <ButtonRound>R</ButtonRound>
        <ButtonRound>E</ButtonRound>
        <ButtonRound>D</ButtonRound>
      </BoxContent>
      <BoxContent>
        <ButtonSecondary>Validate Hash</ButtonSecondary>
      </BoxContent>
    </BoxContentParent>
  );
}
