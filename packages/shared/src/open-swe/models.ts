export const MODEL_OPTIONS = [
  // TODO: Test these then re-enable
  // {
  //   label: "Claude Sonnet 4 (Extended Thinking)",
  //   value: "anthropic:extended-thinking:claude-sonnet-4-0",
  // },
  // {
  //   label: "Claude Opus 4 (Extended Thinking)",
  //   value: "anthropic:extended-thinking:claude-opus-4-0",
  // },
  {
    label: "Claude Sonnet 4",
    value: "anthropic:claude-sonnet-4-0",
  },
  {
    label: "Claude Opus 4.1",
    value: "anthropic:claude-opus-4-1",
  },
  {
    label: "Claude Opus 4",
    value: "anthropic:claude-opus-4-0",
  },
  {
    label: "Claude 3.7 Sonnet",
    value: "anthropic:claude-3-7-sonnet-latest",
  },
  {
    label: "Claude 3.5 Sonnet",
    value: "anthropic:claude-3-5-sonnet-latest",
  },
  {
    label: "Claude 3.5 Haiku",
    value: "anthropic:claude-3-5-haiku-latest",
  },
  {
    label: "o4",
    value: "openai:o4",
  },
  {
    label: "o4 mini",
    value: "openai:o4-mini",
  },
  {
    label: "o3",
    value: "openai:o3",
  },
  {
    label: "o3 mini",
    value: "openai:o3-mini",
  },
  {
    label: "GPT 4o",
    value: "openai:gpt-4o",
  },
  {
    label: "GPT 4o mini",
    value: "openai:gpt-4o-mini",
  },
  {
    label: "GPT 4.1",
    value: "openai:gpt-4.1",
  },
  {
    label: "GPT 4.1 mini",
    value: "openai:gpt-4.1-mini",
  },
  {
    label: "Gemini 2.5 Pro",
    value: "google-genai:gemini-2.5-pro",
  },
  {
    label: "Gemini 2.5 Flash",
    value: "google-genai:gemini-2.5-flash",
  },
  {
    label: "Llama 3.1 70B",
    value: "ollama:llama3.1:70b",
  },
  {
    label: "Llama 3.1 8B",
    value: "ollama:llama3.1:8b",
  },
  {
    label: "Llama 3.2 90B",
    value: "ollama:llama3.2:90b",
  },
  {
    label: "Llama 3.2 11B",
    value: "ollama:llama3.2:11b",
  },
  {
    label: "Llama 3.2 3B",
    value: "ollama:llama3.2:3b",
  },
  {
    label: "Llama 3.2 1B",
    value: "ollama:llama3.2:1b",
  },
  {
    label: "CodeLlama 34B",
    value: "ollama:codellama:34b",
  },
  {
    label: "CodeLlama 13B",
    value: "ollama:codellama:13b",
  },
  {
    label: "CodeLlama 7B",
    value: "ollama:codellama:7b",
  },
  {
    label: "Qwen2.5 72B",
    value: "ollama:qwen2.5:72b",
  },
  {
    label: "Qwen2.5 32B",
    value: "ollama:qwen2.5:32b",
  },
  {
    label: "Qwen2.5 14B",
    value: "ollama:qwen2.5:14b",
  },
  {
    label: "Qwen2.5 7B",
    value: "ollama:qwen2.5:7b",
  },
  {
    label: "Qwen2.5-Coder 32B",
    value: "ollama:qwen2.5-coder:32b",
  },
  {
    label: "Qwen2.5-Coder 14B",
    value: "ollama:qwen2.5-coder:14b",
  },
  {
    label: "Qwen2.5-Coder 7B",
    value: "ollama:qwen2.5-coder:7b",
  },
  {
    label: "DeepSeek-Coder V2 236B",
    value: "ollama:deepseek-coder-v2:236b",
  },
  {
    label: "DeepSeek-Coder V2 16B",
    value: "ollama:deepseek-coder-v2:16b",
  },
];

export const MODEL_OPTIONS_NO_THINKING = MODEL_OPTIONS.filter(
  ({ value }) =>
    !value.includes("extended-thinking") && !value.startsWith("openai:o"),
);


