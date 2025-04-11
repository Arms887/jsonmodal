import React, { useEffect, useState } from 'react';
import { Pagination, List, Spin, message } from "antd";
import MyCard from './components/Card/Card';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const pageSize = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  const updatePageData = (page, fullData) => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setPageData(fullData.slice(startIndex, endIndex));
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(result => result.json())
      .then(result1 => {
        setData(result1);
        updatePageData(currentPage, result1);
        setLoading(false);
      })
      .catch(error => {
        message.error('error');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (data) {
      updatePageData(currentPage, data);
    }
  }, [currentPage]);

  if (loading) return <Spin tip="Загрузка..." fullscreen />;

  return (
    <div className="App">
      <div className="container">
        <div className="maindiv">
          {pageData.map((item) => (
            <MyCard
              key={item.id}
              Firsttitle={item.name}
              SecondTitle={item.username}
              ModalInfo={item.address}
            />
          ))}
        </div>

        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={data.length}
          onChange={(page) => setCurrentPage(page)}
          style={{ marginTop: 16, textAlign: "center" }}
        />
      </div>
    </div>
  );
}

export default App;
