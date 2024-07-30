---
sidebar_position: 0
---

import Figure from "/src/components/figure"

# Portalのトラブルシューティングガイド

このセクションでは、Portalへの接続時に発生するほとんどの問題をトラブルシューティングし、解決するためのガイドを提供します。

## Portalにウォレットを接続できない

**PortalへのアクセスをPolkadot.jsに許可する**

1. 「Polkadot.js」ブラウザ拡張機能に移動します。
2. 「Gear」アイコンをクリックします。
3. 「Manage Website Access」をクリックします。
4. 「https\://portal.astar.network」 が許可されていることを確認してください。

**Astar/ShidenでPolkadot.jsを使用できるように許可する**

1. 「Polkadot.js」ブラウザ拡張機能に移動します。
2. 「3つの点」をクリックします。
3. ドロップダウンメニューで「Allow use on any chain」を選択します。
4. 他の拡張機能がインストールされている場合は、それらの拡張機能へのアクセスを取り消してください。

## エラーが発生する、または特定の機能が実行できない

Some of you may be unable to execute certain funtions. Please try these steps.

1. メタデータを更新します (必要な場合)。
2. キャッシュをクリアし、ブラウザを再起動し、ウォレットをPortalに再接続します。
3. 右上隅にある別のエンドポイントに切り替えます。
4. Braveブラウザはエラーが発生しやすいことで知られています。 代わりにChromeまたはFirefoxを使用してください。 一部の方は、特定の機能を実行できない場合があります。 以下の手順を試して下さい。なお、項番がついていますが、順序性はありません。
5. VPNを使用してください。

## ステーキング報酬を受け取ることができない

1. If you can't claim the staking rewards on the portal. Visit [HERE](/docs/use/dapp-staking/for-stakers/manage-dApp-Staking#my-staking-panel).
2. If the transferrable balance in the wallet is too low, you might not be able to claim the staking rewards. Top up your wallet and then claim the rewards.

## トランザクションに署名した後、Portalは無限に回転する

1. トランザクションに署名した後にポータルが無限に回転する場合、ウォレット内の譲渡可能な残高が低すぎて、トランザクションの支払いができません。
2. 新しいASTRトークンでウォレットに入金すると、トランザクションを完了できます。

## Astar PortalのdApp Stakingページにステーキングが表示されません

<Figure src={require('/docs/use/img/Troubleshooting_dApp_Staking.png').default } width="100%" />

1. dApp Stakingから2つのdApps（Arthswap、Sirius Finance）が削除されたため、これらのdAppsにあなたがステーキングしていた場合、dApp Stakingページでステーキングポジションが表示されないことがあります。
2. 関連するdApps：
   - **Arthswap**, contract: `0xE915D2393a08a00c5A463053edD31bAe2199b9e7`
   - **Sirius Finance**, contract: `0x9448610696659de8F72e1831d392214aE1ca4838`
   - **ADAO**, contract: `0x1de7c3A07918fb4BE9159703e73D6e0b0736CaBC`
3. これらの資金を解放するには、保留中のASTR報酬をすべて「請求」する必要があります。
4. 保留中のすべての報酬が請求されると、トークンは保留期間なしでアンロックされ、直接譲渡可能になります。

## "You do not have enough tokens to pay the transaction fee."

1. As the sentence indicates, you do not have enough transferable tokens to cover the transaction fees.
2. ウォレット内の譲渡可能残高が少なすぎる場合、ステーキングの報酬を受け取ることができない場合があります。 ウォレットに入金するか、「auto-restake」 をオフにして報酬を受け取ります。 「auto-restake」をオフにすると、トランザクションの量が減り、必要なガス量も減ります。
3. Bear in mind that tokens locked in dApp Staking, vesting or reserved balances cannot be used to pay gas fees.

## "No reponse received from RPC endpoint in 60s."

<Figure src={require('/docs/use/img/Endpoint_error.png').default } width="35%" />

1. If you encounter this problem, it's probably due to a synchronization problem with the RPC endpoint used by the portal.
2. To solve this problem, you need to reset the connection with the RPC by changing the Portal endpoint.
3. On the Astar portal, click on the Astar logo in the top right-hand corner.
4. Under `Network`, expand the **advanced** panel by clicking on the 3 dots.
5. Modify the endpoint and click on the `Change Network` button to confirm your action.

<Figure src={require('/docs/use/img/Network_modal.png').default } width="40%" />

上記のいずれを実施しても解決できない場合は、 <a href="https://discord.gg/2FGq5KqwBh">Discord</a> にてチームメンバーまたはエコシステムエージェントに連絡してください。
