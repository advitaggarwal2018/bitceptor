import type { Service } from './types';

export const aiSolutions: Service[] = [
    {
        id: 'machine-learning',
        title: 'Machine Learning Solutions',
        icon: 'BrainCircuit',
        description: 'Leverage advanced ML algorithms to unlock insights and automate descision-making.',
        details: [
            'Predictive analytics and forecasting',
            'Recommendation systems',
            'Anomaly detection and monitoring',
        ],
    },
    {
        id: 'natural-language-processing',
        title: 'Natural Language Processing',
        icon: 'MessageSquare',
        description : 'Extract meaning and insights from text data with tate of the art NLP techniques.',
        details: [
            'Sentiment analysis and opinion mining',
            'Text classification amd categorization',
            'Chatbots and conversationalAI',
        ],
    },
    {
        id: 'computer-vision',
        title: 'Computer Vision',
        icon: 'Eye',
        description: 'Enable machines to interpret and understand visual information from the World,',
        details:[
            'Image recongnition and classification',
            'Object detection and tracking',
            'Video Analysis and processing',
        ],
    },
    {
        id: 'ai-integration',
        title: 'AI Integration Services',
        icon: 'Plug',
        description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.',
        details: [
            'API integration and development',
            'Model deployment and serving',
            'MLOps and model lifecycle management',
        ],
    },

];