export async function getVans(){
  const response = await fetch("/api/vans");
  if(!response.ok ){
    throw new Error("an error occured")
  }
  const vanData = await response.json();
  return vanData.vans;
}