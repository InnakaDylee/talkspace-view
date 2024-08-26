export default async function registerDoctor( data, auth ){
  const res = await fetch(process.env.NEXT_PUBLIC_HOST + '/doctors/account/register', 
  {
    method: 'POST',
    headers: {
      'Accept': '*/*',
      'Authorization': `Bearer ${auth}`
    },
    body: data
  }).then((res) => res.json());

  if(res) {
    if(res.meta.success) {
      return {status: res.meta.success, data: res.results, message: res.meta.message}
    }
    return {status: res.meta.success, message: res.meta.message}
  }
}