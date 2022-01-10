import { NextPage } from 'next';
import type { ReactElement } from 'react';
import MainLayout from '@/layouts/main';
import AdminLayout from '@/layouts/admin';
import EmptyLayout from '@/layouts/empty';

export type PageWithMainLayoutType = NextPage & { layout: typeof MainLayout };

export type PageWithAdminLayoutType = NextPage & { layout: typeof AdminLayout };

export type PageWithEmptyLayoutType = NextPage & { layout: typeof EmptyLayout };

export type PageWithLayoutType = PageWithMainLayoutType | PageWithAdminLayoutType | PageWithEmptyLayoutType;

export type LayoutProps = ({ children }: { children: ReactElement }) => ReactElement;

export default PageWithLayoutType;
