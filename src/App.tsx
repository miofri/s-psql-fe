//import { useState } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Main } from './components/Main';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import { Blog } from './components/blogposts/Main.Blog';
import { PatchBlog } from './components/blogposts/PatchBlog';
import { CreateBlog } from './components/blogposts/CreateBlog';
import { SignUp } from './components/SignUp';
import { Profile } from './components/profile/Profile';
import { PersistGate } from 'redux-persist/integration/react';
import { UploadAvatar } from './components/profile/UploadAvatar';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
	},
	{
		path: '/blog',
		element: <Blog />,
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
	{
		path: '/test',
		element: <UploadAvatar />,
	},
]);

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<RouterProvider router={router} />
			</PersistGate>
		</Provider>
	);
};

export default App;
