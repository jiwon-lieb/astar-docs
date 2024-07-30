---
sidebar_position: 0
title: Astar zkEVM へのブリッジ
sidebar_label: zkEVMへのブリッジ
---

import bridge1 from '/docs/build/zkEVM/img/astar-bridge-zKatana-Shibuya1.jpg'
import bridge2 from '/docs/build/zkEVM/img/astar-bridge-zKatana-Shibuya2.jpg'
import bridge3 from '/docs/build/zkEVM/img/astar-bridge-zKatana-Shibuya3.jpg'
import bridge4 from '/docs/build/zkEVM/img/astar-bridge-zKatana-Shibuya4.jpg'
import network from '/docs/build/zkEVM/img/zKatana-network1.jpg'
import network1 from '/docs/build/zkEVM/img/add_zkEVM_network1.jpg'
import network2 from '/docs/build/zkEVM/img/add_zkEVM_network2.jpg'
import walletselect from '/docs/build/zkEVM/img/wallet-select.jpg'

## 概要

Here you will find information about how to bridge assets to the Astar zkEVM, both to **zKatana testnet** and to **Astar zkEVM mainnet**. Presently, there are two options for bridging assets to the zkEVM:

1. Ethereum L1 から Astar zkEVM へのブリッジ → ブリッジされた ETH は、Astar zkEVM 上での dApps のテストおよびデプロイに必要なネイティブトークンです。したがって、ネットワークを使用する前に、開発者は Layer 1 から Layer 2 へ ETH をブリッジする必要があります。 Astar Portal を介した Ethereum(Layer 1)から Astar zkEVM(Layer 2)へのブリッジがあり、ネットワークの混雑具合に応じておよそ10〜30 分かかります。 Accessible through the Astar Portal, which can take approximately 10-30 minutes, depending on network usage.
2. Astar Parachain から Astar zkEVMへのブリッジ (現在開発中) → Astar Substrate EVMとAstar zkEVMの間での、ラップされたアセットのロックとミントを容易にする、サードパーティのアセットブリッジやメッセージネットワーク サードパーティのブリッジサービスおよび互換性のあるアセットの使用方法に関する詳細は、[integrations section](/docs/build/zkEVM/integrations/bridges-relays/) をご覧ください。 See the [integrations section](/docs/build/zkEVM/integrations/bridges-relays/) for more information about how to use 3rd-party bridge services and compatible assets._

### Astar Portalを用いたETHの送金

[Astar Portal](https://portal.astar.network)を検索し、MetaMask を接続してください。

:::note
This example is using MetaMask wallet and examples are with for the testnet but same applies for the mainnet.
:::

<div style={{textAlign: 'center'}}>
  <img src={walletselect} style={{width: 400}} />
  </div>

ネットワーク選択から、zKatana network に切り替えてください。もしくは MetaMask に zKatana network への切り替えを許可してください。

<div style={{textAlign: 'center'}}>
  <img src={network} style={{width: 400}} />
  </div>

Click on the Bridge tab on the left-hand side. Ensure Sepolia is selected as Bridge source, and zKatana is selected as destination. After you have entered the amount of ETH to transfer, press the Confirm button.

<div style={{textAlign: 'center'}}>
  <img src={bridge2} style={{width: 1000}} />
  </div>

MetaMaskでトランザクションに署名してください。

:::note
MetaMask のアクティビティタブ上でトランザクションが confirmed として表示されてから、Astar Portal と MetaMask 上で zKatana ネットワークの残高が更新されるまでおよそ 5 -10 分ほどかかります。
:::

<div style={{textAlign: 'center'}}>
  <img src={bridge3} caption="Confirming" style={{width: 1000}} />
  </div>
<div style={{textAlign: 'center'}}>
  <img src={bridge4} caption="Confirmed" style={{width: 1000}} />
  </div>

Astar zkEVM 上で使用可能な ETH が ブリッジされていることがMetaMask 上でご確認いただけるでしょう。
