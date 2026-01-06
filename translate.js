const axios = require("axios");

const text = popclip.input.text;
const { apiKey, apiBase, model, promptZhToEn, promptEnToZh, temperature, timeout } = popclip.options;

if (!apiKey) {
  return "❌ 请配置 API Key";
}

function isChinese(str) {
  const chineseChars = (str.match(/[\u4e00-\u9fa5]/g) || []).length;
  const totalChars = str.replace(/\s/g, "").length;
  return totalChars > 0 && chineseChars / totalChars > 0.3;
}

const isZh = isChinese(text);
const promptTemplate = isZh ? promptZhToEn : promptEnToZh;
const prompt = `${promptTemplate}\n\n${text}`;

const res = await axios.post(apiBase, {
  model: model,
  messages: [{ role: "user", content: prompt }],
  temperature: parseFloat(temperature) || 0.3
}, {
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apiKey}`
  },
  timeout: parseInt(timeout) || 30000
});

const result = res.data.choices[0].message.content.trim();
// 如果结果包含换行，使用 large 样式显示
if (result.includes('\n')) {
  popclip.showText(result, { style: 'large' });
  return null;
}
return result;
