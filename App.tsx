import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Router } from './src/router/Router';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider config={config}>
        <Router />
      </GluestackUIProvider >
    </QueryClientProvider>
  );
}
