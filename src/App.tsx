//import { useState } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Main } from './components/Main';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BlogPosts } from './components/BlogPosts';
import { PatchBlog } from './components/PatchBlog';
import { CreateBlog } from './components/CreateBlog';
import { SignUp } from './components/SignUp';
import { Profile } from './components/Profile';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
	},
	{
		path: '/blog',
		element: <BlogPosts />,
	},
	{
		path: '/editpost/:blogid',
		element: <PatchBlog />,
	},
	{
		path: '/newpost',
		element: <CreateBlog />,
	},
	{
		path: '/signup',
		element: <SignUp />,
	},
	{
		path: '/profile',
		element: <Profile />,
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
