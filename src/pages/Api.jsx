import { useEffect, useState } from "react";

export default function API() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => setQuotes(data.slice(0, 5)));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-semibold text-pink-400 text-center mb-8">🌐 Inspirational Quotes</h1>
      <div className="grid gap-6 max-w-3xl mx-auto">
        {quotes.map((quote, index) => (
          <div key={index} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-gray-700 italic">“{quote.text}”</p>
            <p className="text-right text-pink-500 mt-2">– {quote.author || "Unknown"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
