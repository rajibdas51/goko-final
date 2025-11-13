import { useEffect, useState } from "react";
import presaleAbi from "@/context/abis/GOKOPresale.json";
import usdtAbi from "@/context/abis/usdt.json";
import { Contract, JsonRpcProvider } from "ethers";
import { presaleSpecs } from "@/context/appkit";
import BigNumber from "bignumber.js";

type PresaleData = {
    presaleStatus: boolean;
    presaleStartTime: BigNumber;
    claimStatus: boolean;
    tokensSold: BigNumber;
    usdtRaised: BigNumber;
    actualStage: BigNumber;
    stagePrice: BigNumber;
    ethPrice: BigNumber;
    ethValue: BigNumber;
}

export default function usePresale({ networkId, address }: { networkId: number, address: string }) {
    const [presale, setPresale] = useState<PresaleData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchPresaleData = async () => {
            setLoading(true);
            setError(null);

            try {
                
                const provider = new JsonRpcProvider(presaleSpecs[networkId].rpcUrl);

                const presaleContract = new Contract(presaleSpecs[networkId].presaleAddress, presaleAbi, provider);

                const presaleStatus = await presaleContract.presaleStatus();
                const presaleStartTime = await presaleContract.presaleStartTime();
                const claimStatus = await presaleContract.claimStatus();
                const tokensSold = await presaleContract.tokensSold();
                const usdtRaised = await presaleContract.usdtRaised();
                const actualStage = await presaleContract.actualStage();
                const stagePrice = await presaleContract.stagePrices(actualStage);
                const ethPrice = await presaleContract.getETHPrice();
                const ethValue = new BigNumber(stagePrice).dividedBy(new BigNumber(ethPrice));

                setPresale({presaleStatus, presaleStartTime, claimStatus, tokensSold, usdtRaised, actualStage, stagePrice, ethPrice, ethValue });
            } catch (error) {
                setError(error as Error);
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchPresaleData();

        const fetcher = setInterval(() => {
            fetchPresaleData();
        }, 10000);

        return () => clearInterval(fetcher);
    }, [networkId, address]);

    return { presale, loading, error };
}

export { presaleAbi, usdtAbi }

export type { PresaleData };