import React, { useState } from 'react';
import { Plus, Trash2, Trophy, Target, Calendar, Zap, Quote, User, ChevronDown, ChevronUp } from 'lucide-react';

const App = () => {
  const [character, setCharacter] = useState({
    name: "Hero",
    bio: "A determined individual on a journey of growth and self-improvement.",
    level: 1,
    totalXP: 0,
    xpToNext: 100
  });

  const quotes = [
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Resilience is not about bouncing back; it's about moving forward.",
    "Awareness is the greatest agent for change.",
    "Discernment is knowing the difference between right and almost right.",
    "Charisma is dropping what you're doing to say hello.",
    "Quick reflexes come from slow practice.",
    "Presence is more than just being there.",
    "The bamboo that bends is stronger than the oak that resists.",
    "What we achieve inwardly will change outer reality.",
    "Vulnerability is not weakness; it's our greatest measure of courage.",
    "Love is not something you find. Love is something that finds you.",
    "The quality of your life is the quality of your relationships.",
    "Spirituality is not about being perfect. It's about being whole.",
    "Hard work beats talent when talent doesn't work hard.",
    "The strongest people are not those who show strength in front of us, but those who win battles we know nothing about.",
    "Your present circumstances don't determine where you can go; they merely determine where you start.",
    "The greatest revolution of our generation is the discovery that human beings can alter their lives by altering their attitudes.",
    "Courage is not the absence of fear, but the triumph over it.",
    "The way we communicate with others and with ourselves ultimately determines the quality of our lives."
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [quotesUsedToday, setQuotesUsedToday] = useState(0);
  const [customQuotes, setCustomQuotes] = useState([]);
  const [newCustomQuote, setNewCustomQuote] = useState('');

  const [attributes] = useState([
    { 
      id: 1, 
      name: "Resilience", 
      level: 1, 
      skills: [
        "Stress Management", "Emotional Regulation", "Adaptability", "Persistence", "Recovery",
        "Mental Toughness", "Problem Solving", "Crisis Management", "Flexibility", "Endurance",
        "Optimism", "Grit", "Bounce Back", "Patience", "Self-Control",
        "Coping Strategies", "Composure", "Determination", "Fortitude", "Tenacity"
      ]
    },
    { 
      id: 2, 
      name: "Awareness", 
      level: 1, 
      skills: [
        "Mindfulness", "Self-Reflection", "Observation", "Intuition", "Pattern Recognition",
        "Emotional Intelligence", "Body Awareness", "Environmental Scanning", "Active Listening", "Focus",
        "Concentration", "Meditation", "Present Moment", "Perception", "Consciousness",
        "Self-Monitoring", "Situational Awareness", "Inner Wisdom", "Clarity", "Insight"
      ]
    },
    { 
      id: 3, 
      name: "Discernment", 
      level: 1, 
      skills: [
        "Critical Thinking", "Judgment", "Decision Making", "Analysis", "Evaluation",
        "Wisdom", "Prudence", "Assessment", "Discrimination", "Selection",
        "Quality Control", "Standards", "Criteria", "Reasoning", "Logic",
        "Investigation", "Research", "Verification", "Validation", "Planning"
      ]
    },
    { 
      id: 4, 
      name: "Charisma", 
      level: 1, 
      skills: [
        "Communication", "Leadership", "Influence", "Persuasion", "Magnetism",
        "Charm", "Inspiration", "Motivation", "Rapport", "Connection",
        "Public Speaking", "Storytelling", "Presence", "Confidence", "Authenticity",
        "Empathy", "Social Skills", "Networking", "Relationship Building", "Engagement"
      ]
    },
    { 
      id: 5, 
      name: "Reflexes", 
      level: 1, 
      skills: [
        "Quick Thinking", "Fast Response", "Agility", "Coordination", "Speed",
        "Reaction Time", "Motor Skills", "Hand-Eye Coordination", "Balance", "Dexterity",
        "Alertness", "Responsiveness", "Timing", "Precision", "Accuracy",
        "Muscle Memory", "Instinct", "Spontaneity", "Readiness", "Sharpness"
      ]
    },
    { 
      id: 6, 
      name: "Presence", 
      level: 1, 
      skills: [
        "Being Present", "Mindful Presence", "Commanding Attention", "Gravitas", "Authority",
        "Dignity", "Composure", "Confidence", "Centeredness", "Grounding",
        "Authenticity", "Magnetic Presence", "Calm Energy", "Stillness", "Poise",
        "Self-Assurance", "Inner Peace", "Radiance", "Aura", "Embodiment"
      ]
    }
  ]);

  const [expandedAttribute, setExpandedAttribute] = useState(null);
  
  const [habits, setHabits] = useState([
    { id: 1, name: "Morning Workout", skillName: "Endurance", xpReward: 10, streak: 0, lastCompleted: null },
    { id: 2, name: "Read 30 minutes", skillName: "Focus", xpReward: 8, streak: 0, lastCompleted: null },
    { id: 3, name: "Network with 1 person", skillName: "Networking", xpReward: 12, streak: 0, lastCompleted: null },
    { id: 4, name: "Practice mindfulness", skillName: "Mindfulness", xpReward: 10, streak: 0, lastCompleted: null },
    { id: 5, name: "Cold shower", skillName: "Mental Toughness", xpReward: 15, streak: 0, lastCompleted: null },
    { id: 6, name: "Journal for 10 minutes", skillName: "Self-Reflection", xpReward: 8, streak: 0, lastCompleted: null },
    { id: 7, name: "Practice deep breathing", skillName: "Stress Management", xpReward: 6, streak: 0, lastCompleted: null },
    { id: 8, name: "Compliment someone", skillName: "Charm", xpReward: 10, streak: 0, lastCompleted: null },
    { id: 9, name: "Learn something new", skillName: "Critical Thinking", xpReward: 12, streak: 0, lastCompleted: null },
    { id: 10, name: "Practice gratitude", skillName: "Optimism", xpReward: 8, streak: 0, lastCompleted: null },
    { id: 11, name: "Drink 8 glasses of water", skillName: "Self-Control", xpReward: 5, streak: 0, lastCompleted: null },
    { id: 12, name: "No social media before noon", skillName: "Self-Control", xpReward: 12, streak: 0, lastCompleted: null },
    { id: 13, name: "Take a mindful walk", skillName: "Present Moment", xpReward: 8, streak: 0, lastCompleted: null },
    { id: 14, name: "Practice a skill for 20 minutes", skillName: "Persistence", xpReward: 10, streak: 0, lastCompleted: null },
    { id: 15, name: "Make your bed", skillName: "Self-Control", xpReward: 3, streak: 0, lastCompleted: null },
    { id: 16, name: "Stretch for 10 minutes", skillName: "Flexibility", xpReward: 6, streak: 0, lastCompleted: null },
    { id: 17, name: "Listen actively in conversations", skillName: "Active Listening", xpReward: 8, streak: 0, lastCompleted: null },
    { id: 18, name: "Plan tomorrow today", skillName: "Planning", xpReward: 8, streak: 0, lastCompleted: null },
    { id: 19, name: "Practice public speaking", skillName: "Public Speaking", xpReward: 15, streak: 0, lastCompleted: null },
    { id: 20, name: "Avoid complaining", skillName: "Optimism", xpReward: 10, streak: 0, lastCompleted: null }
  ]);

  const [goals, setGoals] = useState([
    { id: 1, name: "Build stress resilience", attributeId: 1, completed: false },
    { id: 2, name: "Develop leadership skills", attributeId: 4, completed: false },
    { id: 3, name: "Improve decision making", attributeId: 3, completed: false },
    { id: 4, name: "Master mindfulness practice", attributeId: 2, completed: false },
    { id: 5, name: "Become more physically agile", attributeId: 5, completed: false },
    { id: 6, name: "Develop commanding presence", attributeId: 6, completed: false },
    { id: 7, name: "Complete a 30-day challenge", attributeId: 1, completed: false },
    { id: 8, name: "Lead a team project", attributeId: 4, completed: false },
    { id: 9, name: "Make better life decisions", attributeId: 3, completed: false },
    { id: 10, name: "Increase self-awareness", attributeId: 2, completed: false },
    { id: 11, name: "Improve reaction time", attributeId: 5, completed: false },
    { id: 12, name: "Command attention in meetings", attributeId: 6, completed: false },
    { id: 13, name: "Overcome a major fear", attributeId: 1, completed: false },
    { id: 14, name: "Build a strong network", attributeId: 4, completed: false },
    { id: 15, name: "Develop critical thinking", attributeId: 3, completed: false },
    { id: 16, name: "Practice daily meditation", attributeId: 2, completed: false },
    { id: 17, name: "Master a physical skill", attributeId: 5, completed: false },
    { id: 18, name: "Become more authentic", attributeId: 6, completed: false },
    { id: 19, name: "Build emotional resilience", attributeId: 1, completed: false },
    { id: 20, name: "Inspire others regularly", attributeId: 4, completed: false }
  ]);

  const [activeTab, setActiveTab] = useState('overview');
  const [newHabit, setNewHabit] = useState({ name: '', skillName: '', xpReward: 10 });
  const [newGoal, setNewGoal] = useState({ name: '', attributeId: 1 });

  const generateNewQuote = () => {
    if (quotesUsedToday >= 5) return;
    
    const allQuotes = [...quotes, ...customQuotes];
    const randomQuote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
    setCurrentQuote(randomQuote);
    setQuotesUsedToday(prev => prev + 1);
  };

  const addCustomQuote = () => {
    if (newCustomQuote.trim() && customQuotes.length < 15) {
      setCustomQuotes(prev => [...prev, newCustomQuote.trim()]);
      setNewCustomQuote('');
    }
  };

  const completeHabit = (habitId) => {
    const today = new Date().toDateString();
    
    setHabits(prev => prev.map(habit => {
      if (habit.id === habitId) {
        const wasCompletedToday = habit.lastCompleted === today;
        if (wasCompletedToday) return habit;
        
        const newStreak = habit.lastCompleted === new Date(Date.now() - 86400000).toDateString() 
          ? habit.streak + 1 
          : 1;
        
        setCharacter(prevChar => ({
          ...prevChar,
          totalXP: prevChar.totalXP + habit.xpReward,
          level: Math.floor((prevChar.totalXP + habit.xpReward) / 100) + 1,
          xpToNext: 100 - ((prevChar.totalXP + habit.xpReward) % 100)
        }));
        
        return {
          ...habit,
          streak: newStreak,
          lastCompleted: today
        };
      }
      return habit;
    }));
  };

  const toggleAttributeExpansion = (attributeId) => {
    setExpandedAttribute(expandedAttribute === attributeId ? null : attributeId);
  };

  const addHabit = () => {
    if (newHabit.name.trim() && newHabit.skillName.trim()) {
      setHabits(prev => [...prev, {
        id: Date.now(),
        ...newHabit,
        streak: 0,
        lastCompleted: null
      }]);
      setNewHabit({ name: '', skillName: '', xpReward: 10 });
    }
  };

  const addGoal = () => {
    if (newGoal.name.trim()) {
      setGoals(prev => [...prev, {
        id: Date.now(),
        ...newGoal,
        completed: false
      }]);
      setNewGoal({ name: '', attributeId: 1 });
    }
  };

  const deleteHabit = (habitId) => {
    setHabits(prev => prev.filter(h => h.id !== habitId));
  };

  const deleteGoal = (goalId) => {
    setGoals(prev => prev.filter(g => g.id !== goalId));
  };

  const toggleGoalComplete = (goalId) => {
    setGoals(prev => prev.map(goal => {
      if (goal.id === goalId) {
        return { ...goal, completed: !goal.completed };
      }
      return goal;
    }));
  };

  const isCompletedToday = (habit) => {
    return habit.lastCompleted === new Date().toDateString();
  };

  const getAttributeName = (attributeId) => {
    const attr = attributes.find(a => a.id === attributeId);
    return attr ? attr.name : 'Unknown';
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-white">
            Attendus Now
          </h1>
          <div className="bg-gray-900 rounded-lg p-4 inline-block border border-gray-700">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-gray-400" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">{character.name}</h2>
                <p className="text-gray-400 text-sm max-w-md">{character.bio}</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <span className="text-lg">Level {character.level}</span>
              <div className="flex-1 max-w-48 bg-gray-600 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((100 - character.xpToNext) / 100) * 100}%` }}
                />
              </div>
              <span className="text-sm">{character.xpToNext} XP to next</span>
            </div>
            
            {/* Quote Section */}
            <div className="mt-4 p-3 bg-gray-800 rounded-lg border border-gray-600">
              <p className="text-white font-bold text-center mb-3">"{currentQuote}"</p>
              <div className="flex justify-center gap-2">
                <button
                  onClick={generateNewQuote}
                  disabled={quotesUsedToday >= 5}
                  className={`px-3 py-1 rounded text-sm ${
                    quotesUsedToday >= 5 
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  <Quote className="w-4 h-4 inline mr-1" />
                  New Quote ({5 - quotesUsedToday} left)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-900 rounded-lg p-1 border border-gray-700">
            {['overview', 'habits', 'goals', 'quotes', 'profile'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg capitalize transition-colors ${
                  activeTab === tab 
                    ? 'bg-gray-700 text-white' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Attributes
              </h3>
              <div className="space-y-4">
                {attributes.map(attr => (
                  <div key={attr.id} className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-lg font-semibold">{attr.name}</div>
                        <div className="text-sm text-gray-400">Level {attr.level}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteGoal(goal.id)}
                      className="text-gray-400 hover:text-white p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-600">
              <h4 className="font-medium mb-3">Add New Goal</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="Goal name"
                  value={newGoal.name}
                  onChange={(e) => setNewGoal({...newGoal, name: e.target.value})}
                  className="bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400"
                />
                <select
                  value={newGoal.attributeId}
                  onChange={(e) => setNewGoal({...newGoal, attributeId: parseInt(e.target.value)})}
                  className="bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
                >
                  {attributes.map(attr => (
                    <option key={attr.id} value={attr.id} className="bg-gray-800">
                      {attr.name}
                    </option>
                  ))}
                </select>
                <button
                  onClick={addGoal}
                  className="bg-gray-700 hover:bg-gray-600 rounded px-4 py-2 flex items-center justify-center gap-2 transition-colors border border-gray-600"
                >
                  <Plus className="w-4 h-4" />
                  Add Goal
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Quotes Tab */}
        {activeTab === 'quotes' && (
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Custom Quotes</h3>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Add your own inspirational quote..."
                  value={newCustomQuote}
                  onChange={(e) => setNewCustomQuote(e.target.value)}
                  className="bg-gray-800 border border-gray-600 rounded px-3 py-2 w-full"
                />
                <button
                  onClick={addCustomQuote}
                  disabled={customQuotes.length >= 15}
                  className="mt-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-500 px-4 py-2 rounded"
                >
                  Add Quote ({customQuotes.length}/15)
                </button>
              </div>
              <div className="space-y-2">
                {customQuotes.map((quote, index) => (
                  <div key={index} className="bg-gray-800 rounded p-3 border border-gray-600">
                    "{quote}"
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Profile Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Character Name</label>
                <input
                  type="text"
                  value={character.name}
                  onChange={(e) => setCharacter({...character, name: e.target.value})}
                  className="bg-gray-800 border border-gray-600 rounded px-3 py-2 w-full max-w-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Bio</label>
                <textarea
                  value={character.bio}
                  onChange={(e) => setCharacter({...character, bio: e.target.value})}
                  className="bg-gray-800 border border-gray-600 rounded px-3 py-2 w-full max-w-md h-20"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
                      <button
                        onClick={() => toggleAttributeExpansion(attr.id)}
                        className="text-gray-400 hover:text-white"
                      >
                        {expandedAttribute === attr.id ? <ChevronUp /> : <ChevronDown />}
                      </button>
                    </div>
                    
                    {expandedAttribute === attr.id && (
                      <div className="mt-4">
                        <h4 className="font-medium mb-2">Skills:</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {attr.skills.map((skill, index) => (
                            <div key={index} className="bg-gray-700 rounded p-2 text-sm">
                              <div className="font-medium">{skill}</div>
                              <div className="text-gray-400">Level 0</div>
                              <div className="w-full bg-gray-600 rounded-full h-1 mt-1">
                                <div className="bg-white h-1 rounded-full" style={{ width: '0%' }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Habits Tab */}
        {activeTab === 'habits' && (
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Daily Habits
            </h3>
            <div className="space-y-3">
              {habits.map(habit => (
                <div key={habit.id} className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => completeHabit(habit.id)}
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
                          isCompletedToday(habit)
                            ? 'bg-gray-600 border-gray-500 text-white'
                            : 'border-gray-400 hover:border-gray-300'
                        }`}
                      >
                        {isCompletedToday(habit) && <span>✓</span>}
                      </button>
                      <div>
                        <div className="font-medium">{habit.name}</div>
                        <div className="text-sm text-gray-400">
                          {habit.skillName} • {habit.xpReward} XP • {habit.streak} day streak
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => deleteHabit(habit.id)}
                      className="text-gray-400 hover:text-white p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-600">
              <h4 className="font-medium mb-3">Add New Habit</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <input
                  type="text"
                  placeholder="Habit name"
                  value={newHabit.name}
                  onChange={(e) => setNewHabit({...newHabit, name: e.target.value})}
                  className="bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400"
                />
                <input
                  type="text"
                  placeholder="Skill name"
                  value={newHabit.skillName}
                  onChange={(e) => setNewHabit({...newHabit, skillName: e.target.value})}
                  className="bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400"
                />
                <input
                  type="number"
                  placeholder="XP Reward"
                  value={newHabit.xpReward}
                  onChange={(e) => setNewHabit({...newHabit, xpReward: parseInt(e.target.value)})}
                  className="bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-400"
                />
                <button
                  onClick={addHabit}
                  className="bg-gray-700 hover:bg-gray-600 rounded px-4 py-2 flex items-center justify-center gap-2 transition-colors border border-gray-600"
                >
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Goals Tab */}
        {activeTab === 'goals' && (
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Goals
            </h3>
            <div className="space-y-3">
              {goals.map(goal => (
                <div key={goal.id} className="bg-gray-800 rounded-lg p-4 border border-gray-600">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => toggleGoalComplete(goal.id)}
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                          goal.completed
                            ? 'bg-gray-600 border-gray-500 text-white'
                            : 'border-gray-400 hover:border-gray-300'
                        }`}
                      >
                        {goal.completed && <Trophy className="w-4 h-4" />}
                      </button>
                      <div>
                        <div className={`font-medium ${goal.completed ? 'line-through text-gray-400' : ''}`}>
                          {goal.name}
                        </div>
                        <div className="text-sm text-gray-400">
                          {getAttributeName(goal.attributeId)} Attribute
                        </div>
                      </div>
