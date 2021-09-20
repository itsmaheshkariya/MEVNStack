export const state = () => ({
   data: []
})

export const mutations = {
    storeData: (state, data) => {
        state.data = data
    }
}