// Which curriculum modules students can open.
// Foundation = modules 1–2, Application = 3–5, Strategy = 6–8.
// Strategy is not part of the AI Advantage Academy, so it stays locked for
// students. Accounts listed in FULL_ACCESS_ACCOUNTS can open everything.
export const LOCKED_MODULES = [6, 7, 8];

export const FULL_ACCESS_ACCOUNTS = ['shawaiz'];

export const isModuleLocked = (moduleId, user) =>
  !FULL_ACCESS_ACCOUNTS.includes(user?.id) && LOCKED_MODULES.includes(Number(moduleId));
