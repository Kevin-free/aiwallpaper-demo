import OpenAI from "openai";
import {HttpsProxyAgent} from 'https-proxy-agent'

export function getOpenAIClient(): OpenAI {
  const apiKey = process.env["OPENAI_API_KEY"];
  const proxyUrl = process.env["PROXY_URL"];

  const openai = new OpenAI({
    apiKey: apiKey,
    httpAgent: proxyUrl ? new HttpsProxyAgent(proxyUrl) : undefined
  });

  return openai;
}
