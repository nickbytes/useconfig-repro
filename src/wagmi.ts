import { getDefaultWallets } from "@rainbow-me/rainbowkit";

import { configureChains, createConfig } from "wagmi";
import { sepolia, mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";

const walletConnectProjectId = "c871fb940a8c6eb1d36812f64bcefc45";

const { chains, publicClient, webSocketPublicClient }: any = configureChains(
  [sepolia],
  [
    alchemyProvider({ apiKey: "OebH4sCJyBxvp7AbJ0sf9Y_noHeVw5ma" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "useconfig repro",
  chains,
  projectId: walletConnectProjectId,
});

export const config: any = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export { chains };
