'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowLeft, ChevronRight } from "lucide-react"
import Link from 'next/link'

const tutorials = [
  {
    id: 1,
    title: "Introduction to AI",
    content: `Artificial Intelligence (AI) is the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions.
It is a broad field with applications in various domains. AI is changing the way we live and work.
Some common types of AI include machine learning, deep learning, and natural language processing.
AI can be categorized into narrow AI and general AI. Narrow AI is designed to perform a narrow task (e.g., facial recognition or internet searches), whereas general AI performs any intellectual task a human can.
AI powers technologies like voice assistants, self-driving cars, and recommendation systems.
It’s widely used in healthcare, education, finance, and many other sectors.
Some major challenges in AI include ethical concerns, bias in data, and explainability of AI decisions.
Despite these, AI continues to advance rapidly with significant research in areas like reinforcement learning and generative models.
Understanding AI helps individuals become informed users and contributors in a digital world.`,
    quiz: [
      {
        question: "What is Artificial Intelligence?",
        options: [
          "Human emotions in machines",
          "Simulation of human intelligence in machines",
          "Random behavior in robots",
          "Manual programming only"
        ],
        answer: "Simulation of human intelligence in machines"
      },
      {
        question: "Which of the following is a real-world application of AI?",
        options: [
          "Automatic spell checking",
          "Wood cutting machines",
          "Manual irrigation",
          "Physical education training"
        ],
        answer: "Automatic spell checking"
      },
      {
        question: "What type of AI performs specific tasks?",
        options: [
          "General AI",
          "Super AI",
          "Narrow AI",
          "Natural AI"
        ],
        answer: "Narrow AI"
      }
    ]
  },
  {
    id: 2,
    title: "Machine Learning Basics",
    content: `
Machine Learning (ML) is a field of AI that focuses on building systems that learn from data.
Unlike traditional programming, ML models improve their performance over time with more data.

There are three main types of ML: supervised, unsupervised, and reinforcement learning.
Supervised learning uses labeled data. For example, a model learns to classify emails as spam or not.
Unsupervised learning deals with unlabeled data, identifying patterns like customer segmentation.
Reinforcement learning teaches agents to take actions in an environment to maximize rewards.

Common algorithms include Linear Regression, Decision Trees, and Support Vector Machines.
Python libraries like scikit-learn and TensorFlow are widely used in ML development.

A key part of ML is training and testing. The data is split to evaluate model performance.
Metrics such as accuracy, precision, recall, and F1 score help assess a model's quality.

Overfitting and underfitting are common problems. Regularization techniques help address them.
Feature engineering and data preprocessing are crucial steps before model training.

Machine learning is behind technologies like fraud detection, recommendation systems, and predictive maintenance.
As data grows, ML’s role in business intelligence and automation is increasing.

In this tutorial, you will understand the foundational principles of machine learning and how it differs from other AI approaches.
    `.trim(),
quiz: [
  {
    question: "What is Machine Learning?",
    options: [
      "A type of hardware configuration",
      "A programming language",
      "A way for machines to learn from data without being explicitly programmed",
      "Manual data entry process"
    ],
    answer: "A way for machines to learn from data without being explicitly programmed"
  },
  {
    question: "Which of the following is a type of Machine Learning?",
    options: [
      "Supervised Learning",
      "Uncontrolled Learning",
      "Robotic Learning",
      "Scripted Learning"
    ],
    answer: "Supervised Learning"
  },
  {
    question: "In supervised learning, the algorithm is trained on:",
    options: [
      "Data with labels",
      "Unlabeled data",
      "Data without features",
      "Only numeric data"
    ],
    answer: "Data with labels"
  },
  {
    question: "Which algorithm is commonly used for classification problems?",
    options: [
      "Linear Regression",
      "K-Nearest Neighbors",
      "Apriori Algorithm",
      "PageRank"
    ],
    answer: "K-Nearest Neighbors"
  },
  {
    question: "Which of these is an example of unsupervised learning?",
    options: [
      "K-Means Clustering",
      "Linear Regression",
      "Logistic Regression",
      "Support Vector Machines"
    ],
    answer: "K-Means Clustering"
  },
  {
    question: "What is 'overfitting' in machine learning?",
    options: [
      "Model performs well on training data but poorly on new data",
      "Model underuses the dataset",
      "Model performs equally well on all data",
      "Model is trained only once"
    ],
    answer: "Model performs well on training data but poorly on new data"
  },
  {
    question: "Which metric is commonly used to evaluate classification models?",
    options: [
      "Accuracy",
      "Mean Squared Error",
      "Clustering Coefficient",
      "Data Volume"
    ],
    answer: "Accuracy"
  },
  {
    question: "Which of the following is NOT a step in building a machine learning model?",
    options: [
      "Data Cleaning",
      "Model Training",
      "Performance Evaluation",
      "Hardware Installation"
    ],
    answer: "Hardware Installation"
  },
  {
    question: "Which library is widely used for ML in Python?",
    options: [
      "NumPy",
      "TensorFlow",
      "Matplotlib",
      "Bootstrap"
    ],
    answer: "TensorFlow"
  },
  {
    question: "Which term describes the process of feeding the model new data to improve accuracy?",
    options: [
      "Training",
      "Testing",
      "Tuning",
      "Fine-tuning"
    ],
    answer: "Fine-tuning"
  }
]
  },
  {
    id: 3,
    title: "Neural Networks Explained",
    content: `
Neural networks are algorithms inspired by the structure and function of the human brain.
They are made up of layers of nodes or neurons that process data.

A basic neural network has an input layer, hidden layers, and an output layer.
Each neuron takes input, processes it using a weighted sum, passes it through an activation function, and sends it forward.

Popular activation functions include ReLU, sigmoid, and tanh.
Backpropagation is used during training to adjust weights based on errors.

Neural networks can learn complex relationships and are particularly good at tasks like image and speech recognition.
Deep neural networks, with many hidden layers, are called deep learning models.

Convolutional Neural Networks (CNNs) are used for image data, while Recurrent Neural Networks (RNNs) are used for sequence data.
Transformers are the backbone of modern NLP models like GPT and BERT.

Training deep networks requires a lot of data and computing power.
Techniques like dropout and batch normalization help improve performance and prevent overfitting.

In this tutorial, you'll explore how neural networks work and why they're so powerful in modern AI applications.
    `.trim(),
    quiz: [
  {
    question: "What is a neural network in AI?",
    options: [
      "A type of network cable",
      "A model inspired by the structure of the human brain",
      "A data storage system",
      "A computer virus"
    ],
    answer: "A model inspired by the structure of the human brain"
  },
  {
    question: "What are the layers in a neural network?",
    options: [
      "Rows and columns",
      "Hard drives",
      "Input, hidden, and output layers",
      "RAM and CPU"
    ],
    answer: "Input, hidden, and output layers"
  },
  {
    question: "What is the role of an activation function in a neural network?",
    options: [
      "Store memory",
      "Activate the system fan",
      "Introduce non-linearity into the model",
      "Calculate hard disk speed"
    ],
    answer: "Introduce non-linearity into the model"
  },
  {
    question: "Which of the following is a common activation function?",
    options: [
      "ReLU",
      "Ping",
      "LogDrive",
      "DeltaOS"
    ],
    answer: "ReLU"
  },
  {
    question: "What is backpropagation used for in neural networks?",
    options: [
      "Sending data backwards to the user",
      "Adjusting weights to minimize error",
      "Shuffling input data",
      "Increasing hardware speed"
    ],
    answer: "Adjusting weights to minimize error"
  },
  {
    question: "What do weights in a neural network represent?",
    options: [
      "Amount of data stored",
      "Importance of connections between neurons",
      "Internet download speed",
      "Training duration"
    ],
    answer: "Importance of connections between neurons"
  },
  {
    question: "Which algorithm is commonly used for optimizing neural networks?",
    options: [
      "K-Means",
      "Gradient Descent",
      "Apriori",
      "DFS"
    ],
    answer: "Gradient Descent"
  },
  {
    question: "What problem can too many layers in a neural network cause?",
    options: [
      "Lack of storage space",
      "Overfitting",
      "High screen resolution",
      "Slow internet"
    ],
    answer: "Overfitting"
  },
  {
    question: "What is a convolutional neural network (CNN) mainly used for?",
    options: [
      "Time series forecasting",
      "Image processing tasks",
      "Database indexing",
      "Speech synthesis"
    ],
    answer: "Image processing tasks"
  },
  {
    question: "Which of the following is true about deep learning?",
    options: [
      "It uses very shallow models",
      "It avoids using neural networks",
      "It involves multiple hidden layers in neural networks",
      "It only works on text data"
    ],
    answer: "It involves multiple hidden layers in neural networks"
  }
]
  },
  {
  id: 4,
  title: "Natural Language Processing",
  content: `
Natural Language Processing (NLP) is a subfield of AI that enables machines to understand, interpret, and generate human language.

NLP bridges the gap between human communication and computer understanding, making it essential for applications like chatbots, translation, and sentiment analysis.

Core tasks in NLP include tokenization, stemming, lemmatization, part-of-speech tagging, named entity recognition (NER), and parsing.

One major challenge is language ambiguity, where the same word can have different meanings depending on context.

Text is converted into numerical form using techniques like Bag of Words, TF-IDF, or word embeddings (e.g., Word2Vec, GloVe).

Modern NLP relies heavily on deep learning, especially Recurrent Neural Networks (RNNs), Long Short-Term Memory (LSTM) networks, and Transformers.

Transformers, introduced with the attention mechanism, revolutionized NLP. BERT and GPT are famous transformer-based models.

Popular NLP datasets include IMDB for sentiment analysis, SQuAD for reading comprehension, and CoNLL for NER.

NLP is used in real-time translation tools, voice assistants, spam filters, search engines, and more.

Challenges include handling different languages, dialects, slang, sarcasm, and noisy or incomplete data.
  `.trim(),
  quiz: [
    {
      question: "What is the main purpose of Natural Language Processing?",
      options: [
        "To process images",
        "To allow machines to understand human language",
        "To compile code",
        "To simulate physical systems"
      ],
      answer: "To allow machines to understand human language"
    },
    {
      question: "Which task is NOT part of NLP?",
      options: [
        "Object detection",
        "Tokenization",
        "Named Entity Recognition",
        "Part-of-Speech Tagging"
      ],
      answer: "Object detection"
    },
    {
      question: "What is tokenization in NLP?",
      options: [
        "Encrypting text",
        "Breaking text into words or sentences",
        "Compressing files",
        "Translating code"
      ],
      answer: "Breaking text into words or sentences"
    },
    {
      question: "What is the role of word embeddings?",
      options: [
        "To visualize text in 3D",
        "To encode words into numerical vectors",
        "To delete unnecessary words",
        "To spell check documents"
      ],
      answer: "To encode words into numerical vectors"
    },
    {
      question: "Which model architecture is most associated with modern NLP?",
      options: [
        "CNN",
        "Transformer",
        "GAN",
        "Decision Tree"
      ],
      answer: "Transformer"
    },
    {
      question: "Which of the following is an NLP application?",
      options: [
        "Spam filtering",
        "Image captioning",
        "Face detection",
        "Audio enhancement"
      ],
      answer: "Spam filtering"
    },
    {
      question: "What does BERT stand for?",
      options: [
        "Biological Entity Recognition Tool",
        "Bidirectional Encoder Representations from Transformers",
        "Basic English Retrieval Tool",
        "Big Emotion Recognition Technique"
      ],
      answer: "Bidirectional Encoder Representations from Transformers"
    },
    {
      question: "What is Named Entity Recognition (NER)?",
      options: [
        "Identifying nouns and verbs",
        "Finding and classifying named items like people and places",
        "Translating foreign languages",
        "Removing punctuation"
      ],
      answer: "Finding and classifying named items like people and places"
    },
    {
      question: "Which dataset is commonly used for sentiment analysis?",
      options: [
        "MNIST",
        "COCO",
        "IMDB",
        "ImageNet"
      ],
      answer: "IMDB"
    },
    {
      question: "What challenge does NLP often face?",
      options: [
        "Handling large image sizes",
        "Language ambiguity and context understanding",
        "Hardware limitations",
        "File format incompatibility"
      ],
      answer: "Language ambiguity and context understanding"
    }
  ]
},

  {
    id: 5,
    title: "Computer Vision Fundamentals",
    content: `
Computer Vision is a field of AI that trains computers to interpret and understand the visual world.
It includes image classification, object detection, segmentation, and facial recognition.

Images are processed as arrays of pixels. Feature extraction identifies edges, shapes, or textures.
Machine learning and deep learning models are used to classify and analyze these features.

Convolutional Neural Networks (CNNs) are the backbone of modern computer vision systems.
They use filters to detect patterns in images, making them ideal for tasks like image classification.

Popular datasets include ImageNet, COCO, and MNIST.
Applications range from medical imaging and autonomous vehicles to surveillance and augmented reality.

OpenCV is a powerful library for traditional image processing tasks.
Deep learning frameworks like PyTorch and TensorFlow support advanced computer vision models.

Challenges include occlusion, varying lighting, and real-time processing requirements.
This tutorial introduces you to how machines "see" and what powers applications like face unlock or object tracking.
    `.trim(),
    quiz: [
  {
    question: "What is the main goal of Computer Vision?",
    options: [
      "To improve Wi-Fi speed",
      "To allow computers to interpret and understand visual information",
      "To create websites",
      "To translate languages"
    ],
    answer: "To allow computers to interpret and understand visual information"
  },
  {
    question: "Which of the following is a common task in computer vision?",
    options: [
      "Image Classification",
      "Data Encryption",
      "Web Scraping",
      "Database Migration"
    ],
    answer: "Image Classification"
  },
  {
    question: "What is image classification?",
    options: [
      "Assigning a label to an entire image",
      "Dividing an image into grids",
      "Compressing an image",
      "Changing the file format of an image"
    ],
    answer: "Assigning a label to an entire image"
  },
  {
    question: "Which neural network is widely used in computer vision?",
    options: [
      "Convolutional Neural Network (CNN)",
      "Recurrent Neural Network (RNN)",
      "Naive Bayes Network",
      "Support Vector Machine"
    ],
    answer: "Convolutional Neural Network (CNN)"
  },
  {
    question: "What does 'object detection' do in computer vision?",
    options: [
      "Detects when a computer is turned on",
      "Identifies and locates objects in an image",
      "Finds the file type of an image",
      "Tracks mouse movements"
    ],
    answer: "Identifies and locates objects in an image"
  },
  {
    question: "Which dataset is commonly used for training image recognition models?",
    options: [
      "IMDB",
      "MNIST",
      "SQLDB",
      "WikiData"
    ],
    answer: "MNIST"
  },
  {
    question: "What is the purpose of edge detection in computer vision?",
    options: [
      "To increase brightness",
      "To identify boundaries of objects within images",
      "To change colors of the image",
      "To compress the file"
    ],
    answer: "To identify boundaries of objects within images"
  },
  {
    question: "What is image segmentation?",
    options: [
      "Cropping images",
      "Dividing an image into meaningful parts or segments",
      "Increasing image resolution",
      "Blurring background"
    ],
    answer: "Dividing an image into meaningful parts or segments"
  },
  {
    question: "Which library is commonly used for computer vision in Python?",
    options: [
      "Matplotlib",
      "OpenCV",
      "NumPy",
      "Pandas"
    ],
    answer: "OpenCV"
  },
  {
    question: "Which real-world application uses computer vision?",
    options: [
      "Autonomous Vehicles",
      "Word Processors",
      "Search Engine Optimization",
      "Spreadsheet Calculations"
    ],
    answer: "Autonomous Vehicles"
  }
]

  },
  {
    id: 6,
    title: "Reinforcement Learning",
    content: `
Reinforcement Learning (RL) is a type of machine learning where an agent learns by interacting with its environment.
The goal is to maximize cumulative rewards over time.

Key concepts include states, actions, rewards, and policies.
The agent observes the state, takes an action, receives a reward, and updates its policy.

The exploration vs. exploitation trade-off is central to RL.
Popular algorithms include Q-learning, SARSA, and Deep Q Networks (DQN).

RL is used in robotics, game AI, autonomous vehicles, and recommendation engines.
AlphaGo, developed by DeepMind, used RL to defeat human champions at Go.

Reward shaping, discount factors, and learning rate tuning are essential to successful RL training.
Environments like OpenAI Gym provide platforms to develop and test RL algorithms.

RL is different from supervised learning because it doesn't rely on labeled data.
This tutorial explains how learning through trial and error can teach agents to make smart decisions.
    `.trim(),
quiz: [
  {
    question: "What is Reinforcement Learning?",
    options: [
      "Learning from labeled data",
      "Learning by watching videos",
      "Learning by interacting with an environment to maximize reward",
      "Learning without any data"
    ],
    answer: "Learning by interacting with an environment to maximize reward"
  },
  {
    question: "In reinforcement learning, what is an 'agent'?",
    options: [
      "The program that observes and acts in the environment",
      "A software license",
      "A rule for organizing data",
      "A human supervisor"
    ],
    answer: "The program that observes and acts in the environment"
  },
  {
    question: "What does the environment do in reinforcement learning?",
    options: [
      "Stores all the code",
      "Provides rewards and feedback to the agent",
      "Runs the operating system",
      "Handles machine translations"
    ],
    answer: "Provides rewards and feedback to the agent"
  },
  {
    question: "What is a 'reward' in reinforcement learning?",
    options: [
      "A trophy",
      "An action the agent performs",
      "A signal indicating how well the agent is doing",
      "A visualization of the model"
    ],
    answer: "A signal indicating how well the agent is doing"
  },
  {
    question: "Which of the following is NOT a part of the reinforcement learning framework?",
    options: [
      "Agent",
      "Environment",
      "Classifier",
      "Reward"
    ],
    answer: "Classifier"
  },
  {
    question: "Which algorithm is commonly used in reinforcement learning?",
    options: [
      "Q-Learning",
      "Linear Regression",
      "K-Means",
      "Naive Bayes"
    ],
    answer: "Q-Learning"
  },
  {
    question: "What is the 'policy' in reinforcement learning?",
    options: [
      "A set of laws for using AI",
      "The strategy used by the agent to decide actions",
      "The privacy policy of a company",
      "A type of data format"
    ],
    answer: "The strategy used by the agent to decide actions"
  },
  {
    question: "What is the goal of reinforcement learning?",
    options: [
      "To collect the most data",
      "To memorize the environment",
      "To maximize cumulative reward over time",
      "To reduce training time"
    ],
    answer: "To maximize cumulative reward over time"
  },
  {
    question: "What is 'exploration' in reinforcement learning?",
    options: [
      "Learning from labeled datasets",
      "Trying new actions to discover their rewards",
      "Avoiding mistakes",
      "Repeating the best action"
    ],
    answer: "Trying new actions to discover their rewards"
  },
  {
    question: "Which real-world application uses reinforcement learning?",
    options: [
      "Spam filtering",
      "Stock market trading bots",
      "PDF generation",
      "Web scraping"
    ],
    answer: "Stock market trading bots"
  }
]

  }
]

