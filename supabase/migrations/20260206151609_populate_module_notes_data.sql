/*
  # Populate Module Notes with Lesson Content (Modules 1-7)

  This migration inserts comprehensive revision notes for all 7 modules.
  Each module contains:
    - Main Ideas section with subsections
    - Short Summary

  Uses ON CONFLICT to safely skip if data already exists.
*/

INSERT INTO module_notes (module_id, title, sections) VALUES
(1, 'Module 1: What is Artificial Intelligence (AI)?', jsonb_build_array(
  jsonb_build_object(
    'name', 'Main Ideas',
    'subsections', jsonb_build_array(
      jsonb_build_object('title', 'Big Picture – What is AI?', 'content', 'AI = artificial (made by humans) + intelligence (learning, solving problems, using what you know to figure things out). AI is about building machines that can perceive, understand, reason, learn and act intelligently; they don''t have to think like humans, only behave intelligently. AI works by finding patterns in data and using them to predict what comes next, so it can do some mental tasks better than humans, but it still cannot feel or truly understand.'),
      jsonb_build_object('title', 'Humans, Technology and Change', 'content', 'Technology is anything humans create to make life easier (taps, cars, umbrellas), and new technologies usually replace older ways of doing things. AI is "thinking technology" that helps with remembering information, repetitive thinking, following instructions, language translation, basic writing, maths and summarising. Like cars replacing walking only for long distances, AI replaces certain types of thinking but not all; humans are still better at deep context, moral judgement and dealing with totally new problems.'),
      jsonb_build_object('title', 'Early AI – Rules and Limits', 'content', 'In 1950 Alan Turing proposed the Turing Test: if you talk to a machine and cannot tell it from a human, it can be considered intelligent. In the 1950s–60s early AI was rule-based: scientists tried to turn intelligence into lots of "if this, then that" rules, creating systems like the perceptron and ELIZA. Rule-based AI could only handle narrow tasks and needed huge numbers of hand-coded rules, so it could not adapt to real life, leading to disappointment and an "AI winter" in the 1970s.'),
      jsonb_build_object('title', 'Machine Learning and Deep Learning', 'content', 'Machine learning changed AI from being told exactly what to do into learning from data, like teaching a baby by showing examples instead of giving step-by-step rules. Three learning styles are: supervised (labelled examples), unsupervised (finding patterns without labels) and reinforcement learning (trial and error with "right/wrong" feedback). With more data and the backpropagation algorithm, neural networks (layers of artificial "neurons") could adjust themselves after mistakes and slowly learn complex tasks. Deep learning stacks many layers so the AI builds simple patterns into complex ones (edges → shapes → objects → scenes), powering tools like voice assistants, translation, face ID and autocorrect.'),
      jsonb_build_object('title', 'Transformers and Generative AI', 'content', 'Around 2017 transformers were invented to fix a key limit: older systems could only focus on short bits of text and would "forget" what came earlier. Transformers use attention to look at many words at once and track how they relate (for example understanding that "he" refers back to "the child"), which made large language models like ChatGPT possible. Generative AI models such as GPT predict the next token again and again, allowing them to generate long text, code, images or video that often seems human but is really a clever remix of learned patterns. Multimodal AI is like one "super baby" trained to read, see, listen and talk with a single model, but it still does not feel or truly know anything, so it can make strange or wrong outputs.'),
      jsonb_build_object('title', 'Why AI Is Booming and Why It Matters', 'content', 'Modern AI exploded when four ingredients combined: lots of data, powerful computers, big investment and breakthroughs like deep learning, reinforcement learning and transformers. Giving AI a body with sensors and motors creates physical AI such as robots; other branches like robotics and computer vision still share the same goal of building intelligent machines. We already use AI every day through recommendations, autocorrect and photo filters, and we are living through a shift from "pre-AI" to "post-AI", so understanding AI helps us keep up as it changes life and work.')
    )
  ),
  jsonb_build_object(
    'name', 'Short Summary',
    'content', 'This lesson explains what artificial intelligence is and why it marks a major shift from a "pre-AI" to a "post-AI" world. AI means building machines that can learn, reason and act intelligently by recognising patterns in data and making predictions. Early AI relied on hand-written rules and quickly hit limits, which led to a new focus on machine learning and deep learning, where models learn from examples instead of fixed instructions. Transformers then allowed AI to handle long, complex text using attention, powering large language models and today''s generative AI systems.'
  )
)),

