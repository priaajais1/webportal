const stopWords = new Set(["what", "where", "and", "is", "the", "how"]);
export function searchKnowledgeArticles(query: string) {
  const words = query?.toLowerCase().split(/\s+/).filter(word => !stopWords.has(word));
  const articleScores = KnowledgeArticlesData.map(article => {
    const score = words?.reduce((acc, word) => {
      const matches = (article.title.toLowerCase().includes(word) ? 1 : 0) +
                      (article.summary.toLowerCase().includes(word) ? 1 : 0) +
                      (article.extract.toLowerCase().includes(word) ? 1 : 0);
      return acc + matches;
    }, 0);
    return { article, score };
  });

  articleScores.sort((a, b) => b.score - a.score);

  return articleScores.slice(0, 3).map(item => item.article);
}

export const KnowledgeArticlesData = [
  {
    id: "4157a712-3e66-ef11-a670-000d3a0c635d",
    url: "https://www.contoso.com/article1",
    title: "How to troubleshoot network connectivity issues in a corporate environment",
    summary: "This article provides a comprehensive guide on troubleshooting network connectivity issues in a corporate environment. It covers common problems, diagnostic tools, and step-by-step solutions to ensure a stable and reliable network connection for all users.",
    extract: "This article provides a comprehensive guide on troubleshooting network connectivity issues in a corporate environment. It covers common problems, diagnostic tools, and step-by-step solutions.",
    relevance: 0,
    source: "external",
  },
  {
    id: "2b3c4d5e-6f7g8h9i-0j1k2l3m-4n5o6p7q",
    url: "https://www.contoso.com/article2",
    title: "Effective strategies for managing remote teams and ensuring productivity",
    summary: "Managing remote teams can be challenging, but with the right strategies, it is possible to ensure productivity and collaboration. This article discusses various techniques and tools that can help managers effectively lead remote teams, maintain communication, and achieve organizational goals.",
    extract: "Managing remote teams can be challenging, but with the right strategies, it is possible to ensure productivity and collaboration. This article discusses various techniques and tools.",
    relevance: 0,
    source: "external",
  },
  {
    id: "3c4d5e6f-7g8h9i0j-1k2l3m4n-5o6p7q8r",
    url: "https://www.contoso.com/article3",
    title: "Best practices for securing sensitive data in cloud storage solutions",
    summary: "Cloud storage solutions offer convenience and scalability, but securing sensitive data is crucial. This article outlines best practices for protecting data in the cloud, including encryption, access controls, and regular security audits. Implementing these measures can help prevent data breaches and ensure compliance with regulations.",
    extract: "Cloud storage solutions offer convenience and scalability, but securing sensitive data is crucial. This article outlines best practices for protecting data in the cloud.",
    relevance: 0,
    source: "external",
  },
  {
    id: "4d5e6f7g-8h9i0j1k-2l3m4n5o-6p7q8r9s",
    url: "https://www.contoso.com/article4",
    title: "How to optimize your website for search engines and improve rankings",
    summary: "Search engine optimization (SEO) is essential for improving website visibility and rankings. This article provides tips and techniques for optimizing your website, including keyword research, on-page SEO, and link building. By following these best practices, you can increase organic traffic and achieve higher search engine rankings.",
    extract: "Search engine optimization (SEO) is essential for improving website visibility and rankings. This article provides tips and techniques for optimizing your website.",
    relevance: 4,
    source: "external",
  },
  {
    id: "5e6f7g8h-9i0j1k2l-3m4n5o6p-7q8r9s0t",
    url: "https://www.contoso.com/article5",
    title: "A comprehensive guide to implementing effective project management methodologies",
    summary: "Effective project management is key to the success of any project. This article explores various project management methodologies, including Agile, Scrum, and Waterfall. It provides insights into their benefits, challenges, and best practices for implementation. By choosing the right methodology, you can ensure project success and achieve your goals.",
    extract: "Effective project management is key to the success of any project. This article explores various project management methodologies, including Agile, Scrum, and Waterfall.",
    relevance: 5,
    source: "external",
  },
  {
    id: "6f7g8h9i-0j1k2l3m-4n5o6p7q-8r9s0t1u",
    url: "https://www.contoso.com/article6",
    title: "Understanding the importance of cybersecurity in today's digital landscape",
    summary: "Cybersecurity is more important than ever in today's digital landscape. This article discusses the various threats that organizations face, including malware, phishing, and ransomware. It also provides tips for improving cybersecurity, such as implementing strong passwords, using multi-factor authentication, and conducting regular security assessments.",
    extract: "Cybersecurity is more important than ever in today's digital landscape. This article discusses the various threats that organizations face, including malware, phishing, and ransomware.",
    relevance: 6,
    source: "external",
  },
  {
    id: "7g8h9i0j-1k2l3m4n-5o6p7q8r-9s0t1u2v",
    url: "https://www.contoso.com/article7",
    title: "How to create a successful digital marketing strategy for your business",
    summary: "A successful digital marketing strategy is essential for reaching your target audience and achieving business goals. This article covers the key components of a digital marketing strategy, including content marketing, social media, email marketing, and paid advertising. By following these guidelines, you can create a comprehensive and effective digital marketing plan.",
    extract: "A successful digital marketing strategy is essential for reaching your target audience and achieving business goals. This article covers the key components of a digital marketing strategy.",
    relevance: 7,
    source: "external",
  },
  {
    id: "8h9i0j1k-2l3m4n5o-6p7q8r9s-0t1u2v3w",
    url: "https://www.contoso.com/article8",
    title: "The benefits of adopting a customer-centric approach in your business",
    summary: "Adopting a customer-centric approach can lead to increased customer satisfaction and loyalty. This article explores the benefits of putting customers at the center of your business strategy, including improved customer retention, higher sales, and positive word-of-mouth. It also provides tips for creating a customer-centric culture within your organization.",
    extract: "Adopting a customer-centric approach can lead to increased customer satisfaction and loyalty. This article explores the benefits of putting customers at the center of your business strategy.",
    relevance: 8,
    source: "external",
  },
  {
    id: "9i0j1k2l-3m4n5o6p-7q8r9s0t-1u2v3w4x",
    url: "https://www.contoso.com/article9",
    title: "How to leverage data analytics to drive business growth and innovation",
    summary: "Data analytics can provide valuable insights that drive business growth and innovation. This article discusses the importance of data analytics, the different types of data analysis, and how to implement data-driven decision-making processes. By leveraging data analytics, businesses can identify trends, optimize operations, and create new opportunities for growth.",
    extract: "Data analytics can provide valuable insights that drive business growth and innovation. This article discusses the importance of data analytics, the different types of data analysis.",
    relevance: 9,
    source: "external",
  },
  {
    id: "0j1k2l3m-4n5o6p7q-8r9s0t1u-2v3w4x5y",
    url: "https://www.contoso.com/article10",
    title: "The role of artificial intelligence in transforming various industries",
    summary: "Artificial intelligence (AI) is transforming various industries by automating processes, improving efficiency, and enabling new capabilities. This article explores the impact of AI on different sectors, including healthcare, finance, and manufacturing. It also discusses the challenges and opportunities associated with AI adoption and provides insights into the future of AI technology.",
    extract: "Artificial intelligence (AI) is transforming various industries by automating processes, improving efficiency, and enabling new capabilities. This article explores the impact of AI on different sectors.",
    relevance: 10,
    source: "external",
  },
  {
    id: "1k2l3m4n-5o6p7q8r-9s0t1u2v-3w4x5y6z",
    url: "https://www.contoso.com/article11",
    title: "How to develop a successful product launch strategy for maximum impact",
    summary: "A successful product launch strategy is crucial for generating buzz and driving sales. This article provides a step-by-step guide to planning and executing a product launch, including market research, target audience identification, and promotional tactics. By following these best practices, you can ensure a smooth and impactful product launch that captures the attention of your audience.",
    extract: "A successful product launch strategy is crucial for generating buzz and driving sales. This article provides a step-by-step guide to planning and executing a product launch.",
    relevance: 11,
    source: "external",
  },
  {
    id: "2l3m4n5o-6p7q8r9s-0t1u2v3w-4x5y6z7a",
    url: "https://www.contoso.com/article12",
    title: "The importance of employee engagement and strategies to improve it",
    summary: "Employee engagement is essential for organizational success. This article discusses the importance of employee engagement, its impact on productivity and retention, and strategies to improve it. By fostering a positive work environment, providing opportunities for growth, and recognizing employee contributions, organizations can enhance engagement and achieve better business outcomes.",
    extract: "Employee engagement is essential for organizational success. This article discusses the importance of employee engagement, its impact on productivity and retention, and strategies to improve it.",
    relevance: 12,
    source: "external",
  },
  {
    id: "3m4n5o6p-7q8r9s0t-1u2v3w4x-5y6z7a8b",
    url: "https://www.contoso.com/article13",
    title: "How to create a sustainable business model for long-term success",
    summary: "Creating a sustainable business model is key to long-term success. This article explores the principles of sustainability, including environmental, social, and economic factors. It provides insights into how businesses can integrate sustainability into their operations, reduce their environmental footprint, and create value for stakeholders. By adopting sustainable practices, businesses can achieve long-term growth and resilience.",
    extract: "Creating a sustainable business model is key to long-term success. This article explores the principles of sustainability, including environmental, social, and economic factors.",
    relevance: 13,
    source: "external",
  },
  {
    id: "4n5o6p7q-8r9s0t1u-2v3w4x5y-6z7a8b9c",
    url: "https://www.contoso.com/article14",
    title: "The benefits of implementing a customer relationship management system",
    summary: "Implementing a customer relationship management (CRM) system can provide numerous benefits for businesses. This article discusses the advantages of CRM systems, including improved customer service, increased sales, and enhanced data management. It also provides tips for selecting the right CRM system and best practices for successful implementation. By leveraging CRM technology, businesses can build stronger customer relationships and drive growth.",
    extract: "Implementing a customer relationship management (CRM) system can provide numerous benefits for businesses. This article discusses the advantages of CRM systems, including improved customer service.",
    relevance: 14,
    source: "external",
  },
  {
    id: "5o6p7q8r-9s0t1u2v-3w4x5y6z-7a8b9c0d",
    url: "https://www.contoso.com/article15",
    title: "How to develop a comprehensive risk management strategy for your business",
    summary: "A comprehensive risk management strategy is essential for identifying, assessing, and mitigating potential risks. This article provides a framework for developing a risk management strategy, including risk identification, analysis, and response planning. It also discusses the importance of continuous monitoring and review to ensure the effectiveness of the strategy. By implementing a robust risk management approach, businesses can protect their assets and achieve their objectives.",
    extract: "A comprehensive risk management strategy is essential for identifying, assessing, and mitigating potential risks. This article provides a framework for developing a risk management strategy.",
    relevance: 15,
    source: "external",
  },
  {
    id: "6p7q8r9s-0t1u2v3w-4x5y6z7a-8b9c0d1e",
    url: "https://www.contoso.com/article16",
    title: "The impact of digital transformation on business operations and growth",
    summary: "Digital transformation is reshaping business operations and driving growth. This article explores the impact of digital transformation on various aspects of business, including customer experience, operational efficiency, and innovation. It also provides insights into the key technologies and strategies that businesses can adopt to successfully navigate the digital landscape. By embracing digital transformation, businesses can stay competitive and achieve sustainable growth.",
    extract: "Digital transformation is reshaping business operations and driving growth. This article explores the impact of digital transformation on various aspects of business, including customer experience.",
    relevance: 16,
    source: "external",
  },
  {
    id: "7q8r9s0t-1u2v3w4x-5y6z7a8b-9c0d1e2f",
    url: "https://www.contoso.com/article17",
    title: "How to build a strong brand identity and increase brand awareness",
    summary: "Building a strong brand identity is crucial for increasing brand awareness and customer loyalty. This article discusses the key elements of brand identity, including brand values, messaging, and visual identity. It also provides tips for creating a consistent brand experience across all touchpoints and leveraging marketing channels to enhance brand visibility. By developing a strong brand identity, businesses can differentiate themselves from competitors and build lasting relationships with customers.",
    extract: "Building a strong brand identity is crucial for increasing brand awareness and customer loyalty. This article discusses the key elements of brand identity, including brand values, messaging, and visual identity.",
    relevance: 17,
    source: "external",
  },
  {
    id: "8r9s0t1u-2v3w4x5y-6z7a8b9c-0d1e2f3g",
    url: "https://www.contoso.com/article18",
    title: "The role of innovation in driving business growth and competitive advantage",
    summary: "Innovation is a key driver of business growth and competitive advantage. This article explores the importance of fostering a culture of innovation within organizations and provides strategies for encouraging creativity and experimentation. It also discusses the role of technology in enabling innovation and the benefits of collaborating with external partners. By prioritizing innovation, businesses can stay ahead of the competition and achieve long-term success.",
    extract: "Innovation is a key driver of business growth and competitive advantage. This article explores the importance of fostering a culture of innovation within organizations and provides strategies for encouraging creativity.",
    relevance: 18,
    source: "external",
  },
  {
    id: "9s0t1u2v-3w4x5y6z-7a8b9c0d-1e2f3g4h",
    url: "https://www.contoso.com/article19",
    title: "How to create an effective content marketing strategy for your business",
    summary: "Content marketing is a powerful tool for attracting and engaging customers. This article provides a step-by-step guide to creating an effective content marketing strategy, including content planning, creation, and distribution. It also discusses the importance of measuring content performance and optimizing your strategy based on data insights. By implementing a well-defined content marketing strategy, businesses can build brand authority and drive customer engagement.",
    extract: "Content marketing is a powerful tool for attracting and engaging customers. This article provides a step-by-step guide to creating an effective content marketing strategy, including content planning, creation, and distribution.",
    relevance: 19,
    source: "external",
  },
  {
    id: "0t1u2v3w-4x5y6z7a-8b9c0d1e-2f3g4h5i",
    url: "https://www.contoso.com/article20",
    title: "The benefits of adopting a data-driven approach to decision making",
    summary: "Adopting a data-driven approach to decision making can provide valuable insights and improve business outcomes. This article discusses the benefits of data-driven decision making, including increased accuracy, better risk management, and enhanced strategic planning. It also provides tips for building a data-driven culture within your organization and leveraging data analytics tools. By making data-driven decisions, businesses can achieve greater efficiency and drive growth.",
    extract: "Adopting a data-driven approach to decision making can provide valuable insights and improve business outcomes. This article discusses the benefits of data-driven decision making, including increased accuracy.",
    relevance: 20,
    source: "external",
  }
];

