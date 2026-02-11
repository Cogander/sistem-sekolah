// REGISTER
function register(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(!username || !password){
        alert("Semua field wajib diisi");
        return;
    }

    localStorage.setItem("user", JSON.stringify({username,password}));
    localStorage.setItem("isLogin","true");

    window.location.href="dashboard.html";
}

// LOGIN
function login(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if(savedUser && username === savedUser.username && password === savedUser.password){
        localStorage.setItem("isLogin","true");
        window.location.href="dashboard.html";
    } else {
        alert("Username atau password salah");
    }
}

// DASHBOARD CHECK
function checkLogin(){
    if(localStorage.getItem("isLogin") !== "true"){
        window.location.href="index.html";
    }
}

// LOGOUT
function logout(){
    localStorage.removeItem("isLogin");
    window.location.href="index.html";
}

// GENERATE 653 SISWA
function generateStudents(){
    const table = document.getElementById("studentTable");

    for(let i=1;i<=653;i++){
        const row = `
            <tr>
                <td>${i}</td>
                <td>Siswa ${i}</td>
                <td>Kelas ${Math.ceil(i/30)}</td>
            </tr>
        `;
        table.innerHTML += row;
    }
}
