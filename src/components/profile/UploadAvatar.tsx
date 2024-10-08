import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { getSupabaseClient } from '../supabaseclient';

export const UploadAvatar = () => {
	const [selectedImage, setSelectedImage] = useState<File | null>(null);
	const user = useSelector((state: RootState) => state.auth);
	const supabase = getSupabaseClient(user.token);
	const [avatarUpdateBool, setAvatarUpdateBool] = useState<boolean>(false);
	const avatarUpdatedText = 'Upload successful!';
	const handleFileInputChange = (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		if (event.target.files) {
			const file = event.target.files[0]; // Get the first selected file
			setSelectedImage(file);
		}
	};
	const handleClick = async () => {
		if (selectedImage) {
			const { data, error } = await supabase.storage
				.from('blog-imgs')
				.upload(`avatars/${user.user.sub}`, selectedImage, {
					upsert: true,
				});
			console.log(data, error);
			if (!error) setAvatarUpdateBool(true);
			setTimeout(() => {
				setAvatarUpdateBool(false);
			}, 6000);
		}
	};
	const handleList = async () => {
		const { data, error } = await supabase.storage.from('blog-imgs').list();
		console.log(data, error);
	};
	return (
		<div>
			<label htmlFor="dropzone-file">
				<div>
					<p className="font-semibold bg-secondary p-2 rounded-xl text-center">
						Click here to select file
					</p>
					<p className="text-xs text-center mt-2">
						SVG, PNG, JPG or GIF (MAX. 800x400px)
					</p>
				</div>
				<input
					id="dropzone-file"
					type="file"
					accept="image/*"
					className="hidden"
					onChange={(e) => handleFileInputChange(e)}
				/>
			</label>
			{selectedImage && (
				<>
					<div className="max-h-96 max-w-96 mt-4">
						<h2>Selected Image:</h2>
						<img src={URL.createObjectURL(selectedImage)} alt="Selected" />
					</div>
					<div className="flex justify-center text-sm">
						<button onClick={handleClick}>Update</button>
						<button onClick={handleList}>List</button>
						{avatarUpdateBool ? <p>{avatarUpdatedText}</p> : <></>}
					</div>
				</>
			)}
		</div>
	);
};
