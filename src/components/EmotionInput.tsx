import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { generatePoem } from '@/lib/poemGenerator';
import { Sparkles, Heart, Shuffle, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface EmotionInputProps {
  onPoemGenerated: (emotion: string, poem: string) => void;
  isGenerating: boolean;
  setIsGenerating: (generating: boolean) => void;
}

export const EmotionInput: React.FC<EmotionInputProps> = ({
  onPoemGenerated,
  isGenerating,
  setIsGenerating
}) => {
  const [emotion, setEmotion] = useState('');
  const [lastEmotion, setLastEmotion] = useState('');
  const { toast } = useToast();

  const emotionSuggestions = [
    'melancholy and lost', 'euphoric and alive', 'anxious about tomorrow', 'nostalgic for yesterday', 
    'tender and vulnerable', 'rage burning inside', 'lost in confusion', 'hopeful for change', 
    'devastated and broken', 'electric with excitement', 'numb and empty', 'yearning for connection',
    'grateful for small things', 'haunted by memories', 'peaceful in solitude', 'overwhelmed by love',
    'frustrated with life', 'inspired by beauty', 'scared of the future', 'content in this moment'
  ];

  const handleGenerate = async () => {
    if (!emotion.trim()) {
      toast({
        title: "Share your feeling",
        description: "Tell me what's in your heart...",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    try {
      const poem = await generatePoem(emotion);
      onPoemGenerated(emotion, poem);
      setLastEmotion(emotion);
      toast({
        title: "Poetry born",
        description: "Your feelings have become words.",
      });
    } catch (error) {
      console.error('Error generating poem:', error);
      const errorMessage = error instanceof Error ? error.message : 'The poetry muse is sleeping. Try again in a moment.';
      toast({
        title: "Something went wrong",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleRegeneratePoem = async () => {
    if (!lastEmotion) {
      toast({
        title: "No previous emotion",
        description: "Generate a poem first, then you can create variations.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    try {
      const poem = await generatePoem(lastEmotion);
      onPoemGenerated(lastEmotion, poem);
      toast({
        title: "New variation created",
        description: "Same feeling, fresh poetry.",
      });
    } catch (error) {
      console.error('Error regenerating poem:', error);
      toast({
        title: "Something went wrong",
        description: "Couldn't create a new variation. Try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setEmotion(suggestion);
  };

  return (
    <Card className="p-6 bg-white/60 backdrop-blur-sm border-pink-200/50 shadow-lg">
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-light text-gray-700 mb-2">
            How are you feeling?
          </h2>
          <p className="text-sm text-gray-500 italic">
            Let your emotions flow into words...
          </p>
        </div>

        <div className="space-y-4">
          <Textarea
            value={emotion}
            onChange={(e) => setEmotion(e.target.value)}
            placeholder="Describe your mood, your heart, your moment... 

Maybe you're 'drowning in nostalgia' or 'electric with possibility' or just 'tender and tired'...

Write a single word, a sentence, or pour your heart out in a paragraph. The more you share, the more personalized your poem becomes."
            className="min-h-32 resize-none border-pink-200 focus:border-pink-400 focus:ring-pink-300 bg-white/50 placeholder:text-gray-400 placeholder:italic"
            maxLength={500}
          />
          
          <div className="text-xs text-gray-400 text-right">
            {emotion.length}/500
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm text-gray-600 font-light">Or try one of these feelings:</p>
          <div className="flex flex-wrap gap-2">
            {emotionSuggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-3 py-1 text-xs rounded-full bg-pink-100 text-pink-700 hover:bg-pink-200 transition-colors border border-pink-200/50 hover:scale-105 transform duration-200"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={handleGenerate}
            disabled={isGenerating || !emotion.trim()}
            className="flex-1 bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white border-0 shadow-lg disabled:opacity-50 py-6 text-lg font-light"
          >
            {isGenerating ? (
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 animate-spin" />
                Crafting your poem...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 fill-current" />
                Transform into Poetry
              </div>
            )}
          </Button>

          {lastEmotion && (
            <Button
              onClick={handleRegeneratePoem}
              disabled={isGenerating}
              variant="outline"
              className="border-pink-300 text-pink-700 hover:bg-pink-50 py-6 px-4"
              title="Generate a new variation of your last poem"
            >
              {isGenerating ? (
                <Wand2 className="w-5 h-5 animate-spin" />
              ) : (
                <Shuffle className="w-5 h-5" />
              )}
            </Button>
          )}
        </div>

        {lastEmotion && (
          <div className="text-center">
            <p className="text-xs text-pink-500 italic">
              Click the shuffle button to generate a new variation of "{lastEmotion}"
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};