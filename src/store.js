import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Transactions: [
      {
        OriginalTraceAuditNo: null,
        AccountNumber: "12345678",
        TransactionTypeId: "Debit",
        TransactionDate: "2020-08-28T03:36:33",
        BusinessDate: "2020-08-28T03:36:33",
        AvailableBalance: 400.0,
        Amount: 12.08,
        Description: "Other: POS Transaction",
        Billed: false,
        MerchantName: "Good Buy",
        MerchantId: "GbLV-01",
      },
      {
        OriginalTraceAuditNo: null,
        AccountNumber: "123456789",
        TransactionTypeId: "Debit",
        TransactionDate: "2020-08-28T03:50:01",
        BusinessDate: "2020-08-28T03:50:01",
        AvailableBalance: 400.0,
        Amount: 129.74,
        Description: "Other: POS Transaction",
        Billed: false,
        MerchantName: "Wally World",
        MerchantId: "WWV-000-1220",
      },
      {
        OriginalTraceAuditNo: null,
        AccountNumber: "123456789",
        TransactionTypeId: "Debit",
        TransactionDate: "2020-08-28T06:43:12",
        BusinessDate: "2020-08-28T06:43:12",
        AvailableBalance: 400.0,
        Amount: 8.08,
        Description: "Other: POS Transaction",
        Billed: true,
        MerchantName: "Quickly Gas Stop",
        MerchantId: "QGS-01",
      },
    ],
    NotSettled: [
      {
        OriginalTraceAuditNo: null,
        AccountNumber: "123456789",
        TransactionTypeId: "Debit",
        TransactionDate: "2020-08-28T03:36:33",
        BusinessDate: "2020-08-28T03:36:33",
        AvailableBalance: 400.0,
        Amount: 12.08,
        Description: "Other: POS Transaction",
        MerchantName: "Good Buy",
        MerchantId: "GbLV-01",
      },
      {
        OriginalTraceAuditNo: null,
        AccountNumber: "123456789",
        TransactionTypeId: "Debit",
        TransactionDate: "2020-08-28T03:50:01",
        BusinessDate: "2020-08-28T03:50:01",
        AvailableBalance: 400.0,
        Amount: 129.74,
        Description: "Other: POS Transaction",
        MerchantName: "Wally World",
        MerchantId: "WWV-000-1220",
      },
    ],
  },
  getters: {
    getBalance(state) {
      console.log(state.Transactions)
      return state.Transactions[0].AvailableBalance

      
    },
    getTransaction(state){
      return state.Transactions
    },
  
    getNotSettled(state) {
      return state.NotSettled
      
    }
  }
  
});
