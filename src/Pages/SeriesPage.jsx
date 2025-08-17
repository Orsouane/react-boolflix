import React from 'react'

import ReactPaginate from 'react-paginate';
import { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import Card from '../Components/Card';

import Form from '../Components/Form';
function SeriesPage() {
     const itemsPerPage = window.innerWidth < 600 ? 4 : window.innerWidth < 1200 ? 4 : 4// ✅ Definisci itemsPerPage

     return (
          <>
               <section className="w-[100%] min-h-screen ">
                    <div className="text-white" style={{ paddingBottom: "40 px" }}>
                         <Form className="pt-10" />
                    </div>
                    <div className="flex justify-center sm:h-15">
                         <img className="h-8 sm:h-15" src="/flags/logo2.png" alt="" />
                    </div>
                    <PaginatedItems itemsPerPage={itemsPerPage} />
               </section>
          </>
     );
}
function Items({ currentItems }) {
     const { searchDone } = useContext(GlobalContext);
     return (

          <section className='grid sm:grid-cols-2  lg:grid-cols-4 place-items-center gap-5 '>
               {currentItems &&
                    currentItems.map((serie) => (
                         <div key={serie.id} >
                              < Card movie={serie} searchDone={searchDone} />
                         </div>
                    ))
               }
          </section >


     );
}

function PaginatedItems({ itemsPerPage }) {

     const [itemOffset, setItemOffset] = useState(0);
     const { Series } = useContext(GlobalContext);
     const endOffset = itemOffset + itemsPerPage;
     const currentItems = Series.slice(itemOffset, endOffset);
     const pageCount = Math.ceil(Series.length / itemsPerPage);
     const handlePageClick = (event) => {
          const newOffset = (event.selected * itemsPerPage) % Series.length;
          setItemOffset(newOffset);
          
     };

     return (
          <div className='flex flex-col gap-20  pb-10 '>
               <Items currentItems={currentItems} />
               <ReactPaginate

                    breakLabel="..."
                    nextLabel={<button className="px-2 py-1 bg-red-900 text-white rounded cursor-pointer hover:bg-red-700">Next</button>}
                    previousLabel={<button className="px-2 py-1 bg-red-900 text-white rounded cursor-pointer hover:bg-red-700 ">Prev</button>}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    renderOnZeroPageCount={null}
                    containerClassName="flex gap-4 justify-center m-auto"
                    pageClassName="rounded-md shadow-xl"
                    pageLinkClassName="block px-2 py-1 border border-red-900 active:bg-red-900 text-white cursor-pointer rounded hover:bg-red-700 "
                    activeClassName="font-bold bg-red-900"

               />

          </div>



     );
}


export default SeriesPage
