// Indian States and Capitals with detailed information
        const statesData = {
            'Andhra Pradesh': {
                capital: 'Amaravati',
                language: 'Telugu',
                culture: 'Kuchipudi dance, Tirupati temple',
                population: '49.4 million',
                facts: 'Known as the "Rice Bowl of India"'
            },
            'Arunachal Pradesh': {
                capital: 'Itanagar',
                language: 'Hindi, English',
                culture: 'Tribal festivals, Buddhist monasteries',
                population: '1.4 million',
                facts: 'Land of the Dawn-Lit Mountains'
            },
            'Assam': {
                capital: 'Dispur',
                language: 'Assamese',
                culture: 'Bihu festival, Tea gardens',
                population: '31.2 million',
                facts: 'Largest tea-producing state in India'
            },
            'Bihar': {
                capital: 'Patna',
                language: 'Hindi, Bhojpuri',
                culture: 'Chhath Puja, Buddhist heritage',
                population: '104.1 million',
                facts: 'Birthplace of Buddhism and Jainism'
            },
            'Chhattisgarh': {
                capital: 'Raipur',
                language: 'Hindi, Chhattisgarhi',
                culture: 'Tribal art, Folk dances',
                population: '25.5 million',
                facts: 'Rich in mineral resources'
            },
            'Goa': {
                capital: 'Panaji',
                language: 'Konkani, Portuguese',
                culture: 'Carnival, Portuguese architecture',
                population: '1.5 million',
                facts: 'Smallest state by area'
            },
            'Gujarat': {
                capital: 'Gandhinagar',
                language: 'Gujarati',
                culture: 'Navratri, Garba dance',
                population: '60.4 million',
                facts: 'Birthplace of Mahatma Gandhi'
            },
            'Haryana': {
                capital: 'Chandigarh',
                language: 'Hindi, Haryanvi',
                culture: 'Wrestling, Agricultural festivals',
                population: '25.4 million',
                facts: 'Highest per capita income in India'
            },
            'Himachal Pradesh': {
                capital: 'Shimla',
                language: 'Hindi, Pahari',
                culture: 'Hill stations, Apple orchards',
                population: '6.9 million',
                facts: 'Popular tourist destination'
            },
            'Jharkhand': {
                capital: 'Ranchi',
                language: 'Hindi, Santali',
                culture: 'Tribal culture, Sarhul festival',
                population: '33.0 million',
                facts: 'Rich in coal and iron ore'
            },
            'Karnataka': {
                capital: 'Bengaluru',
                language: 'Kannada',
                culture: 'Mysore Dasara, Classical music',
                population: '61.1 million',
                facts: 'Silicon Valley of India'
            },
            'Kerala': {
                capital: 'Thiruvananthapuram',
                language: 'Malayalam',
                culture: 'Kathakali, Backwaters',
                population: '33.4 million',
                facts: 'Highest literacy rate in India'
            },
            'Madhya Pradesh': {
                capital: 'Bhopal',
                language: 'Hindi',
                culture: 'Khajuraho temples, Tribal art',
                population: '72.6 million',
                facts: 'Heart of India'
            },
            'Maharashtra': {
                capital: 'Mumbai',
                language: 'Marathi',
                culture: 'Ganesh Chaturthi, Bollywood',
                population: '112.4 million',
                facts: 'Financial capital of India'
            },
            'Manipur': {
                capital: 'Imphal',
                language: 'Manipuri',
                culture: 'Manipuri dance, Polo',
                population: '2.9 million',
                facts: 'Birthplace of modern polo'
            },
            'Meghalaya': {
                capital: 'Shillong',
                language: 'English, Khasi',
                culture: 'Living root bridges, Music',
                population: '3.0 million',
                facts: 'Wettest place on Earth (Cherrapunji)'
            },
            'Mizoram': {
                capital: 'Aizawl',
                language: 'Mizo, English',
                culture: 'Chapchar Kut festival',
                population: '1.1 million',
                facts: 'Highest literacy rate in Northeast'
            },
            'Nagaland': {
                capital: 'Kohima',
                language: 'English, Nagamese',
                culture: 'Hornbill festival, Tribal culture',
                population: '2.0 million',
                facts: 'Land of festivals'
            },
            'Odisha': {
                capital: 'Bhubaneswar',
                language: 'Odia',
                culture: 'Jagannath Puri, Classical dance',
                population: '42.0 million',
                facts: 'Temple city of India'
            },
            'Punjab': {
                capital: 'Chandigarh',
                language: 'Punjabi',
                culture: 'Bhangra, Golden Temple',
                population: '27.7 million',
                facts: 'Granary of India'
            },
            'Rajasthan': {
                capital: 'Jaipur',
                language: 'Hindi, Rajasthani',
                culture: 'Desert festivals, Palaces',
                population: '68.5 million',
                facts: 'Largest state by area'
            },
            'Sikkim': {
                capital: 'Gangtok',
                language: 'Nepali, English',
                culture: 'Buddhist monasteries, Losar',
                population: '0.6 million',
                facts: 'First organic state in India'
            },
            'Tamil Nadu': {
                capital: 'Chennai',
                language: 'Tamil',
                culture: 'Bharatanatyam, Temples',
                population: '72.1 million',
                facts: 'Cradle of Dravidian culture'
            },
            'Telangana': {
                capital: 'Hyderabad',
                language: 'Telugu, Urdu',
                culture: 'Bonalu festival, IT hub',
                population: '35.0 million',
                facts: 'Cyberabad - IT capital'
            },
            'Tripura': {
                capital: 'Agartala',
                language: 'Bengali, Tripuri',
                culture: 'Kharchi Puja, Bamboo crafts',
                population: '3.7 million',
                facts: 'Land of diverse tribes'
            },
            'Uttar Pradesh': {
                capital: 'Lucknow',
                language: 'Hindi, Urdu',
                culture: 'Taj Mahal, Kathak dance',
                population: '199.8 million',
                facts: 'Most populous state in India'
            },
            'Uttarakhand': {
                capital: 'Dehradun',
                language: 'Hindi, Garhwali',
                culture: 'Char Dham, Adventure sports',
                population: '10.1 million',
                facts: 'Land of Gods (Dev Bhoomi)'
            },
            'West Bengal': {
                capital: 'Kolkata',
                language: 'Bengali',
                culture: 'Durga Puja, Literature',
                population: '91.3 million',
                facts: 'Cultural capital of India'
            }
        };

        // Application state
        let currentUser = null;
