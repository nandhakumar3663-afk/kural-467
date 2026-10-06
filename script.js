'use strict';

// English keys and their Tamil equivalents cover both static and interactive content.
// Translation changes text only: inputs, scores and countdown deadlines remain intact.
const tamilTranslations = {
  "467 · The Art of a Thoughtful Decision": "467 · சிந்தித்து முடிவெடுக்கும் கலை",
  "Skip to content": "உள்ளடக்கத்திற்குச் செல்லவும்",
  "Kural 467 home": "குறள் 467 முகப்பு",
  "KURAL": "குறள்",
  "Main navigation": "முதன்மை வழிசெலுத்தல்",
  "The wisdom": "குறளின் பொருள்",
  "The experience": "செயல்வழிக் கற்றல்",
  "Your decision": "உங்கள் முடிவு",
  "ANCIENT WISDOM. EVERYDAY CHOICES.": "பழமையான அறிவு. அன்றாட முடிவுகள்.",
  "Think": "சிந்தி",
  "Decide": "முடிவெடு",
  "Act.": "செயல்படு.",
  "Great decisions begin with thought, not regret.": "சிறந்த முடிவுகள் சிந்தனையில் தொடங்குகின்றன; வருத்தத்தில் அல்ல.",
  "Discover a timeless idea. Put it into practice.": "காலம் கடந்த கருத்தை அறியுங்கள். வாழ்வில் பயன்படுத்துங்கள்.",
  "Experience the Kural": "குறளை அனுபவியுங்கள்",
  "A small pause. A better way forward.": "சிறு இடைவெளி. சிறந்த முன்னேற்றம்.",
  "01 / THINK": "01 / சிந்தி",
  "BEGIN WITH THOUGHT": "சிந்தனையில் தொடங்கு",
  "02 / DECIDE": "02 / முடிவெடு",
  "03 / ACT": "03 / செயல்படு",
  "A thread of thought.": "சிந்தனையின் ஓர் இழை.",
  "A path to purposeful action.": "நோக்கமுள்ள செயலுக்கான பாதை.",
  "THIRUVALLUVAR · CHAPTER 47 · ACTING AFTER CONSIDERATION": "திருவள்ளுவர் · அதிகாரம் 47 · தெரிந்து செயல்வகை",
  "Explore the wisdom": "குறளின் பொருளை அறியுங்கள்",
  "01 / UNDERSTAND": "01 / புரிந்துகொள்",
  "Two lines.": "இரண்டு அடிகள்.",
  "A way to move forward.": "முன்னேற ஒரு வழி.",
  "Thinking and doing belong together.": "சிந்தனையும் செயலும் இணைந்தவை.",
  "The wisdom is knowing when to move": "சிந்தனையிலிருந்து செயலுக்கு",
  "from one to the other.": "எப்போது நகர வேண்டும் என்பதை அறிவதே அறிவு.",
  "01 — BEFORE THE DECISION": "01 — முடிவெடுக்கும் முன்",
  "Before beginning an action, carefully consider the situation, consequences and possible outcomes.": "ஒரு செயலைத் தொடங்கும் முன், சூழ்நிலையையும் அதன் விளைவுகளையும் சாத்தியமான முடிவுகளையும் நன்கு ஆராய வேண்டும்.",
  "Analyze": "ஆராய்",
  "02 — AFTER THE DECISION": "02 — முடிவெடுத்த பின்",
  "After carefully making the decision, repeatedly doubting yourself can lead to weakness, delay and failure.": "நன்கு ஆராய்ந்து முடிவெடுத்த பிறகு, மீண்டும் மீண்டும் சந்தேகப்படுவது உறுதியின்மை, தாமதம், தோல்விக்கு வழிவகுக்கலாம்.",
  "Decision": "முடிவு",
  "Action": "செயல்",
  "Result": "விளைவு",
  "Confidence grows from preparation. If important new information appears, it is sensible to reconsider.": "முன்தயாரிப்பே நம்பிக்கையை வளர்க்கிறது. முக்கியமான புதிய தகவல் கிடைத்தால், முடிவை மறுபரிசீலனை செய்வது நல்லது.",
  "02 / PUT IT INTO PRACTICE": "02 / செயல்படுத்திப் பார்",
  "What would": "நீங்கள் என்ன",
  " you do?": "செய்வீர்கள்?",
  "you do?": "செய்வீர்கள்?",
  "Four everyday moments. Three possible paths.": "நான்கு அன்றாடச் சூழல்கள். மூன்று சாத்தியமான வழிகள்.",
  "Choose the approach you would take.": "நீங்கள் பின்பற்றும் அணுகுமுறையைத் தேர்ந்தெடுங்கள்.",
  "Enable JavaScript to use the decision game, simulator and challenge. The explanations below remain available to read.": "முடிவெடுக்கும் பயிற்சிகளையும் சவாலையும் பயன்படுத்த JavaScript-ஐ இயக்குங்கள். கீழுள்ள விளக்கங்களைத் தொடர்ந்து படிக்கலாம்.",
  "THE DECISION LAB": "முடிவெடுக்கும் பயிற்சிக்கூடம்",
  "Student life": "மாணவர் வாழ்க்கை",
  "Scenario 1 of 4": "சூழல் 1 / 4",
  "thoughtful choices": "சிந்தித்துத் தேர்ந்தெடுத்தவை",
  "out of": "மொத்தம்",
  "completed": "நிறைவு செய்தவை",
  "01 / EDUCATION": "01 / கல்வி",
  "Pause. Consider. Choose.": "நிதானி. ஆராய். தேர்ந்தெடு.",
  "One evening. Two priorities.": "ஒரு மாலை. இரண்டு முக்கியத் தேவைகள்.",
  "You have an important exam tomorrow. Your friends invite you to play games tonight. What would you do?": "நாளை உங்களுக்கு முக்கியமான தேர்வு. இன்று இரவு விளையாட நண்பர்கள் அழைக்கிறார்கள். நீங்கள் என்ன செய்வீர்கள்?",
  "There is more to a decision than its first impulse.": "முதல் உணர்வைத் தாண்டிச் சிந்திப்பதே நல்ல முடிவுக்கு வழி.",
  "Next scenario": "அடுத்த சூழல்",
  "EXPERIENCE COMPLETE": "பயிற்சி நிறைவடைந்தது",
  "Think before you act — not after. Consider what matters, choose a direction, then take the next step.": "செயலுக்கு முன் சிந்தியுங்கள்; செய்த பிறகு அல்ல. முக்கியமானவற்றை ஆராய்ந்து, ஒரு வழியைத் தேர்ந்தெடுத்து, அடுத்த அடியை எடுங்கள்.",
  "Try the scenarios again": "மீண்டும் பயிற்சி செய்யுங்கள்",
  "03 / MAKE IT PERSONAL": "03 / உங்கள் வாழ்வில் பயன்படுத்து",
  "Before you": "முடிவெடுக்கும்",
  " decide…": "முன்…",
  "decide…": "முன்…",
  "A decision on your mind?": "மனதில் ஒரு முடிவு இருக்கிறதா?",
  "Give your thoughts a little space.": "உங்கள் எண்ணங்களுக்குச் சிறிது இடம் கொடுங்கள்.",
  "Work through four questions. Then turn your thinking into a clear decision.": "நான்கு கேள்விகளைச் சிந்தியுங்கள். பிறகு உங்கள் எண்ணங்களைத் தெளிவான முடிவாக மாற்றுங்கள்.",
  "Just for you.": "உங்களுக்காக மட்டும்.",
  "Your answers stay in this page’s memory. Nothing is sent or saved. Refreshing clears them.": "உங்கள் பதில்கள் இந்தப் பக்கத்தின் நினைவகத்தில் மட்டுமே இருக்கும். எதுவும் அனுப்பப்படாது அல்லது சேமிக்கப்படாது. பக்கத்தைப் புதுப்பித்தால் அவை அழியும்.",
  "YOUR THOUGHT SPACE": "உங்கள் சிந்தனைப் பதிவு",
  "Decision journal progress": "சிந்தனைப் பதிவின் முன்னேற்றம்",
  "START WITH YOUR SITUATION": "உங்கள் சூழலில் தொடங்குங்கள்",
  "What is on your mind?": "உங்கள் மனதில் இருப்பது என்ன?",
  "The decision you are considering": "நீங்கள் பரிசீலிக்கும் முடிவு",
  "For example, buy a new laptop": "எடுத்துக்காட்டு: புதிய மடிக்கணினி வாங்குவது",
  "Name one specific decision. Keep it simple.": "ஒரு குறிப்பிட்ட முடிவை எளிமையாக எழுதுங்கள்.",
  "STEP 1 / BENEFITS": "படி 1 / நன்மைகள்",
  "What are the benefits?": "இதனால் கிடைக்கும் நன்மைகள் என்ன?",
  "What would this choice make possible?": "இந்தத் தேர்வு எதற்கு உதவும்?",
  "Think about what you could gain…": "உங்களுக்கு என்ன நன்மை கிடைக்கும் என்று சிந்தியுங்கள்…",
  "STEP 2 / RISKS": "படி 2 / அபாயங்கள்",
  "What are the possible risks?": "ஏற்படக்கூடிய அபாயங்கள் என்ன?",
  "What could go wrong, or cost you something?": "எது தவறாகலாம்? என்ன இழப்பு ஏற்படலாம்?",
  "Consider time, money, effort and uncertainty…": "நேரம், பணம், முயற்சி, நிச்சயமின்மை ஆகியவற்றைக் கவனியுங்கள்…",
  "STEP 3 / ALTERNATIVES": "படி 3 / மாற்று வழிகள்",
  "What alternatives do you have?": "உங்களிடம் என்ன மாற்று வழிகள் உள்ளன?",
  "Is there another way to meet the same need?": "இதே தேவையை நிறைவேற்ற வேறு வழி இருக்கிறதா?",
  "A smaller step, a different option, or waiting for a reason…": "சிறிய முயற்சி, வேறொரு தேர்வு அல்லது காரணத்துடன் காத்திருப்பது…",
  "STEP 4 / CONSEQUENCES": "படி 4 / விளைவுகள்",
  "What could happen next?": "அடுத்து என்ன நடக்கலாம்?",
  "What could happen after making this decision?": "இந்த முடிவை எடுத்த பிறகு என்ன நடக்கலாம்?",
  "Imagine the immediate outcome and the longer-term effects…": "உடனடி விளைவையும் நீண்டகாலத் தாக்கங்களையும் சிந்தியுங்கள்…",
  "THOUGHT INTO ACTION": "சிந்தனையிலிருந்து செயலுக்கு",
  "Review your thinking": "உங்கள் சிந்தனையை மீள்பாருங்கள்",
  "What have you decided?": "நீங்கள் என்ன முடிவு செய்துள்ளீர்கள்?",
  "I have decided to…": "நான் எடுத்த முடிவு…",
  "Choose a direction you can act on.": "செயல்படுத்தக்கூடிய ஒரு வழியைத் தேர்ந்தெடுங்கள்.",
  "← Back": "← முந்தைய படி",
  "Start thinking": "சிந்திக்கத் தொடங்குங்கள்",
  "A THOUGHTFUL STEP FORWARD": "சிந்தித்து எடுக்கும் முன்னேற்றப் படி",
  "You have considered the decision carefully. Now move forward with confidence.": "உங்கள் முடிவை நன்கு ஆராய்ந்துவிட்டீர்கள். இப்போது நம்பிக்கையுடன் முன்னேறுங்கள்.",
  "Choose one small action to begin. Revisit your plan if the facts change.": "தொடங்குவதற்கு ஒரு சிறிய செயலைத் தேர்ந்தெடுங்கள். உண்மைகள் மாறினால் திட்டத்தை மறுபரிசீலனை செய்யுங்கள்.",
  "← Review or edit": "← மீள்பார் அல்லது திருத்து",
  "Start a new decision": "புதிய முடிவைச் சிந்தியுங்கள்",
  "04 / NOTICE THE DIFFERENCE": "04 / வேறுபாட்டைக் கவனி",
  "Same situation.": "அதே சூழல்.",
  "A different way through.": "வேறுபட்ட அணுகுமுறை.",
  "React without thinking": "சிந்திக்காமல் எதிர்வினையாற்றுதல்",
  "Situation": "சூழ்நிலை",
  "Emotion": "உணர்ச்சி",
  "Immediate action": "உடனடிச் செயல்",
  "Possible regret": "வருத்தம் ஏற்படலாம்",
  "A quick reaction can overlook what matters.": "அவசர எதிர்வினையில் முக்கியமானவை கவனிக்கப்படாமல் போகலாம்.",
  "Think before acting": "செயலுக்கு முன் சிந்தித்தல்",
  "Act": "செயல்படு",
  "Better outcome": "சிறந்த விளைவு",
  "more likely, never guaranteed": "வாய்ப்பு அதிகம்; உறுதியான உத்தரவாதம் இல்லை",
  "A considered choice gives your action a purpose.": "ஆராய்ந்து எடுக்கும் முடிவு உங்கள் செயலுக்கு நோக்கம் தருகிறது.",
  "05 / TIMELESS, NOT DISTANT": "05 / இன்றும் பொருந்தும் அறிவு",
  "Old wisdom.": "பழமையான அறிவு.",
  "Your everyday world.": "உங்கள் அன்றாட உலகம்.",
  "From the choices on your screen": "திரையில் நீங்கள் செய்யும் தேர்வுகளிலிருந்து",
  " to the direction of your future.": "உங்கள் எதிர்காலப் பாதை வரை.",
  "to the direction of your future.": "உங்கள் எதிர்காலப் பாதை வரை.",
  "Education": "கல்வி",
  "Choose courses and learning paths carefully. Match them to your interests, goals and available time.": "பாடங்களையும் கற்றல் பாதைகளையும் கவனமாகத் தேர்ந்தெடுங்கள். உங்கள் ஆர்வம், இலக்கு, நேரத்துடன் அவற்றைப் பொருத்துங்கள்.",
  "Career": "தொழில் வாழ்க்கை",
  "Analyze opportunities before accepting them. Consider learning, experience and future value.": "வாய்ப்புகளை ஏற்கும் முன் ஆராயுங்கள். கற்றல், அனுபவம், எதிர்காலப் பயன் ஆகியவற்றைக் கவனியுங்கள்.",
  "Money": "பணம்",
  "Think before spending or investing. Consider need, budget, alternatives and risk.": "செலவு அல்லது முதலீட்டுக்கு முன் சிந்தியுங்கள். தேவை, வரவுசெலவு, மாற்று வழிகள், அபாயம் ஆகியவற்றை ஆராயுங்கள்.",
  "Relationships": "உறவுகள்",
  "Understand situations before reacting emotionally. Listen first, then choose your words.": "உணர்ச்சிவசப்பட்டுப் பதிலளிக்கும் முன் சூழலைப் புரிந்துகொள்ளுங்கள். முதலில் கேளுங்கள்; பிறகு சொற்களைத் தேர்ந்தெடுங்கள்.",
  "Technology": "தொழில்நுட்பம்",
  "Consider consequences before posting or sharing information. Check its truth and respect privacy.": "தகவலைப் பதிவிடும் அல்லது பகிரும் முன் விளைவுகளைச் சிந்தியுங்கள். உண்மைத்தன்மையைச் சரிபார்த்து, தனியுரிமையை மதியுங்கள்.",
  "Leadership": "தலைமைத்துவம்",
  "Evaluate risks before making decisions affecting others. Hear different views, then lead with clarity.": "பிறரைப் பாதிக்கும் முடிவுகளுக்கு முன் அபாயங்களை மதிப்பிடுங்கள். பல்வேறு கருத்துகளைக் கேட்டு, தெளிவுடன் வழிநடத்துங்கள்.",
  "06 / A MOMENT OF CLARITY": "06 / தெளிவுக்கான ஒரு தருணம்",
  "Ten seconds.": "பத்து வினாடிகள்.",
  "One thoughtful choice.": "ஒரு சிந்தனையுள்ள தேர்வு.",
  "Do not choose immediately.": "உடனே தேர்ந்தெடுக்காதீர்கள்.",
  "Read. Think. Then decide.": "படியுங்கள். சிந்தியுங்கள். பிறகு முடிவெடுங்கள்.",
  "10 seconds remaining": "10 வினாடிகள் மீதமுள்ளன",
  "SECONDS": "வினாடிகள்",
  "Practice without a time limit": "நேர வரம்பின்றிப் பயிற்சி செய்யுங்கள்",
  "A practice exercise, not a rule for real decisions. Important choices may need much longer.": "இது ஒரு பயிற்சி மட்டுமே; நிஜ முடிவுகளுக்கான விதி அல்ல. முக்கியமான முடிவுகளுக்கு அதிக நேரம் தேவைப்படலாம்.",
  "THE GROUP CHAT": "குழு உரையாடல்",
  "A message says tomorrow’s exam is cancelled. There is no official source.": "நாளைய தேர்வு ரத்து என்று ஒரு செய்தி வருகிறது. அதிகாரப்பூர்வ ஆதாரம் இல்லை.",
  "Everyone is forwarding it. What is your next move?": "எல்லோரும் அதை அனுப்புகிறார்கள். உங்கள் அடுத்த செயல் என்ன?",
  "Start the challenge": "சவாலைத் தொடங்குங்கள்",
  "Choose how to respond": "எப்படிச் செயல்படுவது எனத் தேர்ந்தெடுங்கள்",
  "Try again ↺": "மீண்டும் முயலுங்கள் ↺",
  "CARRY THE WISDOM WITH YOU": "இந்த அறிவை உங்களுடன் எடுத்துச் செல்லுங்கள்",
  "THINK BEFORE YOU ACT.": "செயல்படும் முன் சிந்தி.",
  "ACT AFTER YOU THINK.": "சிந்தித்த பின் செயல்படு.",
  "Think, then decide, then act": "சிந்தி, பிறகு முடிவெடு, பின்னர் செயல்படு",
  "THINK": "சிந்தி",
  "DECIDE": "முடிவெடு",
  "ACT": "செயல்படு",
  "Thiruvalluvar’s ancient wisdom remains essential to decision-making today: think carefully, decide clearly, and act with purpose.": "திருவள்ளுவரின் பழமையான அறிவு இன்றும் முடிவெடுப்பதற்கு இன்றியமையாதது: நன்கு சிந்தித்து, தெளிவாக முடிவெடுத்து, நோக்கத்துடன் செயல்படுங்கள்.",
  "What will your next thoughtful decision be?": "உங்கள் அடுத்த சிந்தனையுள்ள முடிவு என்ன?",
  "Rooted in Tamil wisdom. Made for everyday life.": "தமிழ் அறிவில் வேரூன்றி, அன்றாட வாழ்வுக்காக.",
  "Back to top ↑": "மேலே செல்லுங்கள் ↑",
  "Language": "மொழி",
  "Language changed to English.": "மொழி தமிழுக்கு மாற்றப்பட்டது.",
  "EDUCATION": "கல்வி",
  "MONEY": "பணம்",
  "CAREER": "தொழில் வாழ்க்கை",
  "SOCIAL MEDIA": "சமூக ஊடகம்",
  "Immediately accept. I can think about the exam later.": "உடனே ஒப்புக்கொள்வேன். தேர்வைப் பற்றிப் பிறகு சிந்திக்கலாம்.",
  "Consider my preparation, the time I need and the consequences. Then decide and follow a clear plan.": "என் தயார்நிலை, தேவைப்படும் நேரம், விளைவுகளை ஆராய்வேன். பிறகு முடிவெடுத்து, தெளிவான திட்டத்தைப் பின்பற்றுவேன்.",
  "Keep worrying about both options until the evening is gone.": "இரண்டு தேர்வுகளையும் நினைத்துக் கவலைப்பட்டு மாலை நேரத்தை வீணாக்குவேன்.",
  "Check your preparation and protect the study time you need. You might decline or set a short break; the principle is to consider the consequences before choosing.": "உங்கள் தயார்நிலையைச் சரிபார்த்து, படிப்புக்குத் தேவையான நேரத்தை ஒதுக்குங்கள். அழைப்பை மறுக்கலாம் அல்லது சிறு இடைவேளை எடுக்கலாம்; தேர்வுக்கு முன் விளைவுகளை ஆராய்வதே முக்கியம்.",
  "Money matters": "பண முடிவுகள்",
  "A big discount. A real need?": "பெரிய தள்ளுபடி. உண்மையான தேவையா?",
  "An expensive product is on sale online. The discount looks huge and the offer feels urgent. How do you approach the purchase?": "விலை உயர்ந்த பொருள் இணையத்தில் தள்ளுபடியில் உள்ளது. சலுகை மிகப் பெரியதாகவும் உடனே வாங்க வேண்டியதாகவும் தோன்றுகிறது. எப்படி முடிவெடுப்பீர்கள்?",
  "Buy it immediately before the deal disappears.": "சலுகை முடியும் முன் உடனே வாங்குவேன்.",
  "Keep comparing endlessly, even after I have enough information to choose.": "முடிவெடுக்கப் போதிய தகவல் இருந்தும் தொடர்ந்து ஒப்பிட்டுக்கொண்டே இருப்பேன்.",
  "Check whether I need it, my budget, alternatives and long-term usefulness. Then decide.": "தேவை, வரவுசெலவு, மாற்று வழிகள், நீண்டகாலப் பயன் ஆகியவற்றை ஆராய்ந்து முடிவெடுப்பேன்.",
  "A discount does not establish value. Consider need, affordability, alternatives and lasting usefulness; then buy or walk away with a clear reason.": "தள்ளுபடி மட்டுமே ஒரு பொருளின் மதிப்பை நிர்ணயிக்காது. தேவை, வாங்கும் திறன், மாற்று வழிகள், நீண்டகாலப் பயனை ஆராய்ந்து, தெளிவான காரணத்துடன் வாங்குங்கள் அல்லது தவிருங்கள்.",
  "Your next chapter": "உங்கள் அடுத்த கட்டம்",
  "Two offers. One next step.": "இரண்டு வாய்ப்புகள். ஓர் அடுத்த படி.",
  "You receive two internship offers. One pays more; another offers stronger learning opportunities. Both need an answer soon.": "இரண்டு உள்ளுறைப் பயிற்சி வாய்ப்புகள் கிடைக்கின்றன. ஒன்றில் அதிக ஊதியம்; மற்றொன்றில் சிறந்த கற்றல் வாய்ப்பு. இரண்டிற்கும் விரைவில் பதில் வேண்டும்.",
  "Compare skills, future career value, experience, salary and my financial needs. Choose what fits my goals.": "திறன்கள், எதிர்காலத் தொழில் பயன், அனுபவம், ஊதியம், பணத் தேவைகளை ஒப்பிட்டு, என் இலக்குக்குப் பொருத்தமானதைத் தேர்ந்தெடுப்பேன்.",
  "Pick the higher salary immediately without checking the role.": "பணியின் தன்மையை அறியாமல் அதிக ஊதியம் தருவதை உடனே தேர்ந்தெடுப்பேன்.",
  "Keep doubting my researched choice until both deadlines pass.": "ஆராய்ந்து எடுத்த முடிவிலும் சந்தேகப்பட்டு, இரு வாய்ப்புகளின் காலக்கெடுவையும் தவறவிடுவேன்.",
  "There is no universal winner between pay and learning. Weigh both against your circumstances, decide before the deadline and commit to the opportunity.": "ஊதியமா, கற்றலா என்பதற்கு எல்லோருக்கும் ஒரே பதில் இல்லை. உங்கள் சூழலுக்கேற்ப இரண்டையும் மதிப்பிட்டு, காலக்கெடுவுக்குள் முடிவெடுத்து, உறுதியுடன் செயல்படுங்கள்.",
  "Life online": "இணைய வாழ்க்கை",
  "An angry message. Your response.": "கோபமான செய்தி. உங்கள் பதில்.",
  "Someone sends you an angry message online. You feel the urge to reply immediately. What do you do next?": "இணையத்தில் ஒருவர் கோபமாகச் செய்தி அனுப்புகிறார். உடனே பதிலளிக்கத் தோன்றுகிறது. அடுத்து என்ன செய்வீர்கள்?",
  "Reply angrily straight away so they know how I feel.": "என் உணர்வைப் புரியவைக்க உடனே கோபமாகப் பதிலளிப்பேன்.",
  "Pause, understand the context and consider the effects. Then choose a calm response or a clear boundary.": "நிதானித்து, சூழலைப் புரிந்து, விளைவுகளை ஆராய்வேன். பிறகு அமைதியான பதில் அல்லது தெளிவான எல்லையைத் தேர்ந்தெடுப்பேன்.",
  "After choosing a useful response, repeatedly rewrite it out of doubt and never act.": "பொருத்தமான பதிலைத் தேர்ந்தெடுத்தும், சந்தேகத்தால் மீண்டும் மீண்டும் திருத்தி, செயல்படாமல் இருப்பேன்.",
  "Think → Understand → Decide → Respond. A calm reply, a boundary or deliberately not replying can all be thoughtful choices. Safety and context matter.": "சிந்தி → புரிந்துகொள் → முடிவெடு → பதிலளி. அமைதியான பதில், எல்லை வகுத்தல் அல்லது சிந்தித்துப் பதிலளிக்காமல் இருப்பதும் நல்ல தேர்வாகலாம். பாதுகாப்பும் சூழலும் முக்கியம்.",
  "✕ Acted Before Thinking": "✕ சிந்திக்கும் முன் செயல்பட்டீர்கள்",
  "You made the decision quickly without considering its consequences.": "விளைவுகளை ஆராயாமல் அவசரமாக முடிவெடுத்தீர்கள்.",
  "✓ You followed Thirukkural 467": "✓ திருக்குறள் 467-ஐப் பின்பற்றினீர்கள்",
  "You considered the consequences first and then made your decision confidently.": "முதலில் விளைவுகளை ஆராய்ந்து, பிறகு நம்பிக்கையுடன் முடிவெடுத்தீர்கள்.",
  "△ Overthinking Prevented Action": "△ அளவுக்கு மீறிய சிந்தனை செயலைத் தடுத்தது",
  "Thinking is important before deciding, but endless hesitation after that can stop progress.": "முடிவுக்கு முன் சிந்திப்பது முக்கியம். ஆனால் அதன் பிறகு முடிவில்லாமல் தயங்குவது முன்னேற்றத்தைத் தடுக்கலாம்.",
  " — your choice": " — உங்கள் தேர்வு",
  "✓ The thoughtful approach": "✓ சிந்தனையுள்ள அணுகுமுறை",
  " · Your choice": " · உங்கள் தேர்வு",
  "Scenario {current} of {total}": "சூழல் {current} / {total}",
  "Think first. Decide clearly. Follow through.": "முதலில் சிந்தியுங்கள். தெளிவாக முடிவெடுங்கள். செயல்படுத்துங்கள்.",
  "See my reflection →": "என் பயிற்சி முடிவைப் பார் →",
  "Next scenario →": "அடுத்த சூழல் →",
  "{score} of 4 thoughtful choices. A lesson to carry forward.": "4-இல் {score} சிந்தனையுள்ள தேர்வுகள். வாழ்வில் பயன்படுத்த ஒரு பாடம்.",
  "The situation": "சூழ்நிலை",
  "Benefits": "நன்மைகள்",
  "Risks": "அபாயங்கள்",
  "Alternatives": "மாற்று வழிகள்",
  "Consequences": "விளைவுகள்",
  "I Have Thought. Now I Decide.": "சிந்தித்துவிட்டேன். இப்போது முடிவெடுக்கிறேன்.",
  "Start thinking →": "சிந்திக்கத் தொடங்குங்கள் →",
  "Continue →": "தொடருங்கள் →",
  "Please add a thought before continuing.": "தொடரும் முன் உங்கள் எண்ணத்தை எழுதுங்கள்.",
  "Forward it now. Everyone else is sharing it.": "உடனே பகிர்வேன். எல்லோரும் பகிர்கிறார்களே!",
  "Check an official source before sharing or changing my study plan.": "பகிரும் முன்போ படிப்புத் திட்டத்தை மாற்றும் முன்போ அதிகாரப்பூர்வ ஆதாரத்தைச் சரிபார்ப்பேன்.",
  "Even after official confirmation, keep doubting and delay my plan.": "அதிகாரப்பூர்வ உறுதிப்படுத்தலுக்குப் பிறகும் சந்தேகப்பட்டு என் திட்டத்தைத் தாமதிப்பேன்.",
  "{seconds} seconds remaining": "{seconds} வினாடிகள் மீதமுள்ளன",
  "Five seconds remaining.": "ஐந்து வினாடிகள் மீதமுள்ளன.",
  "Time is up — take the thinking with you.": "நேரம் முடிந்தது — சிந்தனையைத் தொடருங்கள்.",
  "No answer was selected. That alone does not mean you overthought. The thoughtful next step is to check an official source, then act on reliable information. Try again or switch to untimed practice.": "பதில் தேர்ந்தெடுக்கப்படவில்லை. அதனால் மட்டும் நீங்கள் அளவுக்கு மீறிச் சிந்தித்தீர்கள் என்று பொருள் இல்லை. அதிகாரப்பூர்வ ஆதாரத்தைச் சரிபார்த்து, நம்பகமான தகவலின் அடிப்படையில் செயல்படுங்கள். மீண்டும் முயலுங்கள் அல்லது நேர வரம்பற்ற பயிற்சியைத் தேர்ந்தெடுங்கள்.",
  "Verify the source before you share or change your plan. Your approach matters more than how fast you click.": "பகிரும் முன்போ திட்டத்தை மாற்றும் முன்போ ஆதாரத்தைச் சரிபாருங்கள். எவ்வளவு வேகமாகத் தேர்ந்தெடுக்கிறீர்கள் என்பதைவிட உங்கள் அணுகுமுறையே முக்கியம்.",
  "Untimed practice": "நேர வரம்பற்ற பயிற்சி",
  "Untimed practice started. Read, think, then decide.": "நேர வரம்பற்ற பயிற்சி தொடங்கியது. படியுங்கள், சிந்தியுங்கள், பிறகு முடிவெடுங்கள்.",
  "Ten-second challenge started. Read, think, then decide.": "பத்து வினாடிச் சவால் தொடங்கியது. படியுங்கள், சிந்தியுங்கள், பிறகு முடிவெடுங்கள்."
};

