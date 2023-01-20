const key =
  "&api_key=live_Wg9vMl1FRnMcvYGi5AWc5F1Afxoax8QkjKjtZJW6eN0VI29W7OdLiDexi2P4Pth5";
const baseUrl = "https://api.thecatapi.com/v1/images/search";

let url = "https://api.thecatapi.com/v1/images/search?";
interface Categories {
  [index: string]: number;
}
const Categories: Categories = {
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
const loader = document.querySelector(".loader") as HTMLImageElement;

/* 
    0. Visa loading gif
    1. Kolla vilka checkbox är ticked ✅
    2. Lägg varige checkbox id / name i en string arr ✅
    3. Loopa igenom kategorierna✅
    4. Fetcha med hjälp av obj och namn på checkbox, spara bild url i egen arr✅
    5. Skapa lika många bilder som arrayen har element. ✅
    6. Ta bort loading gif och visa bilderna
  */

async function fetchImage(url: string): Promise<HTMLImageElement> {
  let res = await fetch(url);
  let data = await res.json();
  const img = document.createElement("img");
  img.src = data[0].url
  console.log(img)
  return (img);
}
async function catFetcher(
  categories?: string[]
): Promise<HTMLImageElement | HTMLImageElement[]> {
  const cats: HTMLImageElement[] = [];
  if (categories) {
    for (const category in categories) {
      cats.push(
        await fetchImage(
          `${baseUrl}?category_ids=${Categories[category]}${key}`
        )
      );
    }
  } else {
    return await fetchImage(`${baseUrl}${key}`);
  }
  return cats;
}

button.addEventListener("click", async function (event): Promise<void> {
  event.preventDefault();
  imgHolder.innerHTML = "";
  loader.classList.remove("hidden");

  //hämta alla kategorier, om några är valda
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  ) as NodeList;

  const checked: string[] = [];
  checkboxes.forEach((c) => {
    let input = c as HTMLInputElement;
    checked.push(input.id);
  });

  console.log(checked);
  //fetcha en bild för varige kategori och printa ut den i image holder
  if (checked.length > 0) {
    const images = await catFetcher(checked);
    for (const img in images) {
      imgHolder.append(img)
    }
    
    // for (const category of checked) {
    //   url = `${baseUrl}?category_ids=${Categories[category]}${key}`;

    //   let catRes = await fetch(url);
    //   let catData = await catRes.json();

    //   let imgEl = document.createElement("img");
    //   imgEl.setAttribute("src", catData[0].url);
    //   imgHolder.append(imgEl);
    // }
  } else {
    const catImage = await catFetcher();

    // let catRes = await fetch(url);
    // let catData = await catRes.json();
    // let img = document.createElement("img");
    // img.setAttribute("src", catData[0].url);
    imgHolder.append(catImage);
  }
});
