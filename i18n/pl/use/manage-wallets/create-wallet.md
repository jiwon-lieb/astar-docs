---
sidebar_position: 1
---

# Astar Walletの作成

## Astarアカウント

### アドレスフォーマット

The address format used in Substrate-based chains like Astar is SS58. SS58 is a modification of Base-58-check from Bitcoin with some minor modifications. Notably, the format contains an address type prefix that identifies an address as belonging to a specific network. Astar Network is special in the Polkadot ecosystem because it's the only parachain that supports EVM as WASM smart contract. With the use of two different virtual machines comes two different kinds of addresses.

- Astarネイティブアドレス、もしくはSS58アドレス
- 0xで始まるAstar EVMアドレス、もしくはH160アドレス

<img width="800" alt="1" src="https://user-images.githubusercontent.com/77480847/186840773-5874ba05-a067-4204-b72f-3f1017de85b7.png" />
<img width="800" alt="2" src="https://user-images.githubusercontent.com/77480847/186840936-692dc1f3-c5a8-450f-813c-6067c60f8cc2.png" />

You will interact with our Astar native address when using WASM dApps are ready or our dApps Staking page. Using this address requires another extension than MetaMask. We recommend using the Polkadot JS extension if you are new to the ecosystem.

## Astar Portal

[Astar Portal]: https://portal.astar.network/

[Astar Portal][] は、私たちのエコシステムにおいて何でも行うための場所です。 Astarの開発者は、エコシステムで交流したいすべての人のためのワンストッププレースを作りました。 Astar のような Substrateベースチェーンで使用されるアドレス形式はSS58です。 SS58は、BitcoinのBase-58-checkに若干の修正を加えたものです。 注目すべきは、アドレスが特定のネットワークに属することを識別するための、アドレスタイププレフィックスを含むフォーマットを含むことです。 Astarエコシステムは、WASMスマートコントラクトとしてEVMをサポートする唯一のParachainであるため、Polkadotエコシステムの中でも特別なParachainとなっています。 2種類の仮想マシンを使用することで、2種類のアドレスが使われます。

Portalを通じて、Astarエコシステムのさまざまなネットワークに接続できます。

- **Astar Network**: PolkadotのParachain
- **Shiden Network**: KusamaのParachain
- **Shibuya**: テストネットParachain

<img width="500" alt="2" src="https://user-images.githubusercontent.com/77480847/186842212-fa88eef0-b768-448e-995f-cc5834eb7c88.png" />

## 推奨: Polkadot\{.js\} ブラウザプラグイン

The Polkadot\{.js\} plugin provides a reasonable balance of security and usability. It provides a separate local mechanism to generate your address and interact with the Astar portal. We recommend users who are new to our ecosystem and want to create an Astar native address use this wallet. Polkadot\{.js\}プラグインは、セキュリティとユーザビリティの合理的なバランスを提供します。 これは、あなたのアドレスを生成し、Astarポータルと対話するための独立したローカルメカニズムを提供します。 エコシステムが初めてで、Astarネイティブアドレスを作成したいユーザーはこのウォレットを使用することを推奨します。 Polkadot JS 拡張機能がない場合、ウォレットを接続しようとすると、Astar Portalでポップアップが表示されます。

### ブラウザプラグインをインストール

ブラウザプラグインは、 [Google Chrome](https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en) (および Brave などの Chromium ベースのブラウザ) と [Firefox](https://addons.mozilla.org/en-US/firefox/addon/polkadot-js-extension) の両方で利用できます。 プラグインをインストールした後、ブラウザのメニューバーに、オレンジ色と白色の Polkadot\{.js\} ロゴが表示されます。 After installing the plugin, you should see the orange and white Polkadot\{.js\} logo in your browser menu bar.

![4](img/4.png)

### アカウント作成

ブラウザのトップバーにあるロゴをクリックして、Polkadot\{.js\}ブラウザ拡張機能を開いてください。 ブラウザポップアップ表示されます。 You will see a browser popup.

![6](img/6.png)

Click the big plus button - "Create new account". 「Create new account」という大きなプラスボタンをクリックします。 Polkadot\{.js\}プラグインは、システムのランダム性を利用して、あなたのために新しいSeedを作り、12個の単語の形で表示します。

![7](img/7.png)

You should back up these words. Please, store the seed somewhere safe, secret, and secure. これらの言葉をバックアップするべきです。 安全な場所にSeedを保管してください。 何らかの理由でPolkadot\{.js\}からアカウントにアクセスできない場合は、「Add account menu」から「Import account from pre-existing seed」を選択することで、Seedを再入力することが可能です。

![8](img/8.png)

Polkadotエコシステム内のどのチェーンでも許可されるアカウントを作成するのがベストです。 このアカウントはPolkadotとKusamaで使用できます。 チェーンに接続すると、アカウントのフォーマットが自動的に変更されます。 This account can then be used for Polkadot and Kusama. Your account will automatically change format when connected to a chain.

A **descriptive name** is arbitrary and for your use only. It is not stored on the blockchain and will not be visible to other users who look at your address via a block explorer. If you're juggling multiple accounts, it helps to make this as descriptive and detailed as needed.

**password** は、アカウントの情報を暗号化するために使用されます。 このアカウントを使って何らかの発信をするときや、メッセージを暗号化して署名するときには、再入力する必要があります。 You will need to re-enter it when using the account for any kind of outgoing transaction or when using it to cryptographically sign a message.

:::danger
このパスワードはSeedフレーズを保護しません \*\*\*\*。 もし誰かがmnemonic seedの12個の単語を知っていれば、パスワードを知らなくても、あなたのアカウントをコントロールすることができるのです。 「Add the account with the generated seed」をクリックすると、アカウントが作成されます。 その際、アカウントを json ファイルとして安全な場所に保存することをお勧めします。
:::

After clicking on "Add the account with the generated seed", your account is created. We recommend also saving your account as json file somewhere safe.

## Astar Portalにウォレットを接続

Return to [Astar Portal] and refresh the page. [Astar Portal][] に戻り、ページを更新します。 Polkadot JSをPortalで使用するために認証が必要であるというポップアップが表示されます。 拡張機能に許可を与えてください！ Give the extension permission to do so!

![9](img/9.png)

When you have given the extension permission, let's connect the wallet. A popup will show with all possible extensions. 拡張機能にアクセス許可を与えられたら、ウォレットを接続しましょう。 使用可能なすべての拡張機能のポップアップが表示されます。 Polkadot JSで新しいアカウントを作成しただけなので、この拡張機能を選択しましょう。

<img width="500" alt="10" src="https://user-images.githubusercontent.com/77480847/186843723-2363e66d-1a16-4653-afdd-61c5d5e29ca7.png" />

「Polkadot JS」をクリックすると、新しく作成したアカウントを選択できます。 アカウントを選択し、「confirm」を押します。 Select your account and press confirm.

<img width="530" alt="11" src="https://user-images.githubusercontent.com/77480847/186843769-9c9ee368-3b74-46ee-8794-a88451b13438.png" />

Astarウォレットを私たちのポータルに正常に接続しました。 なお、このウォレットは、Dotsamaのエコシステムに含まれるすべてのParachainで使用することができます。 Note that you can use this wallet on all parachains in the Dotsama ecosystem.

## サポート

In case you have any problems. Join our community and our Ambassadors will support you. Please remember that we will never DM you first! If you get approached by someone pretending to be part of the team, do not trust them.
