export async function getVans(){
  const response = await fetch("/api/vans");
  const vanData = await response.json();
  return vanData.vans;
}