(2, 'Module 2: Today''s AI: From Chatbots to Agents', jsonb_build_array(
  jsonb_build_object(
    'name', 'Main Ideas',
    'subsections', jsonb_build_array(
      jsonb_build_object('title', 'From Gen AI to Agents', 'content', 'Earlier AI mostly analysed and organised information; generative AI added "make this for me" by creating text, images, music and code. The next step is "handle this for me" – AI systems that can not only create content but also plan and carry out tasks, like a real assistant. This shift is like moving from practising exam questions in class to independently sitting the exam.'),
      jsonb_build_object('title', 'How ChatGPT Generates Answers', 'content', 'Your message is broken into tokens (small chunks of text), which are turned into numbers so the AI can do maths on them. The model processes all tokens in its context window (short-term memory), covering the whole conversation until that window fills up. It predicts the most likely next token, adds it, then predicts the next one, repeating until it eventually predicts a "stop" token and ends the answer.'),
      jsonb_build_object('title', 'Training, Fine-Tuning and RLHF', 'content', 'Training (pre-training) happens once: the base model learns patterns from huge amounts of text and other data; using it in chat is cheap and does not change its core knowledge. A base model (like raw GPT) knows patterns in language but has not been trained to be helpful or safe. Fine-tuning turns a base model into an assistant model (like ChatGPT) by teaching it how to behave, often using RLHF – humans rate answers so the AI learns which responses are good or bad.'),
      jsonb_build_object('title', 'Autonomy Ladder – LLMs, Workflows, Agents', 'content', 'Level 1 LLMs: you ask, it answers; it only generates outputs and cannot take actions like emailing or saving files. Level 2 workflows: a fixed sequence of steps is set up in advance, so the AI can act but only by following your pre-written script. Level 3 agents: you give a goal and the AI decides how to achieve it, choosing tools and actions itself, but still needing supervision. This "autonomy ladder" is like growing from a child to a teen to a more independent helper.'),
      jsonb_build_object('title', 'Inside an AI Agent', 'content', 'Brain: an LLM that understands instructions, reasons with information and chooses what to do next. Memory: short-term (context window in the current conversation) plus long-term memory stored in a database across sessions. Tools: ways to act in the world, such as searching the web, sending emails, reading/writing files, using calendars or generating images. Prompt and knowledge: a system prompt gives the agent its "job description", and extra knowledge lets it personalise its decisions.')
    )
  ),
  jsonb_build_object(
    'name', 'Short Summary',
    'content', 'This lesson explains how today''s AI systems work, from simple chatbots to more independent agents. When you talk to a model like ChatGPT, your words are broken into tokens, processed within a limited context window, and turned into answers by predicting one token at a time. Modern AI is climbing an autonomy ladder: LLMs only generate text, workflows follow fixed multi-step recipes, and agents can choose tools and actions to reach a goal.'
  )
)),