let users = {};
let authToken = null;
        let currentQuiz = null;
        let quizTimer = null;
        let soundEnabled = true;
        let isDarkMode = false;

        // Initialize application
        document.addEventListener('DOMContentLoaded', function() {
            loadTheme();
            checkAuthStatus();
            populateStatesInfo();
        });

        // Authentication functions
        function showLogin() {
            document.getElementById('loginForm').style.display = 'block';
            document.getElementById('signupForm').style.display = 'none';
            clearAuthMessage();
        }

        function showSignup() {
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('signupForm').style.display = 'block';
            clearAuthMessage();
        }

        function login() {
            const username = document.getElementById('loginUsername').value.trim();
            const password = document.getElementById('loginPassword').value.trim();

            if (!username || !password) {
                showAuthMessage('Please fill in all fields', 'error');
                return;
            }

    fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
        if (data.token) {
            authToken = data.token;
            currentUser = data.user;
            showApp();
            playSound('success');
        } else {
            showAuthMessage(data.error || 'Login failed', 'error');
            playSound('error');
        }
    })
    .catch(() => {
        showAuthMessage('Server error', 'error');
        playSound('error');
    });
        }

        function signup() {
            const name = document.getElementById('signupName').value.trim();
            const username = document.getElementById('signupUsername').value.trim();
            const password = document.getElementById('signupPassword').value.trim();

            if (!name || !username || !password) {
                showAuthMessage('Please fill in all fields', 'error');
                return;
            }

            if (users[username]) {
                showAuthMessage('Username already exists', 'error');
                return;
            }

            if (password.length < 4) {
                showAuthMessage('Password must be at least 4 characters', 'error');
                return;
            }

            const newUser = {
                name: name,
                username: username,
                password: password,
                quizzes: [],
                totalQuizzes: 0,
                bestScore: 0,
                totalScore: 0,
                joinDate: new Date().toISOString()
            };

    fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, username, password })
    })
    .then(res => res.json())
    .then(data => {
        if (data.message) {
            showAuthMessage('Account created successfully! Please login.', 'success');
            showLogin();
            playSound('success');
        } else {
            showAuthMessage(data.error || 'Signup failed', 'error');
        }
    })
    .catch(() => {
        showAuthMessage('Server error', 'error');
    });
        }

        function logout() {
    currentUser = null;
    authToken = null;
    document.getElementById('authContainer').style.display = 'flex';
    document.getElementById('appContainer').classList.remove('active');
    showLogin();
        }

        function checkAuthStatus() {
    // No auto-login for now; require login each session
        }

        function showApp() {
            document.getElementById('authContainer').style.display = 'none';
            document.getElementById('appContainer').classList.add('active');
            document.getElementById('currentUserName').textContent = currentUser.name;
            updateDashboardStats();
            updateLeaderboard();
            addExploreNavItem(); // Ensure nav item is added
        }

        function showAuthMessage(message, type) {
            const messageDiv = document.getElementById('authMessage');
            messageDiv.innerHTML = `<div class="${type}-message">${message}</div>`;
            setTimeout(() => {
                messageDiv.innerHTML = '';
            }, 3000);
        }

        function clearAuthMessage() {
            document.getElementById('authMessage').innerHTML = '';
        }

        // Navigation functions
        function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page if it exists
    const pageEl = document.getElementById(pageId + 'Page');
    if (pageEl) {
        pageEl.classList.add('active');
    }

    // Update navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    const navMap = {
        'dashboard': 0,
        'quiz': 1,
        'info': 2,
        'leaderboard': 3
    };
    if (navMap[pageId] !== undefined) {
        navItems[navMap[pageId]].classList.add('active');
    }

    // Update page-specific content
    if (pageId === 'leaderboard') {
        updateLeaderboard();
    }
        }

        // Quiz functions
        function startQuiz() {
            const states = Object.keys(statesData);
            const shuffledStates = states.sort(() => 0.5 - Math.random()).slice(0, 10);
            
            currentQuiz = {
                questions: shuffledStates,
                currentIndex: 0,
                score: 0,
                answers: [],
                startTime: Date.now(),
                timeElapsed: 0
            };

            showPage('quiz');
            startQuizTimer();
            loadQuestion();
            playSound('start');
        }

        function loadQuestion() {
            if (currentQuiz.currentIndex >= currentQuiz.questions.length) {
                endQuiz();
                return;
            }

            const state = currentQuiz.questions[currentQuiz.currentIndex];
            const correctAnswer = statesData[state].capital;
            
            // Generate wrong options
            const allCapitals = Object.values(statesData).map(s => s.capital);
            const wrongOptions = allCapitals
                .filter(capital => capital !== correctAnswer)
                .sort(() => 0.5 - Math.random())
                .slice(0, 3);
            
            const options = [correctAnswer, ...wrongOptions].sort(() => 0.5 - Math.random());

            // Update UI
            document.getElementById('questionState').textContent = state;
            document.getElementById('currentQuestion').textContent = currentQuiz.currentIndex + 1;
            document.getElementById('totalQuestions').textContent = currentQuiz.questions.length;
            document.getElementById('currentScore').textContent = currentQuiz.score;

            // Update progress bar
            const progress = ((currentQuiz.currentIndex + 1) / currentQuiz.questions.length) * 100;
            document.getElementById('progressFill').style.width = progress + '%';

            // Create option buttons
            const optionsGrid = document.getElementById('optionsGrid');
            optionsGrid.innerHTML = '';
            
            options.forEach((option, index) => {
                const button = document.createElement('button');
                button.className = 'option-btn';
                button.textContent = option;
                button.onclick = () => selectAnswer(option, correctAnswer, button);
                optionsGrid.appendChild(button);
            });

            // Hide feedback and next button
            document.getElementById('quizFeedback').style.display = 'none';
            document.getElementById('nextQuestionBtn').style.display = 'none';
        }

        function selectAnswer(selectedAnswer, correctAnswer, buttonElement) {
            const isCorrect = selectedAnswer === correctAnswer;
            const feedback = document.getElementById('quizFeedback');
            
            // Disable all option buttons
            const optionButtons = document.querySelectorAll('.option-btn');
            optionButtons.forEach(btn => {
                btn.classList.add('disabled');
                if (btn.textContent === correctAnswer) {
                    btn.classList.add('correct');
                } else if (btn === buttonElement && !isCorrect) {
                    btn.classList.add('incorrect');
                }
            });

            // Update score and show feedback
            if (isCorrect) {
                currentQuiz.score++;
                feedback.className = 'feedback correct';
                feedback.innerHTML = `🎉 Correct! ${selectedAnswer} is the capital of ${currentQuiz.questions[currentQuiz.currentIndex]}`;
                playSound('correct');
            } else {
                feedback.className = 'feedback incorrect';
                feedback.innerHTML = `❌ Wrong! The correct answer is ${correctAnswer}`;
                playSound('incorrect');
            }

            // Record answer
            currentQuiz.answers.push({
                state: currentQuiz.questions[currentQuiz.currentIndex],
                selectedAnswer: selectedAnswer,
                correctAnswer: correctAnswer,
                isCorrect: isCorrect
            });

            feedback.style.display = 'block';
            document.getElementById('nextQuestionBtn').style.display = 'inline-block';
            document.getElementById('currentScore').textContent = currentQuiz.score;
        }

        function nextQuestion() {
            currentQuiz.currentIndex++;
            loadQuestion();
        }

        function endQuiz() {
            clearInterval(quizTimer);
            currentQuiz.timeElapsed = Date.now() - currentQuiz.startTime;
            
            // Save quiz results
            saveQuizResults();
            
            // Show results
            showQuizResults();
            playSound('finish');
        }

        function saveQuizResults() {
            const percentage = Math.round((currentQuiz.score / currentQuiz.questions.length) * 100);
            
            const quizResult = {
                date: new Date().toISOString(),
                score: currentQuiz.score,
                total: currentQuiz.questions.length,
                percentage: percentage,
                timeElapsed: currentQuiz.timeElapsed,
                answers: currentQuiz.answers
            };

    fetch('http://localhost:5000/api/quiz/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken
        },
        body: JSON.stringify({ quizResult })
    })
    .then(res => res.json())
    .then(() => {
        // Refresh user stats from backend
        fetchUserStats();
    });
        }

        function showQuizResults() {
            const percentage = Math.round((currentQuiz.score / currentQuiz.questions.length) * 100);
            const timeMinutes = Math.floor(currentQuiz.timeElapsed / 60000);
            const timeSeconds = Math.floor((currentQuiz.timeElapsed % 60000) / 1000);
            const timeString = `${timeMinutes.toString().padStart(2, '0')}:${timeSeconds.toString().padStart(2, '0')}`;

            document.getElementById('finalScoreDisplay').textContent = percentage + '%';
            document.getElementById('correctAnswers').textContent = currentQuiz.score;
            document.getElementById('wrongAnswers').textContent = currentQuiz.questions.length - currentQuiz.score;
            document.getElementById('timeTaken').textContent = timeString;
            document.getElementById('accuracyRate').textContent = percentage + '%';

            // Performance message
            let message = '';
            let icon = '';
            
            if (percentage >= 90) {
                message = 'Outstanding! You\'re a geography champion! 🏆';
                icon = '🌟';
            } else if (percentage >= 70) {
                message = 'Great job! You know India well! 👏';
                icon = '🎉';
            } else if (percentage >= 50) {
                message = 'Good effort! Keep learning about India! 📚';
                icon = '👍';
            } else {
                message = 'Keep practicing! You\'ll improve with time! 💪';
                icon = '🌱';
            }

            document.getElementById('performanceMessage').textContent = message;
            document.getElementById('celebrationIcon').textContent = icon;

            showPage('results');
        }

        function startQuizTimer() {
            let seconds = 0;
            quizTimer = setInterval(() => {
                seconds++;
                const minutes = Math.floor(seconds / 60);
                const remainingSeconds = seconds % 60;
                document.getElementById('quizTimer').textContent = 
                    `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
            }, 1000);
        }

        // Dashboard functions
        function updateDashboardStats() {
    if (!currentUser) return;
    document.getElementById('totalQuizzes').textContent = currentUser.totalQuizzes;
    document.getElementById('bestScore').textContent = currentUser.bestScore + '%';
    const avgScore = currentUser.totalQuizzes > 0 ? Math.round(currentUser.totalScore / currentUser.totalQuizzes) : 0;
    document.getElementById('avgScore').textContent = avgScore + '%';
    // Get leaderboard and rank from backend
    fetch('http://localhost:5000/api/quiz/leaderboard')
        .then(res => res.json())
        .then(users => {
            const userRank = users.findIndex(user => user.username === currentUser.username) + 1;
            document.getElementById('userRank').textContent = userRank > 0 ? userRank : '-';
        });
        }

        // State info functions
        function populateStatesInfo() {
            const grid = document.getElementById('statesInfoGrid');
            grid.innerHTML = '';

            Object.entries(statesData).forEach(([state, info]) => {
                const card = document.createElement('div');
                card.className = 'state-card';
                card.innerHTML = `
                    <div class="state-card-header">
                        <div class="state-card-title">${state}</div>
                        <div class="state-card-icon">🏛️</div>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Capital:</span>
                        <span class="info-value">${info.capital}</span>
                    </div>
                    <div class="state-info" id="info-${state.replace(/\s+/g, '')}">
                        <div class="info-item">
                            <span class="info-label">🗣️ Language:</span>
                            <span class="info-value">${info.language}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">🎭 Culture:</span>
                            <span class="info-value">${info.culture}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">👥 Population:</span>
                            <span class="info-value">${info.population}</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">💡 Facts:</span>
                            <span class="info-value">${info.facts}</span>
                        </div>
                    </div>
                `;
                
                card.onclick = () => toggleStateInfo(state.replace(/\s+/g, ''));
                grid.appendChild(card);
            });
        }

        function toggleStateInfo(stateId) {
            const infoDiv = document.getElementById(`info-${stateId}`);
            infoDiv.classList.toggle('active');
        }

        // Leaderboard functions
        function updateLeaderboard() {
    const leaderboardBody = document.getElementById('leaderboardBody');
    leaderboardBody.innerHTML = '';
    fetch('http://localhost:5000/api/quiz/leaderboard')
        .then(res => res.json())
        .then(users => {
            users.forEach((user, index) => {
                const rank = index + 1;
                const avgScore = user.avgScore;
                const isCurrentUser = currentUser && user.username === currentUser.username;
                let rankClass = '';
                let rankIcon = '';
                if (rank === 1) { rankClass = 'gold'; rankIcon = '🥇'; }
                else if (rank === 2) { rankClass = 'silver'; rankIcon = '🥈'; }
                else if (rank === 3) { rankClass = 'bronze'; rankIcon = '🥉'; }
                const row = document.createElement('div');
                row.className = `table-row ${isCurrentUser ? 'current-user' : ''}`;
                row.innerHTML = `
                    <div class="rank ${rankClass}">${rankIcon} ${rank}</div>
                    <div>${user.name} ${isCurrentUser ? '(You)' : ''}</div>
                    <div>${user.bestScore}%</div>
                    <div>${user.totalQuizzes}</div>
                    <div class="accuracy">${avgScore}%</div>
                `;
                leaderboardBody.appendChild(row);
            });
        });
        }

        // Theme and sound functions
        function toggleTheme() {
            isDarkMode = !isDarkMode;
            document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
            document.getElementById('themeIcon').textContent = isDarkMode ? '☀️' : '🌙';
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        }

        function loadTheme() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                isDarkMode = true;
                document.documentElement.setAttribute('data-theme', 'dark');
                document.getElementById('themeIcon').textContent = '☀️';
            }
        }

        function toggleSound() {
            soundEnabled = !soundEnabled;
            document.getElementById('soundIcon').textContent = soundEnabled ? '🔊' : '🔇';
            localStorage.setItem('soundEnabled', soundEnabled);
        }

        function playSound(type) {
            if (!soundEnabled) return;
            
            // Create audio context for sound effects
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                let frequency = 440;
                let duration = 200;
                
                switch(type) {
                    case 'correct':
                        frequency = 800;
                        duration = 300;
                        break;
                    case 'incorrect':
                        frequency = 200;
                        duration = 500;
                        break;
                    case 'success':
                        frequency = 600;
                        duration = 400;
                        break;
                    case 'error':
                        frequency = 150;
                        duration = 600;
                        break;
                    case 'start':
                        frequency = 500;
                        duration = 200;
                        break;
                    case 'finish':
                        frequency = 700;
                        duration = 800;
                        break;
                }
                
                oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + duration / 1000);
            } catch (e) {
                // Fallback for browsers that don't support Web Audio API
                console.log('Sound effect:', type);
            }
        }

        // Load sound preference
        document.addEventListener('DOMContentLoaded', function() {
            const savedSound = localStorage.getItem('soundEnabled');
            if (savedSound === 'false') {
                soundEnabled = false;
                document.getElementById('soundIcon').textContent = '🔇';
            }
        });
    

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'96743e301572b2cd',t:'MTc1Mzg3MjA4MC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();


// --- State-Wise Progress Tracker ---

function markStateCompleted(stateName) {
    if (!authToken) return;
    fetch('http://localhost:5000/api/quiz/complete-state', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken
        },
        body: JSON.stringify({ stateName })
    });
}

function getCompletedCount() {
    if (!authToken) return 0;
    // This function is now async
    return fetch('http://localhost:5000/api/quiz/progress', {
        headers: { 'Authorization': authToken }
    })
    .then(res => res.json())
    .then(data => data.completedStates.length)
    .catch(() => 0);
}

function showProgressTracker() {
    const totalStates = Object.keys(statesData).length;
    if (!authToken) return;
    getCompletedCount().then(completed => {
        let tracker = document.getElementById("progress-tracker");
        if (!tracker) {
            tracker = document.createElement("div");
            tracker.id = "progress-tracker";
            document.body.appendChild(tracker);
        }
        tracker.textContent = `✅ You've completed quizzes for ${completed}/${totalStates} states!`;
        tracker.style.padding = "10px";
        tracker.style.marginTop = "10px";
        tracker.style.background = "#e0ffe0";
        tracker.style.border = "1px solid #90ee90";
        tracker.style.fontWeight = "bold";
        tracker.style.fontFamily = "Arial, sans-serif";
    });
}

