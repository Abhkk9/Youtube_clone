import React from "react";

function Header() {
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg ">
      <div className=" flex col-span-1 ">
        <div></div>
        <img
          className="h-8 "
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb39/eCgoKQkJCxsbH29vZiYmI4ODh0dHTX19empqbFxcXr6+sQEBDh4eEbGxu7u7s0NDR6enpXV1egoKDJyclvb28ODg6IiIhcXFwfHx8ZGRnwNjATAAACZUlEQVR4nO3dCW7CMBCFYRdIw75vbSm9/y2rqKgUVRo72NJoxv93gveUkGBj7BAAAAAAAAAAAAAAAAAAoAKrdjq0Y9qu+tVbH1/sOa7TC7baYZ/UJvZrZtpJnzZrkgputHNm2KRUPGinzHKIF3zVzpjpNVZwq50w2zbScKodMNtULjjRzlfARGw41o5XwFhsONeOV8BcbGj3ZX83Extqpyui8oY77XQFXMWGJ+14BZzEhlbHTX/JY6iBdrwCFmJDD48auWBYaufLtow0NP803cUKhoV2xEyRT6H9+zR6j3bO2ikznFMKhrDSzvm05GnhxuYgap40l3izHlmbcpuNekx53y7kdmDHts/lAwAAAAAAAAAAxjRvy5Edy7e+P1zsh9q/JfU23PfoN7hqx33KdZBa0O5i9ugy9h+f2jkzfKYUfNdOmeU9XtD6Sm95lXfwsFhfXqofwkU7YLZLpKF2vgLkgnYXC93Jy4bsvgrv5JeivS9r/w3Fhh/a8QrYiA210xVR+TX0/zn0/yz1/z708KiRC1bwvdT+2CI6JeV+fFjBGL+CeRrLT5vEubYK5kuD/znvjvffLQAAAAAAAAAAgCHO94myt9fXoddeXxOj+7XFFkD/srtsKHHPPff7Jrrf+9L//qVf2hEzRfegtX2PdmL3qXa+AuSC/vfz9r8nu/999a3v5t2Rn6ba6YqovKH/c2ZsDpseyWcFWV/l3ZFXettfqh/9I7D7c9cqODvP/H+7EhazW5tke5RwhmVoLI+Bk84h9X+WbLA7hko9DzhUcKZzx/m53AAAAAAAAAAAAAAAAABg0zfn21Nf0tdOJAAAAABJRU5ErkJggg=="
        />
        <img
          className="h-8 ml-2"
          alt="YT logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png?20200109235614"
        />
        <div className="">
          <input className="bordwe-gray-400 p-2 rounded-full" type="text" />
          <button className="border-black p-2">
           
            <img  className="h-8"
            alt ="searchIcon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSszglFMlK9DTPilcJtrc_L1nOLWVoY1yh76Q&s" />{" "}
          </button>
        </div>
        <div>
          <img
            className="h-14 col-span-1 "
            alt="User Icon"
            src="data:image/png;base64,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"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
