export default {
    state: {
        quantidade: 3,
        preco: 7.99
    },
    mutations: {
        setQuantidade(state, payload){
            state.quantidade = payload
        },
        setPreco(state, payload){
            state.preco = payload
        }
    }
}