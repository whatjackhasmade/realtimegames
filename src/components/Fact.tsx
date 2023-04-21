"use client";

import * as React from "react";

import styles from "./Fact.module.scss";

const accessibleColour = (background: string) => {
	let textColour = "#000";

	if (!background) return textColour;

	const colour =
		background.charAt(0) === "#" ? background.substring(1, 7) : background;
	const r = parseInt(colour.substring(0, 2), 16); // hexToR
	const g = parseInt(colour.substring(2, 4), 16); // hexToG
	const b = parseInt(colour.substring(4, 6), 16); // hexToB
	return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#131313" : "#fff";
};

const Fact: React.FC<Fact> = ({
	background,
	icon,
	increment,
	intro,
	source,
}) => {
	const [value, setValue] = React.useState(0);

	React.useEffect(() => {
		const intervalId = setInterval(() => {
			setValue((value) => value + increment.value);
		}, 1000);

		return () => clearInterval(intervalId);
	}, [increment.value]);

	const cssProperties: React.CSSProperties = {
		background: background.color,
		color: accessibleColour(background.color),
	};

	return (
		<section
			data-increment={increment.value}
			style={cssProperties}
			className={styles.wrapper}
		>
			<div className={styles.container}>
				{icon && (
					<div className={styles.icon}>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						{typeof icon === "string" && <img alt="" src={icon} />}
						{typeof icon === "object" && icon}
					</div>
				)}
				<h2 className={styles.value}>{value}</h2>
				<h2 className={styles.unit}>({increment.unit})</h2>
				<h3 className={styles.intro}>{intro}</h3>
				{source?.name && source?.url && (
					<div className={styles.citation}>
						<cite className={styles.cite}>
							Sourced from: <a href={source.url}>{source.name}</a>
						</cite>
					</div>
				)}
			</div>
		</section>
	);
};

export default Fact;
