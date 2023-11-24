const renderAnimation = () => {
	const timeline = window.gsap.timeline({ repeat: -1 });
	const baseTimeline = window.gsap.timeline({ repeat: -1 });
	timeline.timeScale(2.2);
	baseTimeline.timeScale(2.2);

	timeline
		.fromTo(
			".circle",
			{ y: 0, width: 150, height: 100 },
			{
				y: -200,
				width: 90,
				height: 140,
				duration: 2,
				stagger: 0.1,
				ease: "power3.out",
			}
		)
		.to(
			".circle",
			{
				width: 110,
				height: 120,
				duration: 1,
				ease: "none",
				stagger: 0.1,
			},
			"-=1.2"
		)
		.to(
			".circle",
			{
				y: 0,
				duration: 1,
				stagger: 0.1,
				ease: "power3.in",
				width: 90,
				height: 130,
			},
			"-=0.6"
		)
		.to(
			".circle",
			{
				width: 90,
				height: 130,
				duration: 1,
				ease: "none",
				stagger: 0.1,
			},
			"-=0.8"
		)
		.to(
			".circle",
			{
				width: 150,
				height: 100,
				duration: 1,
				ease: "none",
				stagger: 0.1,
			},
			"-=1.2"
		);
	baseTimeline
		.fromTo(
			".base",
			{ width: 150, delay: 0 },
			{ width: 100, duration: 2, ease: "none" }
		)
		.to(".base", { width: 150, duration: 1.2, ease: "none" });
};

renderAnimation();
