const getIpAddress = () => {
  return axios.get('https://jsonip.com/')
}

getIpAddress().then((response)=>console.log(response.data)).catch(e=>console.log(e));