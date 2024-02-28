async function getUsers() {

    try {
        const data = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
        const sheets = document.getElementById("sheets");
        data.forEach((user) => {
            const sheet = document.createElement("tr");
            sheet.innerHTML = `
                <td class="border text-left px-5 pt-5 hover:bg-gray-300 hover:text-white cursor-pointer">${user.id}</td>
                <td class="border text-center hover:bg-gray-300 hover:text-white cursor-pointer">${user.name}</td>
                <td class="border text-center hover:bg-gray-300 hover:text-white cursor-pointer">${user.email}</td>
                <td class="border text-center hover:bg-gray-300 hover:text-white cursor-pointer">${user.username}</td>
                <td class="border text-center hover:bg-gray-300 hover:text-white cursor-pointer">${user.phone}</td>
                <td class="border text-center hover:bg-gray-300 hover:text-white cursor-pointer">${user.website}</td>
                <td class="border text-center hover:bg-gray-300 hover:text-white cursor-pointer">${user.address.street}</td>
                <td class="border text-center hover:bg-gray-300 hover:text-white cursor-pointer">${user.company.name}</td>
            `;
            sheets.appendChild(sheet);
        });
    }catch (e) {
        console.log(e)
        throw new Error(e)
    }
}

async function sortUsersByUserName() {
    const sheets = document.getElementById("sheets");
    const rows = Array.from(sheets.querySelectorAll("tr"));

    rows.sort((a, b) => {
        const nameA = a.cells[1].textContent.trim();
        const nameB = b.cells[1].textContent.trim();
        return nameA.localeCompare(nameB);
    });

    rows.forEach(row => sheets.appendChild(row));
}



getUsers();

const sortButton = document.getElementById("sortButton");
sortButton.addEventListener("click", sortUsersByUserName);
