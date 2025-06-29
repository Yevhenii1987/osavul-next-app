'use client';

import { MotionGlobalConfig } from 'motion';
import { useEffect, useState } from 'react';

export default function AnimationWrapper({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  if (isMobile) {
    MotionGlobalConfig.skipAnimations = true;
  }

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsMobile(true);
    }
  }, [isMobile, setIsMobile]);

  return <>{children}</>
}