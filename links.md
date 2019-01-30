const response = await axios.get(
'https://api.github.com/search/users?q=location:uzhgorod+followers:A>5', );
console.log(response.data);