Object.assign(tamilTranslations, {
  "ANCIENT WISDOM. A MODERN MINDSET.": "பழமையான அறிவு. நவீன சிந்தனை.",
  "Think clearly.": "தெளிவாகச் சிந்தி.",
  "Act confidently.": "நம்பிக்கையுடன் செயல்படு.",
  "Less impulse. More intention.": "அவசரம் குறையட்டும். நோக்கம் தெளிவாகட்டும்.",
  "Turn a timeless Tamil idea into your next better decision.": "காலம் கடந்த தமிழ்ச் சிந்தனையை உங்கள் அடுத்த சிறந்த முடிவாக மாற்றுங்கள்.",
  "Enter the decision lab": "முடிவெடுக்கும் பயிற்சியைத் தொடங்கு",
  "Discover the Kural": "குறளை அறிந்துகொள்",
  "Real-life scenarios": "வாழ்க்கைச் சூழல்கள்",
  "Languages": "மொழிகள்",
  "Timeless idea": "காலம் கடந்த கருத்து",
  "THE CLARITY FRAMEWORK": "தெளிவுக்கான மூன்று படிகள்",
  "Explore the three steps": "மூன்று படிகளையும் அறியுங்கள்",
  "Make space for the right questions.": "சரியான கேள்விகளுக்கு இடம் கொடுங்கள்.",
  "What matters? What could happen? What are your alternatives?": "எது முக்கியம்? என்ன நடக்கலாம்? மாற்று வழிகள் என்ன?",
  "Choose a direction with intention.": "தெளிவான நோக்கத்துடன் ஒரு வழியைத் தேர்ந்தெடுங்கள்.",
  "Compare the trade-offs. Choose what fits your goals and circumstances.": "நன்மை தீமைகளை ஒப்பிடுங்கள். உங்கள் இலக்குகளுக்கும் சூழலுக்கும் பொருத்தமானதைத் தேர்ந்தெடுங்கள்.",
  "Turn clarity into your next step.": "தெளிவை உங்கள் அடுத்த செயலாக மாற்றுங்கள்.",
  "Begin with one useful action. Revisit your plan when the facts change, not just when doubt appears.": "பயனுள்ள ஒரு செயலில் தொடங்குங்கள். வெறும் சந்தேகத்தால் அல்ல; உண்மைகள் மாறும்போது திட்டத்தை மறுபரிசீலனை செய்யுங்கள்.",
  "Explore each step": "ஒவ்வொரு படியையும் அறியுங்கள்",
  "Explore the next step": "அடுத்த படியை அறியுங்கள்",
  "Think before you act.": "செயல்படும் முன் சிந்தி.",
  "Not after.": "செய்த பிறகு அல்ல.",
  "Dark mode": "இருண்ட தோற்றம்",
  "Before you choose": "தேர்வுக்கு முன்",
  "Pause for these three questions. Then make your choice.": "இந்த மூன்று கேள்விகளைச் சிந்தியுங்கள். பிறகு தேர்ந்தெடுங்கள்.",
  "Ask yourself": "உங்களையே கேட்டுக்கொள்ளுங்கள்",
  "Would this course build a skill I actually want to use?": "நான் பயன்படுத்த விரும்பும் திறனை இந்தப் பாடம் வளர்க்குமா?",
  "Which opportunity fits both my goals and my current needs?": "என் இலக்குகளுக்கும் தற்போதைய தேவைகளுக்கும் எந்த வாய்ப்பு பொருந்தும்?",
  "If this were not on sale, would I still need it?": "தள்ளுபடி இல்லாவிட்டாலும் இந்தப் பொருள் எனக்குத் தேவையா?",
  "What might I be missing from the other person’s perspective?": "மற்றவரின் பார்வையில் எதை நான் கவனிக்கத் தவறியிருக்கலாம்?",
  "Would I share this if my name were attached to its consequences?": "இதன் விளைவுகளுக்கு நானே பொறுப்பேற்க வேண்டுமென்றால் இதைப் பகிர்வேனா?",
  "Who will be affected, and whose input have I not heard?": "யார் பாதிக்கப்படுவார்கள்? யாருடைய கருத்தை நான் இன்னும் கேட்கவில்லை?",
  "How prepared am I for tomorrow’s exam?": "நாளைய தேர்வுக்கு நான் எந்த அளவு தயாராக இருக்கிறேன்?",
  "How much study time do I still need?": "படிப்பதற்கு இன்னும் எவ்வளவு நேரம் தேவை?",
  "What would each choice mean for tomorrow?": "ஒவ்வொரு தேர்வும் நாளையை எப்படிப் பாதிக்கும்?",
  "Do I need this, or do I only want the discount?": "இது எனக்குத் தேவையா, அல்லது தள்ளுபடி மட்டுமே என்னைக் கவர்கிறதா?",
  "Can I afford it without sacrificing essentials?": "அத்தியாவசியத் தேவைகளை விட்டுக்கொடுக்காமல் இதை வாங்க முடியுமா?",
  "Could a simpler alternative meet the same need?": "எளிமையான மாற்று வழி இதே தேவையை நிறைவேற்றுமா?",
  "What skills and experience would each role offer?": "ஒவ்வொரு பணியும் என்ன திறன்களையும் அனுபவத்தையும் தரும்?",
  "What are my financial needs right now?": "இப்போதைய என் பணத் தேவைகள் என்ன?",
  "Which option supports my longer-term direction?": "நீண்டகால இலக்குக்கு எந்தத் தேர்வு உதவும்?",
  "Do I understand the full context?": "முழுச் சூழலையும் புரிந்துகொண்டேனா?",
  "What could my reply make better or worse?": "என் பதில் எதை மேம்படுத்தலாம் அல்லது மோசமாக்கலாம்?",
  "Would a calm response or a boundary be more useful?": "அமைதியான பதிலா, எல்லை வகுப்பதா — எது பயனுள்ளதாக இருக்கும்?"
});

