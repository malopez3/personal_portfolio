import React from 'react';
import Navbar from './components/Navbar'; 

function App() {
    return (
      <>
      {/* FULL-WIDTH NAVBAR GOES HERE */}
      <Navbar />

      {/* PADDED MAIN CONTENT BELOW */}
      {/* Page container with responsive padding and light blue background */}

    <div className="h-[83vh] flex flex-col px-4 md:px-16 lg:px-32 xl:px-48 bg-blue-50">
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="text-center space-y-6">
          {/* Greeting and Name */}
          <h1 className="text-5xl font-extrabold text-blue-900">Hello, I'm Marco Lopez</h1>
          <h2 className="text-2xl font-medium text-blue-700">I'm a Data Scientist</h2>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded hover:bg-blue-100 transition"
            >
              Contact Info
            </a>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}

export default App;