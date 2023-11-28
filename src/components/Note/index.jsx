import { Container } from "./style";
import { Tag } from "../Tag";

export function Note({ data, ...res }) {
  return (
    <Container {...res}>
      <h1>{data.title}</h1>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} texContent={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
