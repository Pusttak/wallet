import { Suspense } from 'react';
import { Header } from '../../components/header/header';
import { Outlet } from 'react-router-dom';

import {
  Section,
  ContainerDashboard,
  Container,
  MainPage,
} from './dashboardPage.styled';
import { Dashboard } from '../../components/dashboard/dashboard';

export function DashboardPage() {
  return (
    <>
      <Header />
      <MainPage>
        <Section>
          <Container>
            <ContainerDashboard>
              <Dashboard />
              <Suspense fallback={null}>
                <Outlet />
              </Suspense>
            </ContainerDashboard>
          </Container>
        </Section>
      </MainPage>
    </>
  );
}
