export default async function updateProfile( data, id, auth ) {
  try{
    const res = await fetch(process.env.NEXT_PUBLIC_HOST + '/users/profile/' + id , {
      method: 'PUT',
      headers: {
        'Accept': '*/*',
        'Authorization': `Bearer ${auth}`
      },
      body: data
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
