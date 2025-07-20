# 🔍 Perplexity CEO Interview Explorer

An interactive web app that breaks down the Perplexity CEO interview into meaningful segments with visual cards, summaries, and direct YouTube links.

## 🎯 Features

- **16 Key Segments** - Carefully analyzed and extracted from the full transcript
- **Interactive Cards** - Click any card to jump directly to that YouTube timestamp
- **Visual Frames** - Optional video frame extraction for engaging thumbnails
- **Responsive Design** - Works beautifully on desktop and mobile
- **Smart Summaries** - AI-generated summaries of each segment's key points
- **Topic Tags** - Easy filtering and understanding of content themes

## 🚀 Quick Start

1. **View the App**: Simply open `index.html` in your web browser
2. **Extract Frames** (Optional): Run the frame extraction script for video thumbnails

```bash
./extract_frames.sh
```

## 📋 Segments Overview

The interview has been divided into these key segments:

1. **Current Growth & Scale** (0:00) - Infrastructure challenges and user growth
2. **Browser Vision** (1:16) - The big bet on AI-powered browsers
3. **Competition Strategy** (2:54) - Competing with well-funded players
4. **Leadership Style** (5:07) - CEO approach to bug fixing and culture
5. **Founding Story** (5:54) - From SQL search to web-scale search
6. **Co-founder Journey** (8:07) - Finding partners and focusing on strengths
7. **Early Traction** (9:19) - The New Year's Eve breakthrough moment
8. **Google's Constraints** (11:33) - Understanding incumbent limitations
9. **UX Philosophy** (14:04) - Learning from Larry Page's approach
10. **Competitive Pressure** (16:28) - Handling "Perplexity is dead" reactions
11. **Browser Advantages** (18:28) - Specific examples of browser capabilities
12. **AI Development Tools** (19:44) - Using Cursor and AI coding at scale
13. **Building Moats** (22:19) - Brand, narrative, and network effects
14. **Partnership Strategy** (25:21) - Working with SelfBook, Shopify, etc.
15. **Business Model** (27:39) - Subscriptions, usage pricing, transactions
16. **Founder Advice** (29:58) - Work hard and embrace competitive fear

## 🛠️ Technical Setup

### Prerequisites

To extract video frames, you'll need:
- `ffmpeg` - For video processing
- `yt-dlp` - For YouTube video downloading

### Installation (macOS)

```bash
# Install with Homebrew
brew install ffmpeg yt-dlp

# Or the script will attempt to install them automatically
```

### Frame Extraction Process

The `extract_frames.sh` script will:
1. Download the YouTube video in 720p quality
2. Extract frames at key timestamps (5 seconds into each segment)
3. Optimize images for web display
4. Update the JavaScript to display extracted frames
5. Generate a detailed report

## 📁 File Structure

```
AI-native/
├── index.html          # Main web application
├── styles.css          # Responsive styling
├── script.js           # Interactive functionality & segment data
├── extract_frames.sh   # Video frame extraction script
├── frames/             # Generated video frames (after running script)
└── README.md           # This file
```

## 🎨 Design Features

- **Glassmorphism UI** - Modern blur effects and transparency
- **Gradient Backgrounds** - Beautiful color transitions
- **Hover Animations** - Smooth card interactions
- **Responsive Grid** - Adaptive layout for all screen sizes
- **Loading States** - Professional loading animations

## 🔗 Usage

1. **Browse Segments**: Scroll through the visual card layout
2. **Read Summaries**: Each card contains key insights from that segment
3. **Filter by Tags**: Use topic tags to find specific themes
4. **Jump to Video**: Click any card to open YouTube at that exact timestamp
5. **Share Segments**: Share specific moments with the generated URLs

## 🌟 Key Insights Covered

- **AI Industry Competition** - How startups compete with tech giants
- **Product Development** - Building user-focused AI applications
- **Business Strategy** - Revenue models and competitive moats
- **Leadership Lessons** - Hands-on CEO approach and company culture
- **Future Vision** - Browser-based AI agents and cognitive computing

## 🤝 Contributing

This project demonstrates:
- Transcript analysis and segmentation
- Interactive web development
- Video processing with ffmpeg
- Responsive UI design
- YouTube API integration

Feel free to extend the functionality or adapt it for other video content!

## 📝 License

This project is for educational and demonstration purposes. The video content belongs to Y Combinator and the respective creators.

---

**🎬 [Watch the Full Interview](https://youtu.be/2jOnoTEk-xA)**