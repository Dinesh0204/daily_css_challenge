`use strict`
let person_name = document.querySelector('#person_name')
let person_date = document.querySelector('#person_date')
let person_email = document.querySelector('#person_email')
let btn = document.querySelector('#btn')
let myForm = document.querySelector('#myForm')
let storage = JSON.parse(localStorage.getItem('UserStorage')) || [];

myForm.addEventListener('submit', function (e) {
    let obj = {
        Name: person_name.value,
        Dob: person_date.value,
        Email: person_email.value
    }
    storage.push(obj)
    localStorage.setItem("UserStorage", JSON.stringify(storage))
    person_name.value = ""
    person_date.value = ""
    person_email.value = ""

})