let currentLanguage = 'en';
function t(english, values = {}) {
  const translated = currentLanguage === 'ta' ? (tamilTranslations[english] || english) : english;
  return translated.replace(/\{(\w+)\}/g, (match, key) => values[key] ?? match);
}


// All state lives in memory. No requests, accounts, cookies or local storage.
const scenarios = [
  {
    category: 'Student life', tag: 'EDUCATION', symbol: '✎',
    title: 'One evening. Two priorities.',
    description: 'You have an important exam tomorrow. Your friends invite you to play games tonight. What would you do?',
    choices: [
      { text: 'Immediately accept. I can think about the exam later.', type: 'impulsive' },
      { text: 'Consider my preparation, the time I need and the consequences. Then decide and follow a clear plan.', type: 'thoughtful' },
      { text: 'Keep worrying about both options until the evening is gone.', type: 'hesitant' }
    ],
    lesson: 'Check your preparation and protect the study time you need. You might decline or set a short break; the principle is to consider the consequences before choosing.'
  },
  {
    category: 'Money matters', tag: 'MONEY', symbol: '₹',
    title: 'A big discount. A real need?',
    description: 'An expensive product is on sale online. The discount looks huge and the offer feels urgent. How do you approach the purchase?',
    choices: [
      { text: 'Buy it immediately before the deal disappears.', type: 'impulsive' },
      { text: 'Keep comparing endlessly, even after I have enough information to choose.', type: 'hesitant' },
      { text: 'Check whether I need it, my budget, alternatives and long-term usefulness. Then decide.', type: 'thoughtful' }
    ],
    lesson: 'A discount does not establish value. Consider need, affordability, alternatives and lasting usefulness; then buy or walk away with a clear reason.'
  },
  {
    category: 'Your next chapter', tag: 'CAREER', symbol: '↗',
    title: 'Two offers. One next step.',
    description: 'You receive two internship offers. One pays more; another offers stronger learning opportunities. Both need an answer soon.',
    choices: [
      { text: 'Compare skills, future career value, experience, salary and my financial needs. Choose what fits my goals.', type: 'thoughtful' },
      { text: 'Pick the higher salary immediately without checking the role.', type: 'impulsive' },
      { text: 'Keep doubting my researched choice until both deadlines pass.', type: 'hesitant' }
    ],
    lesson: 'There is no universal winner between pay and learning. Weigh both against your circumstances, decide before the deadline and commit to the opportunity.'
  },
  {
    category: 'Life online', tag: 'SOCIAL MEDIA', symbol: '⌘',
    title: 'An angry message. Your response.',
    description: 'Someone sends you an angry message online. You feel the urge to reply immediately. What do you do next?',
    choices: [
      { text: 'Reply angrily straight away so they know how I feel.', type: 'impulsive' },
      { text: 'Pause, understand the context and consider the effects. Then choose a calm response or a clear boundary.', type: 'thoughtful' },
      { text: 'After choosing a useful response, repeatedly rewrite it out of doubt and never act.', type: 'hesitant' }
    ],
    lesson: 'Think → Understand → Decide → Respond. A calm reply, a boundary or deliberately not replying can all be thoughtful choices. Safety and context matter.'
  }
];

