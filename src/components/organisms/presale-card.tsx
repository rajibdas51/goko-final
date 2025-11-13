"use client"

import type React from "react"
import { useState, useEffect } from "react"


import { calculateTimeLeft } from "@/lib/utils/countdown"
import type { CurrencyType } from "@/types"
import { CornerDecoration } from "../atoms/corner-decoration"
import { CountdownTimer } from "../molecules/count-down-timer"
import { ProgressBar } from "../molecules/progress-bar"
import { InfoRow } from "../molecules/info-row"
import { CurrencyToggle } from "../molecules/currency-toggle"
import { Input } from "../atoms/input"
import { Button } from "../atoms/button"
import Image from "next/image"



import buttonImg from "../../../public/home/button.svg"
import cryptoSmImg from "../../../public/common/crypot-sm.svg"
import gokuSmImg from "../../../public/common/gok-sm.svg"

interface PresaleCardProps {
  onInfoClick: () => void
}

import scractchHeadingImg from "../../../public/how-to-buy/scratch-heading.jpg";




import GrungeHeading from "../atoms/heading";

import usePresale, {presaleAbi, usdtAbi} from "@/hooks/usePresale";

import { PresaleData } from "@/hooks/usePresale";
import { BigNumber } from "bignumber.js"
import { useAppKit, useAppKitAccount, useAppKitConnection, useAppKitProvider, useDisconnect } from "@reown/appkit/react"
import type { Provider } from "@reown/appkit/react"
import { BrowserProvider } from "ethers"
import { presaleSpecs } from "@/context/appkit"
import { useAppKitNetwork } from "@reown/appkit/react"
import { Contract } from "ethers"
import { Eip1193Provider } from "ethers"
import { JsonRpcProvider } from "ethers"

function Title() {
  return (
    <div className="flex justify-center">
      <GrungeHeading
        width="781px"
        height="504px"
        text="BUY $GOKO PRESALE"
        scratchSrc={scractchHeadingImg}
        className="text-[30px] md:text-[38px]"
        scratchOpacity={0.95}
      />
    </div>
  );
}


type UserData = {
  userBalance: BigNumber;
  usdtAllowance: BigNumber;
  userStaked: BigNumber;
}

const offsetAmount = 123000;

