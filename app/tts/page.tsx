import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import ElevenLabsTTS from '../components/ElevenLabsTTS'

export default async function TTSPage() {
    const { userId, has } = await auth()
    if (!userId) {
        redirect('/sign-in?redirect_url=/tts')
    }

    const userHasProPlan = has?.({ plan: 'pro' })
    if (!userHasProPlan) {
        // return a premium section
        return (
            <section className="px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-3xl mx-auto text-center mx-8">
                    <h1 className="mt-10 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Text to Speech</h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">Convert your text into natural-sounding audio.</p>
                </div>
            </section>
        )
    }
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-3xl mx-auto text-center mx-8">
                <h1 className="mt-10 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Text to Speech</h1>
                <p className="mt-2 text-gray-600 dark:text-gray-300">Convert your text into natural-sounding audio.</p>
            </div>
            {userHasProPlan && (
                <ElevenLabsTTS />
            )}
        </section>
    )
}


