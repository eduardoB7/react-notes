import { Container } from "./style";

export function Button({ textContent, loading = false, ...rest }) {
  return (
    <Container type="button" disabled={loading} {...rest}>
      {loading ? "Carregando" : textContent}
    </Container>
  );
}
