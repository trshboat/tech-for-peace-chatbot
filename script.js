// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// Chatbot functionality
const negativeKeywords = [
    'angry', 'hate', 'fight', 'mad', 'furious', 'rage', 'upset', 'frustrated',
    'annoyed', 'irritated', 'pissed', 'livid', 'enraged', 'hostile', 'aggressive',
    'violence', 'kill', 'destroy', 'hurt', 'pain', 'suffer', 'terrible', 'awful',
    'stupid', 'idiot', 'moron', 'dumb', 'worthless', 'useless', 'pathetic',
    'conflict', 'argument', 'quarrel', 'dispute', 'disagreement', 'tension'
];

const calmingResponses = [
    "I understand you're feeling upset. Let's take a deep breath together. Try counting to 10 slowly and focus on your breathing.",
    "It sounds like you're going through a difficult time. Remember that these feelings are temporary and will pass.",
    "When we feel angry, our body is trying to protect us. Let's channel that energy into something positive. What would make you feel more peaceful right now?",
    "I hear your frustration. Sometimes it helps to step away from the situation for a moment. Would you like to try a quick relaxation technique?",
    "Your feelings are valid, but let's work on expressing them in a way that brings you peace. What outcome would you really like to see?",
    "Conflict can be an opportunity for growth. Instead of fighting, what if we focused on understanding? What do you think the other person might be feeling?",
    "When emotions run high, it's easy to say things we don't mean. Let's pause and think about how we can communicate more kindly.",
    "I can sense your pain. Remember that healing begins with self-compassion. You deserve peace and understanding.",
    "Anger often masks other emotions like hurt or fear. What might be underneath this feeling for you?",
    "Let's transform this negative energy into positive action. What's one small step you could take to improve the situation peacefully?"
];

const peaceTips = [
    "Practice active listening: Give your full attention to the other person without planning your response.",
    "Use 'I' statements instead of 'you' statements to express your feelings without blame.",
    "Take a 5-minute break when discussions become heated. Return when you're both calmer.",
    "Ask open-ended questions to better understand the other person's perspective.",
    "Practice empathy by imagining how the situation feels from their point of view.",
    "Focus on the specific issue at hand rather than bringing up past conflicts.",
    "Use a calm, gentle tone of voice even when discussing difficult topics.",
    "Look for common ground and shared values in your conversations.",
    "Practice deep breathing: Inhale for 4 counts, hold for 4, exhale for 6.",
    "Express appreciation for something positive about the other person before addressing concerns.",
    "Suggest taking a walk together while discussing difficult topics - movement can ease tension.",
    "Use the 24-hour rule: Wait a day before responding to messages that upset you.",
    "Practice forgiveness - not for others, but for your own peace of mind.",
    "Remember that being right isn't always as important as preserving relationships.",
    "Create a peaceful environment for difficult conversations - good lighting, comfortable seating, no distractions."
];

const encouragingResponses = [
    "That's a wonderful way to think about it! Your positive mindset will help you navigate any challenges.",
    "I love your perspective! Approaching situations with kindness and understanding makes such a difference.",
    "You're showing great emotional wisdom. Keep nurturing that peaceful approach to communication.",
    "That sounds like a healthy way to handle things. Your commitment to peace is inspiring!",
    "What a thoughtful response! You're building skills that will serve you well in all your relationships.",
    "I can hear the calm confidence in your message. You're on a great path toward peaceful communication.",
    "Your openness to growth and understanding is beautiful. Keep fostering that peaceful spirit!",
    "That's exactly the kind of mindful thinking that creates positive change. Well done!"
];

function scrollToChat() {
    document.getElementById('chat').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
    
    // Focus on the input after scrolling
    setTimeout(() => {
        document.getElementById('messageInput').focus();
    }, 1000);
}

function detectNegativeKeywords(message) {
    const lowerMessage = message.toLowerCase();
    return negativeKeywords.some(keyword => lowerMessage.includes(keyword));
}

function detectPositiveKeywords(message) {
    const positiveKeywords = [
        'calm', 'peace', 'love', 'kind', 'understanding', 'grateful', 'thankful',
        'appreciate', 'happy', 'joy', 'smile', 'positive', 'hope', 'optimistic',
        'compassion', 'empathy', 'forgive', 'harmony', 'respect', 'gentle'
    ];
    const lowerMessage = message.toLowerCase();
    return positiveKeywords.some(keyword => lowerMessage.includes(keyword));
}

