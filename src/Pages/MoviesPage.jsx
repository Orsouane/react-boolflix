import React from 'react'

import ReactPaginate from 'react-paginate';
import { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import Card from '../Components/Card';

import Form from '../Components/Form';
function MoviesPage() {
    const itemsPerPage = 6; //  itemsPerPage

    return (
        <>
              <section className="w-[100%] min-h-screen">
                <div className="text-white" style={{ paddingBottom: "40 px" }}>
                    <Form className="pt-10" />
                </div>
                <div className="flex justify-center sm:h-15">
                    <img className="h-8 sm:h-15" src="/flags/logo1.png" alt="" />
                </div>
                <PaginatedItems itemsPerPage={itemsPerPage}/>
            </section>
        </>
    );
}
function Items({ currentItems }) {
    const { searchDone } = useContext(GlobalContext);
    return (

        <section className='grid grid-cols-3  lg:grid-cols-4 place-items-center gap-5 '>
 
            {currentItems &&
                currentItems.map((movie) => (
                    <div key={movie.id} >
                        < Card movie={movie} searchDone={searchDone} />
                    </div>
                ))
            }
        </section >


    );
}

function PaginatedItems({ itemsPerPage }) {

    const [itemOffset, setItemOffset] = useState(0);
    const { Movies } = useContext(GlobalContext);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = Movies.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(Movies.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % Movies.length;
        setItemOffset(newOffset);
      ì
    };

    return (
         <div className='flex flex-col gap-20 '>
              <Items currentItems={currentItems} />
              <ReactPaginate
                   breakLabel="..."
                   nextLabel="next >"
                   onPageChange={handlePageClick}
                   pageRangeDisplayed={5}
                   pageCount={pageCount}
                   previousLabel="< previous"
                   renderOnZeroPageCount={null}
                   className='text-stone-400 flex gap-10 h-8   justify-center pt-10  '

              />
        </div>
            
     
    );
}


export default MoviesPage
