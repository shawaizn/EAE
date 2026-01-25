// Lesson4Quiz.js - Question data for Lesson 4: When to Use AI

export const lesson4 = {
  lesson: 4,
  title: "When to Use AI",
  questions: [
    {
      id: "L4Q1",
      question: "According to the lesson, what is the core principle that determines what AI can and cannot do?",
      type: "mcq",
      options: [
        "AI can only work with numbers and calculations",
        "AI recognizes patterns and replicates them – if there's no pattern, AI fails",
        "AI is creative but bad at following rules",
        "AI can think like humans but is slower"
      ],
      correct: 1,
      explanation: "AI works by recognizing patterns from millions of examples and replicating those patterns. Tasks with predictable patterns work well; tasks without clear patterns (like original thinking) don't."
    },
    {
      id: "L4Q2",
      question: "Which of these is an example of HEAD work that AI excels at?",
      type: "mcq",
      options: [
        "Deciding what's most important to include in your university application",
        "Understanding why you're struggling with a particular subject",
        "Checking your essay for grammatical errors and formatting consistency",
        "Figuring out which career path aligns with your values"
      ],
      correct: 2,
      explanation: "Grammar checking and formatting are mechanical, rule-based tasks that follow clear patterns (HEAD work). The other options require personal judgment, self-understanding, and values-based thinking (HEART work)."
    },
    {
      id: "L4Q3",
      question: "Your teacher assigns practice problems to help you learn algebra. What is the \"real goal\" versus the \"surface goal,\" and how should this affect your AI use?",
      type: "mcq",
      options: [
        "Real goal: get correct answers. Use AI to solve all problems quickly.",
        "Real goal: learn how to solve problems yourself. Don't use AI for the solving process, though AI could check your work afterward.",
        "Real goal: finish homework fast. Use AI for everything.",
        "There is no difference between real and surface goals."
      ],
      correct: 1,
      explanation: "The surface goal is completing the assignment; the real goal is learning problem-solving skills. Using AI to solve the problems defeats the purpose and prevents skill development (it's HEART work - learning and growth)."
    },
    {
      id: "L4Q4",
      question: "You're writing an essay about climate change. Which breakdown correctly identifies HEAD work vs HEART work?",
      type: "mcq",
      options: [
        "HEAD: developing your main argument, AI helps with: formatting citations",
        "HEAD: choosing your position on climate change, AI helps with: everything else",
        "HEAD: expressing your original ideas, AI helps with: generating all arguments",
        "Use AI for the entire essay since it's faster"
      ],
      correct: 0,
      explanation: "Developing arguments, choosing positions, and expressing original ideas are HEART work (original thinking, personal voice). Formatting citations is mechanical HEAD work where AI assistance is appropriate."
    },
    {
      id: "L4Q5",
      question: "What is the \"Hallucination Trap\"?",
      type: "mcq",
      options: [
        "AI making you see things that aren't there",
        "AI confidently generating false information that sounds true because it's pattern-matching, not fact-checking",
        "AI refusing to answer your questions",
        "AI getting tired and making random mistakes"
      ],
      correct: 1,
      explanation: "AI generates answers based on patterns of what true answers look like, but doesn't actually verify truth. It can confidently produce convincing but completely false information - this is \"hallucination.\""
    },
    {
      id: "L4Q6",
      question: "You catch yourself automatically opening ChatGPT for every question before even trying to think about it yourself. What trap is this, and what's one tactic to prevent it?",
      type: "mcq",
      options: [
        "Hallucination Trap; cross-check all answers",
        "Trigger-Happy Trap; use a 30-second deliberate delay before using AI",
        "Automation-of-Joy Trap; only use AI for work you dislike",
        "Invisible Decay Trap; take weekly tests"
      ],
      correct: 1,
      explanation: "Reflexively using AI for everything without thinking is the Trigger-Happy Trap. The Deliberate Delay tactic (pausing 30 seconds to ask \"Should I use AI for this? What's the real goal?\") prevents thoughtless AI use."
    },
    {
      id: "L4Q7",
      question: "Jamie loves drawing original character designs for hours - it's their favorite creative outlet. Recently, AI image generators create better-looking art in seconds, so Jamie starts using AI instead. What's the problem according to this lesson?",
      type: "mcq",
      options: [
        "There's no problem - AI makes Jamie more efficient",
        "Automation-of-Joy Trap - Jamie is outsourcing something they genuinely enjoyed, losing what made them special",
        "Hallucination Trap - the AI might generate false information",
        "Jamie should never use any AI tools"
      ],
      correct: 1,
      explanation: "This demonstrates the Automation-of-Joy Trap: using AI for work you actually enjoy removes the personal satisfaction and unique human contribution. Jamie's losing both the joy and the developing skill that made them special."
    },
    {
      id: "L4Q8",
      question: "As AI gets better at pattern-based work, what happens to the value of uniquely human skills?",
      type: "mcq",
      options: [
        "Human skills become worthless because AI can do everything",
        "Human skills (judgment, creativity, relationships, original thinking) become MORE valuable because they remain scarce while AI abilities grow",
        "All skills become equally valuable",
        "Only technical skills remain valuable"
      ],
      correct: 1,
      explanation: "As AI handles more pattern-based work, the work AI can't do (requiring human judgment, relationships, original thinking, emotional intelligence) becomes more valuable, not less, because it's increasingly scarce."
    },
    {
      id: "L4Q9",
      question: "Explain the difference between HEAD work and HEART work in your own words, and give one example of each from your own life.",
      type: "short",
      explanation: "HEAD work is mechanical, pattern-based tasks where there's a right answer or standard method (like organizing notes, checking spelling, or finding information). HEART work is personal, growth-focused tasks that require judgment, creativity, or original thinking (like deciding what essay argument to make, understanding why I'm struggling with something, or building friendships). Examples will vary: HEAD - formatting a bibliography, solving standard math problems with known methods. HEART - writing about a personal experience, deciding future goals, learning from mistakes."
    },
    {
      id: "L4Q10",
      question: "Your friend wants AI to write their entire personal statement for university applications. Using concepts from this lesson, explain why this is problematic and suggest a better way to use AI for this task.",
      type: "short",
      explanation: "Why problematic: A personal statement is HEART work - it needs to show who they genuinely are, their experiences, values, and voice. AI can't create authentic personal content. The real goal (showing universities who you are) is defeated if AI writes it. Also, it prevents skill development in expressing yourself clearly. Better approach: Break it down - HEART work (developing main points, choosing stories, expressing authentic voice) = YOU. HEAD work (checking grammar, improving sentence flow, formatting) = AI can assist. Write the authentic content yourself, then use AI to polish it."
    },
    {
      id: "L4Q11",
      question: "You use AI to research facts for a science presentation. Identify which trap you need to watch out for and describe ONE specific action you should take to avoid it.",
      type: "short",
      explanation: "Trap: Hallucination Trap - AI might confidently generate false scientific information because it's pattern-matching, not verifying facts. Prevention action: Cross-check important claims against authoritative sources. For example, if AI says a specific temperature or date, verify it through academic sources, textbooks, or scientific databases before including it in your presentation. Don't just assume AI facts are accurate because they sound convincing."
    },
    {
      id: "L4Q12",
      question: "Explain the \"Invisible Decay Trap\" and suggest one specific way a student could check whether they're experiencing it.",
      type: "short",
      explanation: "Invisible Decay Trap: Your skills gradually deteriorate from AI over-reliance, but you don't notice because AI still produces good outputs. You think you're capable, but you've actually lost the ability to do things independently. Check method: Weekly self-test - try doing tasks without AI that you normally use AI for. Example: If you use AI for essay writing, try writing a practice essay with no AI help. If you struggle significantly with things you used to do easily, your skills are decaying. Or try solving math problems manually if you normally use AI calculators."
    },
    {
      id: "L4Q13",
      question: "The lesson states that as AI advances, HEART work becomes more valuable while HEAD work becomes less valuable. Explain why this happens using the principle that AI is a \"pattern machine.\"",
      type: "short",
      explanation: "AI is fundamentally a pattern recognition and replication machine - it learns from millions of examples and replicates those patterns. This makes AI excellent at HEAD work (pattern-based, mechanical tasks like calculations, formatting, standard analysis) because these tasks have consistent, recognizable patterns. But HEART work (original thinking, moral judgment, personal relationships, emotional intelligence) doesn't work on predictable patterns - it requires genuine human qualities AI can't replicate. As AI gets better at pattern work, that work becomes abundant (less scarce), so it's worth less. Meanwhile, uniquely human capabilities remain scarce, making them more valuable. What AI can't do becomes more precious than what it can."
    }
  ]
};

export default lesson4;