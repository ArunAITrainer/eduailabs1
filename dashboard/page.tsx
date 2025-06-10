'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '../contexts/AuthContext'
import { Button } from "@/components/ui/button"
import ChangePassword from '../components/ChangePassword'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CheckCircle2, Bookmark, LogOut, ArrowRight } from "lucide-react"

const articles = [
  { id: 1, title: "Introduction to AI" },
  { id: 2, title: "Machine Learning Basics" },
  { id: 3, title: "Neural Networks Explained" },
  { id: 4, title: "Natural Language Processing" },
  { id: 5, title: "Computer Vision Fundamentals" },
  { id: 6, title: "Reinforcement Learning" },
]

export default function Dashboard() {
  const { user, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/signin')
    }
  }, [user, router])

  if (!user) {
    return null
  }

  const selectedArticles = articles.filter(article => user.selectedArticles.includes(article.id))
  const completedArticles = articles.filter(article => user.completedArticles.includes(article.id))

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="flex justify-between items-start mb-12">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">Welcome back, <span className="text-blue-600">{user.name}</span>!</h1>
          <p className="text-gray-500 mt-2">Continue your AI learning journey</p>
        </div>
        <Button 
          onClick={() => {
            logout()
            router.push('/')
          }}
          variant="outline"
          className="gap-2 group hover:bg-red-50 hover:text-red-600 transition-colors duration-300"
        >
          <LogOut className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
          <span className="group-hover:scale-105 transition-transform duration-300">Sign Out</span>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Bookmark className="h-6 w-6 text-blue-500" />
              Your Learning Path
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Bookmark className="h-5 w-5 text-blue-400" />
                Selected Articles
              </h3>
              {selectedArticles.length > 0 ? (
                <ul className="space-y-2">
                  {selectedArticles.map(article => (
                    <li key={article.id} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors group">
                      <div className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                      <Link 
                        href={`/articles/${article.id}`} 
                        className="text-gray-700 hover:text-blue-600 hover:underline flex-1 flex items-center justify-between"
                      >
                        <span>{article.title}</span>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="bg-gray-50 p-4 rounded-lg text-center text-gray-500 hover:bg-gray-100 transition-colors duration-300">
                  You haven't selected any articles yet.
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                Completed Articles
              </h3>
              {completedArticles.length > 0 ? (
                <ul className="space-y-2">
                  {completedArticles.map(article => (
                    <li key={article.id} className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group">
                      <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                      <span className="text-gray-700 flex-1 group-hover:text-green-800 transition-colors duration-300">{article.title}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="bg-gray-50 p-4 rounded-lg text-center text-gray-500 hover:bg-gray-100 transition-colors duration-300">
                  You haven't completed any articles yet.
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl">Account Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <ChangePassword />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}