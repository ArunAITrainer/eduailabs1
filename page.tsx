import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Welcome to AI Training for Students</h1>
        <p className="text-xl text-gray-600 mb-8">Learn AI concepts, create and train models, and explore the world of artificial intelligence.</p>
        <Button size="lg" asChild>
          <Link href="/signup">Get Started</Link>
        </Button>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Online Tutorials</h2>
          <p className="text-gray-600 mb-4">Access a wide range of AI tutorials tailored for students and teachers.</p>
          <Button variant="outline" asChild>
            <Link href="/tutorials">Explore Tutorials</Link>
          </Button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">AI Articles</h2>
          <p className="text-gray-600 mb-4">Read the latest articles on AI advancements and applications in education.</p>
          <Button variant="outline" asChild>
            <Link href="/articles">Read Articles</Link>
          </Button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Create AI Models</h2>
          <p className="text-gray-600 mb-4">Learn how to create and train your own AI models with hands-on exercises.</p>
          <Button variant="outline" asChild>
            <Link href="/create-model">Start Creating</Link>
          </Button>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Why Choose Our AI Training Platform?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Tailored for Students</h3>
            <p className="text-gray-600">Content designed specifically for school-age learners.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Expert-Led Tutorials</h3>
            <p className="text-gray-600">Learn from industry professionals and experienced educators.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Hands-On Projects</h3>
            <p className="text-gray-600">Apply your knowledge with practical, real-world projects.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Community Support</h3>
            <p className="text-gray-600">Connect with peers and mentors for guidance and collaboration.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

