async function getUsers() {
    const data = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    const sheets = document.getElementById("sheets");

    data.forEach((user) => {
        const sheet = document.createElement("tr");
        sheet.innerHTML = `
                <td class="">${user.id}</td>
                <td class="">${user.name}</td>
                <td class="">${user.email}</td>
                <td class="">${user.username}</td>
        `
        sheets.appendChild(sheet);
    });
}

getUsers();
