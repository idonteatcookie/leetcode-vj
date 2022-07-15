import type { Component } from 'solid-js';
import { Link, useRoutes, useLocation } from 'solid-app-router';
import Avatar from './components/avatar';
import { routes } from './routes';

const App: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);

  return (
    <>
      <nav class="bg-gray-200 text-gray-900 px-20px py-10px">
        <ul class="flex items-center">
          <li class="py-2 px-4">
            <Link href="/" class="no-underline hover:underline">
              Home
            </Link>
          </li>
          <li class="py-2 px-4">
            <Link href="/contest-list" class="no-underline hover:underline">
              Contest List
            </Link>
          </li>
          <li class="py-2 px-4">
            <Link href="/contest-detail" class="no-underline hover:underline">
              Detail
            </Link>
          </li>

          <li class="text-sm flex items-center space-x-1 ml-auto">
            <Avatar />
          </li>
        </ul>
      </nav>

      <main>
        <Route />
      </main>
    </>
  );
};

export default App;
