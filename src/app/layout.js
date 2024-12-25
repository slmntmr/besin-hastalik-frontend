import '../styles/global.css';
import RaindropsComponent from '@/components/RaindropsComponent';
import WaveComponent from '@/components/WaveComponent';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RaindropsComponent />
        <main>{children}</main>
        <WaveComponent className="raindrops" />
      </body>
    </html>
  );
}