function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

function addMessage(content, isUser = false, isSpecial = false) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const messageContent = document.createElement('div');
    messageContent.className = `message-content ${isSpecial ? 'peace-tip' : ''}`;
    
    const messageText = document.createElement('p');
    messageText.textContent = content;
    messageContent.appendChild(messageText);
    messageDiv.appendChild(messageContent);
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    
    if (message === '') {
        // Show error for empty message
        messageInput.style.borderColor = '#dc3545';
        setTimeout(() => {
            messageInput.style.borderColor = '#e3f2fd';
        }, 2000);
        return;
    }
    
    // Add user message
    addMessage(message, true);
    
    // Clear input
    messageInput.value = '';
    
    // Generate bot response
    setTimeout(() => {
        let response;
        
        if (detectNegativeKeywords(message)) {
            response = getRandomResponse(calmingResponses);
        } else if (detectPositiveKeywords(message)) {
            response = getRandomResponse(encouragingResponses);
        } else {
            // Default responses for neutral messages
            const defaultResponses = [
                "Thank you for sharing that with me. How are you feeling about this situation?",
                "I appreciate you opening up. What would you like to explore about this topic?",
                "That's interesting. Can you tell me more about what's important to you in this situation?",
                "I'm here to listen and support you. What outcome would bring you the most peace?",
                "Thank you for trusting me with your thoughts. How can we work together to find a peaceful path forward?",
                "I hear you. What steps do you think would help you feel more at ease with this?",
                "Your perspective matters. What would make this situation feel more manageable for you?"
            ];
            response = getRandomResponse(defaultResponses);
        }
        
        addMessage(response);
    }, 1000);
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function getPeaceTip() {
    const tip = getRandomResponse(peaceTips);
    addMessage(`💡 Peace Tip: ${tip}`, false, true);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add some interactive feedback
document.getElementById('messageInput').addEventListener('focus', function() {
    this.style.borderColor = '#007bff';
});

document.getElementById('messageInput').addEventListener('blur', function() {
    this.style.borderColor = '#e3f2fd';
});

// Initialize with a welcome message after page load
window.addEventListener('load', function() {
    setTimeout(() => {
        addMessage("Welcome to PeaceTalk! I'm here to help you communicate more peacefully. Feel free to share what's on your mind, or click 'Get Peace Tip' for some immediate guidance. 🕊️");
    }, 1000);
});

// Add loading animation for bot responses
function showTypingIndicator() {
    const chatMessages = document.getElementById('chatMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator';
    typingDiv.innerHTML = `
        <div class="message-content">
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return typingDiv;
}

// Enhanced send message with typing indicator
function sendMessageEnhanced() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    
    if (message === '') {
        messageInput.style.borderColor = '#dc3545';
        setTimeout(() => {
            messageInput.style.borderColor = '#e3f2fd';
        }, 2000);
        return;
    }
    
    addMessage(message, true);
    messageInput.value = '';
    
    // Show typing indicator
    const typingIndicator = showTypingIndicator();
    
    setTimeout(() => {
        // Remove typing indicator
        typingIndicator.remove();
        
        let response;
        if (detectNegativeKeywords(message)) {
            response = getRandomResponse(calmingResponses);
        } else if (detectPositiveKeywords(message)) {
            response = getRandomResponse(encouragingResponses);
        } else {
            const defaultResponses = [
                "Thank you for sharing that with me. How are you feeling about this situation?",
                "I appreciate you opening up. What would you like to explore about this topic?",
                "That's interesting. Can you tell me more about what's important to you in this situation?",
                "I'm here to listen and support you. What outcome would bring you the most peace?",
                "Thank you for trusting me with your thoughts. How can we work together to find a peaceful path forward?",
                "I hear you. What steps do you think would help you feel more at ease with this?",
                "Your perspective matters. What would make this situation feel more manageable for you?"
            ];
            response = getRandomResponse(defaultResponses);
        }
        
        addMessage(response);
    }, 1500 + Math.random() * 1000); // Random delay between 1.5-2.5 seconds
}

// Override the original sendMessage function
sendMessage = sendMessageEnhanced;
