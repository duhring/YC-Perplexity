// Video segments data extracted from transcript
const videoSegments = [
    {
        id: 1,
        title: "Perplexity's Current Growth & Scale",
        startTime: "0:00",
        endTime: "1:16",
        timeSeconds: 0,
        summary: "Arvind discusses Perplexity's massive usage growth, infrastructure challenges, and the daily scaling issues they face with increasing user demand.",
        tags: ["Growth", "Infrastructure", "Scale"],
        icon: "📈"
    },
    {
        id: 2,
        title: "The Browser Vision",
        startTime: "1:16",
        endTime: "2:54",
        timeSeconds: 76,
        summary: "The big bet on building a browser as a cognitive operating system with AI agents, parallel task execution, and integration with personal data.",
        tags: ["Browser", "Vision", "AI Agents"],
        icon: "🌐"
    },
    {
        id: 3,
        title: "Competing in a Crowded Market",
        startTime: "2:54",
        endTime: "4:55",
        timeSeconds: 174,
        summary: "How to compete when well-funded players like OpenAI and Google enter your space. Speed as the only sustainable competitive advantage.",
        tags: ["Competition", "Strategy", "Speed"],
        icon: "⚡"
    },
    {
        id: 4,
        title: "CEO Bug Fixing & Leadership",
        startTime: "5:07",
        endTime: "5:48",
        timeSeconds: 307,
        summary: "Arvind's hands-on approach to triaging bugs and how this behavior influences company culture and sets examples for other tech leaders.",
        tags: ["Leadership", "Culture", "Bug Fixing"],
        icon: "🔧"
    },
    {
        id: 5,
        title: "Founding Story & Early Ideas",
        startTime: "5:54",
        endTime: "8:47",
        timeSeconds: 354,
        summary: "How Perplexity started without a clear idea, building natural language SQL for Twitter search, and the evolution to web-scale search.",
        tags: ["Founding", "Origin Story", "SQL"],
        icon: "🚀"
    },
    {
        id: 6,
        title: "Finding Co-founders & Focus",
        startTime: "8:07",
        endTime: "9:19",
        timeSeconds: 487,
        summary: "Why AI was the only area Arvind felt competent in, finding co-founders in grad school, and the importance of intellectual humility.",
        tags: ["Co-founders", "Focus", "Grad School"],
        icon: "🤝"
    },
    {
        id: 7,
        title: "Early Traction Signals",
        startTime: "9:19",
        endTime: "11:33",
        timeSeconds: 559,
        summary: "The New Year's Eve moment with 700k queries despite having a 'crappy name', slow responses, and being a no-name company.",
        tags: ["Traction", "Product Market Fit", "Early Success"],
        icon: "🎯"
    },
    {
        id: 8,
        title: "Realizing Google's Constraints",
        startTime: "11:33",
        endTime: "14:04",
        timeSeconds: 693,
        summary: "Understanding Google's business model conflicts, the innovator's dilemma, and why they can't fully capitalize on their distribution.",
        tags: ["Google", "Business Model", "Constraints"],
        icon: "🔍"
    },
    {
        id: 9,
        title: "User Experience Philosophy",
        startTime: "14:04",
        endTime: "16:21",
        timeSeconds: 844,
        summary: "Learning from Larry Page's focus on user experience, Google's current challenges with innovation, and the benefits of startup agility.",
        tags: ["UX", "Larry Page", "Innovation"],
        icon: "✨"
    },
    {
        id: 10,
        title: "Handling Competitive Pressure",
        startTime: "16:28",
        endTime: "18:22",
        timeSeconds: 988,
        summary: "Reading Twitter reactions about 'Perplexity is dead' after each Google I/O, real vs. perceived competition, and focusing on differentiation.",
        tags: ["Pressure", "Twitter", "Differentiation"],
        icon: "💪"
    },
    {
        id: 11,
        title: "Browser-Specific Advantages",
        startTime: "18:28",
        endTime: "19:44",
        timeSeconds: 1108,
        summary: "Concrete examples of browser capabilities: scheduling meetings, filtering LinkedIn profiles, multi-step reasoning that chatbots can't do.",
        tags: ["Browser Features", "Examples", "Automation"],
        icon: "⚙️"
    },
    {
        id: 12,
        title: "AI Coding Tools at Scale",
        startTime: "19:44",
        endTime: "22:11",
        timeSeconds: 1184,
        summary: "How Perplexity uses Cursor and AI coding tools, making them mandatory, reducing experiment time from days to hours.",
        tags: ["AI Tools", "Cursor", "Development"],
        icon: "💻"
    },
    {
        id: 13,
        title: "Building Defensible Moats",
        startTime: "22:19",
        endTime: "25:14",
        timeSeconds: 1339,
        summary: "Brand value, narrative importance, network effects in AI products, and why browser integration creates stickiness.",
        tags: ["Defensibility", "Brand", "Network Effects"],
        icon: "🛡️"
    },
    {
        id: 14,
        title: "Partnership Strategy",
        startTime: "25:21",
        endTime: "27:39",
        timeSeconds: 1521,
        summary: "Working with SelfBook, TripAdvisor, Shopify, and other partners. The advantage of browser agents over MCP-only approaches.",
        tags: ["Partnerships", "Integration", "MCP"],
        icon: "🤝"
    },
    {
        id: 15,
        title: "Business Model Evolution",
        startTime: "27:39",
        endTime: "29:53",
        timeSeconds: 1659,
        summary: "Subscription revenue success, usage-based pricing for agents, transaction fees, and why they'll never match Google's margins.",
        tags: ["Business Model", "Revenue", "Pricing"],
        icon: "💰"
    },
    {
        id: 16,
        title: "Founder Advice: Embrace Fear",
        startTime: "29:58",
        endTime: "31:38",
        timeSeconds: 1798,
        summary: "Work incredibly hard, assume big model labs will copy successful ideas, embrace competitive fear, and build unique identity through speed.",
        tags: ["Advice", "Work Ethic", "Competition"],
        icon: "🔥"
    }
];

