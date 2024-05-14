import Head from "next/head";
import { useState, useEffect } from "react";
// import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import styled from "@emotion/styled";

export default function Home() {
  const block_bg_img = `"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500' fill-opacity='.4' style='enable-background:new 0 0 500 500'%3E%3Cstyle%3E .st2{fill:rgb(109, 104, 104)} %3C/style%3E%3Cg style='display:none'%3E%3Cpath style='display:inline;fill:%23414042' d='M-8.3-5.7h520.7V511H-8.3z' id='Layer_2'/%3E%3C/g%3E%3Cg id='Layer_1'%3E%3Cpath transform='rotate(-45.001 0 .055)' class='st2' d='M-453.7-3.7h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 31.25 31.306)' class='st2' d='M-422.5 27.6H485v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 62.5 62.556)' class='st2' d='M-391.2 58.8h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 93.75 93.807)' class='st2' d='M-360 90.1h907.5v7.5H-360z'/%3E%3Cpath transform='rotate(-45.001 125 125.057)' class='st2' d='M-328.7 121.3h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 156.249 156.308)' class='st2' d='M-297.5 152.6H610v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 187.499 187.558)' class='st2' d='M-266.2 183.8h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 218.749 218.809)' class='st2' d='M-235 215.1h907.5v7.5H-235z'/%3E%3Cpath transform='rotate(-45.001 249.998 250.06)' class='st2' d='M-203.7 246.3h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 281.248 281.31)' class='st2' d='M-172.5 277.6H735v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 312.498 312.56)' class='st2' d='M-141.2 308.8h907.5v7.5h-907.5z'/%3E%3Cpath transform='rotate(-45.001 343.748 343.81)' class='st2' d='M-110 340.1h907.5v7.5H-110z'/%3E%3Cpath transform='rotate(-45.001 374.997 375.061)' class='st2' d='M-78.7 371.3h907.5v7.5H-78.7z'/%3E%3Cpath transform='rotate(-45.001 406.247 406.312)' class='st2' d='M-47.5 402.6H860v7.5H-47.5z'/%3E%3Cpath transform='rotate(-45.001 437.497 437.562)' class='st2' d='M-16.2 433.8h907.5v7.5H-16.2z'/%3E%3Cpath transform='rotate(-45.001 468.747 468.813)' class='st2' d='M15 465.1h907.5v7.5H15z'/%3E%3Cpath transform='rotate(-45.001 499.997 500.064)' class='st2' d='M46.3 496.3h907.5v7.5H46.3z'/%3E%3C/g%3E%3C/svg%3E"
  `;
  const base_fees_value = '0.1432 ETH';
  const tips_value = '0.0118 ETH';
  const gas = [
    { gasUsed: 9.87, targetPercentage: -80 },
    { gasUsed: 83.22, targetPercentage: 66 },
    { gasUsed: 37.04, targetPercentage: -26 },
    { gasUsed: 50.85, targetPercentage: 2 },
    { gasUsed: 57.92, targetPercentage: 16 },
    { gasUsed: 93.51, targetPercentage: 87 },
    { gasUsed: 4.33, targetPercentage: -91 },
    { gasUsed: 60.65, targetPercentage: 21 },
    { gasUsed: 36.47, targetPercentage: -27 },
    { gasUsed: 51.26, targetPercentage: 3 },
    { gasUsed: 68.69, targetPercentage: 37 },
    { gasUsed: 4.72, targetPercentage: -91 },
    { gasUsed: 99.31, targetPercentage: 99 },
    { gasUsed: 5.42, targetPercentage: -89 },
    { gasUsed: 100.00, targetPercentage: 100 },
    { gasUsed: 52.63, targetPercentage: 5 },
    { gasUsed: 91.06, targetPercentage: 82 },
    { gasUsed: 38.03, targetPercentage: -24 },
    { gasUsed: 44.54, targetPercentage: -11 },
    { gasUsed: 65.16, targetPercentage: 30 },
    { gasUsed: 41.25, targetPercentage: -17 },
    { gasUsed: 53.08, targetPercentage: 6 },
    { gasUsed: 36.74, targetPercentage: -27 },
    { gasUsed: 42.34, targetPercentage: -15 },
    { gasUsed: 56.99, targetPercentage: 14 }
  ];
  const tipReward = [
    '7760000',
    '340000',
    '25220000',
    '40380000',
    '16990000',
    '72320000',
    '250000',
    '1450000',
    '116080000',
    '5140000',
    '87520000',
    '2750000',
    '39130000',
    '3560000',
    '11490000',
    '30880000',
    '101090000',
    '16590000',
    '58780000',
    '37480000',
    '50780000',
    '36790000',
    '43860000',
    '22110000',
    '49540000',
  ]
  const baseFee = [
    3.96,
    3.66,
    3.78,
    3.77,
    3.7,
    3.34,
    3.77,
    3.67,
    3.8,
    3.78,
    3.62,
    4.08,
    3.63,
    4.09,
    3.63,
    3.61,
    3.27,
    3.37,
    3.42,
    3.29,
    3.37,
    3.34,
    3.46,
    3.52,
    3.46,
  ]
  const [gas_used, set_gas_used] = useState(gas[0].gasUsed);
  const [gas_target, set_gas_target] = useState(gas[0].targetPercentage);
  const [tips_height, set_tips_height] = useState(20);
  const [base_fee_height, set_base_fee_height] = useState(44);

  let i: number = 0;
  useEffect(() => {
    const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
      i++;
      if (i > gas.length) {
        i = 1;
      }
      set_gas_used(gas[i].gasUsed)
      set_gas_target(gas[i].targetPercentage)
    }, 6000)

    return () => clearInterval(intervalId); //This is important
  }, [i]);

  return (
    <>
      <Head>
        <title>Ethereum Gas Machine</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h2>Visualizing EIP-1559</h2>
        <div id='container'>
          <h6>Proposal Block</h6>
          <Block block_bg_img={block_bg_img}>
            <GasUsed gas_used={gas_used}>
              <GasUsedValue>{gas_used}% full | {gas_target}% {gas_target.toString()[0] === '-' ? 'below' : 'above'} target</GasUsedValue>
            </GasUsed>
          </Block>
          <GeneralEqualibrium />
          <Tips tips_height={tips_height}>
            <TipsValue>{tips_value}</TipsValue>
          </Tips>
          <BaseFeeContainer>
            <BaseFees base_fee_height={base_fee_height}>
              <BaseValue>{base_fees_value}</BaseValue>
            </BaseFees>
          </BaseFeeContainer>
        </div>
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
    background-image: url(${props => props.block_bg_img});
  `;

interface GasUsedProps {
  gas_used: number;
};
const GasUsed = styled.div<GasUsedProps>`
    width: 100%;
    transition-property: height;
    transition-duration: 2s;
    height: ${props => props.gas_used}%;
    background-color: #4E4560;
    background-color: rgb(124, 108, 150);
    border: 1px dashed #D6C7F4;
    display: flex;
    justify-content: center;
    color: #eee;
  `;
const GasUsedValue = styled.p`
    color: #999;
    margin-top: -18px;
  `;

const TipsValue = styled.p`
    color: #F0CDC2;
  `;
const BaseValue = styled.p`
    color: rgb(140, 160, 250);
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
    height: 300px;
  `;

interface BaseFeesProps {
  base_fee_height: number;
};
const BaseFees = styled.div<BaseFeesProps>`
    width: 100%;
    height: ${props => props.base_fee_height}%;
    background-color: #4E5F73;
    border: 1px dashed #B8FAF6;
    margin-left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #eee;
  `;

interface TipsProps {
  tips_height: number;
};
const Tips = styled.div<TipsProps>`
    width: 100%;
    height: ${props => props.tips_height}px;
    margin: 4px;
    background-color: #6C5751;
    border: 1px dashed #F0CDC2;
    margin-left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #eee;
  `;

