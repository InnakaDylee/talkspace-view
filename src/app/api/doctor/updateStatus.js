export default async function updateStatus( data, id, auth ){
  const res = await fetch(process.env.NEXT_PUBLIC_HOST + '/doctors/status/' + id, 
  {
    method: 'PUT',
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth}`
    },
    body: JSON.stringify(data)
  }).then((res) => res.json());
  if(res) {
    if(res.meta.success) {
      return {status: res.meta.success, data: res.results, message: res.meta.message}
    }
    return {status: res.meta.success, message: res.meta.message}
  }
}