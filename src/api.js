export async function getVans(){
  const response = await fetch("/api/vans");
  if(!response.ok ){
    throw new Error("an error occured")
  }
  const vanData = await response.json();
  return vanData.vans;
}

export async function loginUser(creds) {
  const response = await fetch("/api/login",
      { method: "post", body: JSON.stringify(creds) }
  )
  const data = await response.json()

  if (!response.ok) {
      throw new Error(data.message)
  }

  return data
}