// import React, { useState, useEffect } from 'react';
// import { Calendar } from 'lucide-react';
// import './MoodTracker.css';

// const initialMoodTrackerData = [
//   { date: '2024-01-01', mood: 'Happy', notes: 'Had a great day at work' },
//   { date: '2024-01-02', mood: 'Anxious', notes: 'Deadline pressure' },
// ];

// const MoodTracker = () => {
//   const [dailyMood, setDailyMood] = useState('');
//   const [moodNote, setMoodNote] = useState('');
//   const [showMoodTracker, setShowMoodTracker] = useState(false);
//   const [moodHistory, setMoodHistory] = useState(initialMoodTrackerData);
//   const [streak, setStreak] = useState(0);

//   useEffect(() => {
//     const calculateStreak = () => {
//       let currentStreak = 0;
//       const today = new Date().toISOString().split('T')[0];

//       for (let i = moodHistory.length - 1; i >= 0; i--) {
//         if (
//           moodHistory[i].date === today ||
//           new Date(moodHistory[i].date).getTime() >= new Date(today).getTime() - 86400000
//         ) {
//           currentStreak++;
//         } else {
//           break;
//         }
//       }
//       setStreak(currentStreak);
//     };

//     calculateStreak();
//   }, [moodHistory]);

//   const addMoodEntry = () => {
//     if (dailyMood) {
//       const newEntry = {
//         date: new Date().toISOString().split('T')[0],
//         mood: dailyMood,
//         notes: moodNote,
//       };
//       setMoodHistory([...moodHistory, newEntry]);
//       setDailyMood('');
//       setMoodNote('');
//       setShowMoodTracker(false);
//     }
//   };

//   return (
//     <div className="mood-tracker bg-white p-6 rounded-lg shadow">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-xl font-semibold">Daily Mood Tracker</h2>
//         <Calendar className="w-6 h-6" />
//       </div>
//       <div className="flex items-center space-x-4 mb-4">
//         <div className="text-3xl">🏆</div>
//         <div>
//           <p className="text-lg font-semibold">{streak} Day Streak</p>
//           <p className="text-sm text-gray-600">Keep up the great work!</p>
//         </div>
//       </div>
//       <button
//         onClick={() => setShowMoodTracker(true)}
//         className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
//       >
//         Log Today's Mood
//       </button>

//       {showMoodTracker && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg w-96">
//             <h3 className="text-xl font-semibold mb-4">How are you feeling today?</h3>
//             <select
//               value={dailyMood}
//               onChange={(e) => setDailyMood(e.target.value)}
//               className="w-full p-2 mb-4 border rounded"
//             >
//               <option value="">Select mood</option>
//               <option value="Happy">😊 Happy</option>
//               <option value="Calm">😌 Calm</option>
//               <option value="Anxious">😰 Anxious</option>
//               <option value="Sad">😢 Sad</option>
//               <option value="Energetic">⚡ Energetic</option>
//             </select>
//             <textarea
//               value={moodNote}
//               onChange={(e) => setMoodNote(e.target.value)}
//               placeholder="Add a note about your day..."
//               className="w-full p-2 mb-4 border rounded h-24"
//             />
//             <div className="flex justify-end space-x-2">
//               <button
//                 onClick={() => setShowMoodTracker(false)}
//                 className="px-4 py-2 border rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={addMoodEntry}
//                 className="px-4 py-2 bg-blue-500 text-white rounded"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MoodTracker;
// MoodTracker.js

import React, { useState } from 'react';
import './MoodTracker.css';

const MoodTracker = () => {
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');
  const [moodHistory, setMoodHistory] = useState([]);

  const handleAddMood = () => {
    const newEntry = {
      mood,
      note,
      date: new Date().toLocaleDateString(),
    };
    setMoodHistory([...moodHistory, newEntry]);
    setMood('');
    setNote('');
  };

  return (
    <div className="mood-tracker">
      <h2>Mood Tracker</h2>
      <div className="input-section">
        <select value={mood} onChange={(e) => setMood(e.target.value)} className="mood-select">
          <option value="">Select your mood</option>
          <option value="Happy">Happy 😊</option>
          <option value="Content">Content 🙂</option>
          <option value="Neutral">Neutral 😐</option>
          <option value="Stressed">Stressed 😣</option>
        </select>
        <input
          type="text"
          placeholder="Add a note (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="note-input"
        />
        <button onClick={handleAddMood} disabled={!mood} className="add-mood-button">
          Add Mood
        </button>
      </div>

      <div className="mood-history">
        <h3>Mood History</h3>
        <ul>
          {moodHistory.map((entry, index) => (
            <li key={index}>
              <strong>Date:</strong> {entry.date} - <strong>Mood:</strong> {entry.mood}
              {entry.note && <p><strong>Note:</strong> {entry.note}</p>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MoodTracker;
