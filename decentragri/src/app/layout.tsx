/* eslint-disable @next/next/no-page-custom-font */
import "../styles/index.scss";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	const isDev = process.env.NODE_ENV === 'development';

	return (
		<html lang="en" suppressHydrationWarning={isDev}>
			<head>
				<title>Decentragri – Smarter Farming Starts Here</title>
				<meta name="keywords" content="Decentragri, smart farming, AI agriculture, blockchain farming, precision agriculture, agri-tech" />
				<meta name="description" content="Decentragri is a smart farming tool that uses AI and blockchain to monitor, analyze, and optimize agricultural decisions for farmers." />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<link rel="icon" href="/favicon.png" sizes="any" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@300;400;500;600;700&display=swap" />
			</head>
			<body suppressHydrationWarning={true}>
				{children}
			</body>
		</html>
	);
}
