const BASE_URL = "http://localhost:3000";


const signup = () => {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var adress = document.getElementById('adress').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    const sign = {
        name:name,
        age:age,
        adress:adress,
        email:email,
        password:password,
    }
console.log(sign)


axios.post(`${BASE_URL}/signup`, sign)
        .then((response) => {
            console.log(response.data);
            location.href = "login.html"
        })
        .catch((error) => {
            console.log(`Error ...... ${error.message}`);
        })
}


function login(){
    var emailLog = document.getElementById('emailLog').value;
    var passwordLog = document.getElementById('passwordLog').value;

    var log = {
        emailLog:emailLog,
        passwordLog:passwordLog
    }
    console.log(log)


    axios.post(`${BASE_URL}/login`, log)
    .then((res)=>{
        console.log(res.data);
        location.href = 'dashboard.html'
    })
    .catch((err)=>{
        console.log(`error......${err.message}`)
    })
}