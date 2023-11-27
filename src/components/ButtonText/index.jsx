import { Container } from "./style";

export function ButtonText({ texContext, isActive = false, ...rest }) {
  return (
    <Container type="button" {...rest} $isactive={isActive.toString()}>
      {texContext}
    </Container>
  );
}
