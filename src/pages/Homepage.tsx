import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles, BookOpen, Feather, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Express Freely",
      description: "Pour your heart out in words, and watch them transform into beautiful poetry"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Infinite Variations",
      description: "Every click generates a unique poem, ensuring your emotions are always fresh"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Personal Archive",
      description: "Save your favorite poems and build your own collection of emotional journeys"
    },
    {
      icon: <Feather className="w-6 h-6" />,
      title: "Voice Your Poems",
      description: "Listen to your poems with natural text-to-speech technology"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-rose-300/40 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-pink-300/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-40 w-28 h-28 bg-rose-200/30 rounded-full blur-xl animate-pulse delay-500"></div>
        
        {/* Floating hearts */}
        <Heart className="absolute top-32 left-20 text-pink-300/60 w-4 h-4 animate-bounce" />
        <Heart className="absolute top-60 right-32 text-rose-400/50 w-3 h-3 animate-bounce delay-300" />
        <Sparkles className="absolute bottom-40 left-16 text-pink-400/40 w-5 h-5 animate-bounce delay-700" />
        <Star className="absolute top-80 left-1/3 text-rose-300/50 w-4 h-4 animate-bounce delay-1000" />
        <Heart className="absolute bottom-60 right-20 text-pink-300/60 w-5 h-5 animate-bounce delay-1500" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <Heart className="text-pink-400 w-12 h-12 fill-current animate-pulse" />
              <Sparkles className="absolute -top-1 -right-1 text-rose-300 w-4 h-4 animate-spin" />
            </div>
            <h1 className="text-6xl md:text-7xl font-light text-gray-800 tracking-wide">
              Emotion<span className="text-pink-500 font-medium">2</span>Poem
            </h1>
            <div className="relative">
              <Heart className="text-pink-400 w-12 h-12 fill-current animate-pulse" />
              <Sparkles className="absolute -top-1 -left-1 text-rose-300 w-4 h-4 animate-spin delay-500" />
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl text-gray-700 font-light mb-4 leading-relaxed">
            Transform Your <span className="text-pink-500 font-medium">Feelings</span> Into Beautiful <span className="text-rose-500 font-medium">Poetry</span>
          </h2>
          
          <p className="text-lg text-gray-600 font-light italic max-w-3xl mx-auto leading-relaxed mb-8">
            Sometimes words fail us when we need them most. Let your emotions speak through the timeless art of poetry. 
            Whether you're feeling joy, sorrow, love, or anything in between—we'll help you find the perfect verses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => navigate('/create')}
              className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white border-0 shadow-lg px-8 py-6 text-lg font-light rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <Heart className="w-5 h-5 mr-2 fill-current" />
              Enter the World of Emotions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <p className="text-sm text-pink-500 italic">
              No sign-up required • Completely private • Instant poetry
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-pink-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-pink-500 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-800 mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-light text-gray-800 mb-8">
            How It <span className="text-pink-500 font-medium">Works</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-xl font-medium">1</span>
              </div>
              <h4 className="text-xl font-medium text-gray-800">Share Your Feeling</h4>
              <p className="text-gray-600">
                Type a word, sentence, or paragraph describing how you feel right now
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-xl font-medium">2</span>
              </div>
              <h4 className="text-xl font-medium text-gray-800">Watch the Magic</h4>
              <p className="text-gray-600">
                Our algorithm crafts a unique poem that captures the essence of your emotion
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-xl font-medium">3</span>
              </div>
              <h4 className="text-xl font-medium text-gray-800">Save & Share</h4>
              <p className="text-gray-600">
                Listen to your poem, save it as a keepsake, or generate endless variations
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial-style quotes */}
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-pink-200/50 shadow-lg mb-16">
          <div className="text-center">
            <Sparkles className="w-8 h-8 text-pink-400 mx-auto mb-4" />
            <blockquote className="text-xl text-gray-700 font-light italic leading-relaxed mb-4">
              "Sometimes you don't need advice. You don't need solutions. You just need someone to understand. 
              You need a poem that speaks your language of feelings."
            </blockquote>
            <p className="text-pink-500 font-medium">— The Philosophy Behind Emotion2Poem</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-light text-gray-800 mb-4">
            Ready to Transform Your Emotions?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands who have discovered the healing power of personalized poetry. 
            Your emotional journey deserves beautiful words.
          </p>
          
          <Button 
            onClick={() => navigate('/create')}
            className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white border-0 shadow-lg px-8 py-4 text-lg font-light rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Feather className="w-5 h-5 mr-2" />
            Start Writing Your Heart
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-pink-200">
          <p className="text-sm text-gray-500 font-light">
            🎭 Curated poetry • 🎤 Web Speech API • 💌 Save as love letters • 🔒 Completely private
          </p>
          <p className="text-xs text-pink-400 mt-2 italic">
            Made with 💝 for everyone who feels deeply
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;