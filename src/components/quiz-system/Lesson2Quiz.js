// Lesson2Quiz.js - Question data for Lesson 2: Today's AI

export const lesson2 = {
  lesson: 2,
  title: "Today's AI",
  questions: [
    {
      id: "L2Q1",
      question: "Maya types \"I love playing football\" into an AI chatbot. Before the AI can process this message, what must happen first?",
      type: "mcq",
      options: [
        "The AI translates the sentence into a different language",
        "The AI breaks the sentence into tokens (like \"I\", \"love\", \"play\", \"ing\", \"foot\", \"ball\") and converts them into numbers for mathematical processing",
        "The AI searches the internet to understand what football means",
        "The AI memorizes the sentence word-by-word in English"
      ],
      correct: 1,
      explanation: "The lesson explains that AI doesn't understand any language directly - it only understands numbers. Text must first be broken into tokens (chunks of words or word parts), then converted into numbers that AI can mathematically process."
    },
    {
      id: "L2Q2",
      question: "Tom has been chatting with ChatGPT for 30 minutes about his history project. He asks: \"Can you summarize what we've discussed?\" ChatGPT provides a comprehensive summary of their entire conversation. Then Tom asks: \"Why did you recommend that book?\" and ChatGPT knows exactly which book Tom means. This works because:",
      type: "mcq",
      options: [
        "ChatGPT has been learning and updating its knowledge throughout the conversation",
        "ChatGPT's context window processes all tokens from the entire conversation, maintaining short-term memory of what was said, and it predicts responses based on this complete context",
        "ChatGPT saves Tom's conversations permanently in a special database",
        "Tom's computer stores the conversation locally and feeds it back to ChatGPT"
      ],
      correct: 1,
      explanation: "The context window acts as short-term memory, processing all tokens from the conversation up to that point. This allows AI to understand references like \"that book\" by looking at the entire conversation context, while generating responses through next-token prediction based on this context."
    },
    {
      id: "L2Q3",
      question: "Priya discovers a fascinating fact about quantum physics and excitedly shares it with ChatGPT in detail. The next day, she opens a new conversation and asks ChatGPT about quantum physics. ChatGPT doesn't mention anything from yesterday's conversation. Priya's friend says \"ChatGPT must have forgotten.\" What's the most accurate explanation?",
      type: "mcq",
      options: [
        "ChatGPT forgot because its memory gets erased every night",
        "ChatGPT never \"learned\" from the conversation - chatting with users doesn't update the model's training, it only stays in temporary short-term memory",
        "ChatGPT is punishing Priya for starting a new conversation",
        "Priya needs to pay for a premium version that remembers conversations"
      ],
      correct: 1,
      explanation: "Training (learning patterns) happened once in the past and is expensive. Using AI (chatting) is cheap and instant but doesn't update the model. Conversations exist only in short-term context window memory, which resets with each new chat. The model itself doesn't change from user conversations."
    },
    {
      id: "L2Q4",
      question: "Developers create a base language model by training it on billions of web pages. When they test it, the model can write fluently but often produces unhelpful, rude, or irrelevant responses. To fix this, they use RLHF (Reinforcement Learning from Human Feedback). What does this process do?",
      type: "mcq",
      options: [
        "It teaches the AI to search the internet faster",
        "Humans rank many AI responses as helpful vs unhelpful, and the AI learns to generate responses that humans rate as more helpful, training it to be a useful assistant",
        "It adds more web pages to the training data",
        "It makes the AI smaller and faster"
      ],
      correct: 1,
      explanation: "RLHF is the process where humans evaluate and rank AI outputs, teaching the model which types of responses are helpful versus unhelpful. This additional training turns a base model (knows patterns but not how to assist) into a fine-tuned model (knows how to be helpful)."
    },
    {
      id: "L2Q5",
      question: "Three AI systems: System A answers questions about recipes. System B automatically orders groceries following a shopping list you created. System C plans your weekly meals, checks your pantry inventory, creates shopping lists, and orders groceries - deciding what you need. Which autonomy levels do these represent?",
      type: "mcq",
      options: [
        "A: Level 1 (LLM), B: Level 2 (Workflow), C: Level 3 (Agent)",
        "A: Level 3, B: Level 1, C: Level 2",
        "A: Level 2, B: Level 3, C: Level 1",
        "All three are Level 1 LLMs"
      ],
      correct: 0,
      explanation: "System A just generates answers (Level 1 LLM). System B takes actions but follows predetermined steps you set (Level 2 Workflow). System C makes its own decisions about what meals to plan and what to buy (Level 3 Agent)."
    },
    {
      id: "L2Q6",
      question: "Your school is considering three AI tutoring systems: System X answers student questions. System Y follows a predetermined 5-step homework help process. System Z evaluates student needs and independently decides which learning resources to provide. What's the MOST important supervision consideration?",
      type: "mcq",
      options: [
        "System X needs the most supervision because it only answers questions",
        "System Z needs the most supervision because it makes its own decisions and could choose inappropriate resources",
        "System Y needs the most supervision because following steps is complex",
        "All three need exactly the same amount of supervision"
      ],
      correct: 1,
      explanation: "Agents (Level 3) like System Z make their own decisions and can make mistakes - they might misjudge a student's needs or select inappropriate materials. LLMs (X) and Workflows (Y) have limitations but don't make independent decisions, so their failure modes are more predictable."
    },
    {
      id: "L2Q7",
      question: "An AI agent helps manage your study schedule. When you say \"I need to finish my science project by Friday,\" it checks what tasks you have left, looks at your calendar, realizes Friday is already full, uses a tool to find free time on Thursday, and schedules 3 hours then. Which agent components worked together here?",
      type: "mcq",
      options: [
        "Only the Brain (LLM) was needed",
        "Brain processed request, Memory checked project status and calendar, Tools scheduled the time, Knowledge contained information about the project",
        "Only Tools were used to schedule time",
        "Only Memory was needed to remember the deadline"
      ],
      correct: 1,
      explanation: "This demonstrates multiple agent components working together: Brain (LLM) understands the request and reasons about priorities, Memory checks what's stored about the project and calendar, Tools take action to schedule time, and Knowledge contains project-specific information not in the base training."
    },
    {
      id: "L2Q8",
      question: "Your friend is excited about a new AI homework tool but doesn't understand how it works. Using the five evaluation questions, which question would reveal whether the tool can actually complete tasks or just give advice?",
      type: "mcq",
      options: [
        "What patterns did it learn from?",
        "Is it just generating responses or can it take actions?",
        "What does it remember and for how long?",
        "Who's making the decisions?"
      ],
      correct: 1,
      explanation: "Question 2 (\"Is it just generating or can it take action?\") directly reveals whether the system is an LLM that only provides text responses, a Workflow that executes tasks, or an Agent that acts with decision-making capability."
    },
    {
      id: "L2Q9",
      question: "Your teacher asks: \"Why can't ChatGPT remember our conversation from last week when I open a new chat today?\" Explain the concept of context windows and why conversations don't persist across different chats.",
      type: "short",
      explanation: "ChatGPT's context window is like short-term memory - it can only hold tokens from the current conversation, like a box with limited space. Each new chat starts with an empty box. Conversations from last week aren't stored permanently because chatting doesn't update the model - only training does that, which happened once in the past. The context window resets every new conversation, so ChatGPT can't access previous chats unless they're in the current context window."
    },
    {
      id: "L2Q10",
      question: "Explain the difference between what an LLM can do versus what a Workflow can do, using a homework example for each.",
      type: "short",
      explanation: "LLM (Level 1): You ask it to explain a difficult math concept and it generates a clear explanation - but you have to read it, understand it, and apply it yourself. It just provides information through text. Workflow (Level 2): You activate your homework helper workflow: it automatically (1) scans your assignment, (2) breaks it into steps, (3) finds relevant resources, (4) creates a checklist, (5) saves everything to your notes folder - following predetermined steps you or someone set up. It takes actions but can't adapt if something unexpected happens."
    },
    {
      id: "L2Q11",
      question: "Design a simple AI agent to help you track your reading progress for English class. Describe which THREE of the five agent components it needs and explain briefly what each one does.",
      type: "short",
      explanation: "Pick any 3 of 5 components: (1) Brain (LLM): Processes your requests like \"add my current chapter\" or \"when should I finish the book?\" and reasons about reading pace. (2) Memory: Stores which books you're reading, what chapter you're on, your typical reading speed, deadlines. (3) Tools: Can add books to your reading list, set calendar reminders, calculate how many pages per day you need. (4) Prompt: Job description like \"You help students stay on track with reading assignments, be encouraging but realistic about deadlines\". (5) Knowledge: Has information about your specific books, class syllabus, reading deadlines."
    },
    {
      id: "L2Q12",
      question: "Compare the limitations of three systems: (A) an LLM that explains recipes, (B) a Workflow that automatically orders groceries from your saved list, (C) an Agent that decides what groceries you need and orders them. Identify ONE specific limitation or risk for EACH system.",
      type: "short",
      explanation: "(A) LLM limitation: Can only generate recipe explanations - can't actually check your pantry, create shopping lists, or place orders. You must do all the actions yourself. (B) Workflow limitation: Can only follow the exact shopping list you gave it - can't adapt if items are out of stock, can't notice you forgot milk, can't make decisions. (C) Agent limitation: Makes its own decisions about what to buy - might make wrong choices (orders expensive items, chooses brands you dislike, misunderstands dietary needs). Needs supervision to verify choices are sensible."
    },
    {
      id: "L2Q13",
      question: "Describe how the five agent components work together when a student says to their study agent: \"I have a test next Friday - help me prepare.\"",
      type: "short",
      explanation: "Brain (LLM): Processes the request, understands \"test Friday\" means plan preparation. Memory: Checks what subject the test is on (maybe mentioned before), recalls student's study preferences, checks calendar. Tools: (1) Accesses the syllabus to see test topics, (2) creates study schedule in calendar, (3) finds relevant notes and practice questions. Prompt: Follows its job description (e.g., \"create realistic study plans, prioritize weak areas\"). Knowledge: Has information about test material, student's grades in that subject. All components work together: Brain decides strategy → checks Memory for context → uses Tools to take actions → operates within its Prompt guidelines → draws on stored Knowledge."
    },
    {
      id: "L2Q14",
      question: "Your friend wants to create a personal AI agent that accesses their email, calendar, and bank account to automatically manage their schedule and pay bills. Using what you learned about training vs using AI and agent privacy considerations, explain TWO important things they should understand before setting this up.",
      type: "short",
      explanation: "(1) Chatting doesn't train the agent: If they tell the agent their preferences (like \"always pay rent on the 1st\"), it only remembers during that conversation unless the agent has proper long-term memory storage. They need to verify it actually saves preferences permanently, not just in the short-term context window. (2) Privacy and supervision with sensitive access: Giving an agent access to email, calendar, and bank means trusting it to make good decisions with very sensitive information. Agents can make mistakes - might schedule things wrong, miss important emails, make incorrect payment decisions, or misunderstand instructions. They should think about: what data they're comfortable sharing, whether they trust the agent's judgment, what happens if it makes a financial mistake, and whether they'll supervise sensitive tasks rather than full automation."
    },
    {
      id: "L2Q15",
      question: "Your school purchases a new AI tool called \"StudyBuddy\" but doesn't explain how it works. Using the five evaluation questions from the lesson, explain how asking these questions would help you understand the tool's capabilities and decide how to use it effectively. Give one specific insight each question would reveal.",
      type: "short",
      explanation: "(1) What patterns did it learn from? Reveals what it's good/bad at. If it learned from science textbooks, it'll explain biology well; if it learned from math problems, it'll help with equations. This shows which subjects to use it for. (2) Can it just generate or take action? Shows use cases. If it only generates study guides, YOU save and organize them. If it can take action, it might automatically add study sessions to your calendar. (3) What does it remember and for how long? Shows how to interact. Context window only means explain your situation each conversation; long-term memory means it learns your strengths/weaknesses over time. (4) What tools does it have access to? Shows what's possible. No tools = just conversations and suggestions. Many tools (calendar, gradebook access, quiz generator) = can complete complex study tasks. (5) Who makes decisions? Shows needed supervision. If YOU decide, full control but more work. If AI decides (agent), need to verify its study plan makes sense."
    }
  ]
};

export default lesson2;