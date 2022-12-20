import  { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css'

import App from './App'

const rootHTML = document.getElementById('root')
const root = createRoot(rootHTML)

const queryClient = new QueryClient()

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
       <App />
    </QueryClientProvider>
   
  </BrowserRouter>
)
