import { Container } from "./style";

export function Textarea({ value, ...res }) {
  return <Container {...res}>{value}</Container>;
}
