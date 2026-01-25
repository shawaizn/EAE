// Lesson3Quiz.js - Question data for Lesson 3: The AI Market

export const lesson3 = {
  lesson: 3,
  title: "The AI Market",
  questions: [
    {
      id: "L3Q1",
      question: "A school creates a homework help app that needs to answer student questions. Instead of building their own AI from scratch, they connect to GPT-4. What is the technical term for the connection that lets their app communicate with GPT-4?",
      type: "mcq",
      options: [
        "An AI bridge",
        "An API (Application Programming Interface)",
        "A neural network link",
        "A cloud connector"
      ],
      correct: 1,
      explanation: "An API (Application Programming Interface) is what allows one piece of software to request services from another. It acts as the \"waiter\" between the product and the AI model, taking requests and delivering responses."
    },
    {
      id: "L3Q2",
      question: "Three different companies all use GPT-4: Company A makes a legal document assistant, Company B makes a creative writing tool, Company C makes a customer service chatbot. How is this possible, and what does it reveal about the AI market structure?",
      type: "mcq",
      options: [
        "They all illegally copied the same AI",
        "The AI market pyramid: one model (GPT-4) at the top powers many different products in the middle, showing that few companies create models while many companies build specialized products using them",
        "They all trained their own identical versions of AI",
        "GPT-4 can only do one thing so all three products work the same way"
      ],
      correct: 1,
      explanation: "This demonstrates the market pyramid structure: a few companies create foundation models (like OpenAI with GPT-4), many companies build specialized products using those models via APIs, and millions of users interact with the products. One model can power many different products because products add specialized features and interfaces."
    },
    {
      id: "L3Q3",
      question: "ChatGPT can help you with homework, write emails, code, explain concepts, and many other tasks. It's a separate app you open specifically to use AI. What type of AI product is this?",
      type: "mcq",
      options: [
        "Type 1: Generalist Standalone",
        "Type 2: Specialist Standalone",
        "Type 3: Generalist Integrated",
        "Type 4: Specialist Integrated"
      ],
      correct: 0,
      explanation: "ChatGPT is Type 1 (Generalist Standalone) because it's generalist (does many different things) and standalone (you go to a separate app/website to use it, it's not built into another tool you already use)."
    },
    {
      id: "L3Q4",
      question: "A music streaming app has a feature that uses AI specifically to identify songs by listening to a few seconds of audio - it does only this one thing. This feature is built directly into the app. What type is this?",
      type: "mcq",
      options: [
        "Type 1: Generalist Standalone",
        "Type 2: Specialist Standalone",
        "Type 3: Generalist Integrated",
        "Type 4: Specialist Integrated"
      ],
      correct: 3,
      explanation: "This is Type 4 (Specialist Integrated) because it's specialist (does one specific thing: song identification) and integrated (built into an existing app, not a separate product you have to open)."
    },
    {
      id: "L3Q5",
      question: "In Product A, users can only use the AI by clicking \"Generate\" buttons in predefined places. In Product B, users can write any prompt they want and the AI responds flexibly. In Product C, users give high-level goals and the AI independently figures out how to achieve them. Which describes the control levels correctly?",
      type: "mcq",
      options: [
        "A: Full company control, B: Guided user control, C: Full user control",
        "A: Guided user control, B: Full user control, C: AI autonomy",
        "All three give users the same level of control",
        "A: Full user control, B: Company control, C: Guided control"
      ],
      correct: 1,
      explanation: "Product A gives Guided User Control (company-designed workflows), Product B gives Full User Control (open-ended LLM), and Product C demonstrates AI Autonomy (agent making decisions). This maps to typical patterns: workflows/specialists often have guided control, LLMs offer full user control, agents have autonomy."
    },
    {
      id: "L3Q6",
      question: "Why do only a few major companies (OpenAI, Google, Anthropic, Meta) create foundation AI models instead of thousands of companies doing it?",
      type: "mcq",
      options: [
        "Creating AI models is illegal unless you have special permission",
        "Training foundation models requires hundreds of millions of dollars for computing power and data, making it affordable only to well-funded companies",
        "The technology is too complicated for smaller companies to understand",
        "Users prefer having fewer options"
      ],
      correct: 1,
      explanation: "Training foundation models is extremely expensive - requiring massive computational resources, huge datasets, and significant time. This high barrier to entry means only companies with substantial funding can afford to create foundation models, explaining the pyramid structure of the market."
    },
    {
      id: "L3Q7",
      question: "Many AI companies offer free versions of their products. Which business model BEST explains how they make money despite offering free access?",
      type: "mcq",
      options: [
        "They make money by selling user data to advertisers",
        "Freemium model: free version attracts users, some upgrade to paid premium versions with better features, or they sell enterprise versions to companies",
        "They're all charities that don't need to make money",
        "Free users watch mandatory advertisements"
      ],
      correct: 1,
      explanation: "Most AI products use a freemium model: free versions attract users and demonstrate value, then revenue comes from premium subscriptions or enterprise sales. Some may also use free products as loss leaders to build user base. (Note: While data monetization exists in some tech, it's not the primary AI product business model.)"
    },
    {
      id: "L3Q8",
      question: "Explain the journey of how AI goes from a research lab to becoming a tool you use in your everyday life. Use a specific example like Grammarly or a homework help app.",
      type: "short",
      explanation: "Example (Grammarly): (1) Lab: Researchers create and train a language model on massive text data to understand grammar patterns. (2) Model: The trained model exists but isn't user-friendly yet. (3) API: The model is made accessible through an API so other companies can use it. (4) Product: Grammarly builds an interface, adds features (browser extension, tone detection), and creates a business model around the AI. (5) User: You install Grammarly and it checks your writing in real-time. The API acts as the connection between the model and the product, allowing Grammarly to send your text to the AI and receive corrections without rebuilding the AI from scratch."
    },
    {
      id: "L3Q9",
      question: "Categorize these three products and explain your reasoning: (A) Microsoft Copilot built into Word that helps with many writing tasks (B) A separate app called \"Grammar Fix Pro\" that only corrects grammar (C) Google Search's AI Overview feature that answers questions",
      type: "short",
      explanation: "(A) Type 3 - Generalist Integrated: Helps with many writing tasks (generalist), built into Word (integrated into existing tool). (B) Type 2 - Specialist Standalone: Only corrects grammar (specialist), separate app (standalone). (C) Type 4 - Specialist Integrated: Answers questions specifically in search context (specialist function), built into Google Search (integrated into existing tool you already use)."
    },
    {
      id: "L3Q10",
      question: "Compare the level of control you have in these two scenarios: (1) Using ChatGPT where you write any prompt you want, (2) Using your school's AI homework helper that only has buttons like \"Explain this concept,\" \"Check my work,\" or \"Create practice questions.\" Explain which gives you more control and which might be better for which situations.",
      type: "short",
      explanation: "ChatGPT (Full User Control): You have complete freedom - can ask anything, adjust prompts, explore creatively. Better for: open-ended exploration, complex tasks, when you know exactly what you need. School Homework Helper (Guided User Control): The school designed specific workflows. Less flexible but clearer structure. Better for: when you're not sure what to ask, following school-approved processes, ensuring consistent quality, beginners who need guidance. Trade-off: Full control = more powerful but requires skill. Guided control = easier to use but limited options. The \"better\" choice depends on your skill level and task needs."
    },
    {
      id: "L3Q11",
      question: "Explain why understanding \"frameworks\" (like generalist vs specialist, standalone vs integrated) is more useful than just memorizing the names of specific AI tools.",
      type: "short",
      explanation: "Specific tools change constantly - new ones launch, old ones disappear, features update. If you only memorize tool names, your knowledge becomes outdated quickly. Frameworks give you a way to understand and evaluate ANY tool, even ones that don't exist yet. When you see a new product, you can immediately categorize it (Is it generalist or specialist? Standalone or integrated? What control level?), understand its business model, and predict how it will work. Frameworks are transferable mental models that stay useful regardless of which specific products exist - you're learning how to think about AI tools, not just memorizing a list."
    }
  ]
};

export default lesson3;