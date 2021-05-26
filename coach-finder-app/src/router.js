import {createRouter, createWebHistory} from 'vue-router';
import { defineAsyncComponent } from 'vue';

import CoachesList from './pages/coaches/CoachesList.vue';

import NotFound from './pages/NotFound.vue';
import store from './store/index.js';

// const UserAuth = () => import('./pages/auth/UserAuth.vue');

const CoachDetails = () => import ('./pages/coaches/CoachDetails.vue');

// const CoachRegistration = ()=> import('./pages/coaches/CoachRegistration.vue');

const ContactCoach = () => import('./pages/requests/ContactCoach.vue');

// const RequestsReceived = () => import('./pages/requests/RequestsReceived.vue');

// const CoachDetails = defineAsyncComponent(() =>
//   import('./pages/coaches/CoachDetails.vue')
// );
const CoachRegistration = defineAsyncComponent(() =>
  import('./pages/coaches/CoachRegistration.vue')
);
// const ContactCoach = defineAsyncComponent(() =>
//   import('./pages/requests/ContactCoach.vue')
// );
const RequestsReceived = defineAsyncComponent(() =>
  import('./pages/requests/RequestsReceived.vue')
);
const UserAuth = defineAsyncComponent(() =>
  import('./pages/auth/UserAuth.vue')
);

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path:'/',
      redirect: '/coaches'
    },
    {
      path: '/coaches',
      component: CoachesList,
    },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      props: true,
      children: [
        { 
          path: 'contact', 
          component: ContactCoach
        }
      ]
    },
    {
      path: '/register',
      component: CoachRegistration,
      meta:{ requiresAuth : true}
    },
    {
      path:'/requests', 
      component: RequestsReceived,
      meta: { requiresAuth: true }
    },
    {
      path: '/auth',
      component: UserAuth,
      meta:{ requiresUnauth: true}
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }

  ]
});

router.beforeEach(function(to,_, next){
  if(to.meta.requiresAuth && !store.getters.isAuthenticated){
    next('/auth');
  }else if(to.meta.requiresUnauth && store.getters.isAuthenticated){
    next('/coaches')
  }else{
    next();
  }
})

export default router;