// Call showProgressTracker on page load
window.addEventListener("DOMContentLoaded", () => {
    showProgressTracker();
});

function fetchUserStats() {
    // After saving quiz, refresh user stats
    fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: currentUser.username, password: '' }) // password not needed, but backend requires it
    })
    .then(res => res.json())
    .then(data => {
        if (data.user) {
            currentUser = data.user;
            updateDashboardStats();
        }
    });
}

// --- Extended State Data for Explore States Quiz ---
// Add MCQs for a few sample states (expand as needed)
statesData['Andhra Pradesh'].animal = 'Blackbuck';
statesData['Andhra Pradesh'].dance = 'Kuchipudi';
statesData['Andhra Pradesh'].festival = 'Ugadi';
statesData['Andhra Pradesh'].mcqs = [
  {
    question: 'What is the state animal of Andhra Pradesh?',
    options: ['Blackbuck', 'Tiger', 'Lion', 'Elephant'],
    answer: 'Blackbuck'
  },
  {
    question: 'Which dance form is famous in Andhra Pradesh?',
    options: ['Kuchipudi', 'Bharatanatyam', 'Kathak', 'Odissi'],
    answer: 'Kuchipudi'
  },
  {
    question: 'Which festival is widely celebrated in Andhra Pradesh?',
    options: ['Ugadi', 'Pongal', 'Bihu', 'Lohri'],
    answer: 'Ugadi'
  }
];

