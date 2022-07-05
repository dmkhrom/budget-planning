import { useEffect, useRef } from 'react';

export const useOutsideClick = (callback) => {
	const ref = useRef();

	useEffect(() => {
		const handleClick = (e) => {
			console.log('useOutsideClick', {
				refcur: ref.current,
				targ: e.target
			});
			if (ref.current && !ref.current.contains(e.target)) {
				callback();
			}
		};

		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, []);

	return ref;
};
