export const generatePoem = async (emotion: string): Promise<string> => {
  // Simulate a brief delay to make it feel like generation
  await new Promise(resolve => setTimeout(resolve, Math.random() * 2000 + 1000));
  
  return createPoemFromEmotion(emotion);
};

const createPoemFromEmotion = (emotion: string): string => {
  const emotionLower = emotion.toLowerCase();
  
  // Enhanced poem templates with more variety and uniqueness
  const poemTemplates = {
    // Sadness variations (expanded)
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
is its own form of courage.

In this sadness,
I discover
the tender strength
of my own heart.`,

      `Melancholy wraps around me
like a familiar song,
bittersweet and haunting,
reminding me that even pain
can be beautiful.

I carry this feeling
like a secret garden
where roses grow
among the thorns.`,

      `Today the world feels heavy,
and I am learning
that it's okay
to sit with the weight,
to let it teach me
about the depth
of my own capacity
to feel.`,

      `Sadness is not my enemy—
it is the artist
painting shadows
that make the light
more precious
when it returns.`
    ],
    
    // Happiness variations (expanded)
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
to be alive.

Every cell in my body
sings with gratitude
for this moment
of pure joy.`,

      `I am a symphony of smiles today,
each note ringing clear
across the landscape of my soul.
Happiness has made me
its favorite instrument.

Let me play this song
until the whole world
remembers how to dance.`,

      `Bliss flows through me
like honey through sunbeams,
sweet and warm and golden.
I am drunk on the simple
miracle of being here,
being now,
being me.`,

      `Today I am made of laughter
and starlight,
of morning coffee
and unexpected kindness.
Joy has claimed me
as its own.`
    ],
    
    // Anger variations (expanded)
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
finds its way home.

This fury is sacred—
it knows what I deserve
and will not settle
for less.`,

      `I am lightning today,
electric and untamed,
crackling with the energy
of a thousand unspoken truths.

Watch me illuminate
the darkness
with my righteous fire.`,

      `Anger moves through me
like a river breaking free
from a dam that held it
too long.

I will not apologize
for the force
of my own feelings.`,

      `This rage is not destruction—
it is creation.
It is the birth cry
of my authentic self
demanding to be heard.`
    ],
    
    // Loneliness variations (expanded)
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
happen within.

I am my own
best company
when I remember
how to listen.`,

      `Solitude is not punishment—
it is the space
where I meet myself
without masks,
without pretense,
without the need
to be anything
but exactly who I am.`,

      `In this empty room,
I discover I am not empty.
I am full of stories
waiting to be told,
dreams waiting to unfold,
love waiting to be given
to myself first.`,

      `Loneliness teaches me
that I am enough
company for myself,
that my own thoughts
are worthy companions,
that solitude
can be a gift
I give myself.`
    ],

    // Anxiety variations (expanded)
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
in my own tender care.

I breathe in peace.
I breathe out fear.
I am learning
to trust
the process.`,

      `My nervous system
is trying to protect me
from dangers
that exist only
in the theater of my mind.

I thank it for caring,
then gently remind it
that I am safe
in this moment.`,

      `Anxiety is not my enemy—
it is my overprotective friend
who needs to learn
that not every shadow
is a threat.

I speak to it softly:
"Thank you for watching out,
but I've got this."`,

      `The butterflies in my stomach
are not harbingers of doom—
they are reminders
that I care deeply,
that this matters to me,
that I am alive
and feeling everything.`
    ],

    // Love variations (expanded)
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
and the sound of your name.

I am architecture
built for loving.`,
      
      `Love is the language
my soul speaks fluently,
painting the world
in shades of possibility
and hope.

Every heartbeat
is a love letter
I write to existence.`,

      `I am overflowing
with affection today,
a cup that runneth over
with tenderness
for everything that breathes.

Love has made me
generous with my heart.`,

      `This feeling in my chest
is bigger than my body,
expanding like the universe
to hold all the love
I have to give.

I am infinite
when I love.`,

      `Love transforms me
into poetry,
every gesture
a verse,
every word
a stanza
in the epic
of my devotion.`
    ],

    // Gratitude variations (expanded)
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
even when I forget to look.

Today I remember
to look up.`,
      
      `Gratitude transforms
the ordinary into sacred,
the mundane into miraculous,
the simple into sublime.

I am rich
in ways
money cannot measure.`,

      `My heart is a garden
where thankfulness blooms
in every season,
even in winter,
even in drought,
even when I forget
to tend it.`,

      `I am grateful
for the broken places
that let the light in,
for the storms
that taught me strength,
for the journey
that brought me here.`,

      `Thank you
to my past self
for not giving up,
to my present self
for showing up,
to my future self
for believing
in possibility.`
    ],

    // Hope variations (expanded)
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
to myself.

I trust the dawn
is coming.`,
      
      `Hope whispers:
