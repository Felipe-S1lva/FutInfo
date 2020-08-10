$.ajax({
  header: { 'Authorization' : 'Bearer test_a46aac2aa0200b442b5c5aaf6abe76' } ,
  url: 'https://api.api-futebol.com.br/v1/campeonatos',
  dataType: 'json',
  type: 'GET',
}).done(function(response) {
  
  console.log(response);
});