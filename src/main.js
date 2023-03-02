import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

/* import css */
import './css/normalize.css'
import './css/main.css'


/* import the fontawesome core */
import {library} from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faUserSecret, faAlignJustify} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faAlignJustify)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
