import Head from "next/head";
import { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import block_flow from "../../public/block_flow.png";
//import eth_logo from "../../public/eth_logo.png";
import eth_logo from "../../public/eth_fuel.png";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import styled from "@emotion/styled";
import SvgComponent from "./gj.jsx";
import blockData from "../../public/block-19874196-19874237.json";
// import blockData from "../../public/blockData.json";
import { Analytics } from '@vercel/analytics/react';

export default function Home() {

  const block_bg_img = `"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500' fill-opacity='.4' style='enable-background:new 0 0 500 500'%3E%3Cstyle%3E .st2{fill:rgb(109, 104, 104)} %3C/style%3E%3Cg style='display:none'%3E%3Cpath style='display:inline;fill:%23414042' d='M-8.3-5.7h520.7V511H-8.3z' id='Layer_2'/%3E%3C/g%3E%3Cg id='Layer_1'%3E%3Cpath transform='rotate(-45.001 0 .055)' class='st2' d='M-453.7-3.7h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 31.25 31.306)' class='st2' d='M-422.5 27.6H485v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 62.5 62.556)' class='st2' d='M-391.2 58.8h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 93.75 93.807)' class='st2' d='M-360 90.1h907.5v7.5H-360z'/%3E%3Cpath transform='rotate(-45.001 125 125.057)' class='st2' d='M-328.7 121.3h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 156.249 156.308)' class='st2' d='M-297.5 152.6H610v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 187.499 187.558)' class='st2' d='M-266.2 183.8h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 218.749 218.809)' class='st2' d='M-235 215.1h907.5v7.5H-235z'/%3E%3Cpath transform='rotate(-45.001 249.998 250.06)' class='st2' d='M-203.7 246.3h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 281.248 281.31)' class='st2' d='M-172.5 277.6H735v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 312.498 312.56)' class='st2' d='M-141.2 308.8h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 343.748 343.81)' class='st2' d='M-110 340.1h907.5v7.5H-110z'/%3E%3Cpath transform='rotate(-45.001 374.997 375.061)' class='st2' d='M-78.7 371.3h907.5v7.5H-78.7z'/%3E%3Cpath transform='rotate(-45.001 406.247 406.312)' class='st2' d='M-47.5 402.6H860v7.5H-47.5z'/%3E%3Cpath transform='rotate(-45.001 437.497 437.562)' class='st2' d='M-16.2 433.8h907.5v7.5H-16.2z'/%3E%3Cpath transform='rotate(-45.001 468.747 468.813)' class='st2' d='M15 465.1h907.5v7.5H15z'/%3E%3Cpath transform='rotate(-45.001 499.997 500.064)' class='st2' d='M46.3 496.3h907.5v7.5H46.3z'/%3E%3C/g%3E%3C/svg%3E"
  `;

  const [block_count, set_block_count] = useState<number>(0);
  const [gas_used_percentage, set_gas_used_percentage] = useState<string>(blockData[0].gasUsedPercentage);
  const [gas_target, set_gas_target] = useState<string>(blockData[0].percentOfGasTarget);
  const [tips_height, set_tips_height] = useState('10%');
  const [base_fee, set_base_fee] = useState<string>(blockData[0].baseFee);
  const [base_fee_height, set_base_fee_height] = useState<string>("0%");
  const [block_num, set_block_num] = useState<number>(blockData[0].block);
  const [base_fees_value, set_base_fees_value] = useState<number>(blockData[0].burntFeesEth);
  const [tips_value, set_tips_value] = useState<string>(blockData[0].reward);
  const [transactions, set_transactions] = useState<number>(blockData[0].txn);
  const [block_speed, set_block_speed] = useState<number>(4000);
  const [recipient, set_recipient] = useState<string>(blockData[0].feeRecipientNametag)
  const [intervalId, setIntervalId] = useState<number>(0);
  // const block_height: number = 19874200;
  const block_height: number = 19874237;

  useEffect(() => {
    set_block_num(blockData[block_count + 1]?.block);
    set_gas_target(blockData[block_count + 1]?.percentOfGasTarget);
    set_base_fee(blockData[block_count + 1]?.baseFee);
    set_base_fee_height(blockData[block_count + 1]?.burntFeesPercentage);
    set_base_fees_value(blockData[block_count + 1]?.burntFeesEth);
    set_tips_value(blockData[block_count + 1]?.reward);
    set_gas_used_percentage(blockData[block_count + 1]?.gasUsedPercentage);
    set_transactions(blockData[block_count + 1]?.txn);
    set_recipient(blockData[block_count + 1]?.feeRecipientNametag)
    if (block_num >= block_height) {
      set_block_count(0);
      set_gas_target(blockData[0]?.percentOfGasTarget);
      set_base_fee(blockData[0]?.baseFee);
      set_base_fee_height(blockData[0]?.burntFeesPercentage);
      set_base_fees_value(blockData[0]?.burntFeesEth);
      set_tips_value(blockData[0]?.reward);
      set_block_num(19874197)
      set_gas_used_percentage(blockData[0]?.gasUsedPercentage);
      set_transactions(blockData[0]?.txn);
      set_recipient(_ => blockData[0]?.feeRecipientNametag)
      reset();
    }
  }, [block_count]);

  const reset = () => {
    clearInterval(intervalId);
    setIntervalId(0);
  };

  const startChain = () => {
    const newIntervalId = setInterval(() => {
      set_block_count(prev => prev + 1);
    }, block_speed);

    setIntervalId(newIntervalId as unknown as number);
  };

  const playPause = () => {
    if (intervalId) {
      return reset();
    }
    startChain();
  };

  return (
    <>
      <Head>
        <title>Ethereum Gas Machine</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h2>Visualizing <Link href="https://eips.ethereum.org/EIPS/eip-1559">EIP-1559</Link></h2>
        <h4>Ethereum&#39;s</h4>
        <h5>Gas Fee Mechanism</h5>

        <EthLogo>
          <Image fetchPriority="low" alt="Ethereum Logo" src={eth_logo} />
        </EthLogo>

        <p>
          Ethereum&#39;s EIP-1559 is a fee pricing mechanism to help smooth out spikes in gas prices by retroactivily adjusting the gas price per unit of "work" and targets a general equilibrium of 15 million gas units per block by sacraficing the byte size for a 30 million gas unit cap. It introduced a base fee that get&#39;s burned to not only help with gas spikes but also help prevent sybil attacks with an additional benefit of helping reduce ETH issuance and at times even making ETH <Link href="https://ultrasound.money/">deflatioinary</Link>.
        </p>
        <p>
          But how does this help with price spikes? If network usage stays above the target level the base fee is adjusted up on following blocks to deter users from sending more transactions which bring congestion down. The opposite happens in low netowrk use to incitivise more transactions. Always trying to pull usage to the target level, as Vitalik put it...
        </p>

        <aside>
          Instead of all of the short-term volatility in demand for transaction space within a block translating into volatility in transaction fees, some of the volatility instead translates into volatility in block size.
          <Link href="https://notes.ethereum.org/@vbuterin/eip-1559-faq">- V. Buterin</Link>
        </aside>

        <p>
          Viewing Etherscan charts for <Link href="https://etherscan.io/chart/gaslimit">network utilization</Link> and <Link href="https://etherscan.io/chart/networkutilization">average gas limit used</Link> we can see positive results towards those goals. Reading the information on the <Link href="https://etherscan.io/blocks">latest blocks</Link> we can surmize from the numbers how some of these key metrics change on a per block basis. But how can we get a more intuitive sense of how the mechanism works? Let&#39;s take this spreadsheet of numbers and visualize some of key variables in a way to intuitivly understand how EIP-1559.
        </p>

        <h3>Prologue: User Transactions</h3>
        <p>
          When a user submits a transaction on Ethereum the total fees are calculated by adding the base fee and tip together then muliplying the <i>gas units</i> needed for computation and storage. These transactions are picked up by validator nodes and put in the mempool for inclusion into a block.
        </p>

        <h3>Mechanism incintive 1 - Proposer / Block Builder</h3>
        <p>
          The proposing validator picks transactions from the mempool to pack into a block that is broadcast to the network. Ignoring MEV, the proposer is incentivized to fill as much of the 30 million limit with transactions that pay the highest paying tips. Here we can start to visualize how the mechanics (incitives) of the EIP works.
        </p>


        <FlowImg>
          <Image fetchPriority="high" alt="block flow" src={block_flow} />
        </FlowImg>

        <h3>Incentives at Play</h3>
        <p>
          The animation below shows a block-by-block visual of the total amount of fees used in a block separating out the transactin fees as a percentage of the 30 million gas cap as well as the total base fees and tips paid in the block as a percentage of the transaction fees. The data was taken from converting an Etherscan csv file for block numbers 19,874,197 to 19,874,237 from May 15th 2024.
        </p>

        {/* 
           Users pay for transactional units x (baseFee + tip)
           1200 X (10 gwei + 5 gwei) = 18000 gwei
           So a users base fee total = baseFee * transactional gas units
         
         block: 19874197
         txn: 231
        
         baseFee: 9.63 Gwei
         gasUsed: 17,593,159
         gasUsedPercentage: 58.64%
         percentOfGasTarget: 17% 
         
         reward: 0.09534 ETH <- what % of total T fees? 
         burntFeesEth: 0.169424
         burntFeesPercentage: 63.99% <- of total transaction fees
        */}

        <div id='container'>
          <Block block_bg_img={block_bg_img} gas_target={gas_target}>
            <GasUsed gas_used_percentage={gas_used_percentage}>
              <GasUsedValue>
                {gas_used_percentage} full {gas_target} {gas_target?.[0] === '-' ? 'below' : 'above'} target
              </GasUsedValue>
              <TransactionCount>
                {transactions} transactions using gasUsed gas units
              </TransactionCount>
            </GasUsed>
          </Block>
          <GeneralEqualibrium />
          <Tips tips_height={tips_height}>
            <TipsValue>{tips_value} to {recipient}</TipsValue>
          </Tips>
          <BaseFeeContainer>
            <BaseFees base_fee_height={base_fee_height}>
              <BaseValue>{base_fees_value} ETH</BaseValue>
            </BaseFees>
          </BaseFeeContainer>
        </div>

        <h3>Block # {block_num}</h3>
        <Tcount>Base fee: {base_fee}</Tcount>

        <button onClick={playPause}>
          {intervalId ? "Stop chain" : "Start chain"}
        </button>

        <div>
          <Tcount>Block Time:</Tcount>
          <input disabled={intervalId !== 0} checked={block_speed / 1000 === 4} type="radio" id="4" name="block_speed" value="4000" onClick={() => set_block_speed(4000)} />
          <label htmlFor="4">4 sec</label>
          <input disabled={intervalId !== 0} checked={block_speed / 1000 === 12} type="radio" id="12" name="block_speed" value="12000" onClick={() => set_block_speed(12000)} />
          <label htmlFor="12">12 sec</label>
        </div>

        <p>
          I hope to improve on the data visual and still need to work out a formula to get the tips percentage as well as provide a live view of current block. Beyond that maybe look to include <Link href="https://vitalik.eth.limo/general/2024/05/09/multidim.html?">Multidimensional gas pricing</Link> so if you have any comments, questions or ideas for improvment please reach out.</p>

        <footer>
          <Link href="https://github.com/Greg-Johns/eip1559">
            Source Code
          </Link>
          <Link href="https://warpcast.com/gajit">
            Contact
          </Link>
          <Logo>
            <Link href="https://greg-johns.vercel.app/">
              <SvgComponent />
            </Link>
          </Logo>
        </footer>
        <Analytics />
      </main >
    </>
  );
}

const inter = Inter({ subsets: ["latin"] });

interface BlockProps {
  block_bg_img: string;
  gas_target: string;
};
const Block = styled.div<BlockProps>`
  width: 100%;
  height: 300px;
  background-repeat: repeat;
  background-size: 80px 80px;
  background-color: transparent;
  transition-property: background-color;
  transition-duration: 2s;
  background-color: ${props => props.gas_target?.[0] === '-' ? 'rgba(60, 60, 80, .4)' : 'rgba(80, 60, 60, .4)'};
  display: flex;
  align-items: end;
  justify-content: center;
  border: 2px solid rgba(90, 90, 90, .8);
  border-radius: 2px;
  background-image: url(${props => props.block_bg_img});
  padding: 3px;
`;

interface GasUsedPRops {
  gas_used_percentage: string;
}
const GasUsed = styled.div<GasUsedPRops>`
  width: 100%;
  transition-property: height;
  transition-duration: 2s;
  height: ${props => props.gas_used_percentage};
  background-color: #4E4560;
  background-color: rgb(124, 108, 150);
  border: 1px dashed #D6C7F4;
  border-radius: 2px;
  color: #eee;
`;
const GasUsedValue = styled.p`
  color: #fff;
  margin-top: -22px;
  font-size: 12px;
  text-align: center;
  z-index: 20;
`;
const TransactionCount = styled.div`
  text-align: center;
  position: relative;
  margin-top: -12px;
`;

const TipsValue = styled.p`
  color: #F0CDC2;
  font-size: 12px;
`;
const BaseValue = styled.p`
  color: rgb(140, 160, 250);
  margin: 0;
  font-size: 12px;
`;

const GeneralEqualibrium = styled.p`
  margin-top: -151px;
  margin-bottom: 152px;
  margin-left: -2px;
  width: 304px;
  border: .5px solid #46C63B;
  position: relative;
  z-index: 1;
`;

const BaseFeeContainer = styled.div`
  width: 300px;
  height: 300px;
`;

interface BaseFeeProps {
  base_fee_height: string;
}
const BaseFees = styled.div<BaseFeeProps>`
  width: 100%;
  transition-property: height;
  transition-duration: 2s;
  height: ${props => props.base_fee_height};
  background-color: #4E5F73;
  border: 1px dashed #B8FAF6;
  border-radius: 2px;
  margin-left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #eee;
`;

interface TipsProps {
  tips_height: string;
};
const Tips = styled.div<TipsProps>`
  width: 100%;
  height: 20px;
  margin: 4px;
  background-color: #6C5751;
  border: 1px dashed #F0CDC2;
  border-radius: 2px;
  margin-left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #eee;
`;
const FlowImg = styled.div`
  margin-top: 40px;
  text-align: center;
`
const Logo = styled.div`
  margin: 60px;
`
const EthLogo = styled.div`
  margin: 40px;
  margin-left: -24px;
`
const Tcount = styled.div`
  margin-top: 10px;
  padding: 0;
  font-size: 16px;
  text-align: center;
`