(3, 'Module 3: The AI Market: From Lab to Your Phone', jsonb_build_array(
  jsonb_build_object(
    'name', 'Main Ideas',
    'subsections', jsonb_build_array(
      jsonb_build_object('title', 'From Model to Product', 'content', 'AI goes from research lab to your phone in a chain: Lab → Model → API → Product → You. Big companies, startups and universities spend huge money and time training models – this "engine" is powerful but too technical for normal users. An API (Application Programming Interface) is like a waiter between you and the "kitchen" model: it takes your request (prompt), sends it to the model, and returns the result. Product builders use the API to add interfaces (chat boxes, buttons, voice) and features, turning one engine into many different apps.'),
      jsonb_build_object('title', 'The AI Pyramid – Who Does What?', 'content', 'The pyramid metaphor shows a few model makers at the top, many product builders in the middle, and millions of users at the bottom. Model makers (OpenAI, Google, Anthropic, Meta) focus on improving core AI engines; product companies (Grammarly, Canva, Jasper, Notion) focus on specific user needs. You never "touch" the raw model; you only interact with the product built on top of it to get your work done.'),
      jsonb_build_object('title', 'Four Types of AI Products (What + Where)', 'content', 'Two key questions: Is it a generalist (does many tasks) or specialist (one task very well)? And is it standalone (separate app) or integrated (built into tools you already use)? Type 1 – Generalist Standalone: versatile apps like ChatGPT, Claude or Gemini. Type 2 – Specialist Standalone: single-skill apps like Midjourney (images), ElevenLabs (voices) or Perplexity (search). Type 3 & 4 – Integrated: live inside other software (e.g. Copilot in Office, Grammarly in your browser).'),
      jsonb_build_object('title', 'Who Controls What? (Control Levels 1–4)', 'content', 'There is a spectrum of control from "they control everything" to "you control everything". Level 1: They control everything; you only choose prompts. Level 2: They control, you edit; you adjust settings. Levels 3–4: You design behaviour, tools and even the model and hardware; maximum customisation and privacy but needs time and skills.')
    )
  ),
  jsonb_build_object(
    'name', 'Short Summary',
    'content', 'This lesson explains how AI moves from research labs into the apps on your phone and how to make sense of the crowded AI market. You can understand any AI tool using two questions: is it a generalist or specialist, and is it standalone or integrated. The lesson also covers the high cost of training models, why many tools seem "free", and how access to AI may depend on money.'
  )
)),

(4, 'Module 4: When to Use AI (and When Not To)', jsonb_build_array(
  jsonb_build_object(
    'name', 'Main Ideas',
    'subsections', jsonb_build_array(
      jsonb_build_object('title', 'AI as Superpower or Downfall', 'content', 'AI is a double-edged sword: it can make you 10x more powerful, or make you weak and dependent if you use it badly. Like calculators in primary school or eating only bananas, using AI too early or for everything can damage your basic skills and mental "diet". The key motto is: "Use AI – don''t let AI use you."'),
      jsonb_build_object('title', 'Patterns, Head Work and AI', 'content', 'AI is a pattern machine: it recognises patterns in data (books, code, images) and predicts what fits the pattern next. Wherever work is mechanical, rule-based and follows clear patterns, AI can usually do it faster and more accurately than humans. This kind of pattern-based thinking is called HEAD work – it''s where AI should mostly be used.'),
      jsonb_build_object('title', 'Heart Work – Protect It', 'content', 'Some tasks have no clear pattern: they rely on judgement, emotion, values and truly original ideas – this is HEART work. HEART work includes your unique opinions, moral choices, relationships, personal growth and creative voice; there is no single "right answer". AI is terrible at HEART work, so you must keep these tasks for yourself to protect your identity and long-term skills.'),
      jsonb_build_object('title', 'Finding the Real Goal', 'content', 'Every task has a surface goal (e.g. "get 10/10 on homework") and a real goal (e.g. "learn problem-solving for exams"). If you only care about the surface goal, you will overuse AI, finish the task, but learn almost nothing. To find the real goal, ask: "Who benefits if I do this well?", "What am I supposed to learn or build?", and "Is this about the output or the process?"'),
      jsonb_build_object('title', 'Common AI Traps and How to Avoid Them', 'content', 'Hallucination trap: AI confidently makes things up; you must fact-check and stay responsible for accuracy. Trigger-happy trap: reaching for AI automatically so you stop thinking for yourself. Automation-of-joy and invisible decay traps: letting AI do activities you enjoy or over-relying on it until your skills quietly weaken. Context-free trap: weak prompts lead to generic answers.')
    )
  ),
  jsonb_build_object(
    'name', 'Short Summary',
    'content', 'This lesson explains how to decide when to use AI and when to rely on yourself. AI is a powerful pattern machine, great at HEAD work like grammar, formatting, research and calculations, but bad at HEART work that involves your values, emotions, identity and truly original ideas. Most tasks mix head and heart, so you should break them into parts and choose which pieces AI helps with.'
  )
)),

