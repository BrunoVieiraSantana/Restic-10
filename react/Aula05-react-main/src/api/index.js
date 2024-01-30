const baseUrl = "https://65a73b6794c2c5762da65259.mockapi.io/"
 const api ={
    getContatos:  async()=> {
       return fetch(`${baseUrl}/contacts`)
    }, 
    postContatos:"",
    putContatos:"", 
    deleteContatos:""
}
export default api