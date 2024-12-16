/*Dynamically loading header*/

fetch('/assets/header.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load header.html');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('headercontainer').innerHTML = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });

/*Dynamically loading header*/

fetch('/assets/footer.html')
.then(response => {
    if (!response.ok) {
        throw new Error('Failed to load footer.html');
    }
    return response.text();
})
.then(data => {
    document.getElementById('footercontainer').innerHTML = data;
})
.catch(error => {
    console.error('Error:', error);
});


fetch('recipelist.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load recipelist.html');
        }
        return response.text();
    })
    .then(data => {
        // Create a temporary container to parse the fetched HTML content
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = data;

        // Select elements with data-tag="Western"
        const westernElements = tempContainer.querySelectorAll('[data-tag="Western"]');

        // Inject only the selected elements into the WesternContainer
        const westernContainer = document.getElementById('WesternContainer');
        westernElements.forEach(element => {
            westernContainer.appendChild(element);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });

    fetch('recipelist.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load recipelist.html');
        }
        return response.text();
    })
    .then(data => {
        // Create a temporary container to parse the fetched HTML content
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = data;

        // Select elements with data-tag="Western"
        const westernElements = tempContainer.querySelectorAll('[data-tag="Eastern"]');

        // Inject only the selected elements into the WesternContainer
        const westernContainer = document.getElementById('EasternContainer');
        westernElements.forEach(element => {
            westernContainer.appendChild(element);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });

    fetch('recipelist.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load recipelist.html');
        }
        return response.text();
    })
    .then(data => {
        // Create a temporary container to parse the fetched HTML content
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = data;

        // Select elements with data-tag="Western"
        const westernElements = tempContainer.querySelectorAll('[data-tag="Drinks"]');

        // Inject only the selected elements into the WesternContainer
        const westernContainer = document.getElementById('DrinkContainer');
        westernElements.forEach(element => {
            westernContainer.appendChild(element);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });

    fetch('recipelist.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load recipelist.html');
        }
        return response.text();
    })
    .then(data => {
        // Create a temporary container to parse the fetched HTML content
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = data;

        // Select elements with data-tag="Western"
        const westernElements = tempContainer.querySelectorAll('[data-tag="Eastern"]');

        // Inject only the selected elements into the WesternContainer
        const westernContainer = document.getElementById('EasternContainer');
        westernElements.forEach(element => {
            westernContainer.appendChild(element);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });