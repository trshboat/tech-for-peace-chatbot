# PeaceTalk - AI Conflict Resolution Chatbot

## Overview

PeaceTalk is a client-side web application designed to help users resolve conflicts peacefully through AI-powered conversations. The application provides a calming interface where users can interact with a chatbot that detects negative emotions and responds with therapeutic, peace-oriented guidance.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Pure HTML/CSS/JavaScript**: The application is built as a static website without any frameworks
- **Single Page Application (SPA)**: All content is contained within a single HTML file with dynamic sections
- **Responsive Design**: Mobile-first approach with hamburger navigation for smaller screens
- **Component-based CSS**: Modular styling with clear separation of concerns

### Backend Architecture
- **Client-side Only**: No backend server required - all logic runs in the browser
- **Static Hosting Compatible**: Can be deployed to any static hosting service
- **No Database**: All chatbot responses are generated from predefined arrays and keyword matching

## Key Components

### 1. User Interface Components
- **Navigation Header**: Fixed header with logo and responsive navigation menu
- **Hero Section**: Landing area with call-to-action to start chatting
- **Chatbot Interface**: Interactive chat window (implementation appears incomplete in current files)

### 2. Chatbot Logic Engine
- **Keyword Detection**: Scans user input for negative emotions using predefined keyword arrays
- **Response Generation**: Matches detected sentiment with appropriate calming responses
- **Therapeutic Content**: Pre-written responses focused on conflict resolution and emotional regulation

### 3. Content Management
- **Negative Keywords Array**: Comprehensive list of words indicating anger, frustration, or conflict
- **Calming Responses Array**: Therapeutic responses designed to de-escalate situations
- **Peace Tips Array**: Educational content for conflict resolution techniques

## Data Flow

1. **User Input**: User types message in chat interface
2. **Keyword Analysis**: JavaScript scans input for negative emotion indicators
3. **Response Selection**: Algorithm selects appropriate calming response based on detected sentiment
4. **Output Generation**: Chatbot displays therapeutic response with peace-oriented guidance
5. **Continuous Interaction**: Process repeats for ongoing conversation

## External Dependencies

### Third-party Libraries
- **Font Awesome 6.0.0**: Icon library for UI elements (dove icons, chat icons)
- **CDN Delivery**: Icons loaded from CloudFlare CDN for reliability

### No External APIs
- All chatbot functionality is self-contained
- No external AI services or APIs required
- No user data transmission to external servers

## Deployment Strategy

### Static Hosting
- **Platform Agnostic**: Compatible with GitHub Pages, Netlify, Vercel, or any static host
- **No Build Process**: Direct deployment of HTML/CSS/JS files
- **Zero Configuration**: No environment variables or server setup required

### Performance Considerations
- **Lightweight**: Minimal dependencies and small file sizes
- **Fast Loading**: All resources cached locally after first load
- **Offline Capable**: Core functionality works without internet after initial load

### Security Model
- **Client-side Only**: No server-side vulnerabilities
- **No Data Collection**: No user data stored or transmitted
- **Privacy Focused**: All conversations remain in browser session

## Technical Notes

### Current Implementation Status
- Navigation and responsive design appear complete
- Chatbot UI framework is present but implementation seems incomplete
- Core sentiment analysis and response logic is implemented
- Missing chat interface rendering and user interaction handlers

### Extensibility
- Easy to add new keywords and responses to existing arrays
- Modular CSS allows for easy styling updates
- Simple architecture enables feature additions without major refactoring