not yet, but soon.
not here, but somewhere.
not now, but always.

I choose to believe
in the possibility
of better days.`,

      `I plant seeds of hope
in the garden of tomorrow,
trusting that what I nurture
with faith and patience
will bloom in its own time.`,

      `Hope is not naive—
it is brave.
It looks at the world
with clear eyes
and still believes
in transformation.`,

      `I am hope
walking on two legs,
carrying light
in my pocket
for the dark days,
believing in magic
even when I can't see it.`
    ],

    // Peaceful variations (expanded)
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
this perfect now.

I am at peace
with what is.`,

      `Tranquility wraps around me
like a soft blanket,
and I remember
that peace is not
the absence of chaos—
it is the presence
of acceptance.`,

      `I am still water
reflecting the sky,
undisturbed
by the wind,
clear
to the bottom
where wisdom
settles like stones.`,

      `In this sacred pause,
I find the quiet center
that has always been here,
waiting patiently
for me to remember
that peace
is my natural state.`
    ],

    // New emotions added
    excited: [
      `Excitement fizzes in my veins
like champagne bubbles,
lifting me higher
than I thought possible.

I am electric
with possibility,
charged with the energy
of dreams about to unfold.`,

      `Anticipation dances
on the tip of my tongue,
sweet as honey,
bright as starlight.

I can barely contain
the joy of what's coming.`,

      `I am vibrating
at the frequency
of pure enthusiasm,
a tuning fork
struck by the universe
and singing
with perfect pitch.`
    ],

    nostalgic: [
      `Memory paints the past
in watercolors,
soft edges and gentle hues
that make everything
more beautiful
than it was.

I am homesick
for moments
that live only
in my heart now.`,

      `Nostalgia is a time traveler
who visits without warning,
bringing gifts
from yesterday
wrapped in bittersweet
ribbons.`,

      `I carry the past
like pressed flowers
between the pages
of my heart,
fragile and faded
but still beautiful.`
    ],

    confused: [
      `I am standing
at the crossroads
of my own mind,
reading signs
written in languages
I don't understand.

But maybe not knowing
is its own kind
of wisdom.`,

      `Confusion is the fog
before clarity,
the question mark
before the answer,
the pause
before understanding
finds its way home.`,

      `I am lost
in the labyrinth
of my own thoughts,
but I trust
that every path
leads somewhere
worth going.`
    ]
  };

  // Find the best matching emotion
  const matchedEmotion = findBestMatch(emotionLower, poemTemplates);
  const poems = poemTemplates[matchedEmotion];
  
  // Add randomization to ensure uniqueness
  const randomIndex = Math.floor(Math.random() * poems.length);
  let selectedPoem = poems[randomIndex];
  
  // Add slight variations to make each generation unique
  selectedPoem = addUniqueVariations(selectedPoem, emotion);
  
  return selectedPoem;
};

const addUniqueVariations = (poem: string, originalEmotion: string): string => {
  // Add subtle variations to make each poem feel unique
  const variations = [
    // Time-based variations
    () => poem.replace(/today/g, getRandomTimeReference()),
    () => poem.replace(/this moment/g, getRandomMomentReference()),
    
    // Intensity variations
    () => addIntensityModifiers(poem, originalEmotion),
    
    // Metaphor variations
    () => addMetaphorVariations(poem),
    
    // Original poem (no changes)
    () => poem
  ];
  
  // Randomly select a variation (70% chance of original, 30% chance of variation)
  const shouldVary = Math.random() < 0.3;
  if (!shouldVary) return poem;
  
  const randomVariation = variations[Math.floor(Math.random() * (variations.length - 1))];
  return randomVariation();
};

const getRandomTimeReference = (): string => {
  const timeRefs = ['today', 'right now', 'in this moment', 'at this hour', 'in this breath'];
  return timeRefs[Math.floor(Math.random() * timeRefs.length)];
};

const getRandomMomentReference = (): string => {
  const momentRefs = ['this moment', 'this instant', 'this breath', 'this heartbeat', 'this space'];
  return momentRefs[Math.floor(Math.random() * momentRefs.length)];
};

const addIntensityModifiers = (poem: string, emotion: string): string => {
  const intensityWords = {
    gentle: ['softly', 'tenderly', 'quietly', 'gently'],
    strong: ['powerfully', 'deeply', 'intensely', 'profoundly'],
    light: ['lightly', 'delicately', 'gracefully', 'ethereally']
  };
  
  // Determine intensity based on emotion
  let intensity = 'gentle';
  if (emotion.includes('rage') || emotion.includes('fury') || emotion.includes('excited')) {
    intensity = 'strong';
  } else if (emotion.includes('peaceful') || emotion.includes('calm') || emotion.includes('serene')) {
    intensity = 'light';
  }
  
  const modifiers = intensityWords[intensity];
  const randomModifier = modifiers[Math.floor(Math.random() * modifiers.length)];
  
  // Add the modifier to the first line if it doesn't already have one
  const lines = poem.split('\n');
  if (lines[0] && !lines[0].includes('ly ')) {
    lines[0] = lines[0].replace(/^(\w+)/, `$1 ${randomModifier}`);
    return lines.join('\n');
  }
  
  return poem;
};

