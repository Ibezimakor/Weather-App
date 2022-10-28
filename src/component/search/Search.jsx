import React from 'react'
import './Search.css';
import { FiSearch } from 'react-icons/fi';
import Searchicon from '../../assets/Search.png'
function Search() {
  return (
    <form className='Search_bar'>
        <input type="text" placeholder="Search.."/>
    </form>
  )
}

export default Search