(5, 'Module 5: Speaking AI: How to Talk to Your Assistant', jsonb_build_array(
  jsonb_build_object(
    'name', 'Main Ideas',
    'subsections', jsonb_build_array(
      jsonb_build_object('title', 'Why Communication Matters', 'content', 'Everyone in your class has access to the same AI; what makes the difference is how you communicate with it, not which tool you use. Most people write vague, lazy prompts and then blame the AI for vague, lazy answers. Think of AI as a super-capable assistant who knows a lot, but knows nothing about you unless you explain your situation clearly. Core rule: Garbage in, garbage out; gold in, gold out – input quality drives output quality.'),
      jsonb_build_object('title', 'Core Prompting Principles', 'content', 'Specific prompts beat vague ones: adding length, topic, audience, tone and structure can turn a weak answer into a great one. The more the AI knows about your goal, audience, constraints and background, the better it can tailor its response. Good prompting is common sense if you imagine explaining the task to a human assistant who can''t read your mind.'),
      jsonb_build_object('title', 'The CO-STAR Framework', 'content', 'CO-STAR = Context, Objective, Style, Tone, Audience, Response – a structure for clear, powerful prompts. Context sets the scene (what you''re doing, why, stage, constraints) and is the most powerful part because it turns generic AI into "your" AI. Objective tells AI what success looks like; Style and Tone shape how it sounds; Audience makes it suitable for the right people. Response tells AI the format you want, so you don''t get a useless wall of text.'),
      jsonb_build_object('title', 'Improving and Refining Prompts', 'content', 'Pros treat prompting as a process: write a prompt, check the output, spot what''s wrong, refine, repeat. When an answer isn''t right, diagnose the issue (length, tone, detail, format, missing info) and edit that part of the prompt. Meta-prompting = asking AI how to improve your prompt; it can point out missing details, unclear instructions and better structure.'),
      jsonb_build_object('title', 'Advanced Prompting Tactics', 'content', 'Role prompting: "Act as a [specific role]" helps AI use the right knowledge patterns. Few-shot prompting: show examples of the style or format you want so AI can copy the pattern. Chain-of-thought and self-consistency: ask AI to think step-by-step and give multiple approaches before recommending a choice.')
    )
  ),
  jsonb_build_object(
    'name', 'Short Summary',
    'content', 'This lesson teaches you how to talk to AI so it becomes a powerful assistant instead of a generic answer machine. The key idea is that output quality depends on input quality: vague prompts get vague results, while specific, well-structured prompts unlock AI''s real abilities. The CO-STAR framework (Context, Objective, Style, Tone, Audience, Response) helps you give AI all the information it needs.'
  )
)),

(6, 'Module 6: How to Use AI Like the Top 1%', jsonb_build_array(
  jsonb_build_object(
    'name', 'Main Ideas',
    'subsections', jsonb_build_array(
      jsonb_build_object('title', 'Three Levels of AI Users', 'content', 'Level 1 – Dabblers: chase every new tool, collect accounts, have no system, and keep starting from scratch. Level 2 – Skilled users: know how to prompt and get good results on individual tasks, but are reactive. Level 3 – Elite users: see many tools lightly, choose a few strategically, master them deeply and build systems that keep improving over time ("build the castle").'),
      jsonb_build_object('title', 'Strategic Filtering and Staying Current', 'content', 'Tier 3 users treat AI news like investment offers: most are ignored, a few get serious attention, based on real results not hype. They set a "news budget" (about 15–30 minutes per week) with 1–2 trusted sources instead of constantly scrolling. For each promising tool they run a 30–60 minute trial on real tasks, then clearly decide to adopt (go deep), park (later) or reject (move on).'),
      jsonb_build_object('title', 'Systems That Flow, Not Tool Chaos', 'content', 'Dabblers stack separate tools causing constant copy-paste, context loss and mental switching. Tier 3 users ask "Does this flow with my existing system?" and prefer AI that integrates where they already work. In a flowing system, research, outlining, drafting and editing all happen in one place, with AI remembering context and reducing friction, so improvements compound over time.'),
      jsonb_build_object('title', 'Evaluating AI Outputs and Task Stakes', 'content', 'Tier 3 users judge every important AI output on five criteria: relevance, factual accuracy, completeness, clarity and whether it''s tailored or biased/generic. They classify tasks by stakes: low (brainstorms) where AI can run fast; medium (projects) where humans review; high (personal statements) where humans lead and AI only assists.'),
      jsonb_build_object('title', 'Playbooks and Compounding Success', 'content', 'A playbook is a written "AI recipe" for a repeated process, showing each step, what you do and what AI does. Example steps: topic research, source review, outline, first draft, review and refine, each with a specific prompt or CO-STAR instruction. Dabblers re-invent their process every time; Tier 3 users run and refine playbooks so each use makes the system better.')
    )
  ),
  jsonb_build_object(
    'name', 'Short Summary',
    'content', 'This lesson explains how to move from being a casual AI user to a "Tier 3" elite user. Instead of chasing every new tool, Tier 3 users apply strategic filtering, a small weekly news budget and focused trials. They avoid tool chaos by building systems that flow, where AI is integrated into places they already work. A key idea is the AI playbook: a documented step-by-step workflow showing what you do and what AI does for any repeated task, which you refine over time.'
  )
)),