const feedback = {
  impulsive: { title: '✕ Acted Before Thinking', text: 'You made the decision quickly without considering its consequences.', className: '' },
  thoughtful: { title: '✓ You followed Thirukkural 467', text: 'You considered the consequences first and then made your decision confidently.', className: 'success' },
  hesitant: { title: '△ Overthinking Prevented Action', text: 'Thinking is important before deciding, but endless hesitation after that can stop progress.', className: 'warning' }
};

const byId = (id) => document.getElementById(id);
let scenarioIndex = 0;
let thoughtfulScore = 0;
let answersCompleted = 0;
let scenarioAnswered = false;
let selectedScenarioChoice = null;
let gameFinished = false;


const reflectionPrompts = [
  ['How prepared am I for tomorrow’s exam?', 'How much study time do I still need?', 'What would each choice mean for tomorrow?'],
  ['Do I need this, or do I only want the discount?', 'Can I afford it without sacrificing essentials?', 'Could a simpler alternative meet the same need?'],
  ['What skills and experience would each role offer?', 'What are my financial needs right now?', 'Which option supports my longer-term direction?'],
  ['Do I understand the full context?', 'What could my reply make better or worse?', 'Would a calm response or a boundary be more useful?']
];
const reflectionChecks = scenarios.map(() => [false, false, false]);
let activeStage = 0;
const stageCopy = [
  ['Make space for the right questions.', 'What matters? What could happen? What are your alternatives?'],
  ['Choose a direction with intention.', 'Compare the trade-offs. Choose what fits your goals and circumstances.'],
  ['Turn clarity into your next step.', 'Begin with one useful action. Revisit your plan when the facts change, not just when doubt appears.']
];

