let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
 showSlides(slideIndex = n);
}

function showSlides(n) {
 let i;
 let slides = document.getElementsByClassName("mySlides");
 let dots = document.getElementsByClassName("dot");
 if (n > slides.length) {slideIndex = 1}
 if (n < 1) {slideIndex = slides.length}
 for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
 }
 for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
 }
 slides[slideIndex-1].style.display = "block";
 dots[slideIndex-1].className += " active";
}

var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x - 250 +"px"
    blur.style.top=dets.y  -200 +"px"
})


var h4all =document.querySelectorAll("#nav h4")
console.log(h4all)

h4all.forEach(function(elem){
    elem.addEventListener("mouseenterr",function(){
        crsr.style.scale=2
        crsr.style.border ="1px solid #fff"
    })
})




const slider = document.getElementById('mySlider');
const output = document.getElementById('sliderValue');

let direction = 1;

function moveSlider() {
    let value = parseInt(slider.value);
    value += direction;
    if (value >= 100 || value <= 0) {
        direction *= -1; // Reverse direction
    }
    slider.value = value;
    output.textContent = value;
}



let slideindex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateSlider();
}

function updateSlider() {
  const slideWidth = slides[0].clientWidth;
  const offset = -slideIndex * slideWidth;
  document.querySelector('.slider').style.transform = `translateX(${offset}px)`;
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)



document.addEventListener('mousemove', function (e) {
    var cursor = document.getElementById('customCursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});


    document.addEventListener('DOMContentLoaded', function () {
        const chatToggleBtn = document.getElementById('chatToggle');
        const chatBox = document.getElementById('chatBox');
        const closeChatBtn = document.getElementById('closeChat');
        const userInput = document.getElementById('userInput');
        const sendMessageBtn = document.getElementById('sendMessage');
        const chatMessages = document.getElementById('chatMessages');

        // Toggle chat box visibility
        chatToggleBtn.addEventListener('click', function () {
            chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
        });

        // Close chat box
        closeChatBtn.addEventListener('click', function () {
            chatBox.style.display = 'none';
        });

        // Send message
        sendMessageBtn.addEventListener('click', function () {
            const userMessage = userInput.value.trim();

            if (userMessage !== '') {
                appendMessage('user', userMessage);
                // Simulate bot response (you can replace this with actual backend integration)
                setTimeout(function () {
                    const bottResponse = "Welcome to Portal !!";
                    const botResponse = "Hello!  How can I assist you?";
                    appendMessage('bot', botResponse, bottResponse);
                }, 500);
                userInput.value = '';
            }
        });

        // Function to append message to chat
        function appendMessage(sender, message) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', sender);
            messageElement.textContent = message;
            chatMessages.appendChild(messageElement);

            // Scroll to bottom of chat messages
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });



  // Function to display the popup after 5 minutes
  function showPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
  }

    function slideranimi(){
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: true,
              },
          });
        }
        slideranimi()
        
        
        
        var tl=gsap.timeline()
        
        tl.from("#loader h3",{
        x:40,
        opacity:0,
        duration:0.6,
        stagger:0.1
        })
        
        tl.to("#loader h3",{
            opacity:0,
            x:-20,
            duration:0.1,
            stagger:0
        
        
        
        
        })
        
        tl.to("#loader ",{
         opacity:0
        
        })
        
        
        tl.to("#loader ",{
        dispalay:none
            
           })
         

           function filterServices() {
            let input = document.getElementById('search-bar');
            let filter = input.value.toLowerCase();
            let ul = document.getElementById('service-list');
            let li = ul.getElementsByTagName('li');
        
            for (let i = 0; i < li.length; i++) {
                let txtValue = li[i].textContent || li[i].innerText;
                if (txtValue.toLowerCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        }
    
        function filterServices() {
            var input, filter, ul, li, i, txtValue;
            input = document.getElementById('search-bar');
            filter = input.value.toUpperCase();
            ul = document.getElementById('service-list');
            li = ul.getElementsByTagName('li');
            for (i = 0; i < li.length; i++) {
                txtValue = li[i].textContent || li[i].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
            if (filter.length > 0) {
                ul.style.display = "block";
            } else {
                ul.style.display = "none";
            }
        }

        function toggleChat() {
            var chatBox = document.getElementById('chat-box');
            if (chatBox.style.display === "none" || chatBox.style.display === "") {
                chatBox.style.display = "block";
            } else {
                chatBox.style.display = "none";
            }
        }

        document.addEventListener('DOMContentLoaded', function () {
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 1,
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        });
        function toggleChatbot() {
            const chatbot = document.getElementById('chatbot');
            chatbot.classList.toggle('hidden');
        }

        async function sendMessage() {
            const userInput = document.getElementById('chatbot-input').value;
            if (userInput.trim() === '') return;

            appendMessage(userInput, 'user');
            document.getElementById('chatbot-input').value = '';

            const response = await getBotResponse(userInput);
            appendMessage(response, 'bot');
        }

        function appendMessage(message, sender) {
            const chatBox = document.getElementById('chatbot-messages');
            const messageElement = document.createElement('div');
            messageElement.classList.add('chatbot-message', sender);
            messageElement.innerHTML = `<span>${message}</span>`;
            chatBox.appendChild(messageElement);
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        async function getBotResponse(userInput) {
            const response = await fetch('YOUR_BACKEND_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userInput }),
            });

            const data = await response.json();
            return data.reply;
        }