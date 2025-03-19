import React, { useState, useEffect } from "react";
import axios from "axios";
import { MapPin } from "lucide-react";

function Data() {
  const [gpsData, setGpsData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [latestData, setLatestData] = useState(null); // เพิ่ม state สำหรับเก็บข้อมูลล่าสุด

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/get?page=${page}&limit=${limit}`
      );
      setGpsData(response.data.data);
      setTotalPages(response.data.totalPages);
      setTotalItems(response.data.totalItems);

      // เก็บข้อมูลล่าสุด
      if (response.data.data.length > 0) {
        setLatestData(response.data.data[response.data.data.length - 1]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteAllData = async () => {
    try {
      // เรียก API เพื่อลบข้อมูลทั้งหมด
      await axios.delete(`${API_BASE_URL}/api/delete-all`);
      alert("All data deleted successfully");
      setPage(1);
      fetchData(); // ดึงข้อมูลใหม่หลังจากลบข้อมูลทั้งหมด
    } catch (error) {
      console.error("Error deleting data:", error);
      alert("Failed to delete data");
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000); // อัปเดตข้อมูลทุก 10 วินาที
    return () => clearInterval(interval);
  }, [page, limit]);

  return (
    <>
      <div className="flex justify-between">
        <div className="flex">
          {/* แสดงลิงก์ Google Maps จากข้อมูลล่าสุด */}
          <MapPin />
          {latestData && (
            <a
              href={`https://www.google.com/maps?q=${latestData.latitude},${latestData.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-300 hover:text-blue-500 no-underline hover:underline ml-1"
            >
              View on Google Maps
            </a>
          )}
        </div>
        <div className="flex justify-end items-center gap-4">
          <span>Total: {totalItems}</span>
          <button onClick={deleteAllData} className="btn btn-error transition-transform duration-300 hover:scale-105">
            Delete All Data
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {gpsData.map((data, index) => {
              const id = (page - 1) * limit + index + 1;
              return (
                <tr key={index}>
                  <th>{id}</th>
                  <td>{data.latitude}</td>
                  <td>{data.longitude}</td>
                  <td>{new Date(data.timestamp).toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      <div className="join flex justify-center mt-4">
        <button
          className="join-item btn btn-info"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          «
        </button>
        <button className="join-item btn">
          Page {page} of {totalPages}
        </button>
        <button
          className="join-item btn btn-info"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === totalPages}
        >
          »
        </button>
      </div>
    </>
  );
}

export default Data;