statesData['Gujarat'].animal = 'Asiatic Lion';
statesData['Gujarat'].dance = 'Garba';
statesData['Gujarat'].festival = 'Navratri';
statesData['Gujarat'].mcqs = [
  {
    question: 'What is the state animal of Gujarat?',
    options: ['Asiatic Lion', 'Blackbuck', 'Tiger', 'Elephant'],
    answer: 'Asiatic Lion'
  },
  {
    question: 'Which dance form is famous in Gujarat?',
    options: ['Garba', 'Bhangra', 'Kathakali', 'Bharatanatyam'],
    answer: 'Garba'
  },
  {
    question: 'Which festival is widely celebrated in Gujarat?',
    options: ['Navratri', 'Diwali', 'Pongal', 'Bihu'],
    answer: 'Navratri'
  }
];

statesData['Tamil Nadu'].animal = 'Nilgiri Tahr';
statesData['Tamil Nadu'].dance = 'Bharatanatyam';
statesData['Tamil Nadu'].festival = 'Pongal';
statesData['Tamil Nadu'].mcqs = [
  {
    question: 'What is the state animal of Tamil Nadu?',
    options: ['Nilgiri Tahr', 'Tiger', 'Lion', 'Blackbuck'],
    answer: 'Nilgiri Tahr'
  },
  {
    question: 'Which dance form is famous in Tamil Nadu?',
    options: ['Bharatanatyam', 'Kathak', 'Garba', 'Kuchipudi'],
    answer: 'Bharatanatyam'
  },
  {
    question: 'Which festival is widely celebrated in Tamil Nadu?',
    options: ['Pongal', 'Navratri', 'Bihu', 'Lohri'],
    answer: 'Pongal'
  }
];

