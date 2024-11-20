$(document).ready(function() {

    //PRODUCT
    $('#theme-toggle-btn').on('click', function() {
        $('body').toggleClass('theme-dark theme-light');
    });
    $('#womenBtn').on('click', function() {
        $('#content-wrapper').css('background-color', '#FFC0CB')('text-color', '#FFFFF');

    });

    $('#menBtn').on('click', function() {
        $('#content-wrapper').css('background-color', '#ADD8E6');
    });

    $('#childrenBtn').on('click', function() {
        $('#content-wrapper').css('background-color', '#f0f8d0');
    });

    const modal = $('#purchaseForm');
    const closeBtn = $('.close-btn');


    $('.buy-now').on('click', function() {
        modal.show();
    });


    closeBtn.on('click', function() {
        modal.hide();
    });

    $(window).on('click', function(event) {
        if ($(event.target).is(modal)) {
            modal.hide();
        }
    });


    const animatedProduct = document.getElementById("animated-product");


    animatedProduct.addEventListener("mouseover", function() {
        animatedProduct.style.transform = "scale(1.1)";
    });


    animatedProduct.addEventListener("mouseout", function() {
        animatedProduct.style.transform = "scale(1)";
    });


    // Wait for the DOM to fully load before attaching event listeners
    document.addEventListener("DOMContentLoaded", function() {

        // Get the buttons by their IDs
        const womenBtn = document.getElementById("womenBtn");
        const menBtn = document.getElementById("menBtn");
        const childrenBtn = document.getElementById("childrenBtn");

        // Get the body to change background color
        const body = document.body;

        // Add event listeners for the buttons
        womenBtn.addEventListener("click", function() {
            changeCategory("women");
        });
        menBtn.addEventListener("click", function() {
            changeCategory("men");
        });
        childrenBtn.addEventListener("click", function() {
            changeCategory("children");
        });

        // Function to change the background and show products based on category
        function changeCategory(category) {
            // Switch statement for different categories
            switch (category) {
                case "women":
                    body.style.backgroundColor = "#f8e4e1"; // Light pink for Women
                    toggleProductDisplay("women");
                    break;
                case "men":
                    body.style.backgroundColor = "#e0f7fa"; // Light blue for Men
                    toggleProductDisplay("men");
                    break;
                case "children":
                    body.style.backgroundColor = "#c8e6c9"; // Light green for Children
                    toggleProductDisplay("children");
                    break;
                default:
                    body.style.backgroundColor = "#ffffff"; // Default white
                    break;
            }
        }

        // Function to show products of the selected category and hide others
        function toggleProductDisplay(category) {
            const products = document.querySelectorAll(".product-item");

            products.forEach(function(product) {
                if (product.classList.contains(category)) {
                    product.style.display = "inline-block"; // Show the selected category
                } else {
                    product.style.display = "none"; // Hide other categories
                }
            });
        }
    });
    $(document).ready(function() {
        // Функция для применения сохранённых настроек (тема, фон и цвет footer)
        function applySavedSettings() {
            const savedTheme = localStorage.getItem('theme');
            const savedBackgroundImage = localStorage.getItem('backgroundImage');

            if (savedBackgroundImage) {
                $('body').css('background-image', `url('${savedBackgroundImage}')`);
            }
        }

        // Применяем сохранённые настройки при загрузке страницы
        applySavedSettings();

        // Переключение темы (день/ночь) и фона
        $('#theme-toggle-btn').on('click', function() {
            $('body, .navbar, .card').toggleClass('bg-dark text-white');
            const isDark = $('body').hasClass('bg-dark');

            // Сохраняем тему в localStorage
            localStorage.setItem('theme', isDark ? 'dark' : 'light');

            // Меняем фоновую картинку в зависимости от темы и сохраняем в localStorage
            const newBackgroundImage = isDark ?
                'https://images.wallpaperscraft.com/image/single/texture_purple_surface_143768_3840x2400.jpg' :
                'https://instapik.ru/wp-content/uploads/2021/03/fon-dlya-fotoshopa-rozovyy-mramor.jpg';

            $('body').css('background-image', `url('${newBackgroundImage}')`);
            localStorage.setItem('backgroundImage', newBackgroundImage);

           
        });
    });


-
    //END PRODUCT
    //SHIPPING 
   
       
    //END SHIPPING

    //CONTACTS
    // Функция для отображения текущего времени и даты на сайте
    function updateDateTime() {
        const now = new Date();
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };
        const formattedDateTime = now.toLocaleString('en-US', options);
        document.getElementById('currentDateTime').textContent = formattedDateTime;
    }

    updateDateTime();
    setInterval(updateDateTime, 60000);

    //END CONTACTS





    //HOME 


    // Purchase Form and Modal Handling
    $('.buy-now').on('click', function(e) {
        e.preventDefault();
        $('#purchaseForm').show();
    });

    $('.close-btn').on('click', function() {
        $('#purchaseForm').hide();
    });

    $('#purchaseModalForm').on('submit', function(e) {
        e.preventDefault();
        if (!this.checkValidity()) {
            alert('Please fill out all fields correctly.');
            return;
        }
        alert('Purchase confirmed!');
        $('#purchaseForm').hide();
        this.reset();
    });

    // FAQ Toggle
    $('.faq-header').on('click', function() {
        $(this).next('.faq-content').slideToggle();
    });

    // Special Offer Message Update
    $('#update-message-btn').on('click', function() {
        $('#offer-message').text("Today's special offer: Get 20% off on your first purchase!");
        $(this).prop('disabled', true).text("Offer Updated");
    });

    // Apply Saved Settings on Page Load
   
    //END HOME






    const button = document.getElementById('update-message-btn');
    const welcomeMessage = document.getElementById('welcome-message');
    const offerMessage = document.getElementById('offer-message');
    button.addEventListener('click', function() {
        welcomeMessage.textContent = 'Get ready for amazing discounts!';
        offerMessage.innerHTML = '🎉 <strong>Today only:</strong> Enjoy 50% off on all clothing items!';
        button.innerText = 'Offer Applied!';
    });


    document.addEventListener("DOMContentLoaded", function() {

        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            document.body.classList.add(savedTheme);
        }


        document.getElementById("theme-toggle-btn").addEventListener("click", function() {
            if (document.body.classList.contains("theme-dark")) {
                document.body.classList.remove("theme-dark");
                document.body.classList.add("theme-light");
                localStorage.setItem("theme", "theme-light");
            } else {
                document.body.classList.remove("theme-light");
                document.body.classList.add("theme-dark");
                localStorage.setItem("theme", "theme-dark");
            }


            document.querySelector('.navbar').classList.toggle('night-theme');
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => card.classList.toggle('night-theme'));
        });
    });

    document.addEventListener("keydown", function(event) {
        const inputs = document.querySelectorAll("#purchaseModalForm input");
        let currentIndex = Array.from(inputs).findIndex(input => input === document.activeElement);

        if (event.key === "ArrowDown") {
            event.preventDefault();
            const nextIndex = (currentIndex + 1) % inputs.length;
            inputs[nextIndex].focus();
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            const previousIndex = (currentIndex - 1 + inputs.length) % inputs.length;
            inputs[previousIndex].focus();
        }
    });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);

        fetch('YOUR_ENDPOINT_URL', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                displayMessage(data.message);
            })
            .catch(error => {
                console.error('Error:', error);
                displayMessage('There was an error submitting the form.');
            });
    });

    function displayMessage(message) {
        const responseMessageDiv = document.getElementById('response-message');
        responseMessageDiv.textContent = message;
        responseMessageDiv.classList.remove('text-success', 'text-danger');


        if (message.includes('success')) {
            responseMessageDiv.classList.add('text-success');
        } else {
            responseMessageDiv.classList.add('text-danger');
        }
    }
    const showTimeButton = document.getElementById('timeButton');
    const timeDisplay = document.getElementById('timeDisplay');

    showTimeButton.addEventListener('click', function() {
        const currentTime = new Date().toLocaleTimeString();
        timeDisplay.textContent = `Current Time: ${currentTime}`;
    });





});






