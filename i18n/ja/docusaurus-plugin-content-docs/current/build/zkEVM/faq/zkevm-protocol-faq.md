---
sidebar_position: 0
title: zkEVMのプロトコルに関する質問
sidebar_label: プロトコルに関する質問
---

This document compiles some of the frequently asked questions related to the Astar zkEVM protocol. このドキュメントでは、Astar zkEVM のプロトコルに関するよくある質問を解説します。 詳細については、[Polygon zkEVM documentation](https://wiki.polygon.technology/docs/category/zkevm-protocol/)をご覧ください。

---

### How are transactions collected and ordered?

- Astar zkEVMネットワーク上のトランザクションは**ユーザーのウォレットで作成され、そこで管理されている秘密鍵で署名されます**。
- 生成され署名されると、**トランザクションは信頼されているシーケンサーのノードに送信**されます。その際、JSON-RPCインターフェイスを介してやり取りがなされます。
- それからトランザクションは、**保留中のトランザクションプールに保存され、シーケンサーに選択されるのを待ちます**。
- **シーケンサーはプールからトランザクションを読み取り**、それを棄却するか、注文し、実行するかを決めます。
- 最後に、**シーケンサーはトランザクションをバッチにまとめ**、次にバッチの順序づけを行います。

### Rollupバッチを作る前にシーケンサーが待つ時間やトランザクションのインターバルはありますか?

The sequencer always has an open batch. Transactions are added to this batch until this batch is full or a big timeout happens. Those batches are also accumulated until it reaches 128K of batches (or a big timeout) and then a sequencing transaction to Layer 1 is sent.

From the Layer 2 user perspective, a new Layer 2 block (different from the Layer 2 batch) is closed and sent to the user. The user perceives the transaction finality even if the Layer 2 batch is not closed. **One Layer 2 Transaction is one Layer 2 Block**.

### L1でファイナライズされるためにトランザクションはどのような過程を通過しますか?

バッチ内の特定のトランザクションを検証するプロセスには、通常、3つのステップが必要です。

1. **Trusted State:** This state is given by the trusted sequencer almost instantaneously. No Layer 1 transactions are required.

2. **Virtual State:** トランザクションはL1にあります。 状態が確定的で、計算が容易なため、この状態のトランザクションとその順番は変更できません。 These transactions and their order cannot be modified as the state is final and anybody could calculate.

3. **Verified State:** virtual stateがスマートコントラクトによって検証されると、資金を引き出すことが可能になります。

### シーケンサーは証明を生成するためにどのようにトランザクションを検証しますか?

シーケンサーはトランザクションプールからトランザクションを取得し、それが正しくフォーマットされ、必要なすべての情報を含んでいることを確認します。 シーケンサーは以下の点をチェックします： The Sequencer does the following checks:

- 送金者がトランザクションのガス代とスマートコントラクトにより必要とされる十分な資金を持っていることを確認することで、取引が有効であることを確認します。 もし十分な資金を持っていれば、有効で、正しいバイトコードを生成します。

- 送信者のトランザクションナンスをチェックし、最後に使用されたナンスより1だけ大きいものであることを確認することで、トランザクションが複製されていないことを確認します。

- 送信者の口座残高が別のトランザクションで既に使われていないことを確認して、トランザクションが二重支払いでないことを確認します。

Once the transaction is deemed valid, the Sequencer applies the transaction to the current state of the Astar zkEVM, updating the state of the smart contract and the account balances as necessary. Duration and cost vary depending on traffic and prevailing gas prices.

### トランザクションがAstar zkEVMでファイナリティを達成するのはいつですか?

**ユーザーがシーケンサーを信頼している場合**、トランザクションはシーケンサーにより順序づけられた時点 (すなわちTrusted State) で確定したとみなされます。

**ユーザーがL1の状態のみを信頼する場合**、トランザクションは**Virtual State**に到達した瞬間に確定します。 つまり、データが利用可能で、トランザクションが既にL1にある状態になった瞬間です。 This means, once the data is available and the transaction is already on Layer 1.

**In case the user needs to withdraw funds**, he/she needs to wait for the Prover to convert the implicit state to an explicit state. We call this last state the **Consolidated or Verified State**.

### Are Sequencers and Provers in-house or external? How do you ensure that your Sequencers and Provers maintain decentralization?

Astar zkEVMの**シーケンサーは、初期段階においては中央集権的にならざるを得ません。** 今後のリリースでシーケンサーを分散化するロードマップがあります。 We have a roadmap to decentralize the sequencer in future releases.

Likewise, the **Prover is also centralized at the beginning** but the vision is to enable a Provers market. Provers cannot do much but generate proofs. To have a decentralized system of Provers is much more critical (and difficult) than the Sequencer.

### zkNode はシーケンサーとアグリゲーターの両方として機能できますか? そうでない場合、ノードが果たす役割をどのようにして決定するのですか?

zkNode は、ゼロ知識証明プロトコルの具体的な実装に応じて、シーケンサーとアグレガターの両方として機能することが可能です。

In some implementations, a node may only be able to perform one function or the other. The role a node can play is determined by the specific implementation of the protocol and the requirements of the network. For example, some protocols may require a certain number of nodes to perform the role of sequencer and a certain number to perform the role of aggregator in order to ensure the security and efficiency of the network.

### 状態同期コンポーネントは、トランザクションバッチとその有効性証明がL1上でミントされた後、どのようにしてL2で同期されますか?

簡単にまとめると、バッチごとに、`globalExitRoot`という名前のハッシュが**L1 &rarr; L2**へと転送され、`localExitRoot`という名前の別のハッシュが**L2 &rarr; L1**へと転送されます。

`globalExitRoot` は主に、全ての入金内容を含んでおり、`localExitRoot` は全ての出金内容を含んでいます。

### Forced Batchとは何ですか?

A Forced Batch is an Layer 2 batch included in an Layer 1 transaction. Trusted Sequencer is forced to include those batches. This is how a user guarantees that they can withdraw funds even if they are censored by Trusted Sequencer.

この性質に、よりシステムの検閲耐性を模倣します。

### Emergency Stateとは何ですか、そしてどのような時、それは発動しますか？

Emergency State halts the functionalities such as the sequencing of batches, verifying of batches, and forced batches.

It can be triggered by the owner of a smart contract or, in the case of Astar zkEVM, by a Security Council multisig. This means that the Security Council can invoke the Emergency State if the pending state timeout is reached or a threatening vulnerability occurs.
