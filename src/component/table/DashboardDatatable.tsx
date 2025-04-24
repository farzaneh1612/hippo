import React, { useState } from 'react';
import './Table.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import StakeCard from '../stake/StakeCard.tsx';
const isMobile = window.innerWidth <= 768;

const data = [
    { id: 1, asset: 'HPO', status: 'Done', amount: 2500, plan: '30 Days', apy: '6%', releaseDate: '12/02/2020–12:56' },
    { id: 2, asset: 'HPO', status: 'In Progress', amount: 2500, plan: '30 Days', apy: '6%', releaseDate: '12/02/2020–12:56' },
    { id: 3, asset: 'HPO', status: 'Done', amount: 2500, plan: '30 Days', apy: '6%', releaseDate: '12/02/2020–12:56' },
    { id: 4, asset: 'HPO', status: 'In Progress', amount: 2500, plan: '30 Days', apy: '6%', releaseDate: '12/02/2020–12:56' },
    { id: 5, asset: 'HPO', status: 'Done', amount: 2500, plan: '30 Days', apy: '6%', releaseDate: '12/02/2020–12:56' },
    { id: 6, asset: 'HPO', status: 'In Progress', amount: 2500, plan: '30 Days', apy: '6%', releaseDate: '12/02/2020–12:56' },
    { id: 7, asset: 'HPO', status: 'Done', amount: 2500, plan: '30 Days', apy: '6%', releaseDate: '12/02/2020–12:56' },
    { id: 8, asset: 'HPO', status: 'In Progress', amount: 2500, plan: '30 Days', apy: '6%', releaseDate: '12/02/2020–12:56' },
    { id: 9, asset: 'HPO', status: 'Done', amount: 2500, plan: '30 Days', apy: '6%', releaseDate: '12/02/2020–12:56' },
    { id: 10, asset: 'HPO', status: 'In Progress', amount: 2500, plan: '30 Days', apy: '6%', releaseDate: '12/02/2020–12:56' },
  ];

  const itemsPerPage = 7;

 
  
export default function DashboardDatatable() {
    const [currentPage, setCurrentPage] = useState(1);

    const pageCount = Math.ceil(data.length / itemsPerPage);
    const pages = [...Array(pageCount).keys()].map(i => i + 1);
  
    const paginatedData = data.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  
    const handlePageClick = (page) => {
      if (page >= 1 && page <= pageCount) {
        setCurrentPage(page);
      }
    };
    
  return (<>
<div className="table-container">
  {isMobile? paginatedData.map(row => (
  <StakeCard data={row}/>
  ))
  :
      <table className="status-table">
        <thead>
          <tr>
            <th className='typograohyth'>ID</th>
            <th className='typograohyth'>Asset</th>
            <th className='typograohyth'>Status</th>
            <th className='typograohyth'>Amount</th>
            <th className='typograohyth'>Plan</th>
            <th className='typograohyth'>APY</th>
            <th className='typograohyth'>Release Date</th>
          </tr>
        </thead>
        <tbody>
        {paginatedData.map(row => (
            <tr key={row.id}>
              <td className='typograohytd'>{row.id}</td>
              <td className='typograohytd'>{row.asset}</td>
              <td className='typograohytd'>
                <span className={`status-badge ${row.status === 'Done' ? 'done' : 'in-progress'}`}>
                  <span className="dot" /> {row.status}
                </span>
              </td>
              <td className='typograohytd'>{row.amount}</td>
              <td className='typograohytd'>{row.plan}</td>
              <td className='typograohytd'>{row.apy}</td>
              <td className='typograohytd'>{row.releaseDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
}
    {/* Pagination */}
    <div className="pagination">
        <button onClick={() => handlePageClick(currentPage - 1)}><KeyboardArrowLeftIcon/></button>
        {pages.map((p, index) => (
          <React.Fragment key={p}>
            {(p === 1 || p === pageCount || Math.abs(p - currentPage) <= 1) ? (
              <button
                onClick={() => handlePageClick(p)}
                className={p === currentPage ? 'active' : ''}
              >
                {p}
              </button>
            ) : (index === 1 || index === pages.length - 2) && (
              <span className="dots">...</span>
            )}
          </React.Fragment>
        ))}
        <button onClick={() => handlePageClick(currentPage + 1)}><KeyboardArrowRightIcon/></button>
      </div>
    </div>
    <div style={{height:'80px'}}/>
    </>
      )
}
