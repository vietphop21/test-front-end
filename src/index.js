// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { ReactQueryDevtools } from '@tannerlinsley/react-query-devtools'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//     <BrowserRouter>
//      <QueryClientProvider client={QueryClient}>
//       <App />
//       <ReactQueryDevtools initialIsOpen={false} />
//       </QueryClientProvider>
//     </BrowserRouter>

// );
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import App from "./App";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