export default function Tutorial() {
  const params = useParams()
  const [tutorial, setTutorial] = useState<typeof tutorials[0] | null>(null)
  const [progress, setProgress] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({})
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    const tutorialId = Number(params.id)
    const foundTutorial = tutorials.find(t => t.id === tutorialId)
    if (foundTutorial) {
      setTutorial(foundTutorial)
    }
  }, [params.id])

  const handleProgress = () => {
    setProgress(prev => Math.min(prev + 25, 100))
  }

  const handleAnswer = (index: number, answer: string) => {
    setQuizAnswers(prev => ({ ...prev, [index]: answer }))
  }

  const calculateScore = () => {
    if (!tutorial?.quiz) return 0
    return tutorial.quiz.reduce((score, q, idx) =>
      quizAnswers[idx] === q.answer ? score + 1 : score, 0)
  }

  if (!tutorial) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="bg-white p-8 rounded-xl shadow-sm max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Tutorial not found</h1>
          <Button asChild className="gap-2">
            <Link href="/tutorials">
              <ArrowLeft className="h-4 w-4" />
              Back to Tutorials
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-white p-4 border rounded-xl shadow-sm sticky top-0 z-50 mb-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-medium text-blue-600">{progress}%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-3">
          <div
            className="bg-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-8">
        <Button asChild variant="outline" className="gap-2 mb-6 hover:bg-gray-50">
          <Link href="/tutorials">
            <ArrowLeft className="h-4 w-4" />
            All Tutorials
          </Link>
        </Button>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">{tutorial.title}</h1>
        <div className="flex items-center gap-2 text-gray-500">
          <span>Tutorial</span>
          <ChevronRight className="h-4 w-4" />
          <span>{tutorial.title}</span>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <div className="prose max-w-none mb-8 whitespace-pre-wrap text-gray-700">
          {tutorial.content}
        </div>

        <Button
          onClick={handleProgress}
          disabled={progress === 100}
          className={`w-full gap-2 transition-all duration-300 ${
            progress === 100
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {progress === 100 ? (
            <>
              <CheckCircle2 className="h-5 w-5" />
              Tutorial Completed
            </>
          ) : (
            'Mark as Complete'
          )}
        </Button>
      </div>

      {tutorial.quiz && (
        <div className="mt-12 bg-white p-8 border rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Quiz: Test Your Understanding</h2>
          {tutorial.quiz.map((q, idx) => (
            <div key={idx} className="mb-6">
              <p className="font-medium mb-2">{idx + 1}. {q.question}</p>
              <div className="grid gap-2">
                {q.options.map((opt, oIdx) => (
                  <label key={oIdx} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name={`question-${idx}`}
                      value={opt}
                      checked={quizAnswers[idx] === opt}
                      onChange={() => handleAnswer(idx, opt)}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          ))}

          <Button
            className="mt-4"
            onClick={() => setShowResult(true)}
            disabled={Object.keys(quizAnswers).length < tutorial.quiz.length}
          >
            Submit Answers
          </Button>

          {showResult && (
            <div className="mt-6 text-lg font-semibold text-green-700">
              Your Score: {calculateScore()} / {tutorial.quiz.length}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
// This code defines a tutorial page in a Next.js application that displays detailed content for a specific AI tutorial.
// It uses a dynamic route to fetch the tutorial based on the ID from the URL parameters.
// The page includes a sticky progress bar that updates as the user reads through the tutorial.
// The tutorial content is displayed in a styled container, and users can mark the tutorial as complete.
// The code also handles cases where the tutorial is not found, providing a user-friendly message and a link back to the list of tutorials.
// The use of Tailwind CSS classes ensures a responsive and visually appealing layout.
// The component is designed to be reusable and maintainable, with clear separation of concerns for fetching data and rendering UI elements.
// The progress state is managed using React's useState and useEffect hooks, allowing for dynamic updates based on user interaction.
// The code is structured to be easily extendable for future tutorials or additional features, such as user feedback or comments on the tutorials.  