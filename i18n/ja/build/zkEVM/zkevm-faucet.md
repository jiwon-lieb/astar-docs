---
sidebar_position: 4
title: Astar zkEVM Faucet
sidebar_label: Faucet
---

import sepolia from '/docs/build/zkEVM/img/metamask-sepolia-select.png'
import useBaseUrl from '@docusaurus/useBaseUrl';

## 概要

アカウント作成は必要ありません。 2.5 sETH 手に入ります。 zKatana テストネット上の ETH を直接手にいれる faucet はありません。 [Astar Bridge](./bridge-to-zkevm.md) を使って Sepolia ETH を zKatana テストネットにブリッジすることができます。

## MetaMask を Sepolia テストネットに接続してください。

Open MetaMask and click on the network list (top left corner). MetaMask を開き、左上にあるネットワークの一覧をクリックしてください。 「Show test networks」のトグルを開き、「Sepolia」を選択してください。

<div style={{textAlign: 'center'}}>
  <img src={sepolia} style={{width: 400}} />
  </div>

## Faucets

**Faucet** は Testnet トークンを獲得するために用意されているツールです。

公開されている Sepolia ETH の faucet はこちらから利用可能です：

- https://sepolia-faucet.pk910.de/ - PoW captcha. No account required. Sends 2.5 sETH
- https\://faucet.quicknode.com/ethereum/sepolia - QuickNode により運営されています。 アカウント作成は必要ありません。 0.1 sETH 手に入ります。 No account required. Sends 0.1 ETH.
- https://sepoliafaucet.com/ - Maintained by Alchemy. Account required. Sends 0.5 ETH.
- https\://www\.infura.io/faucet/sepolia - Infura により運営されています。 Alchemy のアカウントが必要です。 Account required.

Sepolia ETH を手に入れたら、[Astar Bridge](./bridge-to-zkevm)を使用して Astar zKatana にアセットをブリッジしてください。
