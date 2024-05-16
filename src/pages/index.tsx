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
      reset();
    }
  }, [block_count]);

  const reset = () => {
    clearInterval(intervalId);
    setIntervalId(0);
    set_block_count(0);
    set_gas_target(blockData[0]?.percentOfGasTarget);
    set_base_fee(blockData[0]?.baseFee);
    set_base_fee_height(blockData[0]?.burntFeesPercentage);
    set_base_fees_value(blockData[0]?.burntFeesEth);
    set_tips_value(blockData[0]?.reward);
    set_block_num(19874198)
    set_gas_used_percentage(blockData[0]?.gasUsedPercentage);
    set_transactions(blockData[0]?.txn);
    set_recipient(_ => blockData[0]?.feeRecipientNametag)
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
          Ethereum&#39;s EIP-1559 is a fee pricing mechanism to help smooth out spikes in gas prices and targets a general equilibrium of 15 million gwei per block.  It introduced a base fee that get&#39;s burned this helps with sybil and spam attacks with an additional benefit of helping reduce ETH issuance and at times even making Eth <Link href="https://ultrasound.money/">deflatioinary</Link>.
        </p>
        <p>
          The base fee is adjusted up or down every block so that the average gas usage per-block remains at a level close to the current gas limit and introduced a cap on transactional gas units a block may have in exchange for a variable byte block size.  As Vitalik points out.
        </p>

        <aside>
          Essentially, instead of all of the short-term volatility in demand for transaction space within a block translating into volatility in transaction fees, some of the volatility instead translates into volatility in block size.
          <Link href="https://notes.ethereum.org/@vbuterin/eip-1559-faq">- V. Buterin</Link>
        </aside>

        <p>
          Viewing Etherscan charts for <Link href="https://etherscan.io/chart/gaslimit">network utilization</Link> and for <Link href="https://etherscan.io/chart/networkutilization">average gas limit used</Link> we can observe some positive results towards EIP-1559&#39;s goals and viewing information on the <Link href="https://etherscan.io/blocks">latest blocks</Link> we can see how some of these key metrics change on a per block basis. Let&#39;s take this spreadsheet style format and visualize some of key variables in a way to better see how EIP-1559 works that feels more intuitive.
        </p>

        <h3>User Transactions</h3>
        <p>
          When a user submits a transaction on Ethereum they need to pay enough Eth to cover the computation/storage as well as a base fee and priority fee (tip) all expressed in gas units. These transactions are picked up by validator nodes and put in the mempool for inclusion into a block by a proposing validator.
        </p>

        <h3>Proposer / Block Builder</h3>
        <p>
          The proposer picks transactions from the mempool to pack into a block. For each transaction that&#39;s included we can separate out the three types of gas units it needs to pay into the base fee units, transactional units and tips. Since all are expressed in gas units, let&#39;s view a block in terms of the total transactional gas units in proportion to the 30 million gas limit and also track the total base fees and tips in proportion to each other. We can then get a picture of a pending block and the process it takes to land onchain where the newly validated blocks gas usage / target are used to calculate the next blocks gas price.
        </p>


        <FlowImg>
          <Image fetchPriority="high" alt="block flow" src={block_flow} />
          {/* <Image fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fetchPriority="high" alt="block flow" src={block_flow} /> */}
        </FlowImg>

        <p>
          The following animation shows how these three variables play out over time to target a general equalibrium. The data is taken from Etherscan on May 15th 2024 for blocks 1987196 to 19874237.
        </p>

        <div id='container'>
          <Block block_bg_img={block_bg_img}>
            <GasUsed gas_used_percentage={gas_used_percentage}>
              <GasUsedValue>{gas_used_percentage} full {gas_target} {gas_target?.[0] === '-' ? 'below' : 'above'} target</GasUsedValue>
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
        <Tcount>Transaction count: {transactions}</Tcount>
        <Tcount>Base fee for inclusion: {base_fee}</Tcount>
       
        <button onClick={playPause}>
          {intervalId ? "Stop chain" : "Start chain"}
        </button>

        {/* <Tcount>Change block time {block_speed / 1000} Seconds</Tcount>
        <div>
          <input type="radio" id="4" name="block_speed" value="4000" onClick={() => set_block_speed(4000)} />
          <label htmlFor="4">4 sec</label>
          <input type="radio" id="6" name="block_speed" value="6000" onClick={() => set_block_speed(6000)} />
          <label htmlFor="6">6 sec</label>
          <input type="radio" id="12" name="block_speed" value="12000" onClick={() => set_block_speed(12000)} />
          <label htmlFor="12">12 sec</label>
        </div> */}

        <p>
          I set the block time set to 4 seconds per slot to speed things up a bit and hope to improve on the data visual by providing a more live view of current blocks.  Beyond that maybe expand out to include <Link href="https://vitalik.eth.limo/general/2024/05/09/multidim.html?">Multidimensional gas pricing</Link> so please reach out if you have any comments or questions.</p>

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
};
const Block = styled.div<BlockProps>`
  width: 100%;
  height: 300px;
  background-repeat: repeat;
  background-size: 80px 80px;
  background-color: transparent;
  background-color: rgba(80, 60, 60, .4);
  display: flex;
  align-items: end;
  justify-content: center;
  border: 2px solid rgba(90, 90, 90, .8);
  border-radius: 2px;
  background-image: url(${props => props.block_bg_img});
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
  display: flex;
  justify-content: center;
  color: #eee;
`;
const GasUsedValue = styled.p`
  color: #999;
  margin-top: -20px;
  font-size: 12px;
  z-index: 20;
`;

const TipsValue = styled.p`
  color: #F0CDC2;
  font-size: 12px;
`;
const BaseValue = styled.p`
  color: rgb(140, 160, 250);
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
  font-size: 11px;
`
