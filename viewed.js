document.addEventListener('DOMContentLoaded', function () {
    const userStatus = document.getElementById('userStatus');
    const usernameDisplay = document.getElementById('username');
    const logoutButton = document.getElementById('logoutButton');
    const searchInput = document.getElementById('searchInput');
    const searchHistory = document.getElementById('searchHistory');
    const viewedLink = document.getElementById('viewed'); 

    let currentUser = null;

    function checkLogin() {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            currentUser = JSON.parse(storedUser);
            usernameDisplay.textContent = currentUser.username;
            userStatus.style.display = 'block';
            viewedLink.style.display = 'block';
            displayHistory();
        } else {
            viewedLink.style.display = 'none';
        }
    }

    function logout() {
        localStorage.removeItem('currentUser');
        currentUser = null;
        userStatus.style.display = 'none';
        viewedLink.style.display = 'none';
    }

    function displayHistory() {
        searchHistory.innerHTML = '';
        currentUser.searchHistory.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            searchHistory.appendChild(li);
        });
    }

    function handleSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            currentUser.searchHistory.unshift(searchTerm);
            if (currentUser.searchHistory.length > 10) {
                currentUser.searchHistory.pop();
            }
            displayHistory();
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
    }

    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });

    logoutButton.addEventListener('click', logout);

    checkLogin();
});