document.addEventListener("DOMContentLoaded", function() {

    // Get the buttons by their IDs
    const womenBtn = document.getElementById("womenBtn");
    const menBtn = document.getElementById("menBtn");
    const childrenBtn = document.getElementById("childrenBtn");

    // Get the body to change background color
    const body = document.body;

    // Add event listeners for the buttons
    womenBtn.addEventListener("click", function() {
        changeCategory("women");
    });
    menBtn.addEventListener("click", function() {
        changeCategory("men");
    });
    childrenBtn.addEventListener("click", function() {
        changeCategory("children");
    });

    // Function to change the background and show products based on category
    function changeCategory(category) {
        // Switch statement for different categories
        switch (category) {
            case "women":
                body.style.backgroundColor = "#f8e4e1"; // Light pink for Women
                toggleProductDisplay("women");
                break;
            case "men":
                body.style.backgroundColor = "#e0f7fa"; // Light blue for Men
                toggleProductDisplay("men");
                break;
            case "children":
                body.style.backgroundColor = "#c8e6c9"; // Light green for Children
                toggleProductDisplay("children");
                break;
            default:
                body.style.backgroundColor = "#ffffff"; // Default white
                break;
        }
    }

    // Function to show products of the selected category and hide others
    function toggleProductDisplay(category) {
        const products = document.querySelectorAll(".product-item");

        products.forEach(function(product) {
            if (product.classList.contains(category)) {
                product.style.display = "inline-block"; // Show the selected category
            } else {
                product.style.display = "none"; // Hide other categories
            }
        });
    }
});






