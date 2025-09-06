import React, { useEffect, useRef } from 'react';

type Props = { url: string; autoplay?: boolean; loop?: boolean };

export default function LottieBlock({ url, autoplay=true, loop=true }: Props) {
  const containerRef = useRef<HTMLDivElement|null>(null);

  useEffect(() => {
    let anim: any;
    (async () => {
      const lottie = await import('lottie-web');
      anim = lottie.loadAnimation({
        container: containerRef.current!,
        renderer: 'svg',
        loop,
        autoplay,
        path: url,
      });
    })();
    return () => { if (anim) anim.destroy(); };
  }, [url, autoplay, loop]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}