// Function to convert time string to seconds
function timeToSeconds(timeString) {
    const parts = timeString.split(':');
    return parseInt(parts[0]) * 60 + parseInt(parts[1]);
}

// Function to generate YouTube URL with timestamp
function generateYouTubeURL(timeSeconds) {
    return `https://youtu.be/2jOnoTEk-xA?t=${timeSeconds}`;
}

// Function to create a segment card
function createSegmentCard(segment) {
    const card = document.createElement('div');
    card.className = 'segment-card';
    card.onclick = () => window.open(generateYouTubeURL(segment.timeSeconds), '_blank');
    
    card.innerHTML = `
        <div class="card-image">
            <div style="font-size: 4rem;">${segment.icon}</div>
            <img id="frame-${segment.id}" style="display: none;" alt="Video frame for ${segment.title}">
        </div>
        <div class="card-content">
            <div class="card-timestamp">${segment.startTime}</div>
            <h3 class="card-title">${segment.title}</h3>
            <p class="card-summary">${segment.summary}</p>
            <div class="card-tags">
                ${segment.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    return card;
}

// Function to load video frames using ffmpeg (placeholder for actual implementation)
function loadVideoFrames() {
    // This would typically involve calling the ffmpeg script
    // For now, we'll use placeholder images or keep the icons
    console.log('Video frame extraction would happen here with ffmpeg');
}

// Initialize the application
function initializeApp() {
    const container = document.getElementById('segments-container');
    
    // Show loading state
    container.innerHTML = '<div class="loading"><div class="spinner"></div>Loading segments...</div>';
    
    // Simulate loading time
    setTimeout(() => {
        container.innerHTML = '';
        
        // Create and append segment cards
        videoSegments.forEach(segment => {
            const card = createSegmentCard(segment);
            container.appendChild(card);
        });
        
        // Attempt to load video frames
        loadVideoFrames();
    }, 1000);
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Add some interactive enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for any internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close any modal or return to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});

// Export for potential use in other scripts
window.videoSegments = videoSegments;
window.generateYouTubeURL = generateYouTubeURL;
// Update frame loading function
function loadVideoFrames() {
    videoSegments.forEach(segment => {
        const frameImg = document.getElementById(`frame-${segment.id}`);
        const framePath = `frames/frame_${segment.id}.jpg`;
        
        // Check if frame exists and load it
        const img = new Image();
        img.onload = function() {
            frameImg.src = framePath;
            frameImg.style.display = 'block';
            frameImg.parentElement.querySelector('div').style.display = 'none';
        };
        img.onerror = function() {
            console.log(`Frame ${segment.id} not available, keeping icon`);
        };
        img.src = framePath;
    });
}
