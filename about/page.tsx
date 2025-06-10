export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About <span className="text-blue-600">eduAIlabs</span></h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
      </div>
      
      <div className="space-y-8">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Mission</h2>
          <p className="text-gray-700">
            eduAIlabs is at the forefront of revolutionizing education through artificial intelligence. 
            Our mission is to empower students and teachers with cutting-edge AI tools and knowledge, 
            preparing them for the future of learning and work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-blue-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Who We Are</h2>
            <p className="text-gray-700">
              Founded by a team of educators and AI experts, eduAIlabs is committed to making AI 
              education <span className="font-medium text-blue-600">accessible</span>, <span className="font-medium text-blue-600">engaging</span>, and <span className="font-medium text-blue-600">effective</span>. 
              We believe that understanding AI is crucial for the next generation of innovators, 
              problem-solvers, and leaders.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-blue-400">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Our Platform</h2>
            <p className="text-gray-700">
              We offer a wide range of resources, from beginner-friendly tutorials to 
              advanced model creation tools, all designed to foster a deep understanding of AI 
              concepts and their practical applications in various fields.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <p className="text-lg font-medium text-gray-800 italic">
            "At eduAIlabs, we're not just teaching about AI - we're <span className="font-bold text-blue-600">shaping the future of education</span>."
          </p>
        </div>
      </div>
    </div>
  )
}

