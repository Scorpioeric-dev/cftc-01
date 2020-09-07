<template>
  <div id="app" class="app">
    <div class="balance">
      <h2>Starting Balance: ${{ $store.getters.getBalance }}</h2>
      <h2>
        Ending Balance:
        $
        {{
          $store.getters.getBalance -
            $store.getters.getTransaction[0].Amount -
            $store.getters.getTransaction[1].Amount -
            $store.getters.getTransaction[2].Amount
        }}
      </h2>
    </div>

    <h3>
      <div class="header">
        Transactions
      </div>

      <ol>
        Merchant Name:
        {{
          $store.getters.getTransaction[0].MerchantName
        }}
      </ol>
      <ol>
        Description:
        {{
          $store.getters.getTransaction[0].Description
        }}
      </ol>

      <ol>
        Transaction Date:
        {{
          $store.getters.getTransaction[0].TransactionDate
        }}
      </ol>
      <ol>
        Amount: $
        {{
          $store.getters.getTransaction[0].Amount
        }}
      </ol>

      <hr style="width:100%;text-align:left;margin-left:0 " />
      <ol>
        Merchant Name:
        {{
          $store.getters.getTransaction[1].MerchantName
        }}
      </ol>
      <ol>
        Description:
        {{
          $store.getters.getTransaction[1].Description
        }}
      </ol>

      <ol>
        Transaction Date:
        {{
          $store.getters.getTransaction[1].TransactionDate
        }}
      </ol>
      <ol>
        Amount: $
        {{
          $store.getters.getTransaction[1].Amount
        }}
      </ol>
      <hr style="width:100%;text-align:left;margin-left:0 " />
      <ol>
        Merchant Name:
        {{
          $store.getters.getTransaction[2].MerchantName
        }}
      </ol>
      <ol>
        Description:
        {{
          $store.getters.getTransaction[2].Description
        }}
      </ol>

      <ol>
        Transaction Date:
        {{
          $store.getters.getTransaction[2].TransactionDate
        }}
      </ol>
      <ol>
        Amount: $

        {{
          $store.getters.getTransaction[2].Amount
        }}
      </ol>
    </h3>

    <h5 id="pending">
      ---- Pending Transactions ----

      <li>${{ $store.getters.getNotSettled[0].Amount }}</li>
      <li>${{ $store.getters.getNotSettled[1].Amount }}</li>
    </h5>
  </div>
</template>

<script>
export default {
  name: "App",

  computed: {
    Transactions() {
      return this.$store.state.Transactions;
    },
    NotSettled() {
      return this.$store.state.NotSettled;
    },
  },
};
</script>

<style>
.app {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
}
.header {
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
  border: 2px solid black;
  margin: 2px;
  text-align: center;
}
.app #pending {
  font-family: cursive;
  font-size: 16px;
  color: red;
}
.balance {
  display: flex;
  flex-direction: column;
}
</style>
