const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        { path: 'home', component: HomeComponent },
        { path: 'about', component: AboutComponent },
      ]
    }
  ];
  