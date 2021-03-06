import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/plugins/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fornecedores: [],
    contas: [],
    titulos: [],
    titulosPendentes: [],
    graficoSaldoContas: [],
    graficoGastoFornecedor: []
  },
  mutations: {
    setFornecedores (state, lista) {
      state.fornecedores = lista
    },
    setContas (state, lista) {
      state.contas = lista
    },
    setTitulos (state, lista) {
      state.titulos = lista
    },
    setTitulosPendentes (state, lista) {
      state.titulosPendentes = lista
    },
    setGraficoSaldoContas (state, lista) {
      state.graficoSaldoContas = lista
    },
    setGraficoGastoFornecedor (state, lista) {
      state.graficoGastoFornecedor = lista
    }
  },
  actions: {
    loadFornecedores: ({ commit }) => axios
      .get('/financeiro/fornecedores/')
      .then(res => {
        commit('setFornecedores', res.data)
      }),
    loadContas: ({ commit }) => axios
      .get('/financeiro/contas/')
      .then(res => {
        commit('setContas', res.data)
      }),
    loadTitulos: ({ commit }) => axios
      .get('/financeiro/titulos/')
      .then(res => {
        commit('setTitulos', res.data)
      }),
    loadTitulosPendentes: ({ commit }) => axios
      .get('/financeiro/titulos/pendentes/')
      .then(res => {
        commit('setTitulosPendentes', res.data)
      }),
    loadGraficoSaldoContas: ({ commit }) => axios
      .get('/financeiro/contas/')
      .then(
        res => {
          const data = res.data.map(m => ({ arg: m.descricao, val: m.saldo }))
          commit('setGraficoSaldoContas', data)
          return data
        }
      ),
    loadGraficoGastoFornecedor: ({ commit }) => axios
      .get('/financeiro/fornecedores/gastos/')
      .then(
        res => {
          commit('setGraficoGastoFornecedor', res.data)
          return res.data
        }
      )
  },

  modules: {
  }
})
