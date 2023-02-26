import { useState, useEffect } from 'react';
import { firstMd } from './utils/firstMarkdown';
import { marked } from 'marked';

function App() {
  const [text, setText] = useState(``);

  useEffect(() => {
    setText(firstMd);
  }, []);

  return (
    <div className='h-screen bg-gray-400 grid grid-cols-2 place-content-stretch gap-x-8 p-10'>
      <div className='bg-white w-full rounded-lg shadow-lg overflow-hidden flex flex-col'>
        <div className='w-full bg-lime-400 py-4 text-center'>
          <h1 className='text-2xl'>Markdown Editor</h1>
        </div>
        <div className='h-full'>
          <textarea
            id='editor'
            className='w-full h-full p-2 resize-none focus:outline-none'
            value={text}
            onChange={(e) => setText((prev) => e.target.value)}
            onBlur={(e) => setText((prev) => e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className='bg-white w-full rounded-lg shadow-lg overflow-hidden flex flex-col'>
        <div className='w-full bg-lime-400 py-4 text-center'>
          <h1 className='text-2xl'>Preview</h1>
        </div>
        <div id='preview' className='w-full h-full p-2 prose overflow-auto' dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
      </div>
    </div>
  );
}

export default App;
