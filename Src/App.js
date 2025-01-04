
import React from "react";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <header className="bg-gray-800 py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Crytocoin Simulation</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Example Card 1 */}
          <div className="bg-gray-800 rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold">Bitcoin</h2>
            <p className="mt-2">Live Price: $43,000</p>
          </div>

          {/* Example Card 2 */}
          <div className="bg-gray-800 rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold">Ethereum</h2>
            <p className="mt-2">Live Price: $3,200</p>
          </div>

          {/* Example Card 3 */}
          <div className="bg-gray-800 rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold">Solana</h2>
            <p className="mt-2">Live Price: $150</p>
          </div>
        </section>
        <div className="text-center mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Start Simulation
          </button>
        </div>
      </main>
      <footer className="bg-gray-800 py-4 text-center">
        <p>&copy; 2025 Crytocoin Simulation. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
