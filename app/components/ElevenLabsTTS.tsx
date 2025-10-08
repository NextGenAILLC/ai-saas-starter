'use client'

import { useState } from 'react'

export default function ElevenLabsTTS() {
  const [text, setText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setIsLoading(true)
    setAudioUrl(null)

    try {
      const response = await fetch('/api/elevenlabs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      })

      if (!response.ok) {
        // Try to parse JSON error, otherwise use status text
        try {
          const data = await response.json()
          throw new Error(data?.error || response.statusText)
        } catch {
          throw new Error(response.statusText)
        }
      }

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      setAudioUrl(url)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unexpected error'
      setError(message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="tts-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Enter text to convert to speech
        </label>
        <textarea
          id="tts-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          className="w-full min-h-32 rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-400"
        />
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={isLoading || text.trim().length === 0}
            className="inline-flex items-center rounded-md bg-gray-900 dark:bg-gray-700 px-4 py-2 text-white hover:bg-gray-800 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Generating…' : 'Generate audio'}
          </button>
          {error && (
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          )}
        </div>
      </form>

      {audioUrl && (
        <div className="mt-6 space-y-2">
          <p className="text-sm text-gray-600 dark:text-gray-400">Preview</p>
          <audio controls src={audioUrl} className="w-full" />
          <a
            href={audioUrl}
            download="tts.mp3"
            className="inline-flex items-center text-sm text-gray-700 dark:text-gray-300 underline hover:text-gray-900 dark:hover:text-gray-100"
          >
            Download MP3
          </a>
        </div>
      )}
    </div>
  )
}


