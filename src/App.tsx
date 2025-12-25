import { BrowserRouter, Routes, Route} from "react-router-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Search from './components/Search';
import SignUp from "./pages/signup/SignUp";
import Otp from "./pages/otp/Otp";


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <BrowserRouter> */}
        <Routes>
          <Route path='/' element={<Search />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/otp' element={<Otp />} />
        </Routes>
      {/* </BrowserRouter> */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
