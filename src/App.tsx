import { createAppKit } from '@reown/appkit/react'

import { WagmiProvider } from 'wagmi'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { projectId, metadata, networks, wagmiAdapter } from './config'

import "./App.css";
import {
  BoxSection,
  FullContainerBox,
  FullPageBox
} from "./theme";
import { Header } from "./components/Header";
import { ActionBar } from "./components/ActionBar";
import { Balance } from "./components/Balance";
// import { TxHistory } from "./components/TxHistory";
import { ZkContextProvider } from './contexts/ZkContext';

const queryClient = new QueryClient()

const generalConfig = {
  projectId,
  networks,
  metadata,
  themeMode: 'light' as const,
  themeVariables: {
    '--w3m-accent': '#000000',
  }
}

// Create modal
createAppKit({
  adapters: [wagmiAdapter],
  ...generalConfig,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

export function App() {

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ZkContextProvider>
          <div className="App">
            <FullPageBox>
              <FullContainerBox>
                <Header />
                <BoxSection>
                  <Balance />
                  <ActionBar />
                </BoxSection>
              </FullContainerBox>
            </FullPageBox>
          </div>
        </ZkContextProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
