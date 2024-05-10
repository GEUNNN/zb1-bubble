export const getData = async () => {
  return await fetch("http://localhost:8000/hanbin").then((res) => res.json());
};
