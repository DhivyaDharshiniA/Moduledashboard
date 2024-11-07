
import React, { useState } from 'react';
import MoodTracker from './MoodTracker';
import './Dashboard.css';

const questions = [
  {
    id: 1,
    question: "How do you typically handle stressful situations in your daily life?",
    options: [
      "I have effective coping strategies and usually manage stress well",
      "I sometimes use healthy coping methods but can get overwhelmed",
      "I often struggle to cope and feel overwhelmed",
      "I consistently feel unable to handle stress"
    ]
  },
  {
    id: 2,
    question: "How would you describe your energy levels throughout the day?",
    options: [
      "Consistently energetic and productive",
      "Generally good with some afternoon dips",
      "Often tired and struggling to stay motivated",
      "Constantly fatigued and lacking energy"
    ]
  },
  {
    id: 3,
    question: "How would you rate your social connections and support system?",
    options: [
      "Strong, supportive relationships with regular meaningful interactions",
      "Good relationships but could use more regular connection",
      "Limited social support with occasional feelings of isolation",
      "Feeling isolated with minimal social support"
    ]
  },
  {
    id: 4,
    question: "How often do you engage in activities that bring you joy and fulfillment?",
    options: [
      "Daily - I prioritize activities I enjoy",
      "Several times a week - I try to make time",
      "Occasionally - When I can find the time",
      "Rarely - I struggle to engage in enjoyable activities"
    ]
  },
  {
    id: 5,
    question: "How would you describe your sleep quality and patterns?",
    options: [
      "Consistent, restful sleep with regular patterns",
      "Generally good sleep with occasional disruptions",
      "Irregular sleep patterns affecting daily function",
      "Poor sleep quality significantly impacting well-being"
    ]
  },
  {
    id: 6,
    question: "How do you feel about your work-life balance?",
    options: [
      "Well-balanced with clear boundaries",
      "Mostly balanced with occasional overlap",
      "Often struggling to maintain boundaries",
      "Significantly imbalanced and stressed"
    ]
  },
  {
    id: 7,
    question: "How would you rate your ability to focus and concentrate?",
    options: [
      "Strong focus with minimal distractions",
      "Generally good focus with some interruptions",
      "Difficulty maintaining concentration",
      "Consistently struggling with focus"
    ]
  }
];

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(null);

  const calculateScore = () => {
    const totalQuestions = questions.length;
    const answeredCorrectly = answers.filter((answer) => answer < 2).length;
    return Math.round((answeredCorrectly / totalQuestions) * 100);
  };

  const handleAnswer = (optionIndex) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const finalScore = calculateScore();
      setScore(finalScore);
      setCurrentPage('results');
    }
  };

  const renderDashboard = () => (
    <div className="dashboard">
      <header className="header">
        <div className="logo">
          <div className="logo-circle">SS</div>
          <h1>Serenity Space</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#news">News</a></li>
            <li><a href="#tracker" onClick={() => setCurrentPage('moodTracker')}>Mood Tracker</a></li>
            <li><a href="#tasks">Task Creation</a></li>
            <li><a href="#wellbeing">Mental Well-being</a></li>
            <li><a href="#emergency">Emergency</a></li>
            <li><a href="#recommendations">Recommendations</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <div className="welcome-card">
          <div className="card-content">
            <h2>Your Journey to Mental Well-being</h2>
            <p className="subtitle">Discover insights about yourself through our comprehensive assessment</p>

            <div className="feature-grid">
              <div className="feature">
                <div className="feature-icon">🎯</div>
                <h3>Personal Insights</h3>
                <p>Gain deep understanding of your mental well-being patterns</p>
              </div>
              <div className="feature">
                <div className="feature-icon">📈</div>
                <h3>Track Progress</h3>
                <p>Monitor your journey and celebrate improvements</p>
              </div>
              <div className="feature">
                <div className="feature-icon">🎓</div>
                <h3>Expert Guidance</h3>
                <p>Receive tailored recommendations from mental health professionals</p>
              </div>
              <div className="feature">
                <div className="feature-icon">🌱</div>
                <h3>Growth Focus</h3>
                <p>Develop strategies for continuous personal development</p>
              </div>
            </div>

           
<button
  onClick={() => {
    setCurrentPage('assessment');
    setCurrentQuestion(0); // Reset to the first question
    setAnswers([]); // Clear previous answers
  }}
  className="primary-button"
>
  Begin Assessment
</button>

            <p className="note">Takes approximately 5-7 minutes to complete</p>
          </div>
        </div>
      </main>
    </div>
  );

  const renderAssessment = () => (
    <div className="assessment">
      <div className="assessment-card">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        <div className="question-header">
          <button
            onClick={() => {
              if (currentQuestion > 0) {
                setCurrentQuestion(currentQuestion - 1);
                setAnswers(answers.slice(0, -1));
              } else {
                setCurrentPage('dashboard');
                setCurrentQuestion(0);
                setAnswers([]);
              }
            }}
            className="back-button"
          >
            ← Back
          </button>
          <div className="question-progress">Question {currentQuestion + 1} of {questions.length}</div>
        </div>

        <div className="question-content">
          <h3 className="question-text">{questions[currentQuestion].question}</h3>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="option-button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderResults = () => (
    <div className="results">
      <div className="results-card">
        <h2>Your Well-being Assessment Results</h2>

        <div className="score-section">
          <div className="score-circle">
            <div className="score-value">{score}%</div>
            <div className="score-label">Well-being Score</div>
          </div>
        </div>

        <div className="results-content">
          <div className="insight-section">
            <h3>Key Insights</h3>
            <p>
              {score >= 75 ? (
                "You're demonstrating excellent emotional resilience and healthy lifestyle patterns. Your responses indicate strong coping mechanisms and positive daily habits."
              ) : score >= 50 ? (
                "You're maintaining a moderate level of well-being with room for enhancement. Some areas show strength while others might benefit from additional attention."
              ) : (
                "Your responses indicate you might be experiencing some challenges with your current well-being. This is an opportunity to implement supportive strategies."
              )}
            </p>
          </div>

          <div className="recommendations-section">
            <h3>Personalized Recommendations</h3>
            <div className="recommendation-cards">
              {score >= 75 ? (
                <>
                  <div className="recommendation-card">
                    <h4>Maintain Excellence</h4>
                    <p>Continue your positive practices while exploring new growth opportunities</p>
                  </div>
                  <div className="recommendation-card">
                    <h4>Share Your Journey</h4>
                    <p>Consider mentoring others and sharing your successful strategies</p>
                  </div>
                </>
              ) : score >= 50 ? (
                <>
                  <div className="recommendation-card">
                    <h4>Build Resilience</h4>
                    <p>Focus on developing stronger coping mechanisms for daily challenges</p>
                  </div>
                  <div className="recommendation-card">
                    <h4>Engage in Positive Activities</h4>
                    <p>Incorporate more enjoyable practices to enhance your routine</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="recommendation-card">
                    <h4>Establish a Support System</h4>
                    <p>Reach out to trusted individuals for emotional and social support</p>
                  </div>
                  <div className="recommendation-card">
                    <h4>Seek Professional Guidance</h4>
                    <p>Consider consulting a mental health professional for tailored support</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <button onClick={() => setCurrentPage('dashboard')} className="primary-button">
          Back to Dashboard
        </button>
      </div>
    </div>
  );

  return (
    <div className="dashboard-container">
      {currentPage === 'dashboard' && renderDashboard()}
      {currentPage === 'assessment' && renderAssessment()}
      {currentPage === 'results' && renderResults()}
      {currentPage === 'moodTracker' && <MoodTracker />}
    </div>
  );
};

export default Dashboard;
