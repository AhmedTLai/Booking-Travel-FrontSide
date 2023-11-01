import { useEffect, useState } from 'react'
import DirectionCards from './DirectionCards'
import './Directions.css'
import cards from '../../../public/data/cards.json'

const Directions = (inf) => {
    const { page } = inf;
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(6);
    const [data, setData] = useState([]);
    const pages = [];

    for (let i = 1; i <= Math.ceil(cards.length / postPerPage); i++) {
        pages.push(i);
    }

    // Update data when currentPage changes
    useEffect(() => {
        const lastPageIndex = currentPage * postPerPage;
        const firstPageIndex = lastPageIndex - postPerPage;
        setData(cards.slice(firstPageIndex, lastPageIndex));
    }, [currentPage, postPerPage]);

    return (
        <section className='container py-5 ' style={{minHeight : '500px'}}>
            <h3 className='fontf bg d-inline-block rounded-pill my-3'>Explore</h3>
            <h2 className=''>Our featured tours</h2>
            <br />
            <br />
            <div className='d-flex flex-wrap gap-3 justify-content-center position-relative' >
                {data.map((val, ind) => (
                    <DirectionCards key={ind} val={val}/>
                ))}
                <br />
                {page == 'tour' ?
                <div className='d-flex gap-2 align-items-center pages'>
                    {pages.map((v, i) => (
                        <button
                            key={i}
                            className={`btn   ${v === currentPage ? 'active' : ''}`}
                            onClick={() => {
                                setCurrentPage(v);
                            }}
                        >
                            {v}
                        </button>
                    ))}
                </div>
                :
                ''
                }
            </div>
        </section>
    );
};

export default Directions;