export default async function fetchClosestColorNames(hex) {
  const url = `https://www.thecolorapi.com/id?hex=${hex.substring(1)}`;
  console.log(hex);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return null;
    }
    const json = await response.json();
    console.log(json);
    return json.name.value;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
