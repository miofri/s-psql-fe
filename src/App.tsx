//import { useState } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Main } from './components/Main';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BlogPosts } from './components/BlogPosts';
import { PatchBlog } from './components/PatchBlog';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
	},
	{
		path: '/blog',
		element: <BlogPosts />,
		children: [
			{
				path: '/editpost/:blogid',
				element: <PatchBlog />,
			},
		],
	},
]);

const App = () => {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
};

export default App;
