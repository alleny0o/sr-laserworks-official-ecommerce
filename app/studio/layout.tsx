export const metadata = {
    title: "S&R Dashmin",
    description: "Dashboard for S&R",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
            {children}
            </body>
        </html>
    );
};