export const PresaleCard: React.FC<PresaleCardProps> = ({ onInfoClick }) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(new Date(1763299114000)))
  const [currency, setCurrency] = useState<CurrencyType>("ETH")
  const [amount, setAmount] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");
  const { disconnect } = useDisconnect();
  const { walletProvider } = useAppKitProvider<Provider>("eip155")
  const { address, isConnected } = useAppKitAccount();
  const { chainId } = useAppKitNetwork();
  const { open } = useAppKit();

  const { presale, loading, error } = usePresale({ networkId: 1337, address: address || "" });

  const handleConnectWallet = async () => {
    if(isConnected) {
      await disconnect({ namespace: "eip155" });
      return;
    }

    await open({
      view: "Connect",
    });
  }

  const handleTokenAmount = async (e: string) => {
    const provider = new BrowserProvider(walletProvider)
    const contract = new Contract(presaleSpecs[chainId as number || 1337].presaleAddress, presaleAbi, provider)
    
    const value = currency === "ETH" ? new BigNumber(e).multipliedBy(new BigNumber(presale?.ethPrice.toString() || "0")).shiftedBy(-6).toString() : e;
    console.log(presale?.ethPrice.toString())
    const result = await contract.getTokenAmountByValue(new BigNumber(parseInt(value)).multipliedBy(10**6).toString(), address);
    
    const {0: calcAmount, 1: tokenBonus, 2: calcBonusEligable} = result;

    setTokenAmount(new BigNumber(calcAmount).plus(new BigNumber(tokenBonus)).toString())
  }

  const handleChangeAmount = (e: string) => {
    if(isNaN(e as unknown as number)) {
      setAmount("")
    } else {
      setAmount(e)
    }

    if(parseFloat(e) > 0) {
      setTokenAmount("0.00")
      handleTokenAmount(e)
    }
  }

  const handleBuy = async () => {
    if(isNaN(parseInt(amount)) || parseInt(amount) <= 0) {
      return;
    }

    const provider = new BrowserProvider(walletProvider)
    const signer = await provider.getSigner()
    const contract = new Contract(presaleSpecs[chainId as number || 1337].presaleAddress, presaleAbi, signer);
    const usdtContract = new Contract(presaleSpecs[chainId as number || 1337].usdtAddress, usdtAbi, signer);
    
    let result = null;
    if(currency === "ETH") {
      result = await contract.buyWithETH({ value: new BigNumber(parseInt(amount)).multipliedBy(10**18).toString() })
    } else {
      if(new BigNumber(userData?.usdtAllowance.toString() || "0").lt(new BigNumber(parseInt(amount)).multipliedBy(10**6).toString())) {
        const approve = await usdtContract.approve(presaleSpecs[chainId as number || 1337].presaleAddress, new BigNumber(parseInt(amount)).multipliedBy(10**6).toString())
        approve.wait().then(async () => {
          result = await contract.buyWithUSDT(new BigNumber(parseInt(amount)).multipliedBy(10**6).toString())
        })
      } else {
        result = await contract.buyWithUSDT(new BigNumber(parseInt(amount)).multipliedBy(10**6).toString())
      }
    }

    console.log(result)
  }

  const handleCurrencyChange = (currency: CurrencyType) => {
    setCurrency(currency)
    handleTokenAmount(amount)
  }
  
  useEffect(() => {
      const fetchUserData = async () => {
        if(!address) return;
        const provider = new BrowserProvider(walletProvider)
        const contract = new Contract(presaleSpecs[chainId as number || 1337].presaleAddress, presaleAbi, provider)
        const usdtContract = new Contract(presaleSpecs[chainId as number || 1337].usdtAddress, usdtAbi, provider)

        const userBalance = await contract.mapClaimableTokenAmount(address)
        const userStaked = new BigNumber(0);

        const usdtAllowance = await usdtContract.allowance(address, presaleSpecs[chainId as number || 1337].presaleAddress)

        setUserData({ userBalance, usdtAllowance, userStaked })
      }

      fetchUserData();

      const fetcher = setInterval(() => {
        fetchUserData();
      }, 5000)

      return () => clearInterval(fetcher);
  }, [address, walletProvider, chainId])

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("presale start time: " + presale?.presaleStartTime.toString());
      console.log("time left: " + new BigNumber(presale?.presaleStartTime.toString() || "0").plus(5 * 24 * 60 * 60).multipliedBy(1000).toNumber());
      setTimeLeft(calculateTimeLeft(new Date(new BigNumber(presale?.presaleStartTime.toString() || "0").plus(5 * 24 * 60 * 60).multipliedBy(1000).toNumber())))
    }, 1000)

    return () => clearInterval(timer)
  }, [presale?.presaleStartTime])

  return (
    <div className="card-bg rounded-2xl p-[13px] md:p-8 space-y-6 mx-auto lg:mr-auto relative !border-white/15 
            !bg-white/5 !backdrop-blur-xl !backdrop-saturate-150 custom-font-display">
      {/* <div className="!card-bg relative rounded-2xl border-2 border-[#4a4a3a] p-[13px] md:p-8 space-y-6 mx-auto lg:mr-auto"> */}
      <CornerDecoration position="top-left" />
      <CornerDecoration position="top-right" />
      <CornerDecoration position="bottom-left" />
      <CornerDecoration position="bottom-right" />

      {/* <Image src={preSaleImg} alt="pre-sale" className="max-w-[265px] max-h-[41px] mx-auto" /> */}
      <Title />

      <CountdownTimer time={timeLeft} />

      <div className="text-fill-color text-center text-[18px] lg:text-[20px] uppercase">UNTIL NEXT PRICE INCREASE</div>


      <ProgressBar current={parseFloat(new BigNumber(presale?.usdtRaised.toString() || "0").shiftedBy(-6).plus(new BigNumber(offsetAmount)).toFixed(2))} target={400000} />

      <div className="text-center space-y-2 ">
        <div className="text-fill-color text-lg md:text-[32px] ">1 $GOKO = {currency === "ETH" ? new BigNumber(presale?.ethValue.toString() || "0").toFixed(8) : new BigNumber(presale?.stagePrice.toString() || "0").shiftedBy(-6).toString()} {currency}</div>
        <InfoRow label="YOUR PURCHASED $GOKO =" value={new BigNumber(userData?.userBalance.toString() || "0").shiftedBy(-18).toString()} onInfoClick={onInfoClick} />
        <InfoRow label="YOUR STAKED $GOKO =" value={new BigNumber(userData?.userStaked.toString() || "0").shiftedBy(-18).toString()} onInfoClick={onInfoClick} />
      </div>

      <CurrencyToggle selected={currency} onSelect={handleCurrencyChange} />

      <div className="grid grid-cols-2 gap-8">
        <div className="card-bg">

          <Input
            value={amount}
            onChange={handleChangeAmount}
            placeholder="0.00"
            className="text-fill-color py-4"
            icon={<span><Image src={cryptoSmImg} alt='crypto-sm' /></span>}
          />
        </div>

        <div className="card-bg">
          <Input
            value={tokenAmount}
            onChange={setAmount}
            placeholder="0.00"
            className="text-fill-color py-4"
            icon={<span><Image src={gokuSmImg} alt='goku-sm' /></span>}
        />
        </div>
      </div>

      <Image src={buttonImg} onClick={handleBuy} alt="buy" className="cursor-pointer w-full" />

      {/* <Button className="w-full !mb-4" size="lg">
        BUY
      </Button> */}

      <div className="grid grid-cols-2 gap-4">
        <Button variant="secondary" className="token-bonuses-bg !px-0">
          <span className="text-fill-color">TOKEN BONUSES</span>
        </Button>
        <Button variant="secondary" className="token-bonuses-bg !px-0" onClick={handleConnectWallet}>

          <span className="text-fill-color">{address ? address.slice(0, 4 ) + "..." + address.slice(-4) : "CONNECT WALLET"}</span>
        </Button>
      </div>

      <p className="text-center text-fill-color text-[20px]">DON'T HAVE A WALLET?</p>
    </div>
  )
}
