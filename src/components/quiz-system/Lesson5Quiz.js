// Lesson5Quiz.js - Question data for Lesson 5: Speaking AI

export const lesson5 = {
  lesson: 5,
  title: "Speaking AI",
  questions: [
    {
      id: "L5Q1",
      question: "Sarah asks an AI: \"Tell me about healthy eating.\" Her friend Maya asks: \"Explain three practical meal-prep strategies for a busy college student on a £40 weekly budget who wants to eat more vegetables but dislikes cooking.\" Why will Maya likely get a more useful response?",
      type: "mcq",
      options: [
        "Maya's AI is more advanced than Sarah's",
        "Maya provided specific context, constraints, and goals while Sarah's prompt was vague",
        "Sarah's question is too difficult for AI to answer",
        "Maya used more polite language in her prompt"
      ],
      correct: 1,
      explanation: "The lesson emphasizes that specific prompts with clear context, goals, audience, and constraints produce tailored, useful outputs, while vague prompts generate generic responses. Maya's prompt includes all necessary details; Sarah's doesn't."
    },
    {
      id: "L5Q2",
      question: "Using the CO-STAR framework, which prompt is BEST structured?",
      type: "mcq",
      options: [
        "\"Write something about climate change\"",
        "\"I'm a Year 11 student creating a presentation for my class (Context). I need three key facts about climate change impacts (Objective). Use simple language with examples (Style). Keep it informative but not scary (Tone). My audience is 15-year-olds (Audience). Present as bullet points with one example per fact (Response format).\"",
        "\"Tell me facts about climate change for my presentation\"",
        "\"Climate change presentation facts please\""
      ],
      correct: 1,
      explanation: "Option B includes all CO-STAR elements: Context (who you are, situation), Objective (what you need), Style (approach), Tone (emotional quality), Audience (who it's for), and Response format (how to structure output). The other options lack most of these elements."
    },
    {
      id: "L5Q3",
      question: "You ask AI to \"write a recommendation letter.\" It produces a generic letter that doesn't match your situation. Which element should you add first to get better results?",
      type: "mcq",
      options: [
        "Request a different tone",
        "Provide detailed context: who the letter is for, what they achieved, what program they're applying to, your relationship to them",
        "Change the response format",
        "Make the prompt shorter"
      ],
      correct: 1,
      explanation: "Context is the most powerful element in prompting. Without knowing the specific situation, AI can only generate generic content. Adding context (who, what, why, relationship) transforms the output from generic to relevant."
    },
    {
      id: "L5Q4",
      question: "You get an unhelpful response from AI. What's the MOST effective next step according to the lesson?",
      type: "mcq",
      options: [
        "Give up and try a completely different topic",
        "Ask the AI to analyze what was missing from your original prompt and suggest improvements (meta-prompting), then refine based on that feedback",
        "Use the exact same prompt again hoping for better luck",
        "Switch to a different AI tool"
      ],
      correct: 1,
      explanation: "The lesson teaches iterative refinement and meta-prompting. Instead of abandoning the task, ask AI to help improve your prompt (meta-prompting), identify what's missing, then refine. This is more effective than starting over or hoping repetition works."
    },
    {
      id: "L5Q5",
      question: "Compare these two prompts: Prompt A: \"Explain photosynthesis\" Prompt B: \"You are a biology teacher explaining to Year 9 students. Explain photosynthesis in 3 short paragraphs using a simple analogy. Keep it engaging and conversational.\" What techniques does Prompt B use that Prompt A lacks?",
      type: "mcq",
      options: [
        "Role prompting (assigning a specific role) and output control (format, length, tone, style)",
        "Only length requirements",
        "Only tone requirements",
        "No meaningful difference between the prompts"
      ],
      correct: 0,
      explanation: "Prompt B uses role prompting (\"You are a biology teacher\") which improves response quality by giving AI a perspective. It also specifies output control elements: format (3 paragraphs), length (short), style (simple analogy), and tone (engaging, conversational)."
    },
    {
      id: "L5Q6",
      question: "You want AI to write in a specific style but struggle to describe it. What technique should you use?",
      type: "mcq",
      options: [
        "Give up because AI can't match styles",
        "Use few-shot prompting: show AI 2-3 examples of the style you want, then ask it to match that style",
        "Just ask for \"good writing\"",
        "Use more complex vocabulary in your prompt"
      ],
      correct: 1,
      explanation: "Few-shot prompting means showing examples rather than trying to describe what you want. If you provide 2-3 examples of the desired style/format/tone, AI can pattern-match to produce similar output - easier and more effective than verbal descriptions."
    },
    {
      id: "L5Q7",
      question: "For which task would chain-of-thought prompting (asking AI to show its reasoning step-by-step) be MOST helpful?",
      type: "mcq",
      options: [
        "\"What's the capital of France?\"",
        "\"Solve this complex word problem: If a train leaves London at 9am traveling 80mph, and another leaves Manchester at 9:30am traveling 90mph toward London, when do they meet? Show your reasoning step by step.\"",
        "\"Write a creative story about a dragon\"",
        "\"Translate this sentence to Spanish\""
      ],
      correct: 1,
      explanation: "Chain-of-thought prompting is most valuable for complex problems requiring multi-step reasoning. The train problem needs sequential calculations and logical steps. Simple factual questions, creative tasks, and translations don't benefit as much from step-by-step reasoning displays."
    },
    {
      id: "L5Q8",
      question: "You're deciding between two summer programs. What prompting technique would give you the most comprehensive decision-making help?",
      type: "mcq",
      options: [
        "Ask AI to pick the best one immediately",
        "Use self-consistency: Ask AI to analyze the decision from 3 different perspectives (career development, personal growth, social benefits), then compare the approaches",
        "Ask for a simple yes/no answer",
        "Avoid using AI for personal decisions"
      ],
      correct: 1,
      explanation: "Self-consistency (requesting multiple approaches/perspectives, then comparing) is specifically designed for complex decisions. Getting AI to analyze from different angles helps you see all considerations rather than jumping to a single answer."
    },
    {
      id: "L5Q9",
      question: "Your classmate complains: \"AI always gives me useless generic answers.\" Explain the \"garbage in, garbage out\" principle and give them one specific piece of advice using an example.",
      type: "short",
      explanation: "\"Garbage in, garbage out\" means if you give AI vague, unclear prompts, you get vague, generic responses. If you give detailed, specific prompts, you get tailored, useful responses. The quality of output directly depends on quality of input. Advice example: Instead of \"Help with my homework,\" try \"I'm working on a Year 10 chemistry assignment about acids and bases. I understand the basic pH scale but I'm confused about why strong acids fully dissociate while weak acids partially dissociate. Can you explain this using a simple analogy and then give me one practice question to test my understanding?\" The second prompt gives context (what level, what subject, what specific confusion) and objective (explanation + practice), so AI can give a targeted response instead of generic homework help."
    },
    {
      id: "L5Q10",
      question: "You need AI to help create revision flashcards for your history exam on World War II. Write a prompt that includes at least four CO-STAR elements and explain why including context is most important.",
      type: "short",
      explanation: "Example prompt: \"I'm a Year 11 student preparing for my GCSE history exam (Context). Create 10 flashcards covering the main causes of World War II (Objective). Use clear, concise language with specific dates and events (Style). Keep it factual and exam-focused (Tone). I need question on front, answer on back, formatted for Quizlet (Response format).\" Why context matters most: Context tells AI who I am (Year 11 = knowledge level), what situation (GCSE exam = appropriate depth and focus), which subject area (WW2 causes, not battles or consequences). Without context, AI doesn't know whether to write for university students or Year 7s, whether to focus on social/economic/political causes, or what exam board's emphasis to match. Context transforms generic flashcards into ones actually useful for MY specific situation."
    },
    {
      id: "L5Q11",
      question: "Describe the iterative refinement process for prompting. Then identify what mistake someone is making if they ask AI one question, get a poor answer, then immediately ask a completely different question.",
      type: "short",
      explanation: "Iterative refinement process: (1) Create initial prompt with best guess at what's needed. (2) Analyze the output: What's missing? Wrong tone? Wrong level? Too vague? (3) Adjust prompt to fix the specific problem (add context, specify format, change role, etc.). (4) Repeat until output quality improves. Mistake identified: They're making the error of \"jumping between questions instead of refining.\" When you get a poor response, the problem is usually your prompt, not AI's inability. Abandoning the question and asking something else means you never learn to prompt better. You should stick with the original question and refine the prompt until you get quality output - this builds your prompting skills."
    },
    {
      id: "L5Q12",
      question: "Explain what the \"constraint paradox\" means and give an example of how adding constraints could actually make AI's output MORE creative rather than less.",
      type: "short",
      explanation: "Constraint paradox: It seems like fewer rules = more creativity, but actually, adding specific constraints forces AI (and humans) to be MORE creative by eliminating generic/obvious solutions and requiring original problem-solving within boundaries. Example: Vague prompt: \"Write a story\" → AI produces generic fantasy adventure. Constrained prompt: \"Write a story where the main character can't speak, set entirely in a library, where the conflict is resolved using only three objects: a paper clip, a book on origami, and a jar of honey\" → AI must create unique plot because constraints eliminate clichéd solutions, forcing creative problem-solving. The constraints make the output more original because AI can't rely on standard story patterns - it must innovate within the specific boundaries."
    },
    {
      id: "L5Q13",
      question: "You're asking AI to solve a complex maths problem and to write social media captions. Which task should use chain-of-thought prompting and which should use few-shot prompting? Explain why each technique fits its task.",
      type: "short",
      explanation: "Complex maths problem → Chain-of-thought prompting. Why: Maths requires logical, sequential reasoning. Asking AI to \"show your working step-by-step\" or \"explain your reasoning\" helps catch errors and lets you follow the logic. Chain-of-thought is for complex problems needing transparent reasoning. Social media captions → Few-shot prompting. Why: Caption style is hard to describe (\"be engaging but not try-hard\") but easy to show. Provide 3 examples of captions you like, then ask AI to match that style. Few-shot (showing examples) is perfect for stylistic tasks where demonstration works better than description."
    },
    {
      id: "L5Q14",
      question: "Your friend is frustrated because they keep getting unhelpful responses from AI. They show you their process: they ask a question, get a bad answer, then immediately ask a completely different question hoping it will work better. Identify what mistake they're making and explain what they should do instead.",
      type: "short",
      explanation: "Mistake: \"Jumping between questions instead of refining\" - they're abandoning prompts rather than improving them. This prevents learning and assumes the problem is AI's fault rather than prompt quality. What to do instead: Stick with the original question and use iterative refinement: (1) Analyze why the output isn't working (wrong tone? too vague? missing information?). (2) Adjust the prompt to fix that specific issue (add context, specify format, change role). (3) Try again. (4) Repeat until you get quality results. This teaches you to prompt better. Each refinement cycle improves your skill. Constantly switching questions means you never learn what makes prompts effective."
    }
  ]
};

export default lesson5;