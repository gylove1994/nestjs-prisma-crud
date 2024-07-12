import { menu } from '@/routers/router';
import { InfoCircleFilled, QuestionCircleFilled, GithubFilled } from '@ant-design/icons';
import { ProBreadcrumb, ProLayout } from '@ant-design/pro-components';
import { useLocation, useNavigate } from 'react-router';

export function BaseLayout(props: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <ProLayout
      location={location}
      disableMobile={true}
      title="Nestjs-prisma-crud"
      fixedHeader
      layout="mix"
      siderMenuType="group"
      bgLayoutImgList={[
        {
          src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
          left: 85,
          bottom: 100,
          height: '303px',
        },
        {
          src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
          bottom: -68,
          right: -45,
          height: '303px',
        },
        {
          src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
          bottom: 0,
          left: 0,
          width: '331px',
        },
      ]}
      contentStyle={{
        height: 'calc(100vh - 56px - 56px)',
      }}
      route={menu}
      menuItemRender={(item, dom) => (
        <div
          onClick={() => {
            navigate({
              pathname: item.path,
            });
          }}
        >
          {dom}
        </div>
      )}
      actionsRender={(props) => {
        if (props.isMobile) return [];
        return [
          <InfoCircleFilled key="InfoCircleFilled" />,
          <QuestionCircleFilled key="QuestionCircleFilled" />,
          <GithubFilled key="GithubFilled" />,
        ];
      }}
      breadcrumbRender={(props) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [_first, ...rest] = props!;
        return rest;
      }}
      headerContentRender={() => {
        return <ProBreadcrumb className="ml-5" />;
      }}
      footerRender={() => {
        return (
          <div
            className="w-full flex flex-col justify-center items-center bg-slate-200"
            style={{
              height: '56px',
            }}
          >
            <div>© 2024 Made with ❤️ by GYlove1994</div>
          </div>
        );
      }}
    >
      {props.children}
    </ProLayout>
  );
}
