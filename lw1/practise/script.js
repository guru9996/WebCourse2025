let repositories = []

let input = document.getElementById("userName")
let button = document.getElementById("startSearch")
let reposContainer = document.getElementById("repositories")

const search = async () => {
    let userName = input.value
    const response = await fetch("https://api.github.com/users/" + userName + "/repos", 
        {method: "GET"})
    repositories = await response.json();
    console.log(repositories)
    for (let i = 0;i < repositories.length; i++){
        createRepositoryBlock(repositories[i])
    }
    
}

const createRepositoryBlock = (repo) =>{
    let div = document.createElement('div')

    let title = document.createElement('h3')
    title.innerHTML = repo.name

    let id = document.createElement('p')
    id.innerHTML= "id: " + repo.id

    let link = document.createElement('p')
    link.innerHTML= "link: " + repo.url

    let user = document.createElement('p')
    user.innerHTML= "user: " + repo.owner.login

    div.append(id)
    div.append(link)
    div.append(title)
    div.append(user)
    reposContainer.append(div)
}

button.addEventListener("mousedown", search)


