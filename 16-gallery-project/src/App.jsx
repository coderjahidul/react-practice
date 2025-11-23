import axios from 'axios'
import { useState } from 'react'



function App() {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18;
  
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100');
    setData(response.data);
  }

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div className="bg-black h-screen pt-5 text-white">
      <button
        className="bg-green-800 text-white mb-3 px-5 py-2 rounded cursor-pointer active:scale-95"
        onClick={getData}
      >Get Data</button>

      {/* Empty message */}
      {data.length === 0 && (
        <h2 className="text-center">No Data Available</h2>
      )}

      {/* Display items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-1">
        {currentItems.map((item) => (
          <a href={item.url} target="_blank" key={item.id} className="border border-white">
            <img className="w-full h-50" src={item.download_url} alt={item.author} />
            <h2 className="text-center py-2 uppercase">{item.author}</h2>
          </a>
        ))}
      </div>

      {/* Pagination Buttons */}
      {data.length > 0 && (
        <div className="flex justify-center gap-4 my-5">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-700 rounded disabled:bg-gray-500"
          >
            Prev
          </button>

          <span>Page {currentPage} / {totalPages}</span>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-700 rounded disabled:bg-gray-500"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default App
