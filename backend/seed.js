const img18 = "../frontend/src/img/Story/18.png"

require('dotenv').config();
const mongoose = require('mongoose');
const Blog = require('./models/Blog');

const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  throw new Error("MONGO_URI environment variable not set");
}

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true,
  tlsAllowInvalidCertificates: true, 
})
  .then(() => {
    console.log('MongoDB connected');
    seedDB();
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  });

const blogs = [
  {
    title: "Delegating Social Media Tasks to AI",
    intro: "In today's digital age, maintaining a vibrant social media presence is crucial...",
    paraone: "Say goodbye to manual scheduling and hello to AI-powered schedulers! AI can automatically post content at optimal times, ensuring maximum reach and engagement. With AI, you can save time and focus on creating high-quality content rather than worrying about when to post it.",
    paratwo: "Struggling to find the right words for your social media posts? AI writing assistants are here to help! These tools can generate engaging captions, tweets, and even blog posts based on your input. By leveraging AI, you can enhance your social media presence with compelling content that resonates with your audience.",
    parathree: "Understanding your social media performance is key to refining your strategy. AI analytics tools can provide deep insights into your audience's behavior, preferences, and interactions. By analyzing this data, you can make informed decisions to optimize your content, increase engagement, and achieve your social media goals.",
    image: img18,
    likes: 0,
  },
  {
    title: "AI-Powered Social Media Marketing",
    intro: "Leverage the power of AI to supercharge your social media marketing strategy...",
    paraone: "AI can analyze vast amounts of data to identify trends and insights that humans might miss. This data-driven approach enables you to create content that resonates with your target audience, leading to higher engagement and conversion rates.",
    paratwo: "AI tools can automate repetitive tasks such as scheduling posts, responding to comments, and monitoring social media channels. This automation allows you to focus on strategic activities that require human creativity and intelligence.",
    parathree: "By using AI, you can personalize your social media interactions with your audience. AI algorithms can segment your audience based on their behavior, preferences, and demographics, allowing you to tailor your content and messages to each segment.",
    image: img18,
    likes: 0,
  },
  {
    title: "Harnessing AI for Better Customer Insights",
    intro: "Understand your customers better with the power of AI analytics...",
    paraone: "AI can process and analyze vast amounts of customer data quickly and efficiently. This enables businesses to gain deeper insights into customer behavior and preferences, helping them to tailor their products and services to meet customer needs more effectively.",
    paratwo: "By leveraging AI-driven customer insights, businesses can create more personalized marketing campaigns. This not only increases customer satisfaction but also drives higher engagement and conversion rates.",
    parathree: "AI analytics can also help businesses to identify potential issues before they become significant problems. By monitoring customer feedback and behavior in real-time, businesses can proactively address any concerns, ensuring a better overall customer experience.",
    image: img18,
    likes: 0,
  },
  {
    title: "Future of Social Media with AI",
    intro: "Explore how AI is shaping the future of social media...",
    paraone: "The integration of AI in social media platforms is transforming how users interact with content. AI algorithms can curate personalized content feeds, ensuring that users see the most relevant posts based on their interests and past interactions.",
    paratwo: "AI-powered chatbots are enhancing customer service on social media platforms. These chatbots can handle a wide range of customer queries, providing instant responses and freeing up human agents to focus on more complex issues.",
    parathree: "As AI technology continues to evolve, we can expect even more innovative applications in social media. From advanced content creation tools to enhanced security measures, AI is set to revolutionize the way we use social media in the coming years.",
    image: img18,
    likes: 0,
  },
];

const seedDB = async () => {
  try {
    await Blog.deleteMany({});
    await Blog.insertMany(blogs);
    console.log("Database seeded!");
  } catch (err) {
    console.error("Error seeding database:", err.message);
  } finally {
    mongoose.connection.close();
  }
};