(7, 'Module 7: Your Future Strategy in the AI Era', jsonb_build_array(
  jsonb_build_object(
    'name', 'Main Ideas',
    'subsections', jsonb_build_array(
      jsonb_build_object('title', 'Big Picture – Where Value Is Moving', 'content', 'AI is making some skills cheaper: pattern recognition, information lookup, standard analysis and routine problem-solving. Human-only skills are becoming more valuable: original thinking, judgment in messy situations, real relationships, navigating uncertainty, purposeful creativity and ethical reasoning. When something useful becomes scarce, its value rises – AI increases the supply of pattern skills, so deep human skills become the "rare flex". People who use AI effectively already earn much more on average, and the gap is growing.'),
      jsonb_build_object('title', 'Your Edges Over AI', 'content', 'Edge 1 – Human experience: you have lived failures, successes, fear, friendship and consequences, which grow intuition, empathy, judgment and wisdom that AI does not have. Edge 2 – Breaking patterns on purpose: AI follows and remixes patterns; humans can deliberately break them with meaning to create new products, art or ideas. Edge 3 – Feeling the weight of decisions: AI never feels guilt, responsibility or risk, but humans do, which matters when choices affect real people. Edge 4 – Caring about specific things: AI has no passions; your care for certain people, causes or crafts gives you direction, motivation and sharper insight.'),
      jsonb_build_object('title', '"Bedside Manner" – Humans + AI Together', 'content', 'An oncologist example shows that AI may diagnose better one day but will never have "bedside manner" – how you support someone in hard moments. Four human qualities that are hard to copy: courage, wisdom, humour and kindness/empathy; these are what people remember and pay for. Principle: let AI handle technical operations (drafts, analysis, admin) while humans own the relationship, trust and final judgment in jobs like law, teaching, medicine and sales.'),
      jsonb_build_object('title', 'Your Advantage Over Adults – Time and Plasticity', 'content', 'Young people are "time billionaires": time is your main currency and you have more of it now than you ever will again. Teenage brains have high neuroplasticity, so you can form new habits and skills faster than most adults and adapt quickly as tools and jobs change.'),
      jsonb_build_object('title', 'Strategic Mistakes to Avoid', 'content', 'AI-dependency trap: moving from "AI helps me" to "I can''t do this without AI", which weakens your own abilities. Information does not equal knowledge: AI gives instant facts, but real knowledge needs struggle, making connections, applying ideas and testing your understanding. Identity trap: building your identity on how you work (typing speed, memorising facts, old methods) instead of what you deliver (problem-solving, clear communication, building useful things).'),
      jsonb_build_object('title', 'The Four Long-Term Assets', 'content', 'Asset 1 – AI skills: understanding how AI works, when to use it, how to prompt and how to build systems. Asset 2 – Human skills: communication, emotional intelligence, collaboration, critical thinking and relationship building. Asset 3 – Experience: actually building things in the real world (projects, writing, helping others). Asset 4 – Flexibility: learning how you learn best and becoming comfortable with change.')
    )
  ),
  jsonb_build_object(
    'name', 'Short Summary',
    'content', 'This lesson is about positioning yourself to win in an AI-shaped future. As AI makes pattern-based tasks cheap, human-only abilities like judgment, deep relationships, purposeful creativity and ethical reasoning become rarer and more valuable. The main dangers are becoming dependent on AI, confusing information with real knowledge and tying your identity to old methods. To stay valuable, build four long-term assets: strong AI skills, strong human skills, real-world experience and high flexibility.'
  )
)) ON CONFLICT (module_id) DO NOTHING;