function renderStage() {
  byId('studio-number').textContent = `0${activeStage + 1}`;
  byId('studio-heading').textContent = t(stageCopy[activeStage][0]);
  byId('studio-description').textContent = t(stageCopy[activeStage][1]);
  document.querySelectorAll('[data-stage]').forEach((button) => {
    button.setAttribute('aria-pressed', String(Number(button.dataset.stage) === activeStage));
  });
}

function renderReflections() {
  const container = byId('reflection-prompts');
  container.replaceChildren();
  reflectionPrompts[scenarioIndex].forEach((prompt, index) => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = reflectionChecks[scenarioIndex][index];
    const text = document.createElement('span');
    text.textContent = t(prompt);
    input.addEventListener('change', () => {
      reflectionChecks[scenarioIndex][index] = input.checked;
      updateReflectionCount();
    });
    label.append(input, text);
    container.append(label);
  });
  updateReflectionCount();
}

function updateReflectionCount() {
  byId('checklist-count').textContent = `${reflectionChecks[scenarioIndex].filter(Boolean).length} / 3`;
}

// Build choices with DOM methods so all text, including journal input, stays text.
function makeChoice(choice, index, onChoose) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'choice';
  const letter = document.createElement('span');
  letter.className = 'choice-letter';
  letter.setAttribute('aria-hidden', 'true');
  letter.textContent = String.fromCharCode(65 + index);
  const label = document.createElement('span');
  label.textContent = t(choice.text);
  button.append(letter, label);
  button.addEventListener('click', () => onChoose(choice, button));
  return button;
}

