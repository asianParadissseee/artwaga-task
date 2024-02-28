async function getUsers() {
    const data = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    const sheets = document.getElementById("sheets");

    data.forEach((user) => {
        const sheet = document.createElement("div");
        sheet.innerHTML = `
            <div>
                ${user.name} 
            </div>
        `;
        sheets.appendChild(sheet);
    });
}

getUsers();
