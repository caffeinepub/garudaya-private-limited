import { RouterProvider, createRouter, createRootRoute, createRoute } from '@tanstack/react-router';
import SiteLayout from './components/site/SiteLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import ContactPage from './pages/ContactPage';
import VendorRegistrationPage from './pages/register/VendorRegistrationPage';
import FarmerRegistrationPage from './pages/register/FarmerRegistrationPage';
import ClientRegistrationPage from './pages/register/ClientRegistrationPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: ServicesPage,
});

const whyChooseUsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/why-choose-us',
  component: WhyChooseUsPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const vendorRegistrationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register/vendor',
  component: VendorRegistrationPage,
});

const farmerRegistrationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register/farmer',
  component: FarmerRegistrationPage,
});

const clientRegistrationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/register/client',
  component: ClientRegistrationPage,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy',
  component: PrivacyPolicyPage,
});

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/terms',
  component: TermsPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  servicesRoute,
  whyChooseUsRoute,
  contactRoute,
  vendorRegistrationRoute,
  farmerRegistrationRoute,
  clientRegistrationRoute,
  privacyRoute,
  termsRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
