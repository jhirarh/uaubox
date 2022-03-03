function endereco(){
    event.preventDefault()
  let cep = document.getElementById("cep");
  let url = "http://viacep.com.br/ws/" + cep.value + "/json/";
  let logradouro = document.getElementById("logradouro");
    

  fetch(url, {method: 'GET'})
      .then(response => {
          response.json()
              .then(data => {
                  logradouro.value = data.logradouro;
              })
      })
  
  
}