"use strict";

const axios = require("axios");

function isChinese(text) {
  const chineseChars = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
  const totalChars = text.replace(/\s/g, "").length;
  return totalChars > 0 && chineseChars / totalChars > 0.3;
}

async function main() {
  const text = popclip.input.text;
  const { apiKey, apiBase, model } = popclip.options;

  if (!apiKey) {
    return "❌ 请配置 API Key";
  }

  const isZh = isChinese(text);
  const prompt = `你是翻译专家。将以下${isZh ? "中文翻译成英文" : "英文翻译成中文"}，只输出译文：\n\n${text}`;

  try {
    const res = await axios.post(apiBase, {
      model: model,
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3
    }, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      timeout: 30000
    });

    return res.data.choices[0].message.content.trim();
  } catch (e) {
    return `❌ ${e.response?.data?.error?.message || e.message}`;
  }
}

module.exports = main;
