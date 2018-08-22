const Parallax = () => {
	const pA = Array.from(document.querySelectorAll('[data-parallax]'));

	pA.map(el => {
		const s = Math.min(1, Math.max(0, el.dataset.speed)) || 1;
		const r = el.dataset.reverse;
		const opa = el.dataset.opacity;
		const trans = el.dataset.translate;
		const sca = el.dataset.scale;

		let t = false;

		const ticked = () => {
			if (!t) {
				window.requestAnimationFrame(isVisible);
				t = true;
			}
		};

		const isVisible = () => {
			const sy = window.scrollY;
			const ph = el.parentNode.getBoundingClientRect().height;
			const pt = el.parentNode.getBoundingClientRect().top + sy;
			const wh = window.innerHeight;
			const sb = sy + wh;

			if (sb > pt && sy < pt + ph) {
				const rs = sb - pt;
				const percent = r ? 1 - (rs / (ph + wh)) * s : rs / (ph + wh) * s;
				chooseTrans(percent, ph);
			}

			t = false;
		};

		const chooseTrans = (percent, ph) => {
			if (trans) translate(percent, ph);
			if (sca) scale(percent);
			if (opa) opacity(percent);
		};

		const translate = (percent, ph) => {
			const diff = ph - el.getBoundingClientRect().height;
			const result = diff * percent;
			el.style.transform = `translate3d(0,${result}px,0)`;
		};

		const scale = percent => {
			const result = percent * (2 - 1) + 1;
			el.style.transform = `scale(${result})`;
		};

		const opacity = percent => {
			el.style.opacity = `${percent}`;
		};

		ticked();
		window.addEventListener('scroll', ticked);
	});
};

Parallax();
