"use client"

import { createAppKit } from "@reown/appkit/react"
import { EthersAdapter } from "@reown/appkit-adapter-ethers"
import { defineChain, mainnet } from "@reown/appkit/networks"

const projectId = process.env.NEXT_PUBLIC_APPKIT_PROJECT_ID! || "b91c550a7127280f5867aecd63358786"

const metadata = {
    name: "GOKO Presale",
    description: "GOKO Presale Website with information about the presale and the token",
    url: "",
    icons: []
}

type Web3Data = {
    presaleAddress: string;
    usdtAddress: string;
    rpcUrl: string;
}

export const presaleSpecs: {[key: number]: Web3Data} = {
    1: {
        presaleAddress: "0xd6A19Fe3AAaf2D705F2B16aAa6d9F1f8bcC57B73",
        usdtAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        rpcUrl: "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID"
    },
    1337: {
        presaleAddress: "0xd6A19Fe3AAaf2D705F2B16aAa6d9F1f8bcC57B73",
        usdtAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        rpcUrl: "https://ethnode.pxlfussel.org"
    }
}

const pxlTestnet = defineChain({
    id: 1337,
    caipNetworkId: "eip155:1337",
    chainNamespace: "eip155",
    name: "PXL Testnet",
    nativeCurrency: {
        name: "ETH",
        symbol: "ETH",
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: ["https://ethnode.pxlfussel.org"]
        }
    }
});

// Initialize AppKit before any hooks are used
createAppKit({
    adapters: [new EthersAdapter()],
    metadata,
    networks: [mainnet, pxlTestnet],
    projectId,
    features: {
        analytics: false,
    }
});

export function AppKit({children}: {children: React.ReactNode}) {
    return (
        <>
            {children}
        </>
    );
}