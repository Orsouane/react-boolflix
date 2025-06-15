import React from 'react'

import ReactPaginate from 'react-paginate';
import { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import Card from '../Components/Card';

import Form from '../Components/Form';
function MoviesPage() {
    const itemsPerPage = 8; // ✅ Definisci itemsPerPage

    return (
        <>
            <section className="w-[100%] h-[100vh]">
                <div className="text-white" style={{ paddingBottom: "80px" }}>
                    <Form />
                </div>
                <div className="flex justify-center">
                    <img className="h-8" src="/flags/logo1.png" alt="" />
                </div>
                <PaginatedItems itemsPerPage={itemsPerPage} />
            </section>
        </>
    );
}
function Items({ currentItems }) {
    const { searchDone } = useContext(GlobalContext);
    return (

        <section className='grid grid-cols-3 sm:grid-cols-4 place-items-center'>
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
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = Movies.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(Movies.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % Movies.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                className='flex bg-red-500 w-fit justify-center cursor-pointer'
            />
        </>
    );
}


export default MoviesPage
