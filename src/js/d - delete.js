const BASE_URL = 'http://localhost:4040' 



  function removeBook(id){

    const options = {
        method: 'DELETE',   
      }

    fetch(`${BASE_URL}/books/${id}`, options)
    .then(res => res.json())
    .then(console.log)
    
  }


  removeBook(3)