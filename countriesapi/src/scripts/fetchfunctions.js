import impdata from "../data/data.json";
export function fetchData() {
  let data = impdata;
  console.log("data got is:", data);
  return data;
}
