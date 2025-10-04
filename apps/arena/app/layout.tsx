
export const metadata = { title: 'Infinity Arena', description: 'Infinity Nexus — Arena' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
