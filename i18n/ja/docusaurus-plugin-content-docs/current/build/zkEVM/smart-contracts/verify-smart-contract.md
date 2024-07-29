---
sidebar_position: 4
title: スマートコントラクトのVerify
sidebar_label: Verify Contracts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Figure from '/src/components/figure'

Once a smart contract is deployed to zKatana testnet, it can be verified in various ways depending on the framework of deployment as well as the complexity of the contract. The aim here is to use examples to illustrate how you can manually verify a deployed smart contract.

Ensure that your wallet is connected while following this guide. We will use Metamask wallet throughout this tutorial.
このガイドに沿って作業する間、ウォレットが接続されているようにしてください。 このチュートリアルでは、MetaMaskウォレットを使用します。
スマートコントラクトの検証方法詳細については、[Blockscoutドキュメント](https://docs.blockscout.com/for-developers/verify-contracts)を参照してください。

## 手動認証

After successfully compiling a smart contract, follow the next steps to verify your smart contract.

1. スマートコントラクトがデプロイされている**アドレス**をコピーします。

2. Navigate to the [block Explorer](docs/build/zkEVM/quickstart.md) and paste the contract address into the Search box. This opens a window with a box labelled **Contract Details**.

3. **Transactions**、**Token transfers**、**Internal txns**、**Coin Balance History**、**Contract**と表示されたタブのあるボックスまでスクロールします。

4. **Contract**タブを選択し、**Verify and Publish**ボタンをクリックします。

5. There are 3 options to provide the Contract's code. We will be diving into the following two options:
   - Solidity, Flattenedソースコード
   - Solidity、標準JSON入力

### Solidity, Flattenedソースコード

1. **via Flatened Source Code** オプションを選択して **Next** をクリックします。
2. コントラクトのコンパイラーバージョンに基づいて、**コンパイラー** をアップデートするには、

   - Click the ↓ for a list of compiler versions.

   - Select the corresponding version. コントラクトのコンパイラーバージョンに基づいて、コンパイラーをアップデートするには、 たとえば、コードに`pragma solidity^0.8.9;`と書かれている場合は`v0.8.9+commit.e5eed63a`を選択してください。
     コントラクトの最適化設定に基づいて最適化オプションを選択します。 </TabItem> </Tabs>
3. コントラクトの最適化設定に基づいて最適化オプションを選択します。
4. Various frameworks have specific ways to flatten the source code. Our examples are **Hardhat**, **Remix** and **Foundry**. If you are using one file contract and it has no imports, you do not need to flatten the file.

<Tabs>
<TabItem value="hardhat" label="Hardhat" default>
Hardhatを用いてコントラクトコードをflattenするには、次のコマンドを実行するだけで大丈夫です: 

```bash
npx hardhat flatten
```

The result will be printed to stdout. You can create a file with the flattened sources using the `>` redirection operator:

```bash
npx hardhat flatten > flattened.sol
```

新しい`flatented.sol`ファイルの内容をコピーし、エクスプローラの`Contract code`フィールドに貼り付けます。 </TabItem> </TabItem>

<TabItem value="remix" label="Remix">
In order to flatten the contract code with Remix, one needs to only right-click on the contract name and select **Flatten** option from the drop-down menu that appears. See the below figure for reference.

<Figure caption="Selecting the flatten code option" src={require('/docs/build/zkEVM/smart-contracts/img/flatten-code-remix.png').default} width="100%" />

**Flatten**を選択すると、拡張子`_flatten.sol`を持つ新しい`.sol`ファイルが自動的に作成されます。 新しい`<Original-Name>_flatten.sol`ファイルの内容をコピーし、エクスプローラの`Contract code`フィールドに貼り付けます。 </TabItem>
Remixでコントラクトコードをflattenするためには、コントラクト名を右クリックし、表示されるドロップダウンメニューから **Flatten** オプションを選択するだけです。 以下の図を参考にしてください。 </TabItem>

<TabItem value="foundry" label="Foundry">
Foundryを使用してコードをflattenするためには、以下のコマンドを使用してください: 

```bash
forge flatten src/<Contract-Name> -o <Any-Name-For-Flattened-Code>.sol
```

結果は標準出力に表示されます。 `>`リダイレクト演算子を使用して、flattenされたソースコードを含むファイルを作成することができます。 このコマンドを使用すると、flattened codeは、`<Any-Name-For-Flattened-Code>.sol`ファイルに保存されます。 新しい`<Any-Name-For-Flattened-Code>.sol`ファイルの内容をコピーし、エクスプローラの`Contract code`フィールドに貼り付けます。

Select the Compiler based on your contract's compiler version. 対応するバージョンを選択してください。 たとえば、コードに`pragma solidity^0.8.9;`と書かれている場合は`v0.8.9+commit.e5eed63a`を選択してください。
コントラクトコードを提出するには3つの方法があります。 その内、次の2つの選択肢について説明します: </TabItem> </Tabs>

### Solidity, 標準入力のJSON

**via Standard JSON Input** オプションを選択して **Next** をクリックします。

1. コントラクトのコンパイラーバージョンに基づいて、**コンパイラー** をアップデートするには、

   - Click the ↓ for a list of compiler versions.

   - Select the corresponding version. 対応するバージョンを選択してください。 たとえば、コードに`pragma solidity^0.8.9;`と書かれている場合は`v0.8.9+commit.e5eed63a`を選択してください。

2. **Standard Input JSON** ファイルを _standard input JSON ファイルをドロップするか、ここをクリック_と書かれたフィールドに貼り付けます。 standard input JSONファイルはローカルのプロジェクトフォルダにあります。 You can find it in your local project folder.

<details>
<summary>標準入力のJSONファイルを見つけるには</summary>

1. Hardhatプロジェクトの場合は、`src/build-info`フォルダに移動し、`.json`ファイルを開きます。

<Figure src={require('/docs/build/zkEVM/smart-contracts/img/json.png').default} width="35%" />

2. `input` JSON オブジェクトを探します。 json ファイルをフォーマットして読みやすくします。 フレームワークには、ソースコードをflattenする特別な方法を持っているものがあります。 例えば、**Hardhat**、**Remix**、**Foundry**などがそうです。 1つのファイルからなるコントラクトを使用していて、import がない場合は、ファイルをflattenする必要はありません。

3. `input` JSON オブジェクトの値だけを新しいファイルにコピーします

<Figure src={require('/docs/build/zkEVM/smart-contracts/img/input-object.png').default} width="35%" />

4. この新しいファイルを**Drop file of Click here**フィールドにドラッグ&ドロップします。

</details>

5. **Verify & Publish**ボタンをクリックして、デプロイ済みのスマートコントラクトを認証してください。
