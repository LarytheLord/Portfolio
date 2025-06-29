import './globals.css';

export const metadata = {
  title: 'Abid Khan - Portfolio',
  description: 'Crafting beautiful and functional web experiences with modern technologies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}