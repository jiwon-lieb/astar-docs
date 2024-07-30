---
sidebar_position: 2
---

import Figure from "/src/components/figure"

# dApp Stakingの管理と報酬の請求

ステーキングを行った後、[アセットページ](https://portal.astar.network/astar/assets) に **STAKING** という名前の新しいパネルが表示されるようになります。

### MY STAKING パネル：

「My Staking Panel」は、ステーキングしているトークンとロックされたトークンを追跡し、保留中の報酬を確認、トークンや報酬に対するアクションを行う場所です。

- **Locked amount:** アドレスにロックされたトークンの合計数;
  - **Unlock (↑):** ロックされたトークンを解除する([unlocking parameters](/docs/use/dapp-staking/for-stakers/unstaking#overview) に従って);
  - **Stake (↓):** ロックされたトークンをdApp Stakingにステーキングします;
- **Staked amount**: ステーキングしたトークンの合計金額;
- **Rewards**: 推定される基本報酬とボーナス報酬の合計
  - **Available**: **Build\&Earn subperiod**中に獲得された推定基本報酬;
  - **Bonus:** **Vote subperiod**中に、条件を満たしている場合に獲得される推定ボーナス報酬;

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/Staking_Panel_1.png').default } width="100%" />

報酬を受け取るには、**Claim Button**をクリックしてトランザクションに署名する必要があります。

未請求の報酬（`Eras`）が多数ある場合は、すべての報酬を受け取るために複数の`Claim`を行う必要があるかもしれません。

dApp上のすべての保留中の報酬は、再度ステーキングする前に請求されなければなりません。

:::tip

ステーキングを解除した後、それらのERAが経過すると、引き出すことができるようになります。 [Unlocking](/docs/use/dapp-staking/for-stakers/unstaking/) に関する詳細情報。\
ロック解除期間の長さは [こちら](/docs/use/dapp-staking/for-stakers/#parameters) で確認することができます。

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/Claiming_Rewards.png').default } width="100%" />

:::

### MY DAPPS パネル

MY DAPPS パネルは、あなたがステーキングしているすべてのdAppsを見ることができる場所です。

- **Bonus:** このdAppsの [ボーナス](/docs/use/dapp-staking/for-stakers/#bonus-staking-rewards) の対象となる場合;
- **Move (→) :** ステーキングしたトークンを異なるdApp間で移動できます;
- **Add (↓) :** 希望のdAppにトークンを追加できます;
- **Unbond (↑) :** ステーキングされている額から何トークン解除するかを選択できます。

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/MydApps_Panel_1.png').default } width="100%" />

### UNLOCKING パネル:

The unlocking panel is where you can see the progress of unlocking and withdrawing.
For the runtime logic, when unlocking, you don’t unlock from a specific dApp but unlock as `Chunks`. First pending unlocking gives Chunk 1, second pending unlocking gives Chunk 2 etc.

After you have unstaked and when those ERAs pass, you will be able to withdraw. More information about [Unlocking](/docs/use/dapp-staking/for-stakers/unstaking/).\
The unlocking period lenghts can be consulted [here](/docs/learn/dapp-staking/#parameters).

- **Remaining days:** トークンを引き出すまでに待たなければならない日数または`Eras`の数：
- **Available to withdraw:** トークンをロック解除して `transferable` にする;
- **Re-lock:** トークンを再ロックして、dApp Stakingでトークンを使用します;

<Figure src={require('/docs/use/dapp-staking/for-stakers/img/Unbonding_1.png').default } width="100%" />