function showFeedback(element, type, lesson) {
  const content = feedback[type];
  element.className = 'result ' + content.className;
  const heading = document.createElement('h4');
  heading.textContent = t(content.title);
  const paragraph = document.createElement('p');
  paragraph.textContent = t(content.text) + ' ' + t(lesson);
  element.replaceChildren(heading, paragraph);
  element.hidden = false;
}

function markChoices(container, choices, selectedButton) {
  Array.from(container.children).forEach((button, index) => {
    button.disabled = true;
    if (button === selectedButton) {
      button.classList.add('is-selected');
      button.setAttribute('aria-label', t(choices[index].text) + t(' — your choice'));
    }
    if (choices[index].type === 'thoughtful') {
      button.classList.add('is-correct');
      const badge = document.createElement('span');
      badge.className = 'choice-badge';
      badge.textContent = t('✓ The thoughtful approach') + (button === selectedButton ? t(' · Your choice') : '');
      button.lastElementChild.append(badge);
    }
  });
}

function updateScore() {
  byId('score-number').textContent = thoughtfulScore;
  byId('answered-number').textContent = answersCompleted;
}

function loadScenario(moveFocus = false) {
  scenarioAnswered = false;
  selectedScenarioChoice = null;
  byId('thinking-checklist').open = false;
  renderScenario(moveFocus);
}

function renderScenario(moveFocus = false) {
  const scenario = scenarios[scenarioIndex];
  renderReflections();
  byId('scenario-symbol').textContent = scenario.symbol;
  byId('scenario-category').textContent = t(scenario.category);
  byId('scenario-count').textContent = t('Scenario {current} of {total}', { current: scenarioIndex + 1, total: scenarios.length });
  byId('scenario-tag').textContent = `0${scenarioIndex + 1} / ${t(scenario.tag)}`;
  byId('scenario-title').textContent = t(scenario.title);
  byId('scenario-description').textContent = t(scenario.description);
  byId('game-result').hidden = true;
  byId('next-scenario').hidden = true;
  byId('game-hint').textContent = t('There is more to a decision than its first impulse.');
  byId('game-choices').replaceChildren(...scenario.choices.map((choice, index) => makeChoice(choice, index, chooseScenario)));
  document.querySelectorAll('.scenario-dots span').forEach((dot, index) => {
    dot.classList.toggle('done', index < scenarioIndex);
    dot.classList.toggle('current', index === scenarioIndex);
  });
  if (scenarioAnswered) {
    const button = byId('game-choices').children[selectedScenarioChoice];
    markChoices(byId('game-choices'), scenario.choices, button);
    showFeedback(byId('game-result'), scenario.choices[selectedScenarioChoice].type, scenario.lesson);
    byId('game-hint').textContent = t('Think first. Decide clearly. Follow through.');
    byId('next-scenario').textContent = t(scenarioIndex === scenarios.length - 1 ? 'See my reflection →' : 'Next scenario →');
    byId('next-scenario').hidden = gameFinished;
  }
  if (gameFinished) {
    document.querySelectorAll('.scenario-dots span').forEach((dot) => {
      dot.classList.add('done');
      dot.classList.remove('current');
    });
    byId('summary-heading').textContent = t('{score} of 4 thoughtful choices. A lesson to carry forward.', { score: thoughtfulScore });
  }
  updateScore();
  if (moveFocus) byId('scenario-title').focus();
}

function chooseScenario(choice, button) {
  if (scenarioAnswered) return; // One answer and one score update per scenario.
  scenarioAnswered = true;
  selectedScenarioChoice = scenarios[scenarioIndex].choices.indexOf(choice);
  answersCompleted += 1;
  if (choice.type === 'thoughtful') thoughtfulScore += 1;
  const scenario = scenarios[scenarioIndex];
  markChoices(byId('game-choices'), scenario.choices, button);
  showFeedback(byId('game-result'), choice.type, scenario.lesson);
  updateScore();
  byId('game-hint').textContent = t('Think first. Decide clearly. Follow through.');
  byId('next-scenario').textContent = t(scenarioIndex === scenarios.length - 1 ? 'See my reflection →' : 'Next scenario →');
  byId('next-scenario').hidden = false;
}

