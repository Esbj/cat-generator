const key =
  "live_Wg9vMl1FRnMcvYGi5AWc5F1Afxoax8QkjKjtZJW6eN0VI29W7OdLiDexi2P4Pth5";
const baseUrl = "https://api.thecatapi.com/v1/images/search";


let url =
  "https://api.thecatapi.com/v1/images/search?category_ids=4&api_key=live_Wg9vMl1FRnMcvYGi5AWc5F1Afxoax8QkjKjtZJW6eN0VI29W7OdLiDexi2P4Pth5";

const categories = [
  { id: 1, name: "hats" },
  { id: 2, name: "space" },
  { id: 4, name: "sunglasses" },
  { id: 5, name: "boxes" },
  { id: 7, name: "ties" },
  { id: 14, name: "sinks" },
  { id: 15, name: "clothes" }
];

const catRes = fetch(url).then((response) =>
  response.json().then((data) => console.log(data))
);
