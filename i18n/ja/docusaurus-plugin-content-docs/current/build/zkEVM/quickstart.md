---
sidebar_position: 0
title: Astar zkEVM クイックスタートガイド
sidebar_label: クイックスタート
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import metamask from '/docs/build/zkEVM/img/metamask-network.png'
import zkHeader from '/docs/build/img/zkHeader.png'

<div style={{textAlign: 'center'}}>
    <img src={zkHeader} style={{width: 1200}} />
</div>

Astar zkEVM は、Ethereum 上のゼロ知識証明を用いたスケーリングソリューションであり、既存の EVM スマートコントラクト、開発ツール、ウォレットがシームレスに動作する **EVM 等価**の環境を提供します。
Astar zkEVM は、ゼロ知識証明の力を利用してトランザクションコストを削減し、処理能力を向上させると同時に、Ethereum のセキュリティを受け継いでいます。 Astar zkEVM harnesses the power of zero-knowledge proofs to reduce transaction costs and increase throughput, while inheriting the security of Ethereum.

Solidity のデベロッパーは Astar zkEVM にすぐに馴染むことができます。 RPC アドレスをzkEVM のものに切り替えるだけで、開発をスタートすることができます！ Simply switch to the zkEVM RPC, and start building!

:::info Reminder
Astar zkEVM 上での開発および運用に特別なツールやウォレットは必要ありません。
:::

Developers can deploy existing contracts from other EVM chains to the zkEVM, and users are able to deposit assets from Ethereum to transact on the zkEVM in batches, which are ultimately finalized through novel use of zero-knowledge proofs. Native account abstraction means developers can craft user interfaces that are more intuitive and web2-like, that eliminate complexity and drastically simplify the onboarding process.

## zkEVM への接続

:::info Reminder

フィードバックはいかなるものであっても歓迎ですし、非常にありがたいです。ですから、エラーやDocsとの不一致があればチームメンバーもしくは[Astar Docs Github repo](https://github.com/AstarNetwork/astar-docs/issues)のイシューにご報告ください。よろしくお願いいたします。
:::
:::

**Astar zkEVM**ネットワークをウォレットに手動で追加するには、以下の詳細情報を入力してください：

<TabItem value="mainnet" label="Astar zkEVM">
| RPC URL | ChainID | Block Explorer URL | Currency |
| ------------------------------- | ---------------- | ---------------- | ----- |
| `https://rpc.startale.com/astar-zkevm` | `3776` | [https://astar-zkevm.explorer.startale.com/](https://astar-zkevm.explorer.startale.com/) | **ETH** |
| `https://astar-zkevm-rpc.dwellir.com` | `3776` | | **ETH** |
</TabItem>

<TabItem value="testnet 2" label="zKyoto Testnet">
| RPC URL | ChainID | Block Explorer URL | Currency |
| ------------------------------- | ---------------- | ---------------- | ----- |
| `https://rpc.startale.com/zkyoto` | `6038361` | [https://zkyoto.explorer.startale.com/](https://zkyoto.explorer.startale.com/) | **ETH** |
| `https://astar-zkyoto-rpc.dwellir.com` | `6038361` | | **ETH** |
</TabItem>

</Tabs>

MetaMaskにネットワークを追加するには、上記のデータを使用するか、対応するブロックエクスプローラーのページ下部にあるリンクを使用します。

## Bridging Assets

次のステップは Ethereum &rarr; Astar zkEVM のアセットの[ブリッジ](/docs/build/zkEVM/bridge-to-zkevm)です。

:::important
Astar 正規の[zkEVM Bridge](https://portal.astar.network)はサードパーティーのブリッジサービスとは違い、カウンターパーティーリスク(信用リスク)を持ちません。そして、プロトコルレベルでトラストレスです。
:::

## スマートコントラクトのデプロイ

The development experience on zkEVM is seamless and identical to the Ethereum Virtual Machine. Developers building on zkEVM can use their existing code and tools to deploy on zkEVM, and dApp users will benefit from higher transaction throughput and lower fees. zkEVM 上の開発体験は、EVM とシームレスであり、全く同じです。 zkEVM 上の開発者は、既存のコードとツールを使用して zkEVM にデプロイでき、dApp ユーザーはより高いトランザクション処理速度と低い手数料を享受できます。 zkEVM 上でスマートコントラクトをデプロイする方法について詳しくは、[こちら](/docs/build/zkEVM/smart-contracts/)をご覧ください。

## 開発者向けの Astar zkEVM サポート

サポートが必要な開発者は、[Ethereum StackExchange](https://discord.gg/astarnetwork)でイシューを開き、それに`Astar`のタグを付ける(推奨)か、[Astar Discord server](https://discord.gg/astarnetwork) に参加することができます。

<details>
<summary>Ethereum StackExchange</summary>

1. [こちら](https://ethereum.stackexchange.com/)から**Ethereum StackExchange**に参加します。

2. Create a new issue.

3. 困っている内容について詳しく説明します。

4. 最後に、Astar チームに知らせるために`Astar`タグを追加します。

</details>
<details>
<summary>Astar Discord server</summary>

1. [こちら](https://discord.gg/astarnetwork)から **Astar Discord** サーバーに参加します。

2. invite を承認してください。

3. **#roles**で**Developer** を選択してください。

4. **Builder/#zkevm-support** チャンネルに移動してください。

</details>
