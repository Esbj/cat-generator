const key = "live_Wg9vMl1FRnMcvYGi5AWc5F1Afxoax8QkjKjtZJW6eN0VI29W7OdLiDexi2P4Pth5"
const url = "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_Wg9vMl1FRnMcvYGi5AWc5F1Afxoax8QkjKjtZJW6eN0VI29W7OdLiDexi2P4Pth5"


const res = fetch(url).then(response => response.json().then(data => console.log(data)))