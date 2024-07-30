---
sidebar_position: 0
title: OpenZeppelinウィザードを使用してスマートコントラクトを作成する
sidebar_label: Write A Contract
---

import Figure from '/src/components/figure'

This document explains how to automatically write any smart contract using the OpenZeppelin Wizard. The resulting smart contract code can either be integrated with Remix by Clicking the **Open in Remix** button, or copied to clipboard and pasted in the user's intended IDE.

## はじめに

ブラウザで [OpenZeppelin Wizard](https://wizard.openzeppelin.com) に移動します。 最初に注意すべきことは、 **Solidity Wizard** と **Cairo Wizard** ボタンがあることです。 First thing to notice is the **Solidity Wizard** and **Cairo Wizard** buttons.

以下に挙げるいずれかのタブを選択し、Solidity (EVMチェーンの場合)またはCairolang(Starknetで使用可能)のすぐに使用可能なスマートコントラクトコードの作成を始めることができます。 These are: These are:

- ERC20: ERC-20トークンのスマートコントラクト作成用
- ERC721: NFT トークンのスマートコントラクト作成用
- ERC1155:ERC-1155トークンのスマートコントラクト作成用
- Governor：DAOの作成用
- Custom: カスタマイズされたスマートコントラクトの作成用

## NFT コントラクトの作成

For illustration purpose, we will be creating a NFT smart contract. Suppose you wanted to create a `Mintable`, `Burnable` `ERC721` token and specify an appropriate license for it.

1. **ERC721** タブを選択します。

2. `Name` と `Symbol`のフィールドを入力し、NFT に名前とシンボルを与えてください。

3. 左側のチェックボックスを使用してトークンの機能を選択してください

- `Mintable`チェックボックスにチェックを入れてください
- `Auto Increment Ids` チェックボックスにチェックを入れると、ミントされるNFTの唯一性が担保されます。
- `Burnable`チェックボックスにチェックを入れてください
- **デフォルトのMIT license**を残すか、ご自身の選択でライセンスを入力してください

機能が選択されるたびに新しいコード行が自動的に書き込まれることに注目してください。

## Voila! Contract Ready

With the resulting lines of code, you now have the NFT token contract written in Solidity. As mentioned above, this source code can now be ported to an IDE of your choice or opened directly in Remix.

以下の図は、自動書き込みにより作成されたNFT スマートコントラクトのコードを示しています。

<Figure caption="The End-Product NFT Source Code" src={require('/docs/build/zkEVM/smart-contracts/img/end-product-nft-code.png').default} width="100%" />
