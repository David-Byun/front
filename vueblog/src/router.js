import { createWebHistory, createRouter } from "vue-router";
import ListBlogVue from "./components/ListBlog.vue";
import HomePage from "./components/HomePage.vue";
import ListDetail from "./components/ListDetail.vue";
import RoomAuthor from "./components/RoomAuthor.vue";
import RoomComment from "./components/RoomComment.vue";

const routes = [
  {
    path: "/list/",
    component: ListBlogVue,
  },
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/detail/:id",
    component: ListDetail,
    children: [
      { path: "author", component: RoomAuthor },
      { path: "comment", component: RoomComment },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
