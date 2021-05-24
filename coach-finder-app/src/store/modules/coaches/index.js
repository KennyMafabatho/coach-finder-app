import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';


export default{
  namespaced: true,
  state(){
    return{
      lastFetch: null,
      coaches:[
          {
            id: 'c1',
            firstName: 'Kenny',
            lastName: 'Mafabatho',
            areas: ['frontend'],
            description:
              "I'm Kenny and I work as a freelance web developer!",
            hourlyRate: 20
          },
          {
            id: 'c2',
            firstName: 'Karel',
            lastName: 'de Bruin',
            areas: ['frontend','backend', 'career'],
            description:
              'I am Karel a senior developer in a company, I can help you get your first job or progress in your current role.',
            hourlyRate: 30
          }
      ]
    }
  },
  mutations,
  actions,
  getters
}