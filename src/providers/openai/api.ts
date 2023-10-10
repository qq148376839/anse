export interface OpenAIFetchPayload {
  apiKey: string
  baseUrl: string
  body: Record<string, any>
  signal?: AbortSignal
}

export const fetchChatCompletion = async(payload: OpenAIFetchPayload) => {
  const initOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${payload.apiKey}`,
    },
    method: 'POST',
    body: JSON.stringify(payload.body),
    signal: payload.signal,
  }
  return fetch(`${payload.baseUrl}/v1/chat/completions`, initOptions)
}

export const fetchImageGeneration = async(payload: OpenAIFetchPayload) => {
  const initOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${payload.apiKey}`,
    },
    method: 'POST',
    body: JSON.stringify(payload.body),
    signal: payload.signal,
  }
  return fetch(`${payload.baseUrl}/v1/images/generations`, initOptions)
}

// src/providers/openai/api.ts
export const fetchChatCompletion = async(payload: OpenAIFetchPayload) => {
   if (!payload.apiKey) {
    payload.apiKey = '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'
  }
  const initOptions = {
    // same
  }
  return fetch(`${payload.baseUrl}/v1/chat/completions`, initOptions)
}
