/* ==========================================================================
   KIBOKO GARAGE - AI VEHICLE MAINTENANCE ASSISTANT
   ========================================================================== */

const AI_RESPONSES = [
    {
        keywords: ['hello', 'hi', 'hey', 'greetings', 'habari'],
        reply: "Hello! I am Kiboko's AI Maintenance Assistant. I can help diagnose car issues, suggest maintenance, or guide you on booking a service. What symptoms is your vehicle experiencing?"
    },
    {
        keywords: ['brake', 'squeak', 'grind', 'spongy', 'stopping'],
        reply: "Squeaking or grinding noises usually indicate worn brake pads or rotors. A spongy brake pedal suggests air in the brake lines or low brake fluid. For safety, please schedule a **Brake Service** immediately."
    },
    {
        keywords: ['engine light', 'check engine', 'mil', 'light on'],
        reply: "A Check Engine Light indicates your vehicle computer has detected a fault. It could range from a loose gas cap to ignition system faults or oxygen sensor failures. We recommend scheduling a **Computer Diagnostics** check ($20 / TZS 50,000) to retrieve the exact error code."
    },
    {
        keywords: ['white smoke', 'coolant', 'overheat'],
        reply: "Thick white smoke from the exhaust typically means coolant is entering the combustion chamber, pointing to a blown head gasket, cracked cylinder head, or engine block damage. **Do not drive the vehicle** to prevent total engine failure. We suggest arranging emergency towing to our Unga Ltd workshop for **Engine Repair**."
    },
    {
        keywords: ['blue smoke', 'burning oil', 'oil leak'],
        reply: "Blue or grey smoke indicates your engine is burning oil. Common causes include worn piston rings, valve guide seals, or a faulty PCV valve. Check your oil level immediately and book an **Engine Repair** or **Oil Change** if oil levels are critically low."
    },
    {
        keywords: ['black smoke', 'fuel', 'mileage'],
        reply: "Black smoke suggests the engine is burning too much fuel (running rich). This is often caused by a clogged air filter, leaking fuel injectors, or a faulty mass airflow sensor. Booking a **Computer Diagnostics** or fuel system check will help resolve this."
    },
    {
        keywords: ['start', 'click', 'dead battery', 'crank', 'battery'],
        reply: "If the engine clicks when you try to start, your battery charge is likely too low, terminals are corroded, or the starter motor is failing. We can test your battery and alternator charge rate. Consider scheduling our **Battery Services**."
    },
    {
        keywords: ['bumpy', 'rattle', 'suspension', 'pulling', 'steering'],
        reply: "Excessive bouncing, pulling to one side, or clunking sounds over bumps usually point to worn shocks, struts, ball joints, or steering link failure. Book a **Suspension Repair & Alignment** to restore safety and handling."
    },
    {
        keywords: ['oil change', 'maintenance schedule', 'how often'],
        reply: "We recommend changing your engine oil every 5,000 to 7,500 kilometers (or every 6 months) for mineral oil, and up to 10,000 kilometers for full synthetic oil. Periodic oil changes prevent sludge build-up. Book an **Oil Change & Filter Service** today!"
    },
    {
        keywords: ['price', 'cost', 'how much'],
        reply: "You can get instant estimates using our **Vehicle Service Cost Estimator** on the website! Rates start from TZS 50,000 ($20) for diagnostics, and depend on your vehicle size and services chosen. Would you like me to scroll you to the Estimator?"
    },
    {
        keywords: ['where', 'location', 'arusha'],
        reply: "Kiboko Garage is located in the **UNGA LTD Area, Arusha, Tanzania**. We are open Monday to Saturday from 8:00 AM to 6:00 PM. We also offer 24/7 Emergency Assistance!"
    },
    {
        keywords: ['fleet', 'business', 'corporate', 'truck'],
        reply: "Yes, we specialize in Fleet Management! We support business and fleet accounts with priority scheduling, dedicated mechanics, and preventative logs. You can register your fleet vehicles in the Customer Portal or contact us directly."
    }
];

const DEFAULT_REPLY = "I understand. To get an accurate diagnosis, it's best to perform computer diagnostics or physical inspection. You can book an appointment online or contact our Unga Ltd workshop directly. What vehicle model do you drive?";

document.addEventListener('DOMContentLoaded', () => {
    initAiChat();
});

function initAiChat() {
    const chatInput = document.getElementById('chatInput');
    const chatSendBtn = document.getElementById('chatSendBtn');
    const chatMessages = document.getElementById('chatMessages');

    if (!chatInput || !chatSendBtn || !chatMessages) return;

    // Send on click
    chatSendBtn.addEventListener('click', sendMessage);

    // Send on Enter key
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;

        // Append User Message
        appendMessage(text, 'sent');
        chatInput.value = '';

        // Append Typing Indicator
        const typingId = appendTypingIndicator();

        // Simulate AI Delay
        setTimeout(() => {
            removeTypingIndicator(typingId);
            const response = getAiResponse(text);
            appendMessage(response, 'received');
        }, 1200);
    }

    function appendMessage(text, type) {
        const msg = document.createElement('div');
        msg.className = `chat-msg chat-msg-${type}`;
        msg.innerHTML = text;
        chatMessages.appendChild(msg);
        scrollToBottom();
    }

    function appendTypingIndicator() {
        const indicator = document.createElement('div');
        const uniqueId = 'typing-' + Date.now();
        indicator.id = uniqueId;
        indicator.className = 'chat-msg chat-msg-received';
        indicator.innerHTML = '<span class="typing-dots"><span>.</span><span>.</span><span>.</span></span>';
        
        // Add tiny css style for dot animations if not already present
        if (!document.getElementById('typing-style')) {
            const style = document.createElement('style');
            style.id = 'typing-style';
            style.innerHTML = `
                .typing-dots span {
                    animation: blink 1.4s infinite both;
                    font-weight: bold;
                    display: inline-block;
                    font-size: 18px;
                }
                .typing-dots span:nth-child(2) { animation-delay: .2s; }
                .typing-dots span:nth-child(3) { animation-delay: .4s; }
                @keyframes blink {
                    0% { opacity: .2; }
                    20% { opacity: 1; }
                    100% { opacity: .2; }
                }
            `;
            document.head.appendChild(style);
        }
        
        chatMessages.appendChild(indicator);
        scrollToBottom();
        return uniqueId;
    }

    function removeTypingIndicator(id) {
        const indicator = document.getElementById(id);
        if (indicator) {
            indicator.remove();
        }
    }

    function getAiResponse(input) {
        const lowerInput = input.toLowerCase();
        
        for (const item of AI_RESPONSES) {
            const matches = item.keywords.some(keyword => lowerInput.includes(keyword));
            if (matches) {
                return item.reply;
            }
        }
        
        return DEFAULT_REPLY;
    }

    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
