import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '@/pages/home';
import { BaseLayout } from '@/layouts/base-layout';
import { FileAddFilled, FundFilled, HomeFilled } from '@ant-design/icons';
import AddModel from '@/pages/add-model';
import Map from '@/pages/map';

// Due to pnpm type resolution issues, we need to use any here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const router: any = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" replace />,
  },
  {
    path: '/home',
    element: (
      <BaseLayout>
        <Home />
      </BaseLayout>
    ),
  },
  {
    path: '/add/model',
    element: (
      <BaseLayout>
        <AddModel />
      </BaseLayout>
    ),
  },
  {
    path: '/add/dto',
    element: (
      <BaseLayout>
        <AddModel />
      </BaseLayout>
    ),
  },
  {
    path: '/map',
    element: (
      <BaseLayout>
        <Map />
      </BaseLayout>
    ),
  },
]);

export const menu = {
  path: '/',
  routes: [
    {
      path: '/home',
      name: '首页',
      icon: <HomeFilled />,
    },
    {
      path: '/add',
      name: '添加对象',
      routes: [
        {
          path: '/add/model',
          name: '添加模型',
          icon: <FileAddFilled />,
        },
        {
          path: '/add/dto',
          name: '添加DTO对象',
          icon: <FileAddFilled />,
        },
      ],
    },
    {
      path: '/',
      name: '映射',
      routes: [
        {
          path: '/map',
          name: '对象映射',
          icon: <FundFilled />,
        },
      ],
    },
  ],
};
