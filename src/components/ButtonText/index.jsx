import { Container } from "./style";

export function ButtonText({ texContext, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {texContext}
    </Container>
  );
}
