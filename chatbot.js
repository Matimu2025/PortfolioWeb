// Chatbot for my Portfolio
document.addEventListener('DOMContentLoaded', function() {
    // Create chatbot UI elements
    const chatbotContainer = document.createElement('div');
    chatbotContainer.classList.add('chatbot-container');
    
    const chatbotToggle = document.createElement('div');
    chatbotToggle.classList.add('chatbot-toggle');
    // chatbotToggle.innerHTML = '<ion-icon name="chatbubble-ellipses"></ion-icon>';
    chatbotToggle.innerHTML = '🤖';


    
    const chatbotWindow = document.createElement('div');
    chatbotWindow.classList.add('chatbot-window');
    chatbotWindow.classList.add('hidden');
    
    const chatbotHeader = document.createElement('div');
    chatbotHeader.classList.add('chatbot-header');
    chatbotHeader.innerHTML = `
        <div class="chatbot-title">
            <ion-icon name="person-circle-outline"></ion-icon>
            <h3>Tech Portfolio Bot</h3>
        </div>
        <div class="chatbot-close">
            <ion-icon name="close-outline"></ion-icon>
        </div>
    `;
    
    const chatbotBody = document.createElement('div');
    chatbotBody.classList.add('chatbot-body');
    
    const chatbotMessages = document.createElement('div');
    chatbotMessages.classList.add('chatbot-messages');
    
    const chatbotInput = document.createElement('div');
    chatbotInput.classList.add('chatbot-input');
    chatbotInput.innerHTML = `
        <input type="text" placeholder="Type a message..." id="chatbot-input-field">
        <button id="chatbot-send">
            <ion-icon name="send-outline"></ion-icon>
        </button>
    `;
    // Adding CSS styles for the chatbot
    /* Create a new <style> element dynamically in JavaScript */
const style = document.createElement('style');
    /* Define the CSS styles inside the style element */
style.textContent = `
    /* Container for the chatbot, positioned at the bottom right corner */
    .chatbot-container {
        position: fixed;
        bottom: 30px;
        right: 30px;
        z-index: 1000;
        font-family: 'Poppins', sans-serif;
    }

        /* Button to toggle the chatbot window */
    .chatbot-toggle {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: linear-gradient(to right, #00fffc, #ff16d1);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
    }

        /* Hover effect for the chatbot toggle button */
    .chatbot-toggle:hover {
        transform: scale(1.1);
        box-shadow: 0 15px 30px rgba(0,0,0,0.4);
    }

        /* Icon inside the chatbot toggle button */

    .chatbot-toggle ion-icon {
        font-size: 30px;
        color: white;
    }

        /* Main chatbot window styling */

    .chatbot-window {
        position: absolute;
        bottom: 80px;
        right: 0;
        width: 350px;
        height: 500px;
        background: rgba(15, 12, 41, 0.95);
        border-radius: 15px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        transition: all 0.3s ease;
        border: 1px solid rgba(0, 255, 252, 0.3);
    }

        /* Hide chatbot window when not active */

    .chatbot-window.hidden {
        opacity: 0;
        visibility: hidden;
        transform: scale(0.8) translateY(20px);
    }

        /* Chatbot header section */

    .chatbot-header {
        background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(0, 255, 252, 0.3);
    }

        /* Title and icon in the chatbot header */

    .chatbot-title {
        display: flex;
        align-items: center;
        gap: 10px;
        color: white;
    }
    
    .chatbot-title ion-icon {
        font-size: 24px;
        color: #00fffc;
    }
    
    .chatbot-title h3 {
        margin: 0;
        font-size: 16px;
    }

     /* Close button for the chatbot */

    .chatbot-close {
        cursor: pointer;
    }
    
    .chatbot-close ion-icon {
        font-size: 24px;
        color: white;
        transition: color 0.3s ease;
    }
    
    .chatbot-close ion-icon:hover {
        color: #ff16d1;
    }

     /* Main chat area where messages appear */

    .chatbot-body {
        flex: 1;
        overflow: hidden;
        position: relative;
    }

    /* Styling for chatbot messages */

    .chatbot-messages {
        height: 100%;
        overflow-y: auto;
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .chatbot-message {
        max-width: 80%;
        padding: 10px 15px;
        border-radius: 15px;
        margin-bottom: 5px;
        word-wrap: break-word;
        animation: fadeIn 0.3s ease;
    }

        /* Message animation */

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

        /* Styling for bot messages */

    .chatbot-message.bot {
        background: rgba(48, 43, 99, 0.7);
        border-left: 3px solid #00fffc;
        align-self: flex-start;
        border-radius: 15px 15px 15px 0;
        color: white;
    }

        /* Styling for user messages */

    .chatbot-message.user {
        background: linear-gradient(to right, rgba(0, 255, 252, 0.2), rgba(255, 22, 209, 0.2));
        border-right: 3px solid #ff16d1;
        align-self: flex-end;
        border-radius: 15px 15px 0 15px;
        color: white;
    }

        /* Input area for user messages */

    .chatbot-input {
       padding: 12px 10px; 
        background: rgba(15, 12, 41, 0.9);
        display: flex;
        gap: 5px;
        border-top: 1px solid rgba(0, 255, 252, 0.3);
    }
    
    .chatbot-input input {
        flex: 1;
        min-width: 0;
        background: rgba(255, 255, 255, 0.1);
        border: none;
        padding: 10px 15px;
        border-radius: 20px;
        color: white;
        font-family: 'Poppins', sans-serif;
    }
    
    .chatbot-input input::placeholder {
        color: rgba(255, 255, 255, 0.6);
    }
    
    .chatbot-input input:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(0, 255, 252, 0.5);
    }
    
    .chatbot-input button {
        background: linear-gradient(to right, #00fffc, #ff16d1);
        color: white;
        border: none;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: transform 0.3s ease;
        min-width: 36px; /* Ensure minimum width */
            flex-shrink: 0; /* Prevent button from shrinking */


    }
    
    .chatbot-input button:hover {
        transform: scale(1.1);
    }
    
    /* Scrollbar styling */
    .chatbot-messages::-webkit-scrollbar {
        width: 5px;
    }
    
    .chatbot-messages::-webkit-scrollbar-track {
        background: rgba(15, 12, 41, 0.5);
    }

    
    .chatbot-messages::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #00fffc, #ff16d1);
        border-radius: 10px;
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
        .chatbot-window {
            width: 260px;
            max-width: 85vw;
            height: 450px;
            bottom: 75px;
            right: 0;
        }
    }
    
    /* Additional mobile responsiveness */
    @media (max-width: 480px) {
        .chatbot-container {
            bottom: 20px;
            right: 20px;
        }
        
        .chatbot-toggle {
            width: 50px;
            height: 50px;
        }
        
        .chatbot-toggle ion-icon {
            font-size: 24px;
        }
        
        .chatbot-window {
            width: 280px;
            height: 400px;
            bottom: 70px;
            right: 0;
            
            /* Ensure the chatbot stays within screen */
            max-width: 90vw; /* 90% of viewport width */
            max-height: 70vh; /* 70% of viewport height */
        }
        
        .chatbot-header {
            padding: 10px;
        }
        
        .chatbot-title h3 {
            font-size: 14px;
        }
        
        .chatbot-messages {
            padding: 10px;
        }
        
        .chatbot-input {
            padding: 8px 5px; 
        }
        
        .chatbot-input input {
            padding: 8px 10px;
            font-size: 14px;
        }
        
        .chatbot-input button {
            min-width: 32px;
                    width: 32px;

            height: 32px;
            flex-shrink: 0; /* Prevent the button from shrinking */
        }
    }
        /* Adjust chatbot window for larger screens */
@media (min-width: 769px) {
    .chatbot-container {
        bottom: 30px;
        right: 30px;
    }

    .chatbot-window {
        width: 350px;
        max-width: 90vw; /* Ensure it doesn't overflow */
        height: 500px;
        max-height: 80vh; /* Limit height */
        position: absolute;
        bottom: 80px;
        right: 0;
        
        /* Ensure content is contained */
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    .chatbot-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
    }

    .chatbot-title {
        flex-grow: 1;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .chatbot-close {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10px; /* Add some spacing */
    }

    .chatbot-close ion-icon {
        font-size: 24px;
        color: white;
        cursor: pointer;
        transition: color 0.3s ease;
        min-width: 24px;
        min-height: 24px;
    }
}

/* Ensure flexibility for very large screens */
@media (min-width: 1200px) {
    .chatbot-window {
        width: 400px;
        height: 550px;
    }
}
    
    /* Extra small devices */
    @media (max-width: 360px) {
        .chatbot-window {
            width: 260px;
            max-width: 85vw;
            right: 0;
        }
        
        .chatbot-input {
            padding: 8px;
        }
        
        .chatbot-message {
            padding: 8px 12px;
            font-size: 13px;
        }
    }
`;
    
    // Append elements to create the chatbot structure
    chatbotBody.appendChild(chatbotMessages);
    chatbotWindow.appendChild(chatbotHeader);
    chatbotWindow.appendChild(chatbotBody);
    chatbotWindow.appendChild(chatbotInput);
    chatbotContainer.appendChild(chatbotToggle);
    chatbotContainer.appendChild(chatbotWindow);
    document.body.appendChild(chatbotContainer);
    
   
    document.head.appendChild(style);
    
    // Chatbot functionality
    let isOpen = false;
    
    // Predefined responses
    const responses = {
        howAreYou: [
            "I'm doing great, thanks for asking! How can I help you learn more about Matimu?",
            "I'm functioning perfectly! Would you like to know about Matimu's skills or experience?"
        ],
        
        okay: [
            "Great! What else would you like to know about Matimu?",
            "Excellent! Is there anything specific about Matimu's work or education you're curious about?"
        ],
        


        goodbye: [
            "Thanks for chatting! Feel free to return if you have more questions about Matimu.",
            "Goodbye! Hope you enjoyed learning about Matimu. Have a great day!",
            "Bye for now! Don't hesitate to reach out if you need more information about Matimu."
        ],
        greetings: [
            "Hi there! I'm Matimu's virtual assistant. How can I help you today?",
            "Hello! Welcome to Matimu's portfolio. What would you like to know?",
            "Hey! Thanks for visiting Matimu's site. What can I assist you with?"
        ],
        about: [
            "Matimu is a professional Software Developer who loves solving complex problems with simple, effective solutions. She enjoys writing clean and efficient code while always learning and improving.",
            "Matimu is passionate about technology and has turned this passion into a career of building useful and engaging digital experiences."
        ],
        experience: [
            "Matimu has worked as a Software Developer at CAPACITI (Feb 2025 - Present), Fullstack Developer at BIZMOD (Feb 2024 - Jan 2025), and Desktop Support at VUT (Aug 2023 - Jan 2024).",
            "Matimu has experience in both frontend and backend development, with work experience at companies like BIZMOD and CAPACITI."
        ],
        skills: [
            "Matimu's technical skills include SQL, Java, React, HTML, CSS, JavaScript, and Git.",
            "Matimu is proficient in SQL, Java, React, HTML, CSS, JavaScript, and Git."
        ],
        skilled: [
            "Besides technical skills, Matimu excels in teamwork, presentation, problem-solving, communication, and adaptability as her soft skills."
        ],
        education: [
            "Matimu holds a Postgraduate Diploma in IT (Cum Laude, 2024) and an Advanced Diploma in IT (Cum Laude, 2023) from Vaal University of Technology.",
            "Matimu is well-educated with a Postgraduate Diploma and Advanced Diploma in IT, both with Cum Laude distinctions from VUT."
        ],
        projects: [
            "Some of Matimu's projects include Vakahina Fashion (a website showcasing Tsonga traditional attires) and a Real-Time Chat Application.",
            "You can check out Matimu's projects section to see her work on Vakahina Fashion and a Real-Time Chat Application."
        ],
        contact: [
            "You can contact Matimu via email at matimubaloyi49@gmail.com, or by filling out the contact form on this website.",
            "Feel free to reach out to Matimu through the contact form on this site, or directly via email or phone."
        ],
yes: [
    "Great! What would you like to explore next — skills, experience, projects, or education?",
    "Awesome! Tell me what you'd like to know about Matimu's work or background.",
    "Perfect! Which area can I help you with — skills, experience, contact info, or projects?"
],

no: [
    "No problem! Let me know if there’s something else you want to explore.",
    "Alright! If you change your mind, I’m here to help.",
    "Okay! Tell me what you'd like instead — skills, projects, experience, or education?"
],

        default: [
            "I'm not sure I understand. Could you please rephrase your question?",
            "I don't have information about that yet. Would you like to know about Matimu's skills, experience, or projects instead?",
            "I'm still learning! Can you ask me something about Matimu's work, education, or how to contact her?"
        ]
    };
    
    // Function to add a message to the chat
    function addMessage(text, sender) {
        const message = document.createElement('div');
        message.classList.add('chatbot-message');
        message.classList.add(sender);
        message.textContent = text;
        chatbotMessages.appendChild(message);
        
        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    // Function to generate bot response
    function getBotResponse(input) {
        input = input.toLowerCase();
        
        // Check for keywords and return appropriate responses

        // Check for specific combination patterns first (more specific conditions)
    if (input.includes('soft skills') || input.includes('social skills') || input.includes('personal skills') || 
    (input.includes('skill') && input.includes('soft'))) {
    return getRandomResponse('skilled');
} else if (input.includes('skills') || input.includes('abilities') || input.includes('technologies')) {
    return getRandomResponse('skills');
} else if (input.includes('experience') || input.includes('work') || input.includes('job')) {
    return getRandomResponse('experience');
} else if (input.includes('projects') || input.includes('portfolio') || input.includes('collection') || input.includes('project')) {
    return getRandomResponse('projects');
} else if (input.includes('education') || input.includes('study') || input.includes('qualification') || input.includes('degree')) {
    return getRandomResponse('education');
} else if (input.includes('contact') || input.includes('reach') || input.includes('email') || input.includes('phone')  || input.includes('get in touch') || input.includes('connect') || input.includes('message') || input.includes('call') || input.includes('talk to') || input.includes('communicate') || input.includes('contact me')) {
    return getRandomResponse('contact');
} 
// Basic conversational patterns
else if (input.includes('hi') || input.includes('hello') || input.includes('hey') || input.includes('hy')) {
    return getRandomResponse('greetings');
} else if (input.includes('how are you') || input.includes('how you doing') || input.includes('how is it going')) {
    return getRandomResponse('howAreYou');
} else if (input === 'ok' || input === 'okay' || input === 'cool' || input === 'alright' || input === 'great') 
    
    
    
    {
    return getRandomResponse('okay');



} else if (input === 'yes' || input === 'yeah' || input === 'yep' || input === 'yas') {
    return getRandomResponse('yes');
    

    } else if (input === 'no' || input === 'nope' || input === 'nah' || input === 'never') {
    return getRandomResponse('no');
    
} else if (input.includes('bye') || input.includes('goodbye') || input.includes('see you') || input.includes('farewell')) {
    return getRandomResponse('goodbye');
} 



// Make this the last check since it's very broad
else if (input.includes('about') || input.includes('matimu') || input.includes('what do you do') || input.includes('who') || input.includes('matimu baloyi')) {
    return getRandomResponse('about');
} else {
    return getRandomResponse('default');
}
}
    
    // Get random response from a category
    function getRandomResponse(category) {
        const responseArray = responses[category];
        return responseArray[Math.floor(Math.random() * responseArray.length)];
    }
    
    // Toggle chatbot visibility
    chatbotToggle.addEventListener('click', function() {
        isOpen = true;
        chatbotWindow.classList.remove('hidden');
        
        // Add welcome message if it's the first time opening
        if (chatbotMessages.children.length === 0) {
            setTimeout(() => {
                addMessage("Hello! I’m here to help you explore Matimu’s skills, projects, and experience.", 'bot');
            }, 300);
        }
    });
    
    // Close chatbot
    document.querySelector('.chatbot-close').addEventListener('click', function() {
        isOpen = false;
        chatbotWindow.classList.add('hidden');
    });
    
    // Send message functionality
    document.getElementById('chatbot-send').addEventListener('click', sendMessage);
    document.getElementById('chatbot-input-field').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    function sendMessage() {
        const inputField = document.getElementById('chatbot-input-field');
        const userMessage = inputField.value.trim();
        
        if (userMessage !== '') {
            // Add user message to chat
            addMessage(userMessage, 'user');
            inputField.value = '';
            
            // Simulate typing delay then respond
            setTimeout(() => {
                const botResponse = getBotResponse(userMessage);
                addMessage(botResponse, 'bot');
            }, 500 + Math.random() * 500); // Random delay between 500-1000ms
        }
    }
});
