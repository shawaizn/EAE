// Which curriculum modules students can open.
// Foundation = modules 1–2, Application = 3–5, Strategy = 6–8.
// Strategy is not part of the AI Advantage Academy, so it stays locked.
export const LOCKED_MODULES = [6, 7, 8];

export const isModuleLocked = (moduleId) => LOCKED_MODULES.includes(Number(moduleId));
