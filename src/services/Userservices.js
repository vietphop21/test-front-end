import axios from 'axios'
 const fetchArticles = () => {
  return    axios.get(`https://617b71c2d842cf001711bed9.mockapi.io/api/v1/blogs?page=1&limit=10`)   

  
}
const fetchDetailsArticles = (id)=>
{
  return axios.post (`https://617b71c2d842cf001711bed9.mockapi.io/api/v1/blogs/${id}`)
}
const updaterUser = (name,job)=>
{
  return axios.put (`https://reqres.in/api/users/}`,{name,job})

}
export   {fetchArticles,fetchDetailsArticles,updaterUser};
