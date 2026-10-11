// Shawaiz's Codecademy certificates, most relevant to AI first.
// To add one: drop the PDF and a cropped .jpg preview in src/assets/certificates/ and add an entry below.

import mlAiEngineerCareerPathPdf from '../assets/certificates/ml-ai-engineer-career-path.pdf';
import mlAiEngineerCareerPathImg from '../assets/certificates/ml-ai-engineer-career-path.jpg';
import dataProgrammingFoundationsForAiPdf from '../assets/certificates/data-programming-foundations-for-ai.pdf';
import dataProgrammingFoundationsForAiImg from '../assets/certificates/data-programming-foundations-for-ai.jpg';
import introToLlmsPdf from '../assets/certificates/intro-to-llms.pdf';
import introToLlmsImg from '../assets/certificates/intro-to-llms.jpg';
import introToGenerativeAiPdf from '../assets/certificates/intro-to-generative-ai.pdf';
import introToGenerativeAiImg from '../assets/certificates/intro-to-generative-ai.jpg';
import learnChatgptPdf from '../assets/certificates/learn-chatgpt.pdf';
import learnChatgptImg from '../assets/certificates/learn-chatgpt.jpg';
import aiForMarketingPdf from '../assets/certificates/ai-for-marketing.pdf';
import aiForMarketingImg from '../assets/certificates/ai-for-marketing.jpg';
import intermediatePython3Pdf from '../assets/certificates/intermediate-python-3.pdf';
import intermediatePython3Img from '../assets/certificates/intermediate-python-3.jpg';
import dataAnalysisPandasPdf from '../assets/certificates/data-analysis-pandas.pdf';
import dataAnalysisPandasImg from '../assets/certificates/data-analysis-pandas.jpg';
import buildAWebsiteHtmlCssGithubPagesPdf from '../assets/certificates/build-a-website-html-css-github-pages.pdf';
import buildAWebsiteHtmlCssGithubPagesImg from '../assets/certificates/build-a-website-html-css-github-pages.jpg';
import learnJavascriptPdf from '../assets/certificates/learn-javascript.pdf';
import learnJavascriptImg from '../assets/certificates/learn-javascript.jpg';
import learnHtmlPdf from '../assets/certificates/learn-html.pdf';
import learnHtmlImg from '../assets/certificates/learn-html.jpg';

const verifyBase = 'https://www.codecademy.com/profiles/Shawaiz_naeem/certificates/';

export const certificates = [
  { title: 'Machine Learning/AI Engineer', kind: 'Career Path', date: 'December 2024', pdf: mlAiEngineerCareerPathPdf, image: mlAiEngineerCareerPathImg, verifyUrl: verifyBase + '6f8e0510ca91437a847b53aa9e9aa3f1' },
  { title: 'Data and Programming Foundations for AI', kind: 'Skill Path', date: 'June 2024', pdf: dataProgrammingFoundationsForAiPdf, image: dataProgrammingFoundationsForAiImg, verifyUrl: verifyBase + '5701108f64cd4a02981c161085ccc50e' },
  { title: 'Intro to Large Language Models (LLMs)', kind: 'Course', date: 'September 2023', pdf: introToLlmsPdf, image: introToLlmsImg, verifyUrl: verifyBase + '1fb2fea548cf4c5f937545d9872a0c07' },
  { title: 'Intro to Generative AI', kind: 'Course', date: 'September 2023', pdf: introToGenerativeAiPdf, image: introToGenerativeAiImg, verifyUrl: verifyBase + '28ccb695c353465a8785a036ad32d3b9' },
  { title: 'Learn How to Use ChatGPT', kind: 'Course', date: 'August 2023', pdf: learnChatgptPdf, image: learnChatgptImg, verifyUrl: verifyBase + 'ef9a06323b7d44b091a3ec7816092dc6' },
  { title: 'Learn How to Use AI for Marketing', kind: 'Course', date: 'September 2023', pdf: aiForMarketingPdf, image: aiForMarketingImg, verifyUrl: verifyBase + '1aece4ea8ae54d4b889fe6630d759b23' },
  { title: 'Learn Intermediate Python 3', kind: 'Course', date: 'December 2024', pdf: intermediatePython3Pdf, image: intermediatePython3Img, verifyUrl: verifyBase + '18580789eaba28f09e116f4fc2acec44' },
  { title: 'Learn Data Analysis with Pandas', kind: 'Course', date: 'July 2024', pdf: dataAnalysisPandasPdf, image: dataAnalysisPandasImg, verifyUrl: verifyBase + '95dd3ed417d7d6c449afffc6401b310a' },
  { title: 'Build a Website with HTML, CSS, and GitHub Pages', kind: 'Skill Path', date: 'December 2023', pdf: buildAWebsiteHtmlCssGithubPagesPdf, image: buildAWebsiteHtmlCssGithubPagesImg, verifyUrl: verifyBase + '5cadfefe5f1de806e9704577' },
  { title: 'Learn JavaScript', kind: 'Course', date: 'May 2023', pdf: learnJavascriptPdf, image: learnJavascriptImg, verifyUrl: verifyBase + '705dcb15de0da4dd9d9fc4f3274b430e' },
  { title: 'Learn HTML', kind: 'Course', date: 'March 2023', pdf: learnHtmlPdf, image: learnHtmlImg, verifyUrl: verifyBase + '9eb0741e5ebef1f9f58a53bfac67d3a7' },
];
