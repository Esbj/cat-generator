const key =
  "live_Wg9vMl1FRnMcvYGi5AWc5F1Afxoax8QkjKjtZJW6eN0VI29W7OdLiDexi2P4Pth5";
const baseUrl = "https://api.thecatapi.com/v1/images/search";

let url =
  "https://api.thecatapi.com/v1/images/search?category_ids=4&api_key=live_Wg9vMl1FRnMcvYGi5AWc5F1Afxoax8QkjKjtZJW6eN0VI29W7OdLiDexi2P4Pth5";

const CATegories = [
  { id: 1, name: "hats" },
  { id: 2, name: "space" },
  { id: 4, name: "sunglasses" },
  { id: 5, name: "boxes" },
  { id: 7, name: "ties" },
  { id: 14, name: "sinks" },
  { id: 15, name: "clothes" }
];

const button = document.querySelector("button#cat-button") as HTMLButtonElement;
const main = document.querySelector("main") as HTMLElement
const imageEl = document.querySelector("image")



button.addEventListener("click", async function (event:Event): Promise<void> {
  event.preventDefault()  

  let catRes = await fetch(url)
  let catData = await catRes.json();

  return await catData;
  
});