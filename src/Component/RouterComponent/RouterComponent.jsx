import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageWrapper from '../PageWrapper/PageWrapper';
function RouterComponent() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<PageWrapper/>} />
            </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouterComponent