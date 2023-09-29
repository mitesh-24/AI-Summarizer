import { logo } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="logo" className='w-28 object-contain' />
        <button type='button' onClick={() => window.open('https://github.com/mitesh-24/AI-Summarizer')} className='black_btn'>Github</button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='teal_gradient'>
          OpenAI GPT4
        </span>
      </h1>
      <h2 className='desc'>
        simplify your reading with Summize, this is an open-source article summarizer that transforms lenghthy articles into clean summaries.
      </h2>
    </header>
  )
}

export default Hero