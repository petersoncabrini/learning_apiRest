const url = "http://localhost:5500/api"
const newUser = {
    name: 'Peterson',
    avatar: 'https://avatars.githubusercontent.com/u/82073973?v=4',
    city: 'Curitiba'
}

const userUpdated = {
    name: 'Usuario Atualizado',
    avatar: 'https://avatars.githubusercontent.com/u/82073973?v=4',
    city: 'Campinas'
}


// READ
function getUser() {
    axios.get(url)
        .then((response) => {
            const data = response.data
            renderResults.textContent = JSON.stringify(data)

        })
        .catch((error) => {
            console.log(error)
        })
}

function getOneUser(id) {
    axios.get(url + '/' + id)
        .then((response) => {
            const data = response.data
            renderResults.textContent = JSON.stringify(data)
        })
        .catch((error) => {
            console.log(error)
        })
}

getOneUser(1)
// getUser()


// CREATE
function addNewUser() {
    axios.post(url, newUser)
        .then((response) => {
            alert(JSON.stringify(response.data))
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
}

// addNewUser()

// UPDATE
function updateUser() {
    axios.put(`${url}/2`, userUpdated)
        .then((response) => {
            alert(JSON.stringify(response.data))
        })
        .catch((error) => {
            console.log(error)
        })
}

// updateUser()

// DELETE
function deleteUser() {
    axios.delete(`${url}/2`)
        .then((response) => {
            alert(JSON.stringify(response.data))
        })
        .catch((error) => {
            console.log(error)
        })
}

// deleteUser()