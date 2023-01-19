const key =
  "&api_key=live_Wg9vMl1FRnMcvYGi5AWc5F1Afxoax8QkjKjtZJW6eN0VI29W7OdLiDexi2P4Pth5";
const baseUrl = "https://api.thecatapi.com/v1/images/search";

let url =
  "https://api.thecatapi.com/v1/images/search?";
interface ICATegories {
  [index: string]: number;
}
const CATegories: ICATegories = {
  hats: 1,
  space: 2,
  sunglasses: 4,
  boxes: 5,
  ties: 7,
  sinks: 14,
  clothes: 15
};

const button = document.querySelector("button#cat-button") as HTMLButtonElement;
const imgHolder = document.querySelector("div#image-holder") as HTMLDivElement;

button.addEventListener("click", async function (): Promise<void> {
  imgHolder.innerHTML=""
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  ) as NodeList;
  let checked: string[] = [];
  checkboxes.forEach((c) => {
    let input = c as HTMLInputElement;
    checked.push(input.id);
  });

  /* 
    0. Töm bilderna och visa loading gif
    1. Kolla vilka checkbox är ticked
    2. Lägg varige checkbox id / name i en string arr
    3. Loopa igenom kategorierna
    4. Fetcha med hjälp av obj och namn på checkbox, spara bild url i egen arr
    5. Skapa lika många bilder som arrayen har element. 
    6. Ta bort loading gif och visa bilderna
  */
  if (CATegories.length > 0) {
    for (const category of checked) {
      console.log(category);
      url = `${baseUrl}?category_ids=${CATegories[category]}${key}`;
      console.log(url);
      let catRes = await fetch(url);
      let catData = await catRes.json();
      console.log(catData[0].url);
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", catData[0].url);
      imgHolder.append(imgEl);
    }
  }else{
    let catRes = await fetch(url);
    let catData = await catRes.json();
    let img = document.createElement("img");
    img.setAttribute("src", catData[0].url);
    imgHolder.append(img);
  }
});
