export default async function register( data ){
  const res = await fetch(process.env.NEXT_PUBLIC_HOST + '/users/account/register', 
  {
    method: 'POST',
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
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