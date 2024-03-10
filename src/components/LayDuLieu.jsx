import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { URL_API } from '../libs/libs';

const LayDuLieu = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get(`${URL_API}/UserRequest/Get`);
              // Xử lý dữ liệu ở đây nếu cần
              setData(response.data.data);
            } catch (error) {
              console.error('Error fetching data:', error);
              throw error; // Re-throw lỗi để bắt ở nơi gọi
            }
        };
    
        fetchData();
      }, []); // Chạy chỉ một lần sau khi component được render

    
    return (
        <div>
            <ul>
                {data.map((item, index) => (
                <li key={index}>{item.userName}</li>
                ))}
            </ul>
        </div>
    )
}

export default LayDuLieu