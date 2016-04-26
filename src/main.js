import Vue from 'vue'
import App from './App'
import Editor from './components/Editor'
import Review from './components/Review'
import Saved from './components/Saved'

import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
  hashbang: false,
  history: true,
  linkActiveClass: 'Navigation__item__link--current'
})

router.map({
  '/': {
    name: 'editor',
    component: Editor,
  },
  '/review/': {
    name: 'review',
    component: Review
  },
  '/saved/': {
    name: 'saved',
    component: Saved
  }
})

router.start(App, '#app')
