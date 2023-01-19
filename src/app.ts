const key =
  "live_Wg9vMl1FRnMcvYGi5AWc5F1Afxoax8QkjKjtZJW6eN0VI29W7OdLiDexi2P4Pth5";
const baseUrl = "https://api.thecatapi.com/v1/images/search";

let url =
  "https://api.thecatapi.com/v1/images/search?category_ids=4&api_key=live_Wg9vMl1FRnMcvYGi5AWc5F1Afxoax8QkjKjtZJW6eN0VI29W7OdLiDexi2P4Pth5";

const CATegoriesArr = [
  { id: 1, name: "hats" },
  { id: 2, name: "space" },
  { id: 4, name: "sunglasses" },
  { id: 5, name: "boxes" },
  { id: 7, name: "ties" },
  { id: 14, name: "sinks" },
  { id: 15, name: "clothes" }
];

const CATegories = {
  hats: 1,
  space: 2,
  sunglasses: 4,
  boxes: 5,
  ties: 7,
  sinks: 14,
  clothes: 15
};

const button = document.querySelector("button#cat-button") as HTMLButtonElement;
const main = document.querySelector("main") as HTMLElement;
const imageEl = document.querySelector("img");

button.addEventListener("click", async function (event: Event): Promise<void> {
  event.preventDefault();
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked') as NodeList;
  console.log(checkboxes)

  /* 
    1. Kolla vilka checkbox är ticked
    2. Lägg varige checkbox id / name i en string arr
    3. Matcha string arr mot obj med kategoriernas id siffra
  */
  let catRes = await fetch(`${baseUrl}?category_ids=2`);
  let catData = await catRes.json();
  imageEl?.setAttribute("src", await catData[0].url);
});
