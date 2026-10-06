/**
 * ============================================================================
 * THIRUKKURAL 467 — INTERACTIVE 3D EDUCATIONAL WEB EXPERIENCE
 * Pure Vanilla JavaScript (Zero External Libraries)
 * 
 * "எண்ணித் துணிக கருமம்; துணிந்தபின்
 * எண்ணுவம் என்பது இழுக்கு."
 * ============================================================================
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. AUDIO SYNTHESIS ENGINE (Web Audio API)
     Zero external audio files needed; synthesizes meditative bells and clicks.
     ========================================================================== */
  class SoundEngine {
    constructor() {
      this.audioCtx = null;
      this.isMuted = localStorage.getItem('kural_sound_muted') === 'true';
      this.initContext = this.initContext.bind(this);
    }

    initContext() {
      if (!this.audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          this.audioCtx = new AudioContextClass();
        }
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
    }

    playChime(type = 'success') {
      if (this.isMuted) return;
      this.initContext();
      if (!this.audioCtx) return;

      const now = this.audioCtx.currentTime;

      if (type === 'success') {
        // High harmonic temple singing bowl
        const freqs = [528, 660, 792]; // Solfeggio golden ratio chord
        freqs.forEach((freq, idx) => {
          const osc = this.audioCtx.createOscillator();
          const gain = this.audioCtx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);

          gain.gain.setValueAtTime(0, now);
          gain.gain.linearRampToValueAtTime(0.12 / (idx + 1), now + idx * 0.08 + 0.04);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8 + idx * 0.1);

          osc.connect(gain);
          gain.connect(this.audioCtx.destination);

          osc.start(now + idx * 0.08);
          osc.stop(now + 2.2);
        });
      } else if (type === 'warning') {
        // Low cautionary resonant tone
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(140, now + 0.6);

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now);
        osc.stop(now + 0.9);
      } else if (type === 'click') {
        // Crisp tactile click
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);

        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now);
        osc.stop(now + 0.06);
      } else if (type === 'tick') {
        // Timer countdown tick
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(1100, now);

        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now);
        osc.stop(now + 0.05);
      }
    }

    toggleMute() {
      this.isMuted = !this.isMuted;
      localStorage.setItem('kural_sound_muted', this.isMuted);
      return this.isMuted;
    }
  }

  const sound = new SoundEngine();

  /* ==========================================================================
     2. TAMIL TEXT-TO-SPEECH (Web Speech API)
     Pronounces Thirukkural 467 in Tamil
     ========================================================================== */
  function speakKural() {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported in your browser.');
      return;
    }
    sound.initContext();
    window.speechSynthesis.cancel();

    const tamilText = "எண்ணித் துணிக கருமம்; துணிந்தபின் எண்ணுவம் என்பது இழுக்கு.";
    const utterance = new SpeechSynthesisUtterance(tamilText);
    utterance.rate = 0.85;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const tamilVoice = voices.find(v => v.lang.includes('ta') || v.lang.includes('ta-IN'));
    if (tamilVoice) {
      utterance.voice = tamilVoice;
    }

    const pronounceBtn = document.getElementById('pronounceBtn');
    if (pronounceBtn) {
      pronounceBtn.classList.add('playing');
      utterance.onend = () => pronounceBtn.classList.remove('playing');
      utterance.onerror = () => pronounceBtn.classList.remove('playing');
    }

    window.speechSynthesis.speak(utterance);
    sound.playChime('success');
  }

  /* ==========================================================================
     3. 3D TILT ENGINE & SPECULAR LIGHTING INTERACTION
     Adds realistic spatial perspective depth on mouse movement
     ========================================================================== */
  function init3DTiltEngine() {
    const tiltCards = document.querySelectorAll('.tilt-card');
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    if (isTouchDevice) return; // Skip 3D mouse tracking on purely mobile touch screens

    tiltCards.forEach(card => {
      let bounds = null;

      function updateBounds() {
        bounds = card.getBoundingClientRect();
      }

      function handleMouseMove(e) {
        if (!bounds) updateBounds();
        const mouseX = e.clientX - bounds.left;
        const mouseY = e.clientY - bounds.top;

        const centerX = bounds.width / 2;
        const centerY = bounds.height / 2;

        const deltaX = (mouseX - centerX) / centerX;
        const deltaY = (mouseY - centerY) / centerY;

        // Controlled 3D rotation limits (max 7 degrees)
        const rotateX = (-deltaY * 6).toFixed(2);
        const rotateY = (deltaX * 6).toFixed(2);

        // Update specular highlight CSS variables
        card.style.setProperty('--mouse-x', `${mouseX}px`);
        card.style.setProperty('--mouse-y', `${mouseY}px`);

        card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;
      }

      function handleMouseLeave() {
        card.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
      }

      card.addEventListener('mouseenter', updateBounds);
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });
  }

  /* ==========================================================================
     4. AMBIENT BACKGROUND PARTICLES CANVAS
     Gentle floating golden/terracotta dust motes reflecting Tamil temple ambiance
     ========================================================================== */
  function initParticleCanvas() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    const PARTICLE_COUNT = Math.min(32, Math.floor(window.innerWidth / 32));

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2.2 + 0.6;
        this.speedX = (Math.random() - 0.5) * 0.35;
        this.speedY = -Math.random() * 0.45 - 0.1; // Gentle upwards floating
        this.opacity = Math.random() * 0.5 + 0.1;
        this.hue = Math.random() > 0.5 ? 42 : 12; // Gold or Terracotta hue
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.y < 0 || this.x < 0 || this.x > width) {
          this.reset();
          this.y = height + 10;
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 70%, 60%, ${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }
    animate();
  }

  /* ==========================================================================
     5. THEME & SOUND CONTROLS
     ========================================================================== */
  function initControls() {
    // Theme toggle
    const themeBtn = document.getElementById('themeToggleBtn');
    const sunIcon = themeBtn ? themeBtn.querySelector('.sun-icon') : null;
    const moonIcon = themeBtn ? themeBtn.querySelector('.moon-icon') : null;
    const htmlEl = document.documentElement;

    const savedTheme = localStorage.getItem('kural_theme') || 'manuscript';
    htmlEl.setAttribute('data-theme', savedTheme);
    updateThemeIcons(savedTheme);

    function updateThemeIcons(theme) {
      if (!sunIcon || !moonIcon) return;
      if (theme === 'night') {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
      } else {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
      }
    }

    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        sound.playChime('click');
        const currentTheme = htmlEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'night' ? 'manuscript' : 'night';
        htmlEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('kural_theme', newTheme);
        updateThemeIcons(newTheme);
      });
    }

    // Sound toggle
    const soundBtn = document.getElementById('soundToggleBtn');
    const soundOnIcon = soundBtn ? soundBtn.querySelector('.sound-on-icon') : null;
    const soundOffIcon = soundBtn ? soundBtn.querySelector('.sound-off-icon') : null;

    function updateSoundIcons(isMuted) {
      if (!soundOnIcon || !soundOffIcon) return;
      if (isMuted) {
        soundOnIcon.classList.add('hidden');
        soundOffIcon.classList.remove('hidden');
      } else {
        soundOnIcon.classList.remove('hidden');
        soundOffIcon.classList.add('hidden');
      }
    }
    updateSoundIcons(sound.isMuted);

    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        const isMuted = sound.toggleMute();
        updateSoundIcons(isMuted);
        if (!isMuted) sound.playChime('click');
      });
    }

    // Mobile nav menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('mainNav');
    if (mobileMenuBtn && navLinks) {
      mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-open');
        sound.playChime('click');
      });

      // Close menu on link click
      navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('mobile-open');
        });
      });
    }

    // Pronunciation button
    const pronounceBtn = document.getElementById('pronounceBtn');
    if (pronounceBtn) {
      pronounceBtn.addEventListener('click', speakKural);
    }
  }

  /* ==========================================================================
     6. MAIN INTERACTIVE DECISION GAME: "What Would You Do?"
     4 Real-Life Scenarios with Dynamic Images & Valluvar Wisdom Scoring
     ========================================================================== */
  const SCENARIOS = [
    {
      id: 1,
      category: "Student Life",
      categoryIcon: "🎓",
      tamilTitle: "படிப்பும் தேர்வும்",
      image: "images/scenario-student.png",
      imageAlt: "Student revising for exam with books at desk while phone lights up with game invitation",
      imageBadge: "Exam vs Gaming",
      question: "You have an important exam tomorrow. Your friends invite you to play video games tonight.",
      context: "It is 7:30 PM. You still have two major chapters to revise. Your friends message: 'Come on, just one match! Everyone is here!'",
      options: [
        {
          key: "A",
          title: "Join immediately without a second thought.",
          desc: "Drop your books, boot up the console, and promise yourself you will study tomorrow at 5 AM.",
          type: "impulsive",
          resultTitle: "❌ Acted Before Thinking",
          resultSubtitle: "விளைவறியா அவசரச் செயல் (Impulsive Action)",
          resultSymbol: "❌",
          explanation: "You jumped into gaming purely out of social excitement without pausing to calculate the consequence: exhaustion, zero revision, and exam anxiety.",
          kuralNote: "எண்ணித் துணிக கருமம் — Before taking the step, Valluvar tells us to calculate the stakes. Acting first and regretting in the exam hall is painful."
        },
        {
          key: "B",
          title: "Pause, weigh the consequences, and politely decline to focus on revision.",
          desc: "Think about tomorrow's score, your preparation status, and celebrate with friends after the exam.",
          type: "wisdom",
          resultTitle: "✅ You Followed Thirukkural 467!",
          resultSubtitle: "எண்ணித் துணிந்த சிறந்த முடிவு (Wise Resolution)",
          resultSymbol: "✅",
          explanation: "You deliberately considered the consequences first. Once your decision was made, you owned it with confidence without feeling left out.",
          kuralNote: "எண்ணித் துணிக கருமம்; துணிந்தபின் எண்ணுவம் என்பது இழுக்கு — You analyzed first, committed to your goal, and proceeded with total peace of mind."
        },
        {
          key: "C",
          title: "Spend 2 hours agonizing back and forth without studying or playing.",
          desc: "Worry about missing fun, open your textbook, stare at WhatsApp, feel guilty, and accomplish nothing.",
          type: "overthinking",
          resultTitle: "⚠️ Overthinking Prevented Action",
          resultSubtitle: "தயக்கமும் இழுக்கும் (Paralysis by Hesitation)",
          resultSymbol: "⚠️",
          explanation: "Thinking before deciding is vital, but prolonged hesitation without action is crippling. You wasted valuable study hours in endless conflict.",
          kuralNote: "துணிந்தபின் எண்ணுவம் என்பது இழுக்கு — Once a situation demands resolution, failing to decide creates stagnation and weakness."
        }
      ]
    },
    {
      id: 2,
      category: "Personal Finance",
      categoryIcon: "💳",
      tamilTitle: "பொருளாதார முடிவு",
      image: "images/scenario-money.png",
      imageAlt: "Person pausing before clicking Buy Now on a 60% off flash sale screen while checking monthly budget and necessity",
      imageBadge: "Discount Temptation",
      question: "You see an expensive gadget online with a flashy '60% OFF - Ends in 10 Minutes' banner.",
      context: "Your bank account has limited savings reserved for rent and emergencies. The countdown timer is ticking aggressively.",
      options: [
        {
          key: "A",
          title: "Click 'Buy Now' immediately using an EMI plan.",
          desc: "You can't let this massive discount slip away. You tell yourself you will figure out next month's finances later.",
          type: "impulsive",
          resultTitle: "❌ Acted Before Thinking",
          resultSubtitle: "ஆசையால் விளைந்த நிதிச் சுமை (Impulsive Debt)",
          resultSymbol: "❌",
          explanation: "Urgency marketing triggered an emotional reaction. You committed financial capital without auditing necessity, cash flow, or future debt burden.",
          kuralNote: "எண்ணித் துணிக கருமம் — Every purchase requires evaluating long-term utility versus cost. Impulse purchases lead to immediate buyer's remorse."
        },
        {
          key: "B",
          title: "Apply a 24-hour cooling period to check necessity, budget, and alternatives.",
          desc: "Step away from the screen. Ask: Do I really need this? Does it fit my savings plan? Is it genuine utility?",
          type: "wisdom",
          resultTitle: "✅ You Followed Thirukkural 467!",
          resultSubtitle: "தெளிந்த நிதி மேலாண்மை (Mastery Over Desire)",
          resultSymbol: "✅",
          explanation: "You recognized the marketing pressure, took a step back, and prioritized fiscal security over artificial urgency.",
          kuralNote: "எண்ணித் துணிக கருமம் — You analyzed the financial outcome before swiping. Having decided against impulsive spending, you proceed with calmness."
        },
        {
          key: "C",
          title: "Leave the cart open, obsessively refreshing reviews until 3 AM in deep distress.",
          desc: "Constantly add and remove the item, consult 5 different forums, lose sleep, and wake up stressed.",
          type: "overthinking",
          resultTitle: "⚠️ Overthinking Prevented Action",
          resultSubtitle: "முடிவின்மை இழப்பு (Mental Exhaustion)",
          resultSymbol: "⚠️",
          explanation: "Instead of a clean, structured assessment, you spiraled into analysis paralysis. Neither your wallet nor your peace was served.",
          kuralNote: "துணிந்தபின் எண்ணுவம் என்பது இழுக்கு — Valluvar instructs us to decide firmly once the variables are understood, rather than hovering in anxiety."
        }
      ]
    },
    {
      id: 3,
      category: "Career & Future",
      categoryIcon: "💼",
      tamilTitle: "தொழில் வாழ்க்கை",
      image: "images/scenario-career.png",
      imageAlt: "Professional standing at career crossroad between Immediate High Pay and Master Mentorship",
      imageBadge: "Career Crossroads",
      question: "You receive two internship offers: Company X pays high salary; Company Y offers world-class mentorship.",
      context: "Company X is repetitive data entry with zero mentorship. Company Y is an elite lab building groundbreaking technology under a master mentor.",
      options: [
        {
          key: "A",
          title: "Instantly sign with Company X purely for the bigger immediate paycheck.",
          desc: "Money in the pocket today is all that matters. You ignore long-term skill acquisition and portfolio building.",
          type: "impulsive",
          resultTitle: "❌ Acted Before Thinking",
          resultSubtitle: "குறுகிய பார்வை (Short-Sighted Choice)",
          resultSymbol: "❌",
          explanation: "You prioritized temporary comfort over 5-year career compounding. In modern industries, static skills quickly become obsolete.",
          kuralNote: "எண்ணித் துணிக கருமம் — A strategic mind examines the future consequences of career foundations, not just day-one gratification."
        },
        {
          key: "B",
          title: "Carefully compare 3-year skill trajectory, mentorship, and career compounding before choosing.",
          desc: "You evaluate your current financial baseline, map future industry demand, choose Company Y, and dedicate yourself 100%.",
          type: "wisdom",
          resultTitle: "✅ You Followed Thirukkural 467!",
          resultSubtitle: "வருங்காலம் உணர்ந்த விவேகம் (Strategic Foresight)",
          resultSymbol: "✅",
          explanation: "You thoroughly weighed the long-term compounding of mastery over fleeting perks, made your choice, and executed without looking back.",
          kuralNote: "எண்ணித் துணிக கருமம்; துணிந்தபின் எண்ணுவம் என்பது இழுக்கு — You analyzed your life goals, committed with conviction, and eliminated doubt."
        },
        {
          key: "C",
          title: "Delay signing either offer, continuously asking everyone's opinion until the deadline lapses.",
          desc: "You worry Company X might pay more, but Company Y might teach more. Both recruiters revoke their offers due to delay.",
          type: "overthinking",
          resultTitle: "⚠️ Overthinking Prevented Action",
          resultSubtitle: "காலம் தாழ்த்திய பிழை (Paralysis by Indecision)",
          resultSymbol: "⚠️",
          explanation: "Over-analysis without execution is the ultimate failure mode. While trying to avoid making a bad choice, you lost both opportunities.",
          kuralNote: "துணிந்தபின் எண்ணுவம் என்பது இழுக்கு — Indecision is itself a decision to fail. Valluvar warns that hesitating when action is due is a fatal flaw."
        }
      ]
    },
    {
      id: 4,
      category: "Digital Discourse",
      categoryIcon: "📱",
      tamilTitle: "சமூக வலைத்தள விவாதம்",
      image: "images/scenario-social.png",
      imageAlt: "Person holding phone with angry toxic comment, pausing with a deep breath before responding calmly",
      imageBadge: "Digital Discourse",
      question: "Someone posts an aggressive, insulting comment misrepresenting your work on social media.",
      context: "Your heart rate spikes. You feel an overwhelming urge to fire back with a scathing, toxic retort to humiliate them publicly.",
      options: [
        {
          key: "A",
          title: "Instantly fire back an angry, insulting reply in caps-lock.",
          desc: "You want revenge right now. You escalate the flame war, tag others, and unleash unfiltered hostility.",
          type: "impulsive",
          resultTitle: "❌ Acted Before Thinking",
          resultSubtitle: "கோபத்தால் சிதைந்த மாண்பு (Emotional Escalation)",
          resultSymbol: "❌",
          explanation: "Reacting in anger hands control of your reputation to someone else. Screen-captured hostility stains professional standing forever.",
          kuralNote: "எண்ணித் துணிக கருமம் — Words once uttered cannot be retrieved. Deliberation must always act as a firebreak before speech."
        },
        {
          key: "B",
          title: "Pause, breathe, analyze intent, and respond with factual calm or dignified silence.",
          desc: "Think: Does this troll deserve my energy? Will a dispute help anyone? State facts objectively if necessary, or block and move on.",
          type: "wisdom",
          resultTitle: "✅ You Followed Thirukkural 467!",
          resultSubtitle: "அமைதியும் கம்பீரமும் (Emotional Self-Mastery)",
          resultSymbol: "✅",
          explanation: "You detached emotion from response. By thinking first, you preserved your mental peace, credibility, and dignity.",
          kuralNote: "எண்ணித் துணிக கருமம் — By deliberately filtering stimulus through wisdom, you acted with supreme maturity and unwavering calm."
        },
        {
          key: "C",
          title: "Draft 20 angry replies, delete them all, re-read their comment 50 times, and stay angry for 3 days.",
          desc: "You obsess over what strangers think, cannot focus on your work, and allow an anonymous comment to ruin your week.",
          type: "overthinking",
          resultTitle: "⚠️ Overthinking Prevented Action",
          resultSubtitle: "தேவையற்ற மன உளைச்சல் (Obsessive Rumination)",
          resultSymbol: "⚠️",
          explanation: "Lingering in indecision and re-reading toxic words repeatedly inflicts self-harm. You let the other person dictate your peace of mind.",
          kuralNote: "துணிந்தபின் எண்ணுவம் என்பது இழுக்கு — Analyze quickly, dismiss trivia, and direct your vital energy into meaningful work."
        }
      ]
    }
  ];

  let currentScenarioIdx = 0;
  let wisdomScore = 0;

  function initDecisionGame() {
    const questionEl = document.getElementById('scenarioQuestion');
    const contextEl = document.getElementById('scenarioContext');
    const optionsContainer = document.getElementById('optionsContainer');
    const categoryIcon = document.getElementById('scenarioCategoryIcon');
    const categoryTitle = document.getElementById('scenarioCategoryTitle');
    const currentIdxLabel = document.getElementById('currentScenarioIndex');
    const totalCountLabel = document.getElementById('totalScenariosCount');
    const progressBarFill = document.getElementById('progressBarFill');
    const scenarioNumTag = document.getElementById('scenarioNumTag');
    const wisdomScoreValue = document.getElementById('wisdomScoreValue');
    const scenarioTabsBar = document.getElementById('scenarioTabsBar');
    const scenarioDynamicImg = document.getElementById('scenarioDynamicImg');
    const scenarioImageBadge = document.getElementById('scenarioImageBadge');

    const resultTray = document.getElementById('decisionResultTray');
    const resultSymbol = document.getElementById('resultSymbol');
    const resultTitle = document.getElementById('resultTitle');
    const resultSubtitle = document.getElementById('resultSubtitle');
    const resultExplanation = document.getElementById('resultExplanation');
    const resultKuralNote = document.getElementById('resultKuralNote');
    const nextScenarioBtn = document.getElementById('nextScenarioBtn');
    const retryScenarioBtn = document.getElementById('retryScenarioBtn');

    if (!questionEl || !optionsContainer) return;

    totalCountLabel.textContent = SCENARIOS.length;

    // Build scenario tabs
    scenarioTabsBar.innerHTML = '';
    SCENARIOS.forEach((sc, idx) => {
      const tabBtn = document.createElement('button');
      tabBtn.className = `scenario-tab-pill ${idx === 0 ? 'active' : ''}`;
      tabBtn.textContent = `Case ${idx + 1}: ${sc.category}`;
      tabBtn.addEventListener('click', () => {
        sound.playChime('click');
        loadScenario(idx);
      });
      scenarioTabsBar.appendChild(tabBtn);
    });

    function loadScenario(idx) {
      currentScenarioIdx = idx;
      const data = SCENARIOS[idx];

      // Hide result tray
      resultTray.classList.remove('visible');
      resultTray.classList.add('hidden');

      // Update Meta & Illustration
      categoryIcon.textContent = data.categoryIcon;
      categoryTitle.textContent = `${data.category} • ${data.tamilTitle}`;
      currentIdxLabel.textContent = idx + 1;
      scenarioNumTag.textContent = `SCENARIO 0${idx + 1}`;
      questionEl.textContent = data.question;
      contextEl.textContent = data.context;

      if (scenarioDynamicImg) {
        scenarioDynamicImg.style.opacity = '0';
        setTimeout(() => {
          scenarioDynamicImg.src = data.image;
          scenarioDynamicImg.alt = data.imageAlt;
          scenarioDynamicImg.style.opacity = '1';
        }, 150);
      }
      if (scenarioImageBadge) {
        scenarioImageBadge.textContent = data.imageBadge;
      }

      // Update progress bar
      const progressPercent = ((idx + 1) / SCENARIOS.length) * 100;
      progressBarFill.style.width = `${progressPercent}%`;

      // Update tab buttons
      const tabs = scenarioTabsBar.querySelectorAll('.scenario-tab-pill');
      tabs.forEach((t, i) => {
        t.classList.toggle('active', i === idx);
      });

      // Populate Options
      optionsContainer.innerHTML = '';
      data.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `
          <div class="option-letter">${opt.key}</div>
          <div class="option-text-wrap">
            <span class="option-title">${opt.title}</span>
            <span class="option-desc">${opt.desc}</span>
          </div>
        `;

        btn.addEventListener('click', () => {
          handleOptionSelection(opt);
        });

        optionsContainer.appendChild(btn);
      });
    }

    function handleOptionSelection(opt) {
      if (opt.type === 'wisdom') {
        wisdomScore += 10;
        sound.playChime('success');
      } else if (opt.type === 'impulsive') {
        sound.playChime('warning');
      } else {
        sound.playChime('click');
      }

      wisdomScoreValue.textContent = `Valluvar Score: ${wisdomScore}`;

      // Populate Result Tray
      resultSymbol.textContent = opt.resultSymbol;
      resultTitle.textContent = opt.resultTitle;
      resultSubtitle.textContent = opt.resultSubtitle;
      resultExplanation.textContent = opt.explanation;
      resultKuralNote.textContent = opt.kuralNote;

      // Adjust next button text on final scenario
      const isFinal = currentScenarioIdx === SCENARIOS.length - 1;
      const nextBtnText = document.getElementById('nextBtnText');
      if (nextBtnText) {
        nextBtnText.textContent = isFinal ? "Restart Scenarios" : "Next Scenario";
      }

      // Show result tray with 3D animation
      resultTray.classList.remove('hidden');
      setTimeout(() => {
        resultTray.classList.add('visible');
      }, 20);
    }

    // Next Scenario
    nextScenarioBtn.addEventListener('click', () => {
      sound.playChime('click');
      if (currentScenarioIdx < SCENARIOS.length - 1) {
        loadScenario(currentScenarioIdx + 1);
      } else {
        loadScenario(0);
      }
    });

    // Retry Scenario
    retryScenarioBtn.addEventListener('click', () => {
      sound.playChime('click');
      resultTray.classList.remove('visible');
      setTimeout(() => {
        resultTray.classList.add('hidden');
      }, 300);
    });

    // Initial load
    loadScenario(0);
  }

  /* ==========================================================================
     7. DECISION SIMULATOR: "Before You Decide..."
     4-Step Guided Deliberation + Sealed 3D Wisdom Parchment
     ========================================================================== */
  function initSimulator() {
    const steps = [0, 1, 2, 3, 4, 5];
    const panes = steps.map(s => document.getElementById(`simStep${s}`));
    const dots = document.querySelectorAll('.sim-step-dot');
    const dilemmaInput = document.getElementById('simDilemmaInput');
    const benefitsInput = document.getElementById('simBenefitsInput');
    const risksInput = document.getElementById('simRisksInput');
    const alternativesInput = document.getElementById('simAlternativesInput');
    const consequencesInput = document.getElementById('simConsequencesInput');
    const finalDecisionInput = document.getElementById('simFinalDecisionInput');

    const sealDecisionBtn = document.getElementById('sealDecisionBtn');
    const sealedOverlay = document.getElementById('sealedScrollOverlay');
    const summaryDecisionText = document.getElementById('summaryDecisionText');
    const summaryBenefitsText = document.getElementById('summaryBenefitsText');
    const summaryRisksText = document.getElementById('summaryRisksText');
    const resetSimBtn = document.getElementById('resetSimBtn');
    const copyResolutionBtn = document.getElementById('copyResolutionBtn');

    let currentStep = 0;

    function goToStep(targetStep) {
      if (targetStep < 0 || targetStep > 5) return;
      currentStep = targetStep;

      panes.forEach((p, idx) => {
        if (!p) return;
        p.classList.toggle('active', idx === currentStep);
      });

      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentStep);
        dot.classList.toggle('completed', idx < currentStep);
      });

      sound.playChime('click');
    }

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const stepNum = parseInt(dot.getAttribute('data-step'), 10);
        goToStep(stepNum);
      });
    });

    document.querySelectorAll('.sim-next-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = parseInt(btn.getAttribute('data-target'), 10);
        goToStep(target);
      });
    });

    document.querySelectorAll('.sim-prev-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = parseInt(btn.getAttribute('data-target'), 10);
        goToStep(target);
      });
    });

    document.querySelectorAll('.preset-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        const presetVal = pill.getAttribute('data-preset');
        if (dilemmaInput && presetVal) {
          dilemmaInput.value = presetVal;
          sound.playChime('click');
        }
      });
    });

    if (sealDecisionBtn) {
      sealDecisionBtn.addEventListener('click', () => {
        const finalVal = finalDecisionInput.value.trim() || dilemmaInput.value.trim() || "My chosen path";
        const benefitsVal = benefitsInput.value.trim() || "Carefully evaluated for long-term compounding";
        const risksVal = risksInput.value.trim() || "Identified risks and mitigated failure pathways";

        summaryDecisionText.textContent = finalVal;
        summaryBenefitsText.textContent = benefitsVal;
        summaryRisksText.textContent = risksVal;

        sound.playChime('success');
        sealedOverlay.classList.remove('hidden');
      });
    }

    if (resetSimBtn) {
      resetSimBtn.addEventListener('click', () => {
        sound.playChime('click');
        sealedOverlay.classList.add('hidden');
        dilemmaInput.value = '';
        benefitsInput.value = '';
        risksInput.value = '';
        alternativesInput.value = '';
        consequencesInput.value = '';
        goToStep(0);
      });
    }

    if (copyResolutionBtn) {
      copyResolutionBtn.addEventListener('click', () => {
        const finalResolution = `[Thirukkural 467 Resolution]\nDecision: ${finalDecisionInput.value.trim()}\n"துணிந்தபின் எண்ணுவம் என்பது இழுக்கு"\n(I have thought before deciding; now I execute without regret.)`;
        if (navigator.clipboard) {
          navigator.clipboard.writeText(finalResolution).then(() => {
            sound.playChime('click');
            const origText = copyResolutionBtn.textContent;
            copyResolutionBtn.textContent = '✓ Resolution Copied!';
            setTimeout(() => {
              copyResolutionBtn.textContent = origText;
            }, 2500);
          });
        }
      });
    }
  }

  /* ==========================================================================
     8. 10-SECOND DECISION CHALLENGE
     ========================================================================== */
  const CHALLENGE_POOLS = [
    {
      topic: "Emergency Venture Dilemma",
      question: "Your startup has only 3 weeks of runway left. A predatory investor offers funds today, but demands 65% equity and full veto power.",
      choices: [
        {
          key: "A",
          text: "Sign immediately in panic without reading the fine print.",
          type: "impulsive"
        },
        {
          key: "B",
          text: "Take 48 hours to negotiate terms, contact angel syndicates, and analyze downside risk before deciding.",
          type: "balanced"
        },
        {
          key: "C",
          text: "Freeze in dread, refuse to choose, and let the 3 weeks lapse without taking any action.",
          type: "indecisive"
        }
      ]
    },
    {
      topic: "Campus Honor Code Dilemma",
      question: "A group mate leaks confidential exam questions 2 hours before the final exam and asks you to circulate it.",
      choices: [
        {
          key: "A",
          text: "Immediately forward it to all your friends to gain social status.",
          type: "impulsive"
        },
        {
          key: "B",
          text: "Pause, recognize the legal & moral disaster, delete the leak, and warn the group to stop.",
          type: "balanced"
        },
        {
          key: "C",
          text: "Worry endlessly about what friends will think, read the questions anyway, and panic throughout the exam.",
          type: "indecisive"
        }
      ]
    }
  ];

  let currentChallengeIdx = 0;

  function initCountdownChallenge() {
    const dialSeconds = document.getElementById('dialSeconds');
    const dialProgress = document.getElementById('dialProgress');
    const startBtn = document.getElementById('startChallengeBtn');
    const resetBtn = document.getElementById('resetChallengeBtn');
    const choiceButtons = document.querySelectorAll('.challenge-choice-btn');
    const stateTag = document.getElementById('challengeStateTag');
    const verdictBox = document.getElementById('challengeVerdictBox');
    const verdictTitle = document.getElementById('challengeVerdictTitle');
    const verdictSub = document.getElementById('challengeVerdictSub');
    const verdictBody = document.getElementById('challengeVerdictBody');
    const verdictIcon = document.getElementById('challengeVerdictIcon');
    const timeTakenLabel = document.getElementById('timeTakenLabel');
    const questionEl = document.getElementById('challengeQuestion');
    const topicTag = document.getElementById('challengeTopicTag');

    if (!dialSeconds || !startBtn) return;

    let timerInterval = null;
    let timeLeft = 10;
    let startTime = 0;
    let isRunning = false;
    const TOTAL_TIME = 10;
    const CIRCUMFERENCE = 2 * Math.PI * 50; // r = 50 -> ~314.159

    dialProgress.style.strokeDasharray = `${CIRCUMFERENCE}`;
    dialProgress.style.strokeDashoffset = '0';

    function loadChallengeData(idx) {
      const data = CHALLENGE_POOLS[idx % CHALLENGE_POOLS.length];
      topicTag.textContent = data.topic;
      questionEl.textContent = `"${data.question}"`;

      choiceButtons.forEach((btn, cIdx) => {
        const choiceData = data.choices[cIdx];
        if (choiceData) {
          btn.setAttribute('data-choice', choiceData.type);
          btn.querySelector('.choice-key').textContent = choiceData.key;
          btn.querySelector('.choice-text').textContent = choiceData.text;
        }
      });
    }
    loadChallengeData(0);

    function setDialProgress(fraction) {
      const offset = CIRCUMFERENCE * (1 - fraction);
      dialProgress.style.strokeDashoffset = `${offset}`;

      if (fraction < 0.3) {
        dialProgress.style.stroke = 'var(--accent-maroon)';
      } else if (fraction < 0.6) {
        dialProgress.style.stroke = 'var(--accent-terracotta)';
      } else {
        dialProgress.style.stroke = 'var(--accent-gold)';
      }
    }

    function startTimer() {
      if (isRunning) return;
      isRunning = true;
      timeLeft = TOTAL_TIME;
      startTime = Date.now();
      dialSeconds.textContent = timeLeft;
      setDialProgress(1);

      verdictBox.classList.add('hidden');
      startBtn.classList.add('hidden');
      resetBtn.classList.add('hidden');
      stateTag.textContent = "Timer Running — Think Before Deciding!";
      stateTag.style.color = "var(--accent-maroon)";

      choiceButtons.forEach(btn => btn.disabled = false);
      sound.playChime('click');

      timerInterval = setInterval(() => {
        const elapsed = (Date.now() - startTime) / 1000;
        timeLeft = Math.max(0, TOTAL_TIME - elapsed);
        dialSeconds.textContent = Math.ceil(timeLeft);
        setDialProgress(timeLeft / TOTAL_TIME);

        sound.playChime('tick');

        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          isRunning = false;
          handleTimeout();
        }
      }, 100);
    }

    function stopTimer() {
      clearInterval(timerInterval);
      isRunning = false;
      choiceButtons.forEach(btn => btn.disabled = true);
    }

    function handleChoiceClick(choiceType) {
      if (!isRunning) return;
      stopTimer();

      const timeTaken = ((Date.now() - startTime) / 1000).toFixed(1);
      timeTakenLabel.textContent = timeTaken;

      verdictBox.classList.remove('hidden');
      resetBtn.classList.remove('hidden');
      stateTag.textContent = "Trial Concluded";

      if (choiceType === 'impulsive' || timeTaken < 3.0) {
        sound.playChime('warning');
        verdictIcon.textContent = "⚡";
        verdictTitle.textContent = "❌ Impulsive Reaction!";
        verdictBody.innerHTML = `
          You answered in just <strong>${timeTaken}s</strong>. Valluvar teaches: <em>"எண்ணித் துணிக கருமம்"</em>.<br>
          Answering within the first 3 seconds shows reflex rather than strategic thought. You rushed before analyzing the hidden clauses and dangers!
        `;
      } else if (choiceType === 'balanced' && timeTaken >= 3.0 && timeTaken <= 8.5) {
        sound.playChime('success');
        verdictIcon.textContent = "🎯";
        verdictTitle.textContent = "✅ Masterful Decision! (Kural 467)";
        verdictBody.innerHTML = `
          You took <strong>${timeTaken}s</strong> to read carefully, evaluate consequences, and lock your decision firmly.<br>
          You avoided both impulsive rushing and paralyzing fear. Once your decision was chosen, you held total resolve!
        `;
      } else {
        sound.playChime('warning');
        verdictIcon.textContent = "⏳";
        verdictTitle.textContent = "⚠️ Paralyzed by Overthinking!";
        verdictBody.innerHTML = `
          You hesitated until <strong>${timeTaken}s</strong> or selected the option driven by panic.<br>
          Valluvar warns: <em>"துணிந்தபின் எண்ணுவம் என்பது இழுக்கு"</em>. Constant delay when action is required forfeits your destiny!
        `;
      }
    }

    function handleTimeout() {
      sound.playChime('warning');
      choiceButtons.forEach(btn => btn.disabled = true);
      verdictBox.classList.remove('hidden');
      resetBtn.classList.remove('hidden');
      stateTag.textContent = "Time Expired!";
      timeTakenLabel.textContent = "10.0";

      verdictIcon.textContent = "⌛";
      verdictTitle.textContent = "⚠️ Time Expired: Indecision Won!";
      verdictBody.innerHTML = `
        The full 10 seconds elapsed without a commitment.<br>
        Indecision is itself a decision to surrender control. Thinking is sacred <em>before</em> choosing; but once the clock ticks, hesitation becomes weakness.
      `;
    }

    startBtn.addEventListener('click', startTimer);

    choiceButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const choice = btn.getAttribute('data-choice');
        handleChoiceClick(choice);
      });
    });

    resetBtn.addEventListener('click', () => {
      sound.playChime('click');
      currentChallengeIdx++;
      loadChallengeData(currentChallengeIdx);
      dialSeconds.textContent = "10";
      setDialProgress(1);
      verdictBox.classList.add('hidden');
      resetBtn.classList.add('hidden');
      startBtn.classList.remove('hidden');
      stateTag.textContent = "Timer Ready";
      stateTag.style.color = "var(--text-muted)";
    });
  }

  /* ==========================================================================
     9. SCROLL SPY & INTERSECTION OBSERVER
     ========================================================================== */
  function initScrollSpy() {
    const sections = document.querySelectorAll('main > section');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.getElementById('siteHeader');

    window.addEventListener('scroll', () => {
      if (header) {
        header.classList.toggle('scrolled', window.scrollY > 40);
      }
    }, { passive: true });

    const scrollRevealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.section-title, .section-intro, .half-card, .path-column, .app-card, .final-monument-card').forEach(el => {
      el.classList.add('fade-in-on-scroll');
      scrollRevealObserver.observe(el);
    });

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === `#${currentId}`);
          });
        }
      });
    }, { threshold: 0.35 });

    sections.forEach(sec => sectionObserver.observe(sec));
  }

  /* ==========================================================================
     10. INITIALIZATION LIFECYCLE
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initControls();
    init3DTiltEngine();
    initParticleCanvas();
    initDecisionGame();
    initSimulator();
    initCountdownChallenge();
    initScrollSpy();
  });

})();
