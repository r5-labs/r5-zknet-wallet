import { createAppKit } from '@reown/appkit/react'

import { WagmiProvider } from 'wagmi'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { projectId, metadata, networks, wagmiAdapter } from './config'

import "./App.css";
import {
  BoxSection,
  Divider,
  FullContainerBox,
  FullPageBox,
  Link
} from "./theme";
import { Header } from "./components/Header";
import { ActionBar } from "./components/ActionBar";
import { Balance } from "./components/Balance";
import { TxHistory } from "./components/TxHistory";

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
        <div className="App">
          <FullPageBox>
            <FullContainerBox>
              <Header />
              <Divider />
              <BoxSection>
                <Balance />
                <ActionBar />
              </BoxSection>
              <Divider />
              <BoxSection>
                <TxHistory />
              </BoxSection>
              <Divider />
              <Link href="#">Need help with your ZKNet wallet?</Link>
            </FullContainerBox>
          </FullPageBox>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App
