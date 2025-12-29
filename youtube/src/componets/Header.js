import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { Youtube_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchslice";

function Header() {
  const dispatch = useDispatch();
  const [searchText, setsearchText] = useState("");
  const [searchResults, setsearchResults] = useState([]);
  const [showSuggestions, setshowSuggestions] = useState(false);
  
  console.log(searchResults);
  
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const searchCache = useSelector((store) => store.search);
  // implement LRU cache with a limit of 10 or 100.

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setsearchResults(searchCache[searchText]);
      } else getSearchAutoComplete();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchAutoComplete = async () => {
    try {
      const data = await fetch(Youtube_SEARCH_API + searchText);
      const json = await data.json();
      setsearchResults(json[1]);

      dispatch(
        cacheResults({
          [searchText]: json[1],
        })
      );

    } catch (err) {
      console.log("Error in Autocomplete API:" + err);
    }
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white border-b sticky top-0 z-20">
      {/* Left: menu + logo */}
      <div className="flex items-center gap-3">
        <button
          aria-label="Open menu"
          className="p-2 rounded-full hover:bg-gray-100"
        >
          {/* hamburger icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => toggleMenuHandler()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <button type="button" className="flex items-center gap-2">
          {/* small red play in a rounded square + text */}
          <div className="flex items-center justify-cente rounded-md w-12 h-14">
            <img
              src="https://www.vhv.rs/dpng/d/404-4049865_youtube-flat-logo-youtube-logo-hd-png-download.png"
              alt="YouTube"
              className="h-6 hidden sm:block"
            />
          </div>
        </button>
      </div>

      {/* Center: search bar */}
      <div className="flex-1 max-w-2xl mx-4">
        <div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 border border-gray-200 rounded-l-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={searchText}
              onChange={(e) => setsearchText(e.target.value)}
              onFocus={() => setshowSuggestions(true)}
              onBlur={() => setshowSuggestions(false)}
            />
            <button
              aria-label="Search"
              className="bg-gray-100 border border-l-0 border-gray-200 px-4 py-2 rounded-r-full hover:bg-gray-200"
              onClick={() => getSearchAutoComplete(searchText)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </button>
          </div>
          <div className="fixed bg-white py-2 px-1 rounded-md shadow-sm">
            {showSuggestions && (
              <ul className="w-96 rounded-lg">
                {searchResults.map((item) => (
                  <li
                    key={item}
                    className=" shadow-md bg-white border border-gray-200 px-3 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setsearchText(item);
                      setsearchResults([]);
                    }}
                  >
                    <div className=" flex ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-700"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                        />
                      </svg>{" "}
                      {"  "}
                      {item}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            aria-label="Search with voice"
            className="p-2 ml-2 rounded-full hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a2 2 0 00-2 2v5a2 2 0 104 0V4a2 2 0 00-2-2z" />
              <path d="M5 10a5 5 0 0010 0h-1a4 4 0 11-8 0H5z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Right: actions + avatar */}
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-full hover:bg-gray-100" title="Create">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.553-2.276A2 2 0 0122 9.618v4.764a2 2 0 01-2.447 1.894L15 14M4 6h8M4 12h8m-8 6h8"
            />
          </svg>
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100" title="Apps">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
          </svg>
        </button>
        <button
          className="p-2 rounded-full hover:bg-gray-100"
          title="Notifications"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>

        <img
          src="data:image/png;base64,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"
          alt="User"
          className="h-8 w-8 rounded-full"
        />
      </div>
    </header>
  );
}

export default Header;
