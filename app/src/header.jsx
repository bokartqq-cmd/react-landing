import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-[250px]">
      <header>
        <button className="text-black text-xl hover:underline" onClick={()=> navigate("/")}>LOGO</button>
        <button className="text-black text-xl hover:underline" onClick={()=> navigate("/")}>Главная</button>
        <button className="text-black text-xl hover:underline" onClick={()=> navigate("/")}>Расписание</button>
        <button className="text-black text-xl hover:underline" onClick={()=> navigate("/")}>Оценки</button>
        <button className="text-black text-xl hover:underline" onClick={()=> navigate("/")}>Справки</button>
        <button className="text-black text-xl hover:underline" onClick={()=> navigate("/")}></button>
        <button className="text-black text-xl hover:underline" onClick={()=> navigate("/profile")}>Профиль</button>
      </header>
    </div>
  );
};

export default Header;