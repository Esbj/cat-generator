const key =
  "&api_key=live_Wg9vMl1FRnMcvYGi5AWc5F1Afxoax8QkjKjtZJW6eN0VI29W7OdLiDexi2P4Pth5";
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
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  ) as NodeList;
  let checked: string[] = [];
  checkboxes.forEach((c) => {
    let input = c as HTMLInputElement;
    checked.push(input.id);
  });

  console.log(checked.toString());
  /* 
    0. Töm bilderna och visa loading gif
    1. Kolla vilka checkbox är ticked
    2. Lägg varige checkbox id / name i en string arr
    3. Loopa igenom kategorierna
    4. Fetcha med hjälp av obj och namn på checkbox, spara bild url i egen arr
    5. Skapa lika många bilder som arrayen har element. 
    6. Ta bort loading gif och visa bilderna
  */
  url = `${baseUrl}?category_ids=1,2${key}`
  console.log(url)
  let catRes = await fetch(url);
  let catData = await catRes.json();
  console.log(catData);
  // imageEl?.setAttribute("src", await catData[0].url);
});
