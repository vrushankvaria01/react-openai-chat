import OpenAIApi from "openai";

const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_KEY,
});

// const openapi = new OpenAIApi(openAIConfig);

export const chatCompletion = async (req, res) => {
  try {
    const { prompt } = req.body;

    const answer = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: prompt },
      ],
    });

    console.log("API Response:", answer);

    const text = answer.choices[0].message.content;

    res.status(200).json({ text });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};