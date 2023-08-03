import {useNavigate } from 'react-router-dom';

export default function Go() {
    const navigate = useNavigate()
    setTimeout(() => {
        navigate('/about');
    }, 2000);
    return (
        <div>
            3秒跳轉
        </div>
    )
  }  