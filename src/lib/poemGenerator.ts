export const generatePoem = async (emotion: string): Promise<string> => {
  // Simulate a brief delay to make it feel like generation
  await new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 1000));
  
  return createPoemFromEmotion(emotion);
};

const createPoemFromEmotion = (emotion: string): string => {
  const emotionLower = emotion.toLowerCase();
  
  // Enhanced poem templates with more variety
  const poemTemplates = {
    // Sadness variations
    sad: [
      `In the depths of sadness, I find myself
searching for light in the darkness,
each tear a small rebellion
against the weight of this moment.

and in this feeling,
I find myself
completely,
beautifully
human.`,
      
      `Sorrow moves through me
like rain through empty streets,
washing away what was
to make room for what might be.

I am not broken.
I am breaking
open.`,
      
      `The ache in my chest
speaks a language
older than words,
teaching me that feeling deeply
is its own form of courage.`
    ],
    
    // Happiness variations
    happy: [
      `Joy bubbles up from somewhere deep,
effervescent and golden,
painting my world in colors
I forgot existed.

this is how we heal—
one breath,
one heartbeat,
one moment
at a time.`,
      
      `Happiness dances in my veins
like sunlight on water,
reminding me that I am
exactly where I need to be.

today, I choose
to be my own
celebration.`,
      
      `Light spills from my heart
in waves of pure delight,
and I remember—
this is what it means
to be alive.`
    ],
    
    // Anger variations
    angry: [
      `Rage burns bright in my chest,
a fire that demands to be seen,
to be heard, to be felt
in all its fierce intensity.

so I let it flow,
let it breathe,
let it be
the poem
it was always
meant to become.`,
      
      `Anger is my teacher today,
showing me where my boundaries live,
where my power sleeps,
where my truth waits to be spoken.

I honor this fire.
I honor this force.
I honor this part of me
that refuses to be silenced.`,
      
      `The storm in my soul
has something to say,
and I will listen
until every word
finds its way home.`
    ],
    
    // Loneliness variations
    lonely: [
      `Loneliness wraps around me
like a familiar blanket,
heavy with the weight
of all the words unspoken.

and maybe that's enough.
maybe I'm enough.
maybe this feeling
is exactly
where I need to be.`,
      
      `In the quiet of solitude,
I discover that being alone
and being lonely
are two different countries,
and I am learning
to be a citizen of both.`,
      
      `The silence speaks to me
in languages I'm just learning,
teaching me that sometimes
the most important conversations
happen within.`
    ],

    // Anxiety variations
    anxious: [
      `My mind races like water
down a mountain stream,
thoughts tumbling over rocks
of what-if and maybe-not.

but here, in this breath,
I am still.
I am enough.
I am home.`,
      
      `Anxiety whispers stories
of futures that may never come,
but I choose to listen
to the steady rhythm
of my own heartbeat instead.

I am here.
I am now.
I am safe.`,
      
      `The worry in my chest
is just love
with nowhere to go.
So I send it inward,
wrapping myself
in my own tender care.`
    ],

    // Love variations
    love: [
      `Love flows through me
like honey through sunlight,
sweet and golden
and impossibly warm.

I am made of this feeling,
this tenderness,
this soft revolution
of the heart.`,
      
      `In love, I discover
that my heart has rooms
I never knew existed,
each one filled with light
and the sound of your name.`,
      
      `Love is the language
my soul speaks fluently,
painting the world
in shades of possibility
and hope.`
    ],

    // Gratitude variations
    grateful: [
      `Thank you, whispers my heart
to the morning light,
to the breath in my lungs,
to this moment of being.

gratitude flows like honey,
sweet and golden,
filling all the empty spaces
I didn't know existed.`,
      
      `I count my blessings
like stars in the night sky—
infinite, beautiful,
and always there
even when I forget to look.`,
      
      `Gratitude transforms
the ordinary into sacred,
the mundane into miraculous,
the simple into sublime.`
    ],

    // Hope variations
    hopeful: [
      `Hope is a stubborn thing,
growing in the cracks
of my broken places,
refusing to be silenced
by the weight of the world.

tomorrow is a blank page
waiting for my story.`,
      
      `Even in the darkest night,
hope keeps a candle burning
in the window of my heart,
guiding me home
to myself.`,
      
      `Hope whispers:
not yet, but soon.
not here, but somewhere.
not now, but always.`
    ],

    // Peaceful variations
    peaceful: [
      `Peace settles over me
like snow on a quiet field,
soft and white and still,
covering everything
in gentle silence.

I breathe in calm.
I breathe out worry.
I am exactly
where I belong.`,
      
      `In this moment of stillness,
I find the eye of the storm
that lives within me—
calm, centered, whole.

Here, I remember
who I am
beneath all the noise.`,
      
      `Serenity flows through me
like a gentle river,
carrying away
all that no longer serves,
leaving only
this perfect now.`
    ]
  };

  // Find the best matching emotion
  const matchedEmotion = findBestMatch(emotionLower, poemTemplates);
  const poems = poemTemplates[matchedEmotion];
  
  // Return a random poem from the matched category
  const randomIndex = Math.floor(Math.random() * poems.length);
  return poems[randomIndex];
};

const findBestMatch = (emotion: string, templates: any): string => {
  // Direct matches
  for (const key of Object.keys(templates)) {
    if (emotion.includes(key)) {
      return key;
    }
  }
  
  // Synonym matching
  const synonyms = {
    sad: ['depressed', 'melancholy', 'blue', 'down', 'upset', 'heartbroken', 'grief', 'sorrow'],
    happy: ['joyful', 'elated', 'cheerful', 'excited', 'euphoric', 'blissful', 'content', 'delighted'],
    angry: ['mad', 'furious', 'rage', 'irritated', 'frustrated', 'annoyed', 'livid', 'enraged'],
    lonely: ['isolated', 'alone', 'solitary', 'abandoned', 'disconnected', 'empty'],
    anxious: ['worried', 'nervous', 'stressed', 'panicked', 'overwhelmed', 'tense', 'restless'],
    love: ['loving', 'romantic', 'affectionate', 'tender', 'passionate', 'devoted', 'adoring'],
    grateful: ['thankful', 'appreciative', 'blessed', 'fortunate'],
    hopeful: ['optimistic', 'positive', 'confident', 'encouraged', 'inspired'],
    peaceful: ['calm', 'serene', 'tranquil', 'relaxed', 'zen', 'still', 'quiet']
  };
  
  for (const [key, words] of Object.entries(synonyms)) {
    if (words.some(word => emotion.includes(word))) {
      return key;
    }
  }
  
  // Default fallback
  return 'sad'; // Default to sad as it's universally relatable
};