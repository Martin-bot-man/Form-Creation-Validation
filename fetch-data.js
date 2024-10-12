async function fetchUserData(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'
    const dataContainer = document.getElementById('api-data')
    try {
      const response =await fetch(apiUrl)
      console.log(response);
      const users =await response.json(response)
      dataContainer.innerHTML='';
      const userList = document.createElement("ul");

      users.forEach(function(res) {

        const userName = res.name 
        console.log(res.name);
        const listItem =document.createElement('li');
        listItem.innerText= userName;
        userList.append(listItem)
        console.log(userName)

      })


    } catch (error) {
        dataContainer.innerHTML='Failed to load user data.';
    }
}
document.addEventListener('DOMContentLoaded',()=>{
    fetchUserData();
})