import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Rocket, Clock, Gauge, ArrowRight } from "lucide-react"

const tutorials = [
  { id: 1, title: "Introduction to AI", difficulty: "Beginner", duration: "1 hour" },
  { id: 2, title: "Machine Learning Basics", difficulty: "Intermediate", duration: "2 hours" },
  { id: 3, title: "Neural Networks Explained", difficulty: "Advanced", duration: "3 hours" },
  { id: 4, title: "Natural Language Processing", difficulty: "Intermediate", duration: "2.5 hours" },
  { id: 5, title: "Computer Vision Fundamentals", difficulty: "Intermediate", duration: "2 hours" },
  { id: 6, title: "Reinforcement Learning", difficulty: "Advanced", duration: "3.5 hours" },
]

export default function Tutorials() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">AI Tutorials</h1>
        <p className="text-xl text-gray-600">Master artificial intelligence with our comprehensive courses</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tutorials.map((tutorial) => (
          <div 
            key={tutorial.id} 
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all duration-300 group"
          >
            <h2 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              {tutorial.title}
            </h2>
            
            <div className="flex items-center gap-3 mb-2">
              <Gauge className="h-4 w-4 text-blue-500" />
              <span className={`text-sm font-medium ${
                tutorial.difficulty === 'Beginner' ? 'text-green-600' :
                tutorial.difficulty === 'Intermediate' ? 'text-yellow-600' :
                'text-red-600'
              }`}>
                {tutorial.difficulty}
              </span>
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-4 w-4 text-blue-500" />
              <span className="text-sm text-gray-600">{tutorial.duration}</span>
            </div>
            
            <Button 
              asChild 
              className="w-full group/button bg-blue-600 hover:bg-blue-700 transition-all duration-300"
            >
              <Link 
                href={`/tutorials/${tutorial.id}`}
                className="flex items-center justify-center gap-2"
              >
                <span>Start Tutorial</span>
                <ArrowRight className="h-4 w-4 group-hover/button:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}