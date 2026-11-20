import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <footer>
        <button  onClick={()=> navigate("/")}>Юридическая информация</button>
        <button  onClick={()=> navigate("/")}>VK</button>
        <button  onClick={()=> navigate("/")}>Telegram</button>
        <button  onClick={()=> navigate("/")}>Политика конфидентиальности</button>
      </footer>
    </div>
  );
};

export default Footer;
