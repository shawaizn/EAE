// Lesson1Quiz.js - Question data for Lesson 1: What is AI?

export const lesson1 = {
  lesson: 1,
  title: "What is AI?",
  questions: [
    {
      id: "L1Q1",
      question: "A hospital is considering whether to use AI or human doctors for different tasks. Based on what AI is good and bad at, which task would be MOST appropriate for AI to handle?",
      type: "mcq",
      options: [
        "Deciding whether to prioritize one patient's life over another in an emergency",
        "Scanning thousands of medical research papers to find studies about a rare disease",
        "Comforting a patient who just received devastating news about their health",
        "Diagnosing an entirely new disease that has never been seen before"
      ],
      correct: 1,
      explanation: "AI excels at pattern recognition in massive datasets and can process information faster than humans. Options A and C require moral judgment and emotional understanding (where humans are better), and D requires handling completely new problems different from training data (also a human strength)."
    },
    {
      id: "L1Q2",
      question: "Your grandmother complains that young people can't navigate without GPS, while her generation could read paper maps perfectly. Your response using concepts from the lesson would be:",
      type: "mcq",
      options: [
        "\"GPS is worse than paper maps because it makes people lazy\"",
        "\"Technology like GPS replaces certain thinking functions (remembering routes, calculating directions) just like cars replaced walking long distances - it's a natural pattern when technology makes tasks easier\"",
        "\"AI will eventually replace all human thinking, so navigation skills don't matter anymore\"",
        "\"Paper maps are better because older technology is always more reliable\""
      ],
      correct: 1,
      explanation: "The lesson teaches that technology replaces old ways when it makes life easier, and AI specifically replaces certain types of thinking (like remembering and repetitive tasks) but not all thinking - similar to how cars replaced walking for long distances but not all leg functions."
    },
    {
      id: "L1Q3",
      question: "A company creates a customer service chatbot. To test if it passes the Turing Test, they should:",
      type: "mcq",
      options: [
        "Check if the chatbot can answer questions faster than humans",
        "See if the chatbot stores more information than human employees",
        "Have customers chat with it and see if they can tell whether they're talking to a bot or a human employee",
        "Measure whether the chatbot makes fewer mistakes than humans"
      ],
      correct: 2,
      explanation: "The Turing Test, proposed by Alan Turing in 1950, is specifically about whether humans can distinguish between a machine and a human in conversation. If they can't tell the difference, the machine can be considered intelligent. Speed, storage, or accuracy aren't part of this test."
    },
    {
      id: "L1Q4",
      question: "In the 1960s, scientists tried to create AI using thousands of \"if-then\" rules. This failed because real-world situations were too complex. Machine learning solved this problem by:",
      type: "mcq",
      options: [
        "Creating even more detailed if-then rules for every possible situation",
        "Making AI learn from data through methods like supervised learning (showing examples), unsupervised learning (finding patterns independently), and reinforcement learning (trial and error)",
        "Giving up on AI and waiting for better computers",
        "Teaching AI to only handle simple, predictable tasks"
      ],
      correct: 1,
      explanation: "The lesson explains that rule-based AI hit a wall because you'd need impossible amounts of rules for every situation. Machine learning introduced a new approach where AI learns from data through different methods (supervised, unsupervised, reinforcement) rather than being programmed with explicit rules."
    },
    {
      id: "L1Q5",
      question: "A school wants to create an AI system that can recognize students' faces for attendance. Using deep learning principles, the neural network layers would work by:",
      type: "mcq",
      options: [
        "Each layer doing the exact same thing to double-check the answer",
        "Starting with complex patterns (identifying specific students) and working down to simple patterns (detecting edges)",
        "Each layer recognizing increasingly complex patterns: first edges, then facial features, then combinations of features, finally recognizing individual student faces",
        "Processing everything in a single layer to work faster"
      ],
      correct: 2,
      explanation: "Deep learning uses hierarchical layers where each layer builds on the previous one, starting with simple patterns (edges) and progressing to more complex ones (shapes, objects, specific identities) - like LEGO blocks stacking to make bigger structures, as explained in the lesson."
    },
    {
      id: "L1Q6",
      question: "Before 2017, AI struggled to understand this sentence: \"Sarah went to the bank to deposit money, but it was closed, so she went home.\" The old AI would forget what \"it\" and \"she\" referred to. Transformers solved this by:",
      type: "mcq",
      options: [
        "Processing words one at a time in order like reading a book",
        "Using attention mechanisms to understand relationships between all words simultaneously, knowing \"it\" refers to \"bank\" and \"she\" refers to \"Sarah\"",
        "Memorizing every possible sentence pattern in advance",
        "Breaking sentences into smaller pieces that are easier to process"
      ],
      correct: 1,
      explanation: "Transformers use attention mechanisms that let the AI look at all words in a sentence at once and understand which words are related to each other, solving the problem of tracking references like \"it\" and \"she\" across the sentence."
    },
    {
      id: "L1Q7",
      question: "When ChatGPT writes a response to your question, it:",
      type: "mcq",
      options: [
        "Searches the internet for the best answer and copies it",
        "Breaks your question into tokens, then predicts the most likely next token repeatedly (word by word or part by part) until it completes the response",
        "Understands what you mean emotionally and writes from personal experience",
        "Remembers similar conversations it had with other users and adapts those answers"
      ],
      correct: 1,
      explanation: "LLMs work by breaking text into tokens and using next-token prediction - predicting what token comes next, adding it, then predicting the next one, over and over. They don't search the internet in real-time, don't have emotions, and don't remember other users' conversations."
    },
    {
      id: "L1Q8",
      question: "What is an \"AI winter\" and why did they happen historically?",
      type: "mcq",
      options: [
        "Periods when AI computers overheated and stopped working in summer",
        "Periods when AI funding and interest collapsed because the technology couldn't deliver on its promises",
        "Times when AI researchers took breaks during winter holidays",
        "Phases when AI became too expensive for anyone to use"
      ],
      correct: 1,
      explanation: "AI winters were periods when excitement about AI crashed because the technology couldn't meet the hype and expectations. Funding dried up and research stalled. This happened multiple times in AI history before modern breakthroughs."
    },
    {
      id: "L1Q9",
      question: "Your friend says \"AI is so smart now, it's basically thinking just like humans do.\" Using what you learned, explain why this statement is incorrect and what AI is actually doing instead.",
      type: "short",
      explanation: "AI doesn't actually think or feel - it recognizes patterns from massive amounts of training data and replicates those patterns. When AI seems to \"understand\" you, it's really predicting what response typically follows similar inputs based on patterns it learned. Humans think with understanding, emotions, and consciousness. AI processes numbers and patterns without any actual comprehension or feeling - it's very good at appearing intelligent by matching patterns, but that's not the same as genuine thinking."
    },
    {
      id: "L1Q10",
      question: "Imagine you want to train an AI to recognize which emails are spam. Using supervised learning concepts, explain what data you would need and how the AI would learn from it.",
      type: "short",
      explanation: "You'd need a large training dataset of emails where each one is labeled as either \"spam\" or \"not spam\" by humans. The AI would study thousands of these labeled examples, learning patterns that distinguish spam (like certain words, suspicious links, urgent language) from legitimate emails. After training on enough examples, the AI can predict whether new, unlabeled emails are spam by recognizing those same patterns."
    },
    {
      id: "L1Q11",
      question: "The lesson mentions four key factors that came together to enable modern AI. Identify TWO of these factors and briefly explain why each one was necessary for AI to finally work.",
      type: "short",
      explanation: "Pick any 2 of 4: (1) Datafication: The internet created massive amounts of digital text, images, and data that AI could learn from - without huge datasets, pattern recognition doesn't work well. (2) Computational power: Modern GPUs and cloud computing made it possible to process billions of calculations needed for deep learning - old computers couldn't handle it. (3) Increased investment: Tech companies invested billions in AI research and development, allowing breakthrough projects that were previously impossible. (4) Technical breakthroughs: Innovations like transformers and attention mechanisms solved problems that stumped AI for decades, like understanding context in language."
    },
    {
      id: "L1Q12",
      question: "Your little cousin (age 10) asks: \"How does ChatGPT write stories? Does it think about the characters like I do?\" Write a simple explanation for them about how ChatGPT actually works. Include why it sometimes makes strange mistakes.",
      type: "short",
      explanation: "ChatGPT is an LLM (Large Language Model) that writes by guessing what word comes next, like playing \"finish the sentence.\" It breaks language into tokens (chunks like words or word-parts). It read millions of examples to learn patterns, then predicts: \"If I write 'The dog,' the next token is probably 'ran' or 'barked.'\" It does this over and over - next token, then next token - building sentences and paragraphs. It makes mistakes because it's only guessing patterns from what it learned, not actually understanding. Sometimes patterns it saw were wrong, or it mixes up patterns in weird ways, like putting a banana on a flower."
    }
  ]
};

export default lesson1;