$('#timeButton').on('click', function() {
    const currentTime = new Date().toLocaleTimeString();
    $('#timeDisplay').text(`Current time: ${currentTime}`);
});


$(document).ready(function() {
    // Функция для применения сохранённых настроек (тема, фон и цвет footer)
    function applySavedSettings() {
        const savedTheme = localStorage.getItem('theme');
        const savedFooterColor = localStorage.getItem('footerColor');
        const savedBackgroundImage = localStorage.getItem('backgroundImage');

        if (savedTheme === 'dark') {
            $('body, .navbar, .card').addClass('bg-dark text-white');
            $('#theme-toggle-btn').text('Switch to Day Theme');
            $('#footer-container').css('background-color', savedFooterColor || '#8f5b8a');
        } else {
            $('#footer-container').css('background-color', savedFooterColor || '#ffffff');
        }

        // Устанавливаем сохранённое изображение фона, если оно есть
        if (savedBackgroundImage) {
            $('body').css('background-image', `url('${savedBackgroundImage}')`);
        }
    }

    // Применяем сохранённые настройки при загрузке страницы
    applySavedSettings();

    // Переключение темы (день/ночь) и фона
    $('#theme-toggle-btn').on('click', function() {
        $('body, .navbar, .card').toggleClass('bg-dark text-white');
        const isDark = $('body').hasClass('bg-dark');

        // Сохраняем тему в localStorage
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        // Меняем фоновую картинку в зависимости от темы и сохраняем в localStorage
        const newBackgroundImage = isDark ?
            'https://images.wallpaperscraft.com/image/single/texture_purple_surface_143768_3840x2400.jpg' :
            'https://instapik.ru/wp-content/uploads/2021/03/fon-dlya-fotoshopa-rozovyy-mramor.jpg';

        $('body').css('background-image', `url('${newBackgroundImage}')`);
        localStorage.setItem('backgroundImage', newBackgroundImage);

        // Меняем цвет фона footer на серый при тёмной теме и на розовый при светлой теме
        const newFooterColor = isDark ? '#5c3a5d' : '#ffffff';
        $('#footer-container').css('background-color', newFooterColor);
        localStorage.setItem('footerColor', newFooterColor);
    });
});

