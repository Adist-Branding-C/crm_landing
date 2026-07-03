#!/usr/bin/env node
// Downloads all discovered assets from promptmonitor.io into public/
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const assets = [
  // Logos / icons
  ["https://promptmonitor.io/assets/promptmonitor-logo.svg", "public/images/promptmonitor.io/assets/promptmonitor-logo.svg"],
  ["https://promptmonitor.io/assets/googleicon.svg", "public/images/promptmonitor.io/assets/googleicon.svg"],
  ["https://promptmonitor.io/assets/media-ai-logo.avif", "public/images/promptmonitor.io/assets/media-ai-logo.avif"],
  ["https://promptmonitor.io/assets/steve-lee.webp", "public/images/promptmonitor.io/assets/steve-lee.webp"],
  ["https://promptmonitor.io/assets/favicon.svg", "public/seo/favicon.svg"],
  ["https://promptmonitor.io/favicon.ico", "public/favicon-source.ico"],

  // Hero / feature screenshots
  ["https://promptmonitor.io/assets/promptmonitor-hero-img-latest.png", "public/images/promptmonitor.io/assets/promptmonitor-hero-img-latest.png"],
  ["https://promptmonitor.io/assets/features-img/track-ai-visibility.png", "public/images/promptmonitor.io/assets/features-img/track-ai-visibility.png"],
  ["https://promptmonitor.io/assets/features-img/find-ai-sources.png", "public/images/promptmonitor.io/assets/features-img/find-ai-sources.png"],
  ["https://promptmonitor.io/assets/features-img/ai-bot-analytics.png", "public/images/promptmonitor.io/assets/features-img/ai-bot-analytics.png"],
  ["https://promptmonitor.io/assets/features-img/web-analytics.png", "public/images/promptmonitor.io/assets/features-img/web-analytics.png"],
  ["https://promptmonitor.io/assets/features-img/publishers-contacts.png", "public/images/promptmonitor.io/assets/features-img/publishers-contacts.png"],
  ["https://promptmonitor.io/assets/features-img/know-when-to-outreach-outrank.png", "public/images/promptmonitor.io/assets/features-img/know-when-to-outreach-outrank.png"],
  ["https://promptmonitor.io/assets/features-img/discover-competitors.png", "public/images/promptmonitor.io/assets/features-img/discover-competitors.png"],
  ["https://promptmonitor.io/assets/features-img/brand-monitor.png", "public/images/promptmonitor.io/assets/features-img/brand-monitor.png"],
  ["https://promptmonitor.io/assets/features-img/search-queries.png", "public/images/promptmonitor.io/assets/features-img/search-queries.png"],
  ["https://promptmonitor.io/assets/features-img/localization.png", "public/images/promptmonitor.io/assets/features-img/localization.png"],

  // LLM logos + icons (variants)
  ["https://promptmonitor.io/llms/openai-icon.svg", "public/images/promptmonitor.io/llms/openai-icon.svg"],
  ["https://promptmonitor.io/llms/openai-wbg-icon.svg", "public/images/promptmonitor.io/llms/openai-wbg-icon.svg"],
  ["https://promptmonitor.io/llms/openai-logo.svg", "public/images/promptmonitor.io/llms/openai-logo.svg"],
  ["https://promptmonitor.io/llms/claude-icon.svg", "public/images/promptmonitor.io/llms/claude-icon.svg"],
  ["https://promptmonitor.io/llms/claude-icon-wfilled.svg", "public/images/promptmonitor.io/llms/claude-icon-wfilled.svg"],
  ["https://promptmonitor.io/llms/claude-logo.svg", "public/images/promptmonitor.io/llms/claude-logo.svg"],
  ["https://promptmonitor.io/llms/gemini-icon.svg", "public/images/promptmonitor.io/llms/gemini-icon.svg"],
  ["https://promptmonitor.io/llms/gemini-icon-filled.svg", "public/images/promptmonitor.io/llms/gemini-icon-filled.svg"],
  ["https://promptmonitor.io/llms/gemini-logo.svg", "public/images/promptmonitor.io/llms/gemini-logo.svg"],
  ["https://promptmonitor.io/llms/grok-icon.svg", "public/images/promptmonitor.io/llms/grok-icon.svg"],
  ["https://promptmonitor.io/llms/grok-logo.svg", "public/images/promptmonitor.io/llms/grok-logo.svg"],
  ["https://promptmonitor.io/llms/deepseek-icon-filled.svg", "public/images/promptmonitor.io/llms/deepseek-icon-filled.svg"],
  ["https://promptmonitor.io/llms/deepseek-icon-wfilled.svg", "public/images/promptmonitor.io/llms/deepseek-icon-wfilled.svg"],
  ["https://promptmonitor.io/llms/deepseek-logo.svg", "public/images/promptmonitor.io/llms/deepseek-logo.svg"],
  ["https://promptmonitor.io/llms/perplexity-icon.svg", "public/images/promptmonitor.io/llms/perplexity-icon.svg"],
  ["https://promptmonitor.io/llms/perplexity-logo.svg", "public/images/promptmonitor.io/llms/perplexity-logo.svg"],
  ["https://promptmonitor.io/llms/ai_mode-logo.svg", "public/images/promptmonitor.io/llms/ai_mode-logo.svg"],
  ["https://promptmonitor.io/llms/ai_overview-logo.svg", "public/images/promptmonitor.io/llms/ai_overview-logo.svg"],

  // Pricing plan icons (hosted on supabase CDN)
  ["https://bvatwanklwlvzlcxrcxn.supabase.co/storage/v1/object/public/assets//pricing-pro-icon.svg", "public/images/promptmonitor.io/pricing-pro-icon.svg"],
  ["https://bvatwanklwlvzlcxrcxn.supabase.co/storage/v1/object/public/assets//pricing-startup-icon.svg", "public/images/promptmonitor.io/pricing-startup-icon.svg"],
  ["https://bvatwanklwlvzlcxrcxn.supabase.co/storage/v1/object/public/assets//promptmonitor-og-img.png", "public/seo/og-image.png"],
];

async function downloadOne([url, dest]) {
  const destPath = path.join(ROOT, dest);
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`SKIP (${res.status}): ${url}`);
      return;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(destPath, buf);
    console.log(`OK: ${url} -> ${dest} (${buf.length}b)`);
  } catch (err) {
    console.warn(`FAIL: ${url} — ${err.message}`);
  }
}

async function run() {
  const BATCH = 4;
  for (let i = 0; i < assets.length; i += BATCH) {
    await Promise.all(assets.slice(i, i + BATCH).map(downloadOne));
  }
}

run();
