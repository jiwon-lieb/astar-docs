---
sidebar_position: 0
---

import Figure from "/src/components/figure"

# dAppの管理とリワードの受け取り

dAppオーナーになると、Astar portalのAssetページに**Your Project**という新たなパネルが現れます。

<Figure src={require('/docs/use/dapp-staking/for-devs/img/Project.png').default} width="90%" />

**Your Project**のパネルからあなたのdAppをクリックすると、開発者報酬の受け取りからプロジェクト情報の編集まで、dAppに関わるすべての項目へのアクセスが可能です。

### ダッシュボード：

- **Curent Tier:** The current tier to which your dApp has been assigned. See [Tier system](/docs/use/dapp-staking/for-devs/#tier-system-and-rewards) for more information;
- \*\*ステーカーの人数：\*\*あなたのdAppにステークしている全ユーザーの数
- **合計で稼いだ報酬：** dApp Stakingプログラムで手に入れたトークンの総額

<Figure src={require('/docs/use/dapp-staking/for-devs/img/dApp_owner_page.png').default} width="90%" />

### あなたが得られる報酬：

Here you can see how many tokens you have earned for past periods and what you still have to `claim`;

<Figure src={require('/docs/use/dapp-staking/for-devs/img/dApp_rewards.png').default} width="100%" />

トークン報酬を受け取るには、**Claim your rewards** ボタンをクリックし、ウォレットでトランザクションに署名してください。
報酬を請求すると、ペンディング (受け取り待ち) の報酬がすべてウォレットに入ります。

### Edit:

- **プロジェクトページの編集：** あなたのdApp Stakingプロジェクトの情報を編集することが可能です。
- **オーナー情報の編集：** もし登録されているスマートコントラクトのアドレスや開発者報酬を受け取るアドレスを変更したい場合に使用します。
- **プロモーションカードの追加：** キャンペーンを開催する場合、レビューを受けた上でAstar PortalのdApp Stakingセクションに追加されるプロモーションカードを作成することが可能です。

<Figure src={require('/docs/use/dapp-staking/for-devs/img/dApp_owner_page_2.png').default} width="85%" />
