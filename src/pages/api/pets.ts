import { ref, set } from "firebase/database";
import { database } from "./firebase";

// referência do nó que deseja atualizar
const nodeRef = ref(database, "/pets");

// valor que deseja adicionar ao nó
const newData = {
  name: "João",
  age: 25
};

// adiciona o valor ao nó
set(nodeRef, newData);