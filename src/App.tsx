import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

declare global {
  interface Window {
    voiceflow?: any; // Replace `any` with the actual type if available
  }
}

const backgroundIMG =[
  {
    url: 'https://cdn.leonardo.ai/users/a482cc8c-f5e8-4326-8038-82c383032a5a/generations/ebe27154-771f-4505-9148-cdca44c52252/Leonardo_Phoenix_09_a_highly_detailed_expressive_and_vibrant_r_0.jpg?w=512',
  }
]
function App() {
  const [count, setCount] = useState(0)
  
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
