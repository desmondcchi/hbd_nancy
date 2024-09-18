export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Happy birthday Nancy!!!</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
