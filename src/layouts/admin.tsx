import type { LayoutProps } from '@/types/pageWithLayout';

const AdminLayout: LayoutProps = ({ children }) => {
  return <div>Admin: {children}</div>;
};

export default AdminLayout;