byId('next-scenario').addEventListener('click', () => {
  if (!scenarioAnswered) return;
  if (scenarioIndex < scenarios.length - 1) {
    scenarioIndex += 1;
    loadScenario(true);
  } else {
    gameFinished = true;
    byId('next-scenario').hidden = true;
    document.querySelectorAll('.scenario-dots span').forEach((dot) => { dot.classList.add('done'); dot.classList.remove('current'); });
    byId('summary-heading').textContent = t('{score} of 4 thoughtful choices. A lesson to carry forward.', { score: thoughtfulScore });
    byId('game-summary').hidden = false;
    byId('game-summary').focus();
  }
});

byId('restart-game').addEventListener('click', () => {
  scenarioIndex = 0;
  gameFinished = false;
  reflectionChecks.forEach((checks) => checks.fill(false));
  thoughtfulScore = 0;
  answersCompleted = 0;
  byId('game-summary').hidden = true;
  loadScenario(true);
});

// Six journal screens: the situation, four reflection questions, then a decision.
let journalStep = 0;
const journalSteps = Array.from(document.querySelectorAll('.journal-step'));
const journalInputs = journalSteps.map((step) => step.querySelector('input, textarea'));
const journalLabels = ['The situation', 'Benefits', 'Risks', 'Alternatives', 'Consequences'];

function populateReview() {
  const review = byId('review-content');
  review.replaceChildren();
  journalLabels.forEach((label, index) => {
    const title = document.createElement('dt');
    const value = document.createElement('dd');
    title.textContent = t(label);
    value.textContent = journalInputs[index].value.trim();
    review.append(title, value);
  });
}

function showJournalStep(moveFocus = true) {
  journalSteps.forEach((step, index) => {
    step.hidden = index !== journalStep;
    // Disabled hidden inputs do not interfere with native form validation.
    journalInputs[index].disabled = index !== journalStep;
  });
  byId('journal-counter').textContent = `0${journalStep + 1} / 06`;
  byId('journal-progress').setAttribute('aria-valuenow', journalStep + 1);
  byId('journal-progress').firstElementChild.style.width = `${((journalStep + 1) / journalSteps.length) * 100}%`;
  byId('journal-back').hidden = journalStep === 0;
  byId('journal-next').textContent = t(journalStep === 5 ? 'I Have Thought. Now I Decide.' : journalStep === 0 ? 'Start thinking →' : 'Continue →');
  if (journalStep === 5) populateReview();
  if (moveFocus) journalSteps[journalStep].querySelector('h3').focus();
}

journalInputs.forEach((input) => {
  input.addEventListener('input', () => input.setCustomValidity(''));
  input.addEventListener('invalid', () => {
    if (!input.value.trim()) input.setCustomValidity(t('Please add a thought before continuing.'));
  });
});

byId('decision-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = journalInputs[journalStep];
  if (!input.value.trim()) {
    input.setCustomValidity(t('Please add a thought before continuing.'));
    input.reportValidity();
    return;
  }
  if (journalStep < journalSteps.length - 1) {
    journalStep += 1;
    showJournalStep();
  } else {
    byId('committed-decision').textContent = input.value.trim();
    byId('decision-form').hidden = true;
    byId('commitment').hidden = false;
    byId('commitment').focus();
  }
});

byId('journal-back').addEventListener('click', () => {
  if (journalStep > 0) { journalStep -= 1; showJournalStep(); }
});
byId('edit-decision').addEventListener('click', () => {
  byId('commitment').hidden = true;
  byId('decision-form').hidden = false;
  showJournalStep();
});
byId('new-decision').addEventListener('click', () => {
  byId('decision-form').reset();
  journalInputs.forEach((input) => input.setCustomValidity(''));
  byId('committed-decision').textContent = '';
  byId('review-content').replaceChildren();
  byId('commitment').hidden = true;
  byId('decision-form').hidden = false;
  journalStep = 0;
  showJournalStep();
});

const challengeChoices = [
  { text: 'Forward it now. Everyone else is sharing it.', type: 'impulsive' },
  { text: 'Check an official source before sharing or changing my study plan.', type: 'thoughtful' },
  { text: 'Even after official confirmation, keep doubting and delay my plan.', type: 'hesitant' }
];
let challengeRunning = false;
let challengeState = 'idle';
let selectedChallengeChoice = null;
let countdownInterval = null;
let deadline = 0;
let lastDisplayedSecond = -1;

function stopCountdown() {
  window.clearInterval(countdownInterval);
  countdownInterval = null;
}

function displayCountdown(seconds) {
  if (seconds === lastDisplayedSecond) return;
  lastDisplayedSecond = seconds;
  byId('timer-number').textContent = seconds;
  byId('timer').setAttribute('aria-label', t('{seconds} seconds remaining', { seconds }));
  byId('timer').style.setProperty('--remaining', `${seconds * 10}%`);
  byId('timer').classList.remove('tick');
  void byId('timer').offsetWidth; // Restart the small number animation once per second.
  byId('timer').classList.add('tick');
  if (seconds === 5) byId('challenge-status').textContent = t('Five seconds remaining.');
}

function finishTimeout() {
  if (!challengeRunning) return;
  challengeRunning = false;
  stopCountdown();
  challengeState = 'expired';
  renderTimeout();
  markChoices(byId('challenge-choices'), challengeChoices, null);
  byId('retry-challenge').hidden = false;
  byId('untimed').disabled = false;
}

function renderTimeout() {
  const result = byId('challenge-result');
  result.className = 'result warning';
  const heading = document.createElement('h4');
  heading.textContent = t('Time is up — take the thinking with you.');
  const explanation = document.createElement('p');
  explanation.textContent = t('No answer was selected. That alone does not mean you overthought. The thoughtful next step is to check an official source, then act on reliable information. Try again or switch to untimed practice.');
  result.replaceChildren(heading, explanation);
  result.hidden = false;
}

function tickCountdown() {
  // A real deadline prevents timer drift when a tab is backgrounded.
  const seconds = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
  displayCountdown(seconds);
  if (seconds === 0) finishTimeout();
}

function chooseChallenge(choice, button) {
  if (!challengeRunning) return;
  if (!byId('untimed').checked && Date.now() >= deadline) { tickCountdown(); return; }
  challengeRunning = false;
  challengeState = 'answered';
  selectedChallengeChoice = challengeChoices.indexOf(choice);
  stopCountdown();
  markChoices(byId('challenge-choices'), challengeChoices, button);
  showFeedback(byId('challenge-result'), choice.type, 'Verify the source before you share or change your plan. Your approach matters more than how fast you click.');
  byId('retry-challenge').hidden = false;
  byId('untimed').disabled = false;
}

function startChallenge() {
  stopCountdown();
  challengeRunning = true;
  challengeState = 'running';
  selectedChallengeChoice = null;
  lastDisplayedSecond = -1;
  byId('challenge-result').hidden = true;
  byId('retry-challenge').hidden = true;
  byId('start-challenge').hidden = true;
  byId('untimed').disabled = true;
  const choices = byId('challenge-choices');
  choices.replaceChildren(...challengeChoices.map((choice, index) => makeChoice(choice, index, chooseChallenge)));
  choices.hidden = false;
  if (byId('untimed').checked) {
    byId('timer-number').textContent = '∞';
    byId('timer').setAttribute('aria-label', t('Untimed practice'));
    byId('timer').style.setProperty('--remaining', '100%');
    byId('challenge-status').textContent = t('Untimed practice started. Read, think, then decide.');
  } else {
    deadline = Date.now() + 10000;
    displayCountdown(10);
    byId('challenge-status').textContent = t('Ten-second challenge started. Read, think, then decide.');
    countdownInterval = window.setInterval(tickCountdown, 100);
  }
  choices.firstElementChild.focus();
}

