'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function CreateModel() {
  const [modelName, setModelName] = useState('')
  const [modelType, setModelType] = useState('')
  const [dataset, setDataset] = useState<File | null>(null)
  const [parameters, setParameters] = useState('')
  const [trainingProgress, setTrainingProgress] = useState(0)
  const [trainingComplete, setTrainingComplete] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!modelName || !modelType || !dataset) {
      alert('Please fill in all required fields')
      return
    }

    // Simulate API call to start training
    setTrainingProgress(0)
    setTrainingComplete(false)

    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 500))
      setTrainingProgress(i)
    }

    setTrainingComplete(true)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Create and Train Your AI Model</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Model Configuration</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="model-name">Model Name</Label>
              <Input 
                id="model-name" 
                value={modelName}
                onChange={(e) => setModelName(e.target.value)}
                placeholder="Enter a name for your model" 
                required 
              />
            </div>
            <div>
              <Label htmlFor="model-type">Model Type</Label>
              <Select value={modelType} onValueChange={setModelType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select model type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="classification">Classification</SelectItem>
                  <SelectItem value="regression">Regression</SelectItem>
                  <SelectItem value="clustering">Clustering</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="dataset">Dataset</Label>
              <Input 
                id="dataset" 
                type="file" 
                onChange={(e) => setDataset(e.target.files?.[0] || null)}
                required 
              />
            </div>
            <div>
              <Label htmlFor="parameters">Model Parameters</Label>
              <Textarea 
                id="parameters" 
                value={parameters}
                onChange={(e) => setParameters(e.target.value)}
                placeholder="Enter model parameters (JSON format)" 
              />
            </div>
            <Button type="submit">Create and Train Model</Button>
          </form>
          {trainingProgress > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Training Progress</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${trainingProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">{trainingProgress}% Complete</p>
            </div>
          )}
          {trainingComplete && (
            <Alert className="mt-4">
              <AlertTitle>Training Complete!</AlertTitle>
              <AlertDescription>
                Your model has been successfully trained. You can now use it for predictions.
              </AlertDescription>
            </Alert>
          )}
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Training Process</h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Upload your dataset</li>
            <li>Configure model parameters</li>
            <li>Start the training process</li>
            <li>Monitor training progress</li>
            <li>Evaluate model performance</li>
            <li>Fine-tune and retrain if necessary</li>
          </ol>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-2">Training Resources</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><a href="#" className="text-blue-600 hover:underline">Guide to Model Selection</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Understanding Model Parameters</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Best Practices for Data Preparation</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Interpreting Model Metrics</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

