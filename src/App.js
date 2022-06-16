import './assets/style/style.css';
import './assets/style/output.css';
import Router from './router/Router';

import { QueryClient, QueryClientProvider } from 'react-query';
import 'flowbite';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router />
        <script src="../path/to/flowbite/dist/flowbite.js"></script>
      </div>
    </QueryClientProvider>
  );
}

export default App;