byId('start-challenge').addEventListener('click', startChallenge);
byId('retry-challenge').addEventListener('click', startChallenge);
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && challengeRunning && !byId('untimed').checked) tickCountdown();
});
window.addEventListener('pagehide', stopCountdown);
window.addEventListener('pageshow', () => {
  if (challengeRunning && !byId('untimed').checked) {
    tickCountdown();
    if (challengeRunning) countdownInterval = window.setInterval(tickCountdown, 100);
  }
});

function setupScrollAnimations() {
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach((element) => {
    element.classList.add('will-reveal');
    observer.observe(element);
  });
}


// Capture original text nodes once. Updating nodeValue preserves nested icons and markup.
// User-entered values and dynamically created results are never part of these bindings.
const translationBindings = [];
function bindStaticTranslations() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (node.parentElement.closest('script, style, textarea, noscript')) continue;
    const english = node.nodeValue.trim();
    if (Object.prototype.hasOwnProperty.call(tamilTranslations, english)) {
      translationBindings.push({ node, english, original: node.nodeValue });
    }
  }
  document.querySelectorAll('[aria-label], [placeholder]').forEach((element) => {
    ['aria-label', 'placeholder'].forEach((attribute) => {
      const english = element.getAttribute(attribute);
      if (english && Object.prototype.hasOwnProperty.call(tamilTranslations, english)) {
        translationBindings.push({ element, attribute, english });
      }
    });
  });
}

function renderChallengeLanguage() {
  if (challengeState !== 'idle') {
    const container = byId('challenge-choices');
    container.replaceChildren(...challengeChoices.map((choice, index) => makeChoice(choice, index, chooseChallenge)));
    if (challengeState === 'answered') {
      markChoices(container, challengeChoices, container.children[selectedChallengeChoice]);
      showFeedback(byId('challenge-result'), challengeChoices[selectedChallengeChoice].type,
        'Verify the source before you share or change your plan. Your approach matters more than how fast you click.');
    } else if (challengeState === 'expired') {
      markChoices(container, challengeChoices, null);
      renderTimeout();
    }
  }
  const untimed = byId('timer-number').textContent === '∞';
  byId('timer').setAttribute('aria-label', untimed ? t('Untimed practice') :
    t('{seconds} seconds remaining', { seconds: byId('timer-number').textContent }));
  if (challengeRunning) {
    byId('challenge-status').textContent = t(untimed ?
      'Untimed practice started. Read, think, then decide.' :
      '{seconds} seconds remaining', { seconds: byId('timer-number').textContent });
  } else {
    byId('challenge-status').textContent = '';
  }
}

function setLanguage(language, announce = true) {
  if (language !== 'en' && language !== 'ta') return;
  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = t('467 · The Art of a Thoughtful Decision');
  translationBindings.forEach((binding) => {
    if (binding.node) {
      binding.node.nodeValue = binding.original.replace(binding.english, t(binding.english));
    } else {
      binding.element.setAttribute(binding.attribute, t(binding.english));
    }
  });
  document.querySelectorAll('[data-language]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  });
  // Refresh presentation only. No scores, written answers or timer deadlines are reset.
  renderScenario();
  showJournalStep(false);
  journalInputs.forEach((input) => {
    if (input.validity.customError) input.setCustomValidity(t('Please add a thought before continuing.'));
  });
  renderChallengeLanguage();
  renderStage();
  if (announce) byId('language-status').textContent = t('Language changed to English.');
}

bindStaticTranslations();
document.querySelectorAll('[data-language]').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});
loadScenario();
showJournalStep(false);
setLanguage('en', false);
setupScrollAnimations();


// Theme is session-only. No personal data or preferences are written to storage.
byId('theme-toggle').addEventListener('click', () => {
  const dark = document.documentElement.dataset.theme !== 'dark';
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  byId('theme-toggle').setAttribute('aria-pressed', String(dark));
});
document.querySelectorAll('[data-stage]').forEach((button) => {
  button.addEventListener('click', () => {
    activeStage = Number(button.dataset.stage);
    renderStage();
  });
});
byId('next-stage').addEventListener('click', () => {
  activeStage = (activeStage + 1) % stageCopy.length;
  renderStage();
});

// A passive, animation-frame-throttled reading indicator avoids work on every scroll event.
let readingFramePending = false;
function updateReadingProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
  byId('reading-progress').style.transform = `scaleX(${progress})`;
  readingFramePending = false;
}
function scheduleReadingProgress() {
  if (readingFramePending) return;
  readingFramePending = true;
  window.requestAnimationFrame(updateReadingProgress);
}
window.addEventListener('scroll', scheduleReadingProgress, { passive: true });
window.addEventListener('resize', scheduleReadingProgress);
updateReadingProgress();

// Pointer-driven 3D: no animation loop, library or sensor permission is needed.
// The cached flat bounds prevent feedback jitter as the surface rotates.
function setupDepthEffects() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const precisePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const cards = document.querySelectorAll('.hero-studio, .meaning-card, .application-card');
  const resetHandlers = [];

  cards.forEach((card) => {
    card.classList.add('depth-card');
    let bounds = null;
    let frame = null;
    let pointerX = 0;
    let pointerY = 0;
    let engaged = false;
    const maxAngle = card.classList.contains('hero-studio') ? 5 : 3.5;

    function allowed() {
      return !reducedMotion.matches && precisePointer.matches && !card.matches(':focus-within');
    }

    function reset() {
      if (!engaged && frame === null) return;
      engaged = false;
      bounds = null;
      if (frame !== null) window.cancelAnimationFrame(frame);
      frame = null;
      card.classList.remove('is-tilting');
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
      card.style.setProperty('--depth-lift', '0px');
      card.style.setProperty('--light-strength', '0');
    }

    function paint() {
      frame = null;
      if (!engaged || !bounds || !allowed()) return;
      const x = Math.max(0, Math.min(1, (pointerX - bounds.left) / bounds.width));
      const y = Math.max(0, Math.min(1, (pointerY - bounds.top) / bounds.height));
      card.style.setProperty('--tilt-x', `${((0.5 - y) * maxAngle * 2).toFixed(2)}deg`);
      card.style.setProperty('--tilt-y', `${((x - 0.5) * maxAngle * 2).toFixed(2)}deg`);
      card.style.setProperty('--depth-lift', '-3px');
      card.style.setProperty('--light-x', `${(x * 100).toFixed(1)}%`);
      card.style.setProperty('--light-y', `${(y * 100).toFixed(1)}%`);
      card.style.setProperty('--light-strength', '1');
    }

    card.addEventListener('pointerenter', (event) => {
      if (event.pointerType !== 'mouse' || !allowed()) return;
      bounds = card.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      engaged = true;
      card.classList.add('is-tilting');
    });
    card.addEventListener('pointermove', (event) => {
      if (!engaged || event.pointerType !== 'mouse' || !allowed()) return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (frame === null) frame = window.requestAnimationFrame(paint);
    });
    card.addEventListener('pointerleave', reset);
    card.addEventListener('pointercancel', reset);
    card.addEventListener('focusin', reset);
    // Opening a details panel changes geometry; let the card settle immediately.
    card.querySelectorAll('details').forEach((detail) => detail.addEventListener('toggle', reset));
    resetHandlers.push(reset);
  });

  const resetAll = () => resetHandlers.forEach((reset) => reset());
  window.addEventListener('resize', resetAll, { passive: true });
  window.addEventListener('scroll', resetAll, { passive: true });
  window.addEventListener('blur', resetAll);
  document.addEventListener('visibilitychange', () => { if (document.hidden) resetAll(); });
  // Preferences can change while the page is open; honour them immediately.
  reducedMotion.addEventListener('change', resetAll);
  precisePointer.addEventListener('change', resetAll);
}
setupDepthEffects();
