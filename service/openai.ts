import OpenAI from "openai";
import {HttpsProxyAgent} from 'https-proxy-agent'
// import HttpsProxyAgent from "https-proxy-agent";

export function getOpenAIClient(): OpenAI {
  const openai = new OpenAI({
    apiKey: process.env["OPENAI_API_KEY"],
    httpAgent: new HttpsProxyAgent("http://127.0.0.1:7890")
  });

  return openai;
}
