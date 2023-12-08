let data_cont = document.querySelector("#data_cont")
let table = document.createElement('table')

let row = table.insertRow()
row.insertCell().textContent = "Name"
row.insertCell().textContent = "Dob"
row.insertCell().textContent = "Email"
console.log(row)
let userStorage = JSON.parse(localStorage.getItem("UserStorage"))
userStorage.map((e) => {
    let row = table.insertRow()
    row.insertCell().textContent = e["Name"]
    row.insertCell().textContent = e["Dob"]
    row.insertCell().textContent = e["Email"]
})
data_cont.appendChild(table);