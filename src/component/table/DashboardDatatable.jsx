import React, { useState, useEffect } from 'react';
import './Table.css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import StakeCard from '../stake/StakeCard.tsx';
import { useAppKitProvider, useAppKitAccount } from "@reown/appkit/react";
import { BrowserProvider, ethers } from "ethers";
import { useNetwork } from '../../context/NetworkContext';
import { ConnectButton } from '../../logic/connect_button';
import { toast } from "react-toastify";


const isMobile = window.innerWidth <= 768;
const itemsPerPage = 7;

export default function DashboardDatatable() {
  const { address, isConnected } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider("eip155");
  const { selectedNetwork: network } = useNetwork();

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getStakList();
  }, [isConnected, network]);

  async function getStakList() {
    if (!isConnected) {
      toast.error("Wallet not connected");
      return;
    }
    if (!isConnected || !network?.stakeContractAddress || !network?.stakeContractAbi) return;

    try {
      const ethersProvider = new BrowserProvider(walletProvider);
      const signer = await ethersProvider.getSigner();

      const contract = new ethers.Contract(
        network.stakeContractAddress,
        network.stakeContractAbi,
        signer
      );

      const stakeList = await contract.getStakeList();

      const formattedStakeList = stakeList.map((stake, index) => {
        const amount = parseInt(stake[0], 10) / 1e18;
        const releaseDate = new Date(parseInt(stake[1]) * 1000).toLocaleString('en-GB');
        const planDays = network.chainId === 1 ? 30 : parseInt(stake[2][0]) / 3600 / 24;
        const ratio = network.chainId === 1 ? 6 : parseInt(stake[2][1]) / 100;
        const apy = `${ratio}%`;
        const status = Date.now() >= parseInt(stake[1]) * 1000 ? "Done" : "In Progress";

        if (!(Date.now() >= parseInt(stake[1]) * 1000)) {
          return {
            id: index + 1,
            asset: "HPO",
            status,
            amount,
            plan: `${planDays} Days`,
            apy,
            releaseDate: releaseDate.replace(',', ''),
          };
        }
      }).filter(Boolean);

      setData(formattedStakeList);
    } catch (error) {
      console.error("Failed to fetch stake list:", error);
      toast.error(("Failed to fetch stake list:", error))
    }
  }

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

  return (
    <>
      <div className="table-container">
        {isMobile ? (
          !isConnected ? (
            <div className="emptyTex" style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <span className="emptyText">To view information,<br /> you must first connect to your wallet.</span>
                <ConnectButton backgrounColor={'#fff'} colorText={' #267B83'} />
              </div>
            </div>
          ) : paginatedData.length === 0 ? (
            <div className="emptyTex" style={{ textAlign: 'center', padding: '20px' }}>
              You have no stake data yet.
            </div>
          ) : (
            paginatedData.map(row => (
              <StakeCard key={row.id} data={row} isConnected={isConnected} />
            ))
          )
        ) : (
          <table className="status-table">
            <thead>
              <tr>
                <th className="typograohyth">ID</th>
                <th className="typograohyth">Asset</th>
                <th className="typograohyth">Status</th>
                <th className="typograohyth">Amount</th>
                <th className="typograohyth">Plan</th>
                <th className="typograohyth">APY</th>
                <th className="typograohyth">Release Date</th>
              </tr>
            </thead>
            <tbody>
              {!isConnected ? (
                <tr>
                  <td colSpan="7" className="emptyTex" style={{ textAlign: 'center', padding: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                      <span className="emptyText">To view information,<br /> you must first connect to your wallet.</span>
                      <ConnectButton />
                    </div>
                  </td>
                </tr>
              ) : paginatedData.length === 0 ? (
                <tr>
                  <td colSpan="7" className="emptyTex" style={{ textAlign: 'center', padding: '20px' }}>
                    You have no stake data yet.
                  </td>
                </tr>
              ) : (
                paginatedData.map(row => (
                  <tr key={row.id}>
                    <td className="typograohytd">{row.id}</td>
                    <td className="typograohytd">{row.asset}</td>
                    <td className="typograohytd">
                      <span className={`status-badge ${row.status === 'Done' ? 'done' : 'in-progress'}`}>
                        <span className="dot" /> {row.status}
                      </span>
                    </td>
                    <td className="typograohytd">{row.amount}</td>
                    <td className="typograohytd">{row.plan}</td>
                    <td className="typograohytd">{row.apy}</td>
                    <td className="typograohytd">{row.releaseDate}</td>
                  </tr>
                ))
              )}
            </tbody>

          </table>
        )}

        {/* Pagination */}
        {isConnected ?
          <div className="pagination">
            <button onClick={() => handlePageClick(currentPage - 1)}><KeyboardArrowLeftIcon /></button>
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
            <button onClick={() => handlePageClick(currentPage + 1)}><KeyboardArrowRightIcon /></button>
          </div> : null}
      </div>
      <div style={{ height: '80px' }} />
    </>
  );
}
