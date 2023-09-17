
    //controller
// const routes = [
//     {
//       path: '/detail/0',
//       component: Detail,
//     },
//     {
//       path: '/detail/1',
//       component: Detail,
//     },
//     ~~ 계속
//   ];

const routes = [
    {
      path: '/detail/:id',
      component: Detail,
    },
  ];


  //{{ $route.params.파라미터명 }}

  