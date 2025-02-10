import React, { useState } from 'react';
import { Scan, Heart, Brain, Activity, ArrowRight, X, Smile, MessageSquare, Moon } from 'lucide-react';

type Category = {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
};

type ScanningState = 'idle' | 'scanning' | 'result';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [scanningState, setScanningState] = useState<ScanningState>('idle');
  const [prediction, setPrediction] = useState<string>('');
  const [userInput, setUserInput] = useState<string>('');
  const [userName, setUserName] = useState<string>('');

  const categories: Category[] = [
    { 
      id: 'career', 
      name: 'Career', 
      icon: <Brain className="w-8 h-8" />, 
      color: 'bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-800 hover:from-blue-800 hover:via-cyan-800 hover:to-teal-700'
    },
    { 
      id: 'love', 
      name: 'Love', 
      icon: <Heart className="w-8 h-8" />, 
      color: 'bg-gradient-to-br from-pink-900 via-rose-900 to-red-800 hover:from-pink-800 hover:via-rose-800 hover:to-red-700'
    },
    { 
      id: 'health', 
      name: 'Health', 
      icon: <Activity className="w-8 h-8" />, 
      color: 'bg-gradient-to-br from-emerald-900 via-green-900 to-teal-800 hover:from-emerald-800 hover:via-green-800 hover:to-teal-700'
    },
    { 
      id: 'personality', 
      name: 'Personality', 
      icon: <Smile className="w-8 h-8" />, 
      color: 'bg-gradient-to-br from-amber-900 via-yellow-900 to-orange-800 hover:from-amber-800 hover:via-yellow-800 hover:to-orange-700'
    },
    { 
      id: 'dark', 
      name: 'Dark', 
      icon: <Moon className="w-8 h-8" />, 
      color: 'bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-800 hover:from-gray-800 hover:via-slate-800 hover:to-zinc-700'
    },
    { 
      id: 'FutureChat', 
      name: 'FutureChat', 
      icon: <MessageSquare className="w-8 h-8" />, 
      color: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-800 hover:from-indigo-800 hover:via-purple-800 hover:to-violet-700'
    },
  ];


  const predictions = {
    career: [
     "🚀 A new opportunity will arise that perfectly aligns with your skills and passions!",
     "⭐ You will experience a significant breakthrough in your current role, leading to recognition!", 
     "💰 Your hard work and dedication will pay off with a well-deserved promotion or raise!", 
     "🌟 A mentor or influential figure will appear to guide you towards greater success!", 
     "👥 You will find yourself surrounded by a supportive and collaborative team!", 
     "💡 Your creative ideas will be well-received and contribute to significant growth!", 
     "📚 You will develop a new skill that significantly enhances your career prospects!", 
     "🎯 A project you have been working on will reach a successful completion, bringing you satisfaction!", 
     "💪 You will experience a boost in your confidence, allowing you to take on new challenges!", 
     "🤝 A chance encounter or connection will open doors to exciting possibilities!", 
     "🌐 Your networking efforts will result in valuable partnerships and opportunities!", 
     "✨ You will discover a hidden talent that you can leverage for professional gain!", 
     "👑 Your leadership abilities will shine, earning you respect and admiration!",
      "🎓 You will find yourself in a position to mentor or guide others, enhancing your own skills!",
       "🔄 A past experience will prove to be invaluable in a current situation!", 
       "🏆 You will successfully navigate a challenging situation and emerge stronger!", 
       "🦋 Your ability to adapt to change will be a great asset in your career path!", 
       "🌈 You will find a workplace that values your contributions and supports your growth!", 
       "🎊 The results of your dedication and planning will begin to manifest!",
      "⚡ You will achieve a sense of accomplishment and fulfillment in your work!",
         "🌟 You will receive positive feedback and recognition for your efforts!", 
         "🎯 A long-term goal will finally come within reach!",
          "🔥 You'll find a renewed sense of purpose and passion in your profession!",
           "💫 A previous idea you had will suddenly have more relevance and potential!",
            "🚦 A project you've been wanting to pursue will be given the go-ahead!",
             "⏳ You may encounter a slight delay or setback in your current projects, requiring patience.", 
             "🌊 There may be a temporary period of uncertainty or adjustment in your workplace.", 
             "🔄 A project might require some minor revisions or alterations to reach its full potential.",
              "🎯 There could be a need to reassess current strategies to move forward effectively.",
               "💭 You might encounter a situation where communication needs to be clearer to avoid misunderstandings."
    ],
    love: [
      "💫 A new connection will spark a delightful sense of wonder and excitement!",
      "💝 A current relationship will deepen, revealing new layers of intimacy and understanding!", 
      "🌟 You will find yourself surrounded by people who genuinely appreciate and cherish you!", 
      "✨ A chance encounter will lead to a meaningful and fulfilling connection!", 
      "🔮 A love you thought was lost may return in unexpected ways!", 
      "❤️ You will experience a renewed sense of passion and romance!", 
      "😊 Shared laughter and joy will strengthen the bonds of your relationships!", 
      "💖 Your capacity for love will expand, bringing more happiness into your life!", 
      "🌹 You will feel deeply appreciated and valued by your partner or someone special!", 
      "🤗 A friendship will blossom into something deeper and more meaningful!", 
      "🦋 You will overcome any past relationship hurdles and grow from those experiences!", 
      "🕊️ You will feel a sense of peace and security in your loving connections!", 
      "💑 There is potential for a fulfilling partnership with someone who shares your values!", 
      "💌 Your ability to communicate your feelings will lead to more satisfying relationships!", 
      "🎁 Acts of kindness and generosity will create powerful bonds of love!", 
      "💘 You will receive an unexpected expression of love or affection!", 
      "🌸 Your heart will open to receive love in a new and beautiful way!", 
      "✨ A period of self-love and acceptance will attract healthy relationships!", 
      "🫂 You will experience a sense of belonging and true connection with loved ones!", 
      "⭐ Your romantic future looks bright and promising!", 
      "💫 You'll be pleasantly surprised by the way someone expresses their affection for you!", 
      "🌈 A supportive and loving partner is on the horizon!", 
      "✨ You'll rediscover the magic in an existing relationship!", 
      "🎯 Your intuitive sense of love will lead you to the right connections!", 
      "🌟 The universe will conspire to bring you closer to the love you deserve!", 
      "⚡ A relationship may experience a period of slight misalignment, requiring open communication to navigate.", 
      "🌊 You may encounter a situation where expectations differ, leading to minor temporary frustrations.", 
      "🍃 A current connection may require some reflection and adjustment to ensure healthy growth.", 
      "🌙 There could be a brief period of uncertainty in a relationship, necessitating patience and understanding.", 
      "💭 You may experience a small temporary disconnect in a close relationship, requiring some effort to reconnect"
    ],
    health: [
      "💪 You will experience a renewed sense of vitality and energy!", 
      "🌱 Your commitment to a healthy lifestyle will yield significant positive results!", 
      "☯️ You will find a balance that supports both your physical and mental well-being!", 
      "🏃‍♀️ You will discover a new form of exercise that you truly enjoy!", 
      "🧘‍♀️ You will feel a stronger connection with your body and its needs!", 
      "😴 Your sleep patterns will improve, leading to increased daytime alertness!", 
      "🥗 You will make mindful choices that nourish your body from within!", 
      "🧘‍♂️ A period of stress will lessen, allowing for greater relaxation and calm!", 
      "🌟 You will experience a positive shift in your emotional health!", 
      "🛡️ Your immune system will be strong and resilient!", 
      "🎯 You will find yourself making healthier choices without feeling deprived!", 
      "✨ A minor health concern will be resolved quickly and easily!", 
      "🧠 You will develop a deeper understanding of your personal health needs!", 
      "🕊️ You will achieve a greater sense of inner peace and contentment!", 
      "🌿 Your natural healing abilities will be enhanced!", 
      "🤝 You will find a support system that helps you maintain your health goals!", 
      "🥑 You will be inspired to make positive changes in your eating habits!", 
      "🎯 Your focus and concentration will improve with your overall health!", 
      "💆‍♀️ You will experience a release of tension and stiffness in your body!", 
      "📨 You will receive positive news regarding your health!", 
      "🌺 Your dedication to self-care will manifest in improved well-being!", 
      "⚡ You'll have the energy to pursue activities you enjoy!", 
      "🧘‍♀️ You will find a new way to manage stress and anxiety effectively!", 
      "🙏 You'll feel a greater sense of gratitude for your good health!", 
      "🌙 You'll discover a new way to connect with your body's natural rhythms!", 
      "⚠️ You may encounter a slight temporary dip in energy levels, requiring rest.", 
      "💫 You might experience a minor discomfort that will pass quickly.", 
      "⚖️ There may be a need to adjust your routine to better support your well-being.", 
      "🍎 You could benefit from paying a bit more attention to specific dietary choices.", 
      "🌊 You might feel a small temporary imbalance that can be easily addressed."
    ],
    personality: [
      "✨ You will discover hidden strengths within yourself that you never knew existed!",
      "💪 Your confidence will grow, empowering you to take on new challenges!",
      "🦋 You will find yourself becoming more resilient and adaptable to change!",
      "💝 Your ability to empathize with others will deepen, strengthening your relationships!",
      "🧘‍♀️ You will develop a greater sense of self-awareness and understanding!",
      "🎨 Your creativity will flourish, bringing fresh perspectives to your life!",
      "🌸 You will find yourself becoming more patient and understanding towards yourself and others!",
      "💭 Your communication skills will improve, allowing for clearer and more meaningful interactions!",
      "🔥 You will discover a new passion that ignites your soul!",
      "🕊️ You will learn to let go of past hurts and embrace forgiveness!",
      "😊 Your capacity for joy and laughter will increase!",
      "🙏 You will cultivate a greater sense of gratitude for the good things in your life!",
      "🔮 Your intuition will become stronger, guiding you towards wise decisions!",
      "🌟 You will find yourself drawn to experiences that expand your mind and spirit!",
      "🎯 Your sense of purpose will become clearer, giving you direction and meaning!",
      "💫 You will learn to embrace your unique qualities and celebrate your individuality!",
      "🌅compass Your inner wisdom will guide you towards greater self-acceptance!",
      "✨ Your positive attitude will attract positive experiences into your life!",
      "🦋 You will find new ways to express your authentic self!",
      "⭐ Your natural talents will become more evident, earning you recognition!",
      "💝 You'll be more comfortable expressing your thoughts and feelings!",
      "🌅 You will experience greater clarity about your goals and aspirations!",
      "🔥 You'll find a renewed sense of passion for the things that matter to you!",
      "🌱 You'll be more open to new ideas and perspectives!",
      "✨ You will find your own unique way to shine!",
      "⚠️ You may experience a temporary moment of self-doubt that you will quickly overcome.",
      "🌊 There could be a brief period of feeling slightly less decisive than usual.",
      "🧘‍♀️ You might encounter a situation where patience is tested, requiring a deep breath.",
      "🔄 You may need to adjust your perspective slightly to fully understand a situation.",
      "💫 You could benefit from being a bit more mindful of your own needs."
    ],
    dark: [
      "You're like a Wi-Fi signal—weak, unreliable, and always cutting out. 📶🚫😂",
      "Your brain must be buffering because your responses are so slow. ⏳💭",
      "You’re like a sandwich without bread—completely useless. 🥪❌",
      "You bring the kind of energy that makes coffee feel unnecessary. ☕🙄",
      "You're like a phone case—extra, but no one really needs you. 📱🙃",
   "You’re proof that the dinosaurs had the right idea going extinct. 🦖🚪",
  "You're the human equivalent of autocorrect—always messing things up. 🔄📱😅",
  "You're like a balloon—full of air and about to burst. 🎈💨",
  "You're so confusing, even Google doesn’t have answers for you. 🔍🤔",
  "You're like a broken pencil—pointless. ✏️❌",
  "You're like an old meme—nobody finds you funny anymore. 🖼️😂➡️😐",
  "You’re the type of person that GPS can't even recalculate for. 🗺️❓",
  "You're like a clock without hands—completely out of time. 🕒🚫",
  "You're the Wi-Fi password no one can remember—complicated and frustrating. 🔑📶😤",
  "You're like a vending machine that only takes exact change—completely useless. 🥤❌",
  "You’re the reason why 'Ctrl+Z' should work in real life. ⌨️🔄",
        "You're like a floppy disk—outdated and irrelevant. 💾😂",
      "You’re like a light bulb that flickers—barely bright and super annoying. 💡😒",
      "You're like a fire alarm that goes off for no reason—loud and unnecessary. 🚨🙄",
      "You're the loading screen of life—always spinning but never progressing. ⏳🔄",
      "You're like a traffic jam in the middle of nowhere—no one knows why you’re there. 🚗🚦🤷",
      "You're the online sale no one shops at—completely ignored. 🛒❌",
      "You're like a pizza with no toppings—boring and disappointing. 🍕😞",
      "You're like a phone call at 2 a.m.—annoying and always unwanted. 📞😠",
      "You're like an elevator that’s out of service—just taking up space. 🛗🚫",
      "You're like a mosquito—small, annoying, and everyone wants you gone. 🦟🙅",
      "You're like a coffee machine that’s always broken—never delivering when needed. ☕❌",
      "You're like a book with missing pages—confusing and incomplete. 📖❓",
      "You’re like a pair of socks that don’t match—completely useless together. 🧦🙃",
      "You're like a ringtone on full volume in public—irritating and unnecessary. 📱🔊🙄",
      "You're like a traffic jam in the middle of nowhere—no one knows why you’re there. 🚗🚦🤷",
      "You're the online sale no one shops at—completely ignored. 🛒❌",
      "You're like a pizza with no toppings—boring and disappointing. 🍕😞",
      "You're like a phone call at 2 a.m.—annoying and always unwanted. 📞😠",
      "You're like an elevator that’s out of service—just taking up space. 🛗🚫",
      "You're like a mosquito—small, annoying, and everyone wants you gone. 🦟🙅",
      "You're like a coffee machine that’s always broken—never delivering when needed. ☕❌",
      "You're like a book with missing pages—confusing and incomplete. 📖❓",
      "You’re like a pair of socks that don’t match—completely useless together. 🧦🙃",
      "You're like a ringtone on full volume in public—irritating and unnecessary. 📱🔊🙄"







      
    ],
    FutureChat: [
      "✨ Dear {{name}}, 🌟\nThe celestial winds whisper to me... I sense that {{input}} will lead to extraordinary opportunities! 🚀 Your path is illuminated with transformative energy! 🌠",
      
      "🔮 Greetings, mystic soul {{name}}! 🌙\nThe cosmic energies are dancing... {{input}} will bloom into beautiful manifestations of joy and wonder! 🦋 Trust in this magical journey! ✨",
      
      "🌟 Beloved {{name}}, 🌺\nThrough the mists of time, I see {{input}} opening portals to remarkable destinies! 🌈 The universe conspires in your favor! 🌌",
      
      "⭐ Dearest {{name}}, 🍀\nThe astral planes reveal that {{input}} carries the seeds of profound transformation! 🌱 Your future glows with infinite potential! 💫",
      
      "🎆 Gentle spirit {{name}}, 🌸\nThe ancient wisdom shows that {{input}} will unfold like a magical tapestry of possibilities! 🎨 Your destiny awaits! ⚡",
      
      "🌠 Blessed seeker {{name}}, 🕊️\nThe sacred crystals illuminate that {{input}} holds the key to extraordinary adventures! 💎 Embrace the magic ahead! 🌅",
      
      "💫 Greetings, luminous {{name}}! 🌞\nMy third eye reveals that {{input}} will weave paths of golden opportunities! 🎭 Your journey is divinely guided! 🙏",
      
      "🌙 Mystical {{name}}, ✨\nThe ethereal realms whisper that {{input}} carries the essence of profound transformation! 🦋 Your future radiates with promise! 🌈",
      
      "⚡ Cherished {{name}}, 🎋\nThe cosmic threads show that {{input}} will manifest in ways beyond your wildest dreams! 🌟 Magic surrounds your path! 🔮",
      
      "🌺 Dear light-bearer {{name}}, 💫\nThe stars align to reveal that {{input}} holds the power to reshape your destiny! 🌠 Trust in the journey ahead! 🎆",
      
      "✨ Radiant soul {{name}}, 🌙\nThrough the veils of time, I see {{input}} creating ripples of positive change! 🌊 Your future is luminous! 🌟",
      
      "🔮 Blessed {{name}}, 🦋\nThe ancient scrolls prophesy that {{input}} will lead to magnificent revelations! 📜 Your path is blessed! ✨"
    ]
  };

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
  };

  const startScanning = () => {
    setScanningState('scanning');
    setTimeout(() => {
      setScanningState('result');
      const categoryPredictions = predictions[selectedCategory?.id as keyof typeof predictions];
      const randomPrediction = categoryPredictions[Math.floor(Math.random() * categoryPredictions.length)];
      setPrediction(randomPrediction);
    }, 3000);
  };

  const resetSelection = () => {
    setSelectedCategory(null);
    setScanningState('idle');
    setPrediction('');
  };

  const handleFutureChatResponse = () => {
    if (selectedCategory?.id === 'FutureChat' && userInput.trim()) {
      setScanningState('scanning');
      setTimeout(() => {
        setScanningState('result');
        const categoryPredictions = predictions.FutureChat;
        const randomPrediction = categoryPredictions[Math.floor(Math.random() * categoryPredictions.length)];
        setPrediction(randomPrediction
          .replace(/{{input}}/g, userInput.toLowerCase())
          .replace(/{{name}}/g, userName || 'Seeker'));
      }, 2000);
    } else {
      startScanning();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Futurewala</h1>
          <p className="text-gray-300">Unveil Your Destiny Through Palm Reading</p>
        </header>

        {!selectedCategory && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category)}
                className={`
                  relative overflow-hidden
                  ${category.color}
                  p-6 rounded-lg
                  transform hover:scale-105 transition-all duration-300
                  shadow-[0_0_15px_rgba(139,92,246,0.3)]
                  hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]
                  border border-white/10 hover:border-white/20
                  backdrop-blur-sm bg-opacity-90
                  animate-fade-in-up
                  after:absolute after:inset-0
                  after:bg-gradient-to-r after:from-transparent after:via-white/10 after:to-transparent
                  after:translate-x-[-200%] hover:after:translate-x-[200%]
                  after:transition-transform after:duration-1000
                  group
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative z-10 flex flex-col items-center space-y-3">
                  <div className="transform group-hover:scale-110 transition-transform duration-300 
                    group-hover:animate-pulse">
                    {category.icon}
                  </div>
                  <span className="text-lg font-semibold group-hover:text-white transition-colors duration-300">
                    {category.name}
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </button>
            ))}
          </div>
        )}

        {selectedCategory && (
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                {selectedCategory.icon}
                {selectedCategory.name} Reading
              </h2>
              <button
                onClick={resetSelection}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {scanningState === 'idle' && (
              <div className="text-center">
                {selectedCategory?.id === 'FutureChat' ? (
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Enter your name..."
                      className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      placeholder="Ask me anything about your future..."
                      className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && userInput.trim()) {
                          handleFutureChatResponse();
                        }
                      }}
                    />
                    <button
                      onClick={handleFutureChatResponse}
                      disabled={!userInput.trim()}
                      className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-500 disabled:cursor-not-allowed px-6 py-3 rounded-lg flex items-center gap-2 mx-auto"
                    >
                      <MessageSquare className="w-5 h-5" />
                      Ask AI
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={startScanning}
                    className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg flex items-center gap-2 mx-auto"
                  >
                    <Scan className="w-5 h-5" />
                    Start Palm Scanning
                  </button>
                )}
              </div>
            )}

            {scanningState === 'scanning' && (
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 relative">
                  <div className="absolute inset-0 border-4 border-indigo-500 rounded-lg animate-pulse"></div>
                  <div className="absolute inset-0 bg-indigo-500/20 rounded-lg">
                    <div className="h-1 bg-indigo-500 animate-[scanning_3s_ease-in-out_infinite]"></div>
                  </div>
                </div>
                <p className="text-lg">Scanning your palm...</p>
              </div>
            )}

            {scanningState === 'result' && (
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-indigo-500 rounded-full flex items-center justify-center">
                    {selectedCategory.icon}
                  </div>
                  <p className="text-lg leading-relaxed prediction-text" style={{ fontFamily: '"Segoe UI Emoji", "Noto Color Emoji", sans-serif' }}>
                    {prediction}
                  </p>
                </div>
                <button
                  onClick={resetSelection}
                  className="text-sm text-gray-400 hover:text-white underline"
                >
                  Try Another Reading
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;