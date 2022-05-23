import {
	Subtitle,
	Social,
	DownloadLink
} from "../../../components";
import { ABOUT } from "../../../data/about";
import { getHostname } from "../../../utils";
import styles from "./Hero.module.css";


export const Hero = () => {
	const Name = ({ name }: { name: string }) => {
		return (
			<div className={styles.name}>
				{name}
			</div>
		)
	};

	return (
		<div className={styles.container}>
			<div className={`${styles.innerContainer} ${styles.textNoSelect}`}>
				<Name name={ABOUT.FULL_NAME} />
				<Subtitle name={ABOUT.SHORT_NAME} />
				<Social pt={50} pb={20} />
				<DownloadLink
					url={`${getHostname()}/dipta-dhar-resume.pdf`}
					value="Download Resume"
					pt={5}
					pb={5}
				/>
			</div>
		</div>
	)
}
