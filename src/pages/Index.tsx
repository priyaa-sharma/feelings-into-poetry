import React, { useState } from 'react';
import { EmotionInput } from '@/components/EmotionInput';
import { PoemDisplay } from '@/components/PoemDisplay';
import { PoemControls } from '@/components/PoemControls';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles, Home, ArrowLeft, BookOpen, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [currentEmotion, setCurrentEmotion] = useState('');
  const [currentPoem, setCurrentPoem] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [savedPoems, setSavedPoems] = useState<Array<{emotion: string, poem: string, timestamp: string}>>([]);
  const navigate = useNavigate();

  const handlePoemGenerated = (emotion: string, poem: string) => {
    setCurrentEmotion(emotion);
    setCurrentPoem(poem);
  };

  const handleSavePoem = () => {
    if (currentPoem && currentEmotion) {
      const newPoem = {
        emotion: currentEmotion,
        poem: currentPoem,
        timestamp: new Date().toISOString()
      };
      setSavedPoems(prev => [newPoem, ...prev]);
      
      // Create and download text file
      const blob = new Blob([`Emotion: ${currentEmotion}\n\n${currentPoem}\n\n— Generated on ${new Date().toLocaleDateString()} by Emotion2Poem`], 
        { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `emotion2poem_${currentEmotion.replace(/\s+/g, '_')}_${Date.now()}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      {/* Floating hearts decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <Heart className="absolute top-20 left-10 text-pink-200 w-4 h-4 animate-pulse" />
        <Sparkles className="absolute top-32 right-20 text-rose-300 w-5 h-5 animate-pulse" />
        <Heart className="absolute bottom-32 left-20 text-pink-300 w-3 h-3 animate-pulse" />
        <Sparkles className="absolute bottom-20 right-32 text-rose-200 w-4 h-4 animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {/* Header with Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Button
            onClick={() => navigate('/')}
            variant="outline"
            className="border-pink-300 text-pink-700 hover:bg-pink-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center gap-3">
            <Heart className="text-pink-400 w-6 h-6 fill-current" />
            <h1 className="text-3xl font-light text-gray-800 tracking-wide">
              Poetry Creator
            </h1>
            <Heart className="text-pink-400 w-6 h-6 fill-current" />
          </div>
          
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Column - Input */}
          <div className="space-y-6">
            <EmotionInput 
              onPoemGenerated={handlePoemGenerated}
              isGenerating={isGenerating}
              setIsGenerating={setIsGenerating}
            />
            
            {currentPoem && (
              <PoemControls 
                poem={currentPoem}
                emotion={currentEmotion}
                onSave={handleSavePoem}
              />
            )}
          </div>

          {/* Right Column - Poem Display */}
          <div>
            <PoemDisplay 
              poem={currentPoem}
              emotion={currentEmotion}
              isGenerating={isGenerating}
            />
          </div>
        </div>

        {/* Saved Poems Archive */}
        {savedPoems.length > 0 && (
          <div className="mt-16 pt-8 border-t border-pink-200">
            <div className="flex items-center justify-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-pink-500" />
              <h3 className="text-2xl font-light text-gray-700 text-center">
                Your Poetry Archive
              </h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {savedPoems.slice(0, 6).map((poem, index) => (
                <div key={index} className="bg-white/40 backdrop-blur-sm rounded-2xl p-4 border border-pink-200/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-3 h-3 text-pink-500 fill-current" />
                    <div className="text-sm text-pink-600 font-medium capitalize">
                      {poem.emotion}
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 line-clamp-3 leading-relaxed mb-2">
                    {poem.poem.substring(0, 100)}...
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar className="w-3 h-3" />
                    {new Date(poem.timestamp).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
            {savedPoems.length > 6 && (
              <div className="text-center mt-4">
                <p className="text-sm text-gray-500 italic">
                  And {savedPoems.length - 6} more poems in your collection...
                </p>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-pink-200">
          <p className="text-sm text-gray-500 font-light">
            🎭 Unique poetry every time • 🎤 Web Speech API • 💌 Save as love letters • 🔒 Completely private
          </p>
          <p className="text-xs text-pink-400 mt-2 italic">
            Because sometimes you don't need advice. You just need a poem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;