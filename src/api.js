export async function getVans(){
  const response = await fetch("/api/vans");
  if(!response.ok ){
    throw{
      message:"an error occured",
      statusText: response.statusText,
      status: response.status
    }
  }
  const vanData = await response.json();
  return vanData.vans;
}