import { Container } from "./style";

export function Tag({ texContent, ...res }) {
  return <Container {...res}>{texContent}</Container>;
}