// --- Explore States Quiz Logic ---
let exploreQuizState = null;
let exploreQuizQuestions = [];
let exploreQuizIndex = 0;
let exploreQuizScore = 0;

function showExploreQuizPage() {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    let page = document.getElementById('exploreQuizPage');
    if (!page) {
        page = document.createElement('div');
        page.id = 'exploreQuizPage';
        page.className = 'page active';
        page.innerHTML = `
            <div style="text-align:center; margin-bottom:20px;">
                <h2>Explore States Quiz</h2>
                <div>Select a state to begin:</div>
                <select id="exploreStateSelect" style="margin:10px; padding:5px;"></select>
                <button class="btn" onclick="startExploreQuiz()">Start Quiz</button>
            </div>
            <div id="exploreQuizContainer"></div>
        `;
        document.querySelector('.main-content').appendChild(page);
    }
    page.classList.add('active');
    // Populate state select
    const select = document.getElementById('exploreStateSelect');
    select.innerHTML = '';
    Object.keys(statesData).forEach(state => {
        const opt = document.createElement('option');
        opt.value = state;
        opt.textContent = state;
        select.appendChild(opt);
    });
    document.getElementById('exploreQuizContainer').innerHTML = '';
}

function startExploreQuiz() {
    exploreQuizState = document.getElementById('exploreStateSelect').value;
    const mcqs = statesData[exploreQuizState].mcqs || [];
    exploreQuizQuestions = mcqs.sort(() => 0.5 - Math.random()).slice(0, 3);
    exploreQuizIndex = 0;
    exploreQuizScore = 0;
    showExploreQuizQuestion();
}

