const paginationButtonEls = document.querySelectorAll('.pagination');
console.log(paginationButtonEls);
for (let index = 0; index < paginationButtonEls.length; index++) {
    const button = paginationButtonEls[index];
    console.log(button);
    button.addEventListener('click', async function() {
        console.log(123);
        const page = +button.dataset.page;
        console.log(page);
        const users = await getUsers(page);
        console.log(users);
        renderUsers(users);
    })
    
}

async function getUsers(page) { // await - дождаться когда ответ придет а это только в аснхронных функциях
    const redonse = fetch(`https://reqres/in/api/users?page=${page}`);
    const json = await response.json();
    return json.data;
}

function renderUsers(users) {
    let content = "";
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        console.log(user);
        content +=`
        <div>
        <img src="${user.avatar}">
            <p>${user.first_name} ${user.last_name}</p>
        </div>
        `;
    }
    document.querySelector("#app").innerHTML = "<h1>Привет</h1>";
}
