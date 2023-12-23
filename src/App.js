import './App.css';
import {QueryClient, QueryClientProvider} from "react-query";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
function App() {
  const client = new QueryClient({defaultOptions : {
    queries: {refetchOnWindowFocus: false}
  }});
  return (
    <QueryClientProvider client={client}>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    <div className="App">
    </div>
    </QueryClientProvider>
  );
}

export default App;
