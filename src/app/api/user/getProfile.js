export default async function getProfile(id, auth) {
  try{
    const res = await fetch(process.env.NEXT_PUBLIC_HOST + '/users/profile/' + id , {
      method: 'GET',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + auth
      }
    }).then((res) => res.json()) 

    if(res) {
      if(res.meta.success) {
        return {status: res.meta.success, data: res.results, message: res.meta.message}
      }
      return {status: res.meta.success, message: res.meta.message}
    }
  } catch (err) {
    return { status: "err"}
  }
}
