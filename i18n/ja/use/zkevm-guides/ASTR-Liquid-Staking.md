---
sidebar_position: 4
title: ASTR Liquid dApp Staking
---

import Figure from "/src/components/figure"

# Bifrost Finance による ASTR Liquid dApp Staking

このページでは、**Astar zkEVM**上でBifrost Liquid Stakingソリューションを通じてAstar dApp Stakingに参加する方法について説明します。
[dApp Stakingについて詳細情報](/docs/use/dapp-staking/index/)。\
[More information about dApp Staking](/docs/use/dapp-staking/index/).

Astar L1 (SubtrateまたはEVM)上に`ASTR`を持っている場合は、[このガイド](/docs/use/zkevm-guides/Bridge-Astar-EVM/) を参照して、それらをAstarからAstar zkEVMに転送してください。

## Bifrost Finance

_Astar Foundationは、当社のドキュメンテーションで紹介される第三者アプリケーションの利用により生じる直接的、間接的、偶発的、特別、結果的、または例示的な損害について、一切の責任を負わないことをご了承ください。_

[Bifrost](https://bifrost.app/) は、Polkadotに基づくモジュラー型、スケーラブル、非預託型のオムニチェーンリキッドステーキングパラチェーンです。それはXCMを通じてWeb3のための標準化された、高利回り、安全で信頼性のある元本保証付き資産を提供し、任意のLSTを任意のチェーンで使用するオムニチェーンビジョンを実現しています。[詳細情報](https://docs.bifrost.finance/)。 It provides standardized, high-yield, safe, and reliable underlying interest-bearing assets for Web3 through XCM, and is realizing the omnichain vision of using any LST on the any chain. [More information](https://docs.bifrost.finance/).

Bifrostは、その[SLPx Omichain protocol](https://omni.ls/)  (OmiLS)を介してAstar zkEVM上で利用可能であり、これはAstar EVMやAstar zkEVMなどのEVMチェーンからBifrostパラチェーンにLSDトークンを発行するクロスチェーンメカニズムを可能にします。

ASTRトークンのLiquid Stakingバージョンは**vASTR** (voucher ASTR)と呼ばれ、ステーキングされたASTRのシャドウトークンで、完全な下位のASTRリザーブとASTR dApp Staking報酬の利回り特性を持っています。ユーザーはASTRをAstar zkEVM上のBifrost OmniLSプロトコルに預け、vASTRを返してもらうことができ、vASTRはオープンマーケットで取引されるか、ASTRに引き換えることができます。vASTRを保持することは、ASTRのステーキングポジションを保持することと同等で、ステーキング報酬はvASTRの交換価格を上昇させます。 Users can deposit ASTR into Bifrost OmniLS protocol on Astar zkEVM and get vASTR as return, vASTR can be traded in the open market or be redeemed back to ASTR. Holding vASTR equals to holding the ASTR staking position, staking rewards appreciate the exchange price of vASTR.

:::info
ステーキング報酬に10%の手数料を課金します。
:::

## ASTRをステーキングしてvASTRを受け取る方法：

1. [Bifrost OmniLS](https://omni.ls/) にアクセスし、`vASTR`を選択し、**Astar zkEVM**ネットワーク上のEVMウォレットを接続します。

<Figure src={require('/docs/use/zkevm-guides/img/Bifrost_1.png').default} width="70%" />

2. Enter the amount of `ASTR` you want to stake in Liquid Staking. Liquid Stakingでステーキングしたい`ASTR`の量を入力します。その結果、ASTR/vASTRの比率に従って`vASTR`トークンを受け取ります。
   _クロスチェーン取引手数料（ステーキング額から差し引かれる）を考慮に入れてください。_

<Figure src={require('/docs/use/zkevm-guides/img/Bifrost_2.png').default} width="80%" />

3. `Approve`をクリックしてBifrostに資金へのアクセスを許可し、ウォレットでトランザクションに署名します。

4. `Stake Now`をクリックしてトランザクションを開始し、ウォレットで署名します。

<Figure src={require('/docs/use/zkevm-guides/img/Bifrost_3.png').default} width="80%" />

5. トランザクションは複数のネットワーク（_Astar zkEVM、Astar EVM、Bifrost_）で行われるため、トランザクションがファイナライズされ、vASTRがウォレットに表示されるまでに**最大10分**かかることがあります。
6. vASTRトークンを受け取ったら、それらはAstar zkEVMで使用する準備ができています。

<Figure src={require('/docs/use/zkevm-guides/img/Bifrost_4.png').default} width="80%" />

:::info
To add tokens to your EVM wallet manually, use the following contract addresses:

- **vASTR:** `0x7746ef546d562b443AE4B4145541a3b1a3D75717`
  :::

## vASTRをアンステーキングしてASTRを受け取る方法：

1. [Bifrost OmniLS](https://omni.ls/) にアクセスし、`vASTR`を選択し、**Astar zkEVM**ネットワーク上のEVMウォレットを接続します。

<Figure src={require('/docs/use/zkevm-guides/img/Bifrost_1.png').default} width="70%" />

2. Switch to the **Unstake Panel** and enter the amount of `vASTR` you want to redeem. **Unstake Panel**に切り替え、引き換え(償還)たい`vASTR`の量を入力します。その結果、ASTR/vASTRの比率に従って、ステーキング報酬を含む`ASTR`トークンを受け取ります。
   _クロスチェーン取引手数料（ステーキング額から差し引かれる）を考慮に入れてください。_

<Figure src={require('/docs/use/zkevm-guides/img/Bifrost_5.png').default} width="90%" />

3. `Approve`をクリックしてBifrostに資金へのアクセスを許可し、ウォレットでトランザクションに署名します。

4. `Unstake Now`をクリックしてトランザクションを開始し、ウォレットで署名します。

:::warning
Note that there is a unstaking period of **0 to 10 days**;
:::

<Figure src={require('/docs/use/zkevm-guides/img/Bifrost_6.png').default} width="90%" />

5. トランザクションは複数のネットワーク（_Astar zkEVM、Astar EVM、Bifrost_）で行われるため、トランザクションがファイナライズされ、アンステーキングプロセスが開始されるまでに**最大10分**かかることがあります。

6. アンステーキング期間が終了すると、あなたのASTRトークンと報酬は自動的にあなたのウォレットに届きます。
