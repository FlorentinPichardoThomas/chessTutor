import { useEffect } from 'react'
import './App.css'

declare global {
  interface Window {
    voiceflow?: any; // Replace `any` with the actual type if available
  }
}


function App() {
  
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs'

    script.onload = () => {
      if (window.voiceflow && window.voiceflow.chat) {
        window.voiceflow.chat.load({
          verify: { projectID: '675435111d02b009ae3179cc' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'public'
        })
      }
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script) // Cleanup script on unmount
    }
  }, [])

  return (
    <>
      <h1 className='dText'>I'm a better reviewer of chess games than the coaches at chess.com</h1>
      <h2 className='dText'>Click the button by the bottom right corner to see for yourself</h2>
      <h3 className='dText'>Powered by ChatGPT, and Voiceflow</h3>
      
    </>
  )
}

export default App
