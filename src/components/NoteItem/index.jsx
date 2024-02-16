import { Container } from "./style";

import { FiPlus, FiX } from "react-icons/fi";

export function NoteItem({ isNew = false, value, ...res }) {
  return (
    <Container $isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...res} />

      <button
        className={isNew ? "button-add" : "button-delete"}
        onClick={onClick}
        type="button"
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
