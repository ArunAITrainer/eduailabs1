'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useAuth } from '../contexts/AuthContext'
import { Bookmark, CheckCircle2, ArrowRight } from "lucide-react"

const articles = [
  { id: 1, title: "The Future of AI in Education", author: "Dr. Jane Smith", date: "2023-05-15" },
  { id: 2, title: "Ethical Considerations in AI Development", author: "Prof. John Doe", date: "2023-05-10" },
  { id: 3, title: "AI-Powered Personalized Learning", author: "Sarah Johnson", date: "2023-05-05" },
  { id: 4, title: "Challenges in Implementing AI in Schools", author: "Michael Brown", date: "2023-04-30" },
  { id: 5, title: "AI and Creativity: Fostering Innovation in Students", author: "Emily Davis", date: "2023-04-25" },
  { id: 6, title: "The Role of AI in Special Education", author: "Dr. Robert Wilson", date: "2023-04-20" },
]

export default function Articles() {
  const { user, selectArticle, completeArticle } = useAuth()

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">AI Articles</h1>
        <p className="text-xl text-gray-600">Explore the latest insights on AI in education</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {articles.map((article) => (
          <div 
            key={article.id} 
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group h-full flex flex-col"
          >
            <div className="flex-grow">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {article.title}
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 mb-4">
                <p className="flex items-center">
                  <span className="font-medium">By {article.author}</span>
                </p>
                <span className="hidden sm:block">•</span>
                <p>Published on {article.date}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-auto">
              <Button 
                asChild 
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 group/read flex-1 sm:flex-none"
              >
                <Link 
                  href={`/articles/${article.id}`} 
                  className="flex items-center justify-center gap-2 min-w-[120px]"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-4 w-4 group-hover/read:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>

              {user && (
                <>
                  <Button 
                    variant={user.selectedArticles.includes(article.id) ? "default" : "outline"}
                    onClick={() => selectArticle(article.id)}
                    disabled={user.selectedArticles.includes(article.id)}
                    className={`gap-2 transition-all duration-300 flex-1 sm:flex-none ${
                      user.selectedArticles.includes(article.id) 
                        ? 'bg-purple-600 hover:bg-purple-700' 
                        : 'hover:bg-purple-50 hover:text-purple-600 hover:border-purple-300'
                    }`}
                  >
                    <Bookmark className="h-4 w-4" />
                    {user.selectedArticles.includes(article.id) ? 'Selected' : 'Select'}
                  </Button>

                  <Button 
                    variant={user.completedArticles.includes(article.id) ? "default" : "outline"}
                    onClick={() => completeArticle(article.id)}
                    disabled={user.completedArticles.includes(article.id)}
                    className={`gap-2 transition-all duration-300 flex-1 sm:flex-none ${
                      user.completedArticles.includes(article.id) 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : 'hover:bg-green-50 hover:text-green-600 hover:border-green-300'
                    }`}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    {user.completedArticles.includes(article.id) ? 'Completed' : 'Complete'}
                  </Button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}