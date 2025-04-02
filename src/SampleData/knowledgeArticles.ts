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
    id: "4d5e6f7g-8h9i0j1k-2l3m4n5o-6p7q8r9s",
    url: "https://www.contoso.com/article4",
    title: "How to optimize your website for search engines and improve rankings",
    summary: "To optimize your website for search engines and improve rankings, start by conducting thorough keyword research to identify relevant terms that potential visitors are searching for. Use tools like Google Keyword Planner or Ahrefs to find high-volume, low-competition keywords and incorporate them naturally into your website’s title tags, meta descriptions, headers, and content. This helps search engines understand the relevance of your pages. Enhance on-page SEO by optimizing each page for a primary keyword, using descriptive meta descriptions, and structuring content with header tags (H1, H2, H3). High-quality, long-form content tends to rank better, so aim to create comprehensive articles that cover topics in-depth. Additionally, use internal linking to connect related content within your site, which helps search engines crawl and index your pages more effectively. Technical SEO is crucial as well. Improve your website’s loading speed by compressing images, minimizing CSS and JavaScript files, and leveraging browser caching.Search engine optimization (SEO) is essential for improving website visibility and rankings. This article provides tips and techniques for optimizing your website, including keyword research, on-page SEO, and link building. By following these best practices, you can increase organic traffic and achieve higher search engine rankings.",
    extract: "To optimize your website for search engines and improve rankings, start with thorough keyword research to identify relevant terms that potential visitors are searching for. Use tools like Google Keyword Planner or Ahrefs to find high-volume, low-competition keywords and incorporate them naturally into your website’s title tags, meta descriptions, headers, and content. Enhance on-page SEO by optimizing each page for a primary keyword, using descriptive meta descriptions, and structuring content with header tags. Create high-quality, long-form content that covers topics in-depth and use internal linking to connect related content within your site. Improve technical SEO by enhancing your website’s loading speed, ensuring mobile-friendliness, and leveraging browser caching.",
    relevance: 4,
    source: "external",
  },
  {
    id: "4157a712-3e66-ef11-a670-000d3a0c635d",
    url: "https://www.contoso.com/article1",
    title: "How to address unauthorized charges on Billing System B?",
    summary: "Billing System B authorizations are not attempted more than once per calendar day, and most accounts graduate out of threshold billing after multiple months of successful payment history.",
    extract: "The document titled CST User Guide provides guidelines on handling unauthorized charges on Billing System B. It explains the process of threshold billing, which is applied to accounts displaying high-risk behavior. When a customer exceeds their billing threshold, the Commerce system attempts to authorize the payment method on file. If the payment is approved, it is reversed immediately without notifying the customer.",
    relevance: 0,
    source: "external",
  },
  {
    id: "2b3c4d5e-6f7g8h9i-0j1k2l3m-4n5o6p7q",
    url: "https://www.contoso.com/article2",
    title: "How to resolve performance issues with Machine Model X?",
    summary: "To resolve performance issues with Machine Model X, a systematic approach is essential. Begin by identifying the symptoms through performance metrics and user feedback. Ensure data quality by cleaning, handling missing values, and performing feature engineering. Data augmentation can also enhance training data diversity. Evaluate the model using learning curves, cross-validation, and confusion matrices to diagnose underfitting, overfitting, and class imbalance issues. Hyperparameter tuning through grid search, random search, or Bayesian optimization can optimize model performance. Reassess the model architecture and algorithms, adjusting complexity and applying regularization techniques like L1/L2 regularization or dropout for neural networks. During the training process, experiment with batch sizes and learning rates, implement early stopping, and ensure proper data shuffling. In deployment, conduct A/B testing to compare the new model with the existing one and set up monitoring to track performance in production. Establish a feedback loop to continuously collect data and user feedback for iterative improvements.",
    extract: "To resolve performance issues with Machine Model X, start by identifying the symptoms through performance metrics and user feedback. Ensure data quality by cleaning, handling missing values, and performing feature engineering. Data augmentation can enhance training data diversity. Evaluate the model using learning curves, cross-validation, and confusion matrices to diagnose issues like underfitting, overfitting, and class imbalance.",
    relevance: 0,
    source: "external",
  },
  {
    id: "3c4d5e6f-7g8h9i0j-1k2l3m4n-5o6p7q8r",
    url: "https://www.contoso.com/article3",
    title: "How to identify and install missing dependency for Software Suite A",
    summary: "To identify and install missing dependencies for Software Suite A, start by reviewing the software's documentation, which typically lists all required dependencies. If the documentation is unavailable or unclear, running the installation or configuration script can help identify missing dependencies, as it will fail and provide error messages indicating which dependencies are missing. For systems using package managers, tools like apt or yum can automatically fetch and install missing dependencies. For example, using sudo apt-get install -f can resolve dependency issues by downloading and installing the necessary packages. Additionally, examining the README files or package information pages can provide insights into required dependencies. By systematically checking documentation,running scripts, and utilizing package management tools, you can effectively identify and install missing dependencies for Software Suite A.",
    extract: "To identify and install missing dependencies for Software Suite A, start by reviewing the software's documentation for a list of required dependencies. If documentation is unclear, running the installation script can highlight missing dependencies through error messages. Utilize package managers like apt or yum to automatically resolve and install these dependencies. For instance, using sudo apt-get install -f can download and install necessary packages. Additionally, examining README files or package information pages can provide further insights. By systematically checking documentation, running scripts, and using package management tools, you can effectively identify and install missing dependencies for Software Suite A.Cloud storage solutions offer convenience and scalability, but securing sensitive data is crucial. This article outlines best practices for protecting data in the cloud.",
    relevance: 0,
    source: "external",
  },
  ];