const addMetaphorVariations = (poem: string): string => {
  const metaphorReplacements = {
    'like water': ['like a river', 'like rain', 'like ocean waves', 'like morning dew'],
    'like light': ['like sunlight', 'like starlight', 'like candlelight', 'like moonbeams'],
    'like fire': ['like flames', 'like embers', 'like sparks', 'like lightning'],
    'like music': ['like a symphony', 'like a melody', 'like a song', 'like harmony']
  };
  
  let modifiedPoem = poem;
  
  Object.entries(metaphorReplacements).forEach(([original, replacements]) => {
    if (modifiedPoem.includes(original)) {
      const randomReplacement = replacements[Math.floor(Math.random() * replacements.length)];
      modifiedPoem = modifiedPoem.replace(original, randomReplacement);
    }
  });
  
  return modifiedPoem;
};

const findBestMatch = (emotion: string, templates: any): string => {
  // Direct matches
  for (const key of Object.keys(templates)) {
    if (emotion.includes(key)) {
      return key;
    }
  }
  
  // Enhanced synonym matching
  const synonyms = {
    sad: ['depressed', 'melancholy', 'blue', 'down', 'upset', 'heartbroken', 'grief', 'sorrow', 'crying', 'tears', 'hurt', 'pain', 'devastated', 'broken'],
    happy: ['joyful', 'elated', 'cheerful', 'excited', 'euphoric', 'blissful', 'content', 'delighted', 'thrilled', 'ecstatic', 'glad', 'pleased', 'upbeat'],
    angry: ['mad', 'furious', 'rage', 'irritated', 'frustrated', 'annoyed', 'livid', 'enraged', 'pissed', 'outraged', 'indignant', 'resentful'],
    lonely: ['isolated', 'alone', 'solitary', 'abandoned', 'disconnected', 'empty', 'forsaken', 'friendless', 'rejected'],
    anxious: ['worried', 'nervous', 'stressed', 'panicked', 'overwhelmed', 'tense', 'restless', 'uneasy', 'apprehensive', 'fearful'],
    love: ['loving', 'romantic', 'affectionate', 'tender', 'passionate', 'devoted', 'adoring', 'infatuated', 'smitten', 'caring'],
    grateful: ['thankful', 'appreciative', 'blessed', 'fortunate', 'indebted', 'obliged'],
    hopeful: ['optimistic', 'positive', 'confident', 'encouraged', 'inspired', 'uplifting', 'promising'],
    peaceful: ['calm', 'serene', 'tranquil', 'relaxed', 'zen', 'still', 'quiet', 'composed', 'centered'],
    excited: ['thrilled', 'enthusiastic', 'eager', 'pumped', 'energetic', 'animated', 'exhilarated'],
    nostalgic: ['reminiscent', 'wistful', 'sentimental', 'reflective', 'yearning', 'longing'],
    confused: ['lost', 'uncertain', 'puzzled', 'bewildered', 'perplexed', 'unclear', 'mixed up']
  };
  
  for (const [key, words] of Object.entries(synonyms)) {
    if (words.some(word => emotion.includes(word))) {
      return key;
    }
  }
  
  // Context-based matching for longer texts
  if (emotion.length > 50) {
    // Analyze longer text for emotional context
    const emotionalKeywords = {
      sad: ['cry', 'tear', 'hurt', 'pain', 'loss', 'miss', 'gone', 'empty', 'dark'],
      happy: ['smile', 'laugh', 'joy', 'bright', 'wonderful', 'amazing', 'great', 'love'],
      angry: ['hate', 'stupid', 'wrong', 'unfair', 'mad', 'annoying', 'terrible'],
      anxious: ['worry', 'scared', 'afraid', 'nervous', 'stress', 'panic', 'overwhelm'],
      love: ['heart', 'beautiful', 'perfect', 'amazing', 'special', 'care', 'adore'],
      peaceful: ['calm', 'quiet', 'still', 'peace', 'relax', 'breathe', 'center']
    };
    
    for (const [emotion_key, keywords] of Object.entries(emotionalKeywords)) {
      const matches = keywords.filter(keyword => emotion.includes(keyword)).length;
      if (matches >= 2) {
        return emotion_key;
      }
    }
  }
  
  // Default fallback based on common emotional expressions
  if (emotion.includes('feel') || emotion.includes('feeling')) {
    return 'sad'; // Most common when people say "I feel..."
  }
  
  return 'hopeful'; // Optimistic default
};