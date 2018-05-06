
export const positionService = {
    getPositionForUser,
    setPositionForUser
};

function setPositionForUser(username, position) {
    //Assume that there is a default position on user creation
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, position }),
        mode: 'cors'
    };

    return fetch('http://localhost:3000/api/positions/', requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
}

function getPositionForUser(username) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        queryParams: username
    };

    return fetch('http://localhost:3000/api/positions/', requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
            return response.json();
        })
}
