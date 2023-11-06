import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


import {

  RouterProvider,
} from "react-router-dom";
import router from './routes/Routes.jsx';


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1200px] mx-auto'>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>,
  </div>
)
