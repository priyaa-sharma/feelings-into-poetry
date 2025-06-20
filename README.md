# Emotion2Poem

Transform your emotions into beautiful poetry with this elegant web application.

## Features

- **Emotion-to-Poetry Conversion**: Input your feelings and get personalized poems
- **Text-to-Speech**: Listen to your poems with natural voice synthesis
- **Save & Download**: Save your favorite poems as text files
- **Poetry Archive**: Keep track of your emotional journey through saved poems
- **Responsive Design**: Beautiful interface that works on all devices

## How It Works

1. **Express Your Emotion**: Type how you're feeling in the text area
2. **Generate Poetry**: Click the button to transform your emotion into a poem
3. **Listen & Save**: Use the controls to hear your poem or save it for later

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives
- **Build Tool**: Vite
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd emotion2poem
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── EmotionInput.tsx    # Emotion input form
│   ├── PoemDisplay.tsx     # Poem display component
│   └── PoemControls.tsx    # Poem action controls
├── lib/                # Utility functions
│   ├── poemGenerator.ts    # Local poem generation logic
│   └── utils.ts           # General utilities
├── pages/              # Page components
│   ├── Index.tsx          # Main application page
│   └── NotFound.tsx       # 404 error page
└── hooks/              # Custom React hooks
```

## Features in Detail

### Poem Generation
The application uses a sophisticated local algorithm to match emotions with carefully crafted poem templates. It supports various emotions including:

- Sadness and melancholy
- Happiness and joy
- Anger and frustration
- Loneliness and solitude
- Anxiety and worry
- Love and affection
- Gratitude and appreciation
- Hope and optimism
- Peace and tranquility

### Voice Synthesis
Uses the Web Speech API to provide natural-sounding text-to-speech functionality, allowing users to hear their poems read aloud.

### Data Privacy
All poem generation happens locally in your browser - no data is sent to external servers, ensuring complete privacy of your emotional expressions.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by the therapeutic power of poetry and emotional expression
- Built with modern web technologies for optimal user experience
- Designed with accessibility and user privacy in mind