function showExploreQuizQuestion() {
    const container = document.getElementById('exploreQuizContainer');
    if (exploreQuizIndex >= exploreQuizQuestions.length) {
        container.innerHTML = `<div style='font-size:1.2em; margin:20px;'>Quiz Complete!<br>Score: ${exploreQuizScore}/${exploreQuizQuestions.length}</div>`;
        return;
    }
    const q = exploreQuizQuestions[exploreQuizIndex];
    container.innerHTML = `
        <div style='margin:20px 0;'>${q.question}</div>
        <div id='exploreOptions'></div>
        <div id='exploreFeedback' style='margin:10px;'></div>
        <button class='btn' id='exploreNextBtn' style='display:none;'>Next</button>
    `;
    const optionsDiv = document.getElementById('exploreOptions');
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => selectExploreAnswer(opt);
        optionsDiv.appendChild(btn);
    });
}

function selectExploreAnswer(selected) {
    const q = exploreQuizQuestions[exploreQuizIndex];
    const feedback = document.getElementById('exploreFeedback');
    if (selected === q.answer) {
        exploreQuizScore++;
        feedback.textContent = '✅ Correct!';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = `❌ Wrong! Correct: ${q.answer}`;
        feedback.style.color = 'red';
    }
    document.querySelectorAll('#exploreOptions .option-btn').forEach(btn => btn.disabled = true);
    document.getElementById('exploreNextBtn').style.display = 'inline-block';
    document.getElementById('exploreNextBtn').onclick = () => {
        exploreQuizIndex++;
        showExploreQuizQuestion();
    };
}

// --- Navigation update for Explore States Quiz ---
// Add a new nav item and pageId handler only after app is shown
function addExploreNavItem() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu && !document.getElementById('exploreNavItem')) {
        const exploreNav = document.createElement('div');
        exploreNav.className = 'nav-item';
        exploreNav.id = 'exploreNavItem';
        exploreNav.textContent = '🧭 Explore States Quiz';
        exploreNav.onclick = function() { showPage('explore'); };
        navMenu.appendChild(exploreNav);
    }
}

// Extend showPage to handle 'explore'
const originalShowPage = showPage;
showPage = function(pageId) {
    originalShowPage(pageId);
    if (pageId === 'explore') {
        showExploreQuizPage();
    }
};

// Call addExploreNavItem after app is shown
const originalShowApp = showApp;
showApp = function() {
    originalShowApp();
    addExploreNavItem();
};
