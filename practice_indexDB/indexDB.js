let req = window.indexedDB.open("UserDatabase", 1)
let btn = document.querySelector('button')
let input = document.querySelectorAll('input')
let fetch = document.querySelector('#fetch')
let table = document.querySelector('table')
// console.log(input)
let database = null

function dbSetup() {
    database = req.result
    database.createObjectStore("user_info", { KeyPath: 'user_id' })
}
req.onupgradeneeded = function () {
    dbSetup()
}
req.onsuccess = function () {
    if (!database) {
        database = req.result
    }
}
function generateId() {
    let i = 0
    return function () {
        return ++i;
    }
}
let innerFun = generateId()


btn.addEventListener('click', function () {
    if(input[0].value.trim()==='' || input[1].value.trim()==='' || input[2].value.trim()===''){
        alert("* Enter All Fields ")
    }
    else{

        let details = {
            name: input[0].value,
        age: input[1].value,
        location: input[2].value
    }
    let txn = database.transaction('user_info', 'readwrite')
    let store = txn.objectStore("user_info")
    
    
    // console.log(innerFun())
    let addReq = store.add(details, innerFun())
    addReq.onsuccess = () => { alert("Data Added Succesfully") }
    addReq.onerror = (e) => { 
        alert("Something Went Wrong ")
        console.log(e)
        
    }
    // txn.oncomplete = () => { alert("Transaction Insert Success") }
}
})

fetch.addEventListener('click', function () {
    
    let searchID = input[0].value
    let txn = database.transaction('user_info', 'readonly')
    let store = txn.objectStore("user_info")
    let fetchReq = store.getAll()
    table.innerHTML = `     <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Location</th>
                            </tr>
                        `
    fetchReq.onsuccess = () => {
        console.log("Fetching Successful ")
        fetchReq.result.map((data) => {
            const tr = document.createElement('tr')

            tr.innerHTML = ` 
                                        <td>${data.name}</td>
                                        <td>${data.age}</td>
                                        <td>${data.location}</td>
                                `
            table.appendChild(tr)
            console.log(data)
        })
    }

    fetchReq.onerror = () => { console.log("Fetching Error") }
    txn.oncomplete = () => { console.log("Transaction of Fetching Records DOne") }
})





/*
req.addEventListener('upgradeneeded', function (e) {
    
    console.log("Request Object ",req)
    console.log("Event Object ",e)
    console.log(e)
    console.log(e.oldVersion, "old Bersion")
    console.log(e.newVersion, "New Version")
    console.log(e.target.result.createObjectStore("employee", { KeyPath: 'empID' }))

})
*/

/*
    req.addEventListener('success', function (e) {

    db = e.target.result
    console.log(db)
    // console.log("Success ", e,db)
    console.log(e)
    let tx = db.transaction("employee", 'readwrite')
    console.log(tx)
    let details = {
        empID: 5,
        empName: "Ava Adams",
        age: 55
    }
    let store = tx.objectStore("employee")
    // store.add(details)
    console.log(store)

    store.add(details, details.empID)
    tx.oncomplete = function (e) {
        console.log("Data Inserted Successfully")
    }
    tx.onerror = function (e) {
        console.log("Error! Inserting Records into DB", e.target.error)
    }
    let selectquery = store.getAll()
    console.log(selectquery)
    selectquery.onsuccess = function () {
        selectquery.result.map((e) => {
            console.log(e)
        })
        console.log("OnSuccess Called 1 ")
    }

    let whereClause = store.get(1)

    whereClause.onsuccess = function (e) {
        console.log("I got Property ", e.target.result)
        console.log("OnSuccess Got Called 2")
    }

})
*/
/*

let btn = document.querySelector('button')
console.log(btn)
btn.addEventListener('click', () => {
    let details = {
        id: 1,
        emp_name: 'Mohan',
        emp_age: 55
    }

    let store = db.transaction("employee", "readwrite")
    let obj = store.objectStore("employee")
    let ev = obj.add(details, details.id)

    ev.onsuccess = function () {
        console.log("Data added By BTN Click")
    }
    ev.onerror = function () {
        alert("RROR")
        console.log("Error INserting data by BTN CLICK")
    }

})
req.onerror = (e) => {
    console.log("Error Occured", e)
}
*/