// Показ текущего времени
$('#timeButton').on('click', function() {
    const currentTime = new Date().toLocaleTimeString();
    $('#timeDisplay').text(`Current time: ${currentTime}`);
});

// Обновление сообщения специального предложения
$('#update-message-btn').on('click', function() {
    $('#offer-message').text("Today's special offer: Get 20% off on your first purchase!");
    $(this).prop('disabled', true).text("Offer Updated");
});

$(document).ready(function() {
    // Функция для применения сохранённых настроек (тема, фон и цвет footer)
    function applySavedSettings() {
        const savedTheme = localStorage.getItem('theme');
        const savedFooterColor = localStorage.getItem('footerColor');
        const savedBackgroundImage = localStorage.getItem('backgroundImage');

        if (savedTheme === 'dark') {
            $('body, .navbar, .card').addClass('bg-dark text-white');
            $('#theme-toggle-btn').text('Switch to Day Theme');
            $('#footer-container').css('background-color', savedFooterColor || '#5c3a5d');
        } else {
            $('#footer-container').css('background-color', savedFooterColor || '#ffffff');
        }

        // Устанавливаем сохранённое изображение фона, если оно есть
        if (savedBackgroundImage) {
            $('body').css('background-image', `url('${savedBackgroundImage}')`);
        }
    }

    // Применяем сохранённые настройки при загрузке страницы
    applySavedSettings();

    // Переключение темы (день/ночь) и фона
    $('#theme-toggle-btn').on('click', function() {
        $('body, .navbar, .card').toggleClass('bg-dark text-white');
        const isDark = $('body').hasClass('bg-dark');

        // Сохраняем тему в localStorage
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        // Меняем фоновую картинку в зависимости от темы и сохраняем в localStorage
        const newBackgroundImage = isDark ?
            'https://images.wallpaperscraft.com/image/single/texture_purple_surface_143768_3840x2400.jpg' :
            'https://instapik.ru/wp-content/uploads/2021/03/fon-dlya-fotoshopa-rozovyy-mramor.jpg';

        $('body').css('background-image', `url('${newBackgroundImage}')`);
        localStorage.setItem('backgroundImage', newBackgroundImage);

        // Меняем цвет фона footer на серый при тёмной теме и на розовый при светлой теме
        const newFooterColor = isDark ? '#5c3a5d' : '#ffffff';
        $('#footer-container').css('background-color', newFooterColor);
        localStorage.setItem('footerColor', newFooterColor);
    });
});

const musicMessage = document.getElementById("update-message-btn");
const music = document.getElementById("music");

musicMessage.addEventListener("click", function() {
    if (music.paused) {
        music.play(); // Play the music if it’s paused
    } else {
        music.pause(); // Pause the music if it’s playing
       
    }
});



$('.faq-header').on('click', function() {
    $(this).next('.faq-content').slideToggle();
});


//день/ночь
$('#theme-toggle-btn').on('click', function() {
    $('body, .navbar, .card').toggleClass('bg-dark text-white');
    const isDark = $('body').hasClass('bg-dark');


});

const button = document.getElementById('theme-toggle-btn');
const body = document.body;

// Устанавливаем начальное состояние темы из localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
} else {
    body.classList.add('light-theme');
}

// Обработчик для переключения темы
button.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle-btn');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
    });
});
function searchBooks(query) {
    const apiKey = 'AIzaSyBJl3gp04cpg3Mq-nbjad06nt-kqeFOAjA';  // Replace with your actual API key
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const books = data.items;
            displayBooks(books);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayBooks(books) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');

        const imgUrl = book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/200x300';
        const title = book.volumeInfo.title || 'No title available';
        const authors = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown author';

        bookItem.innerHTML = `
            <img src="${imgUrl}" alt="${title}">
            <div class="book-title">${title}</div>
            <div class="book-author">${authors}</div>
        `;

        bookList.appendChild(bookItem);
    });
}