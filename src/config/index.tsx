import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { defineChain } from '@reown/appkit/networks'
import type { AppKitNetwork } from '@reown/appkit/networks'
import { testnetChainId, testnetRPCUrl } from '../constants'

// Get projectId from https://cloud.reown.com
export const projectId = import.meta.env.VITE_PROJECT_ID || "b56e18d47c72ab683b10814fe9495694" // this is a public projectId only to use on localhost

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://reown.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

const r5ChainId = testnetChainId

console.log(r5ChainId, testnetRPCUrl)
export const r5network = defineChain({
  id: r5ChainId,
  name: 'R5 Test Network',
  chainNamespace: "eip155",
  caipNetworkId: `eip155:${r5ChainId}`,
  nativeCurrency: {
    name: 'R5',
    symbol: 'R5',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [testnetRPCUrl],
    },
  },
});

// for custom networks visit -> https://docs.reown.com/appkit/react/core/custom-networks
export const networks = [r5network] as [AppKitNetwork, ...AppKitNetwork[]]

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks
})

export const config = wagmiAdapter.wagmiConfig