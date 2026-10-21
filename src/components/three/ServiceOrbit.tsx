import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '@/components/motion/MotionPreference';
import { publishedServices } from '@/data/services';

const ORBIT_INTERVAL = 3000;

const BASE_CARD_W = 140;
const BASE_CARD_H = 96;

// Focused card is large and prominent in the foreground
const FOCUS_SCALE = 2.35;
const ORBIT_SCALE = 0.78;

interface OrbitItem {
  id: number;
  name: string;
  image: string;
  slug: string;
}

const orbitItems: OrbitItem[] = publishedServices.map((s, i) => ({
  id: i,
  name: s.shortName,
  image: s.heroImage.replace('w=1920', 'w=1200'),
  slug: s.slug,
}));

function getPosition(index: number, total: number, focusIndex: number) {
  const offset = (index - focusIndex + total) % total;
  const angle = (offset / total) * Math.PI * 2;
  const radiusX = 230;
  const radiusY = 130;
  return {
    x: Math.sin(angle) * radiusX,
    // Negative offset positions the large focused card towards the top of the composition
    y: -Math.cos(angle) * radiusY * 0.45 - 25,
    z: Math.cos(angle), // 1 is front/foreground, -1 is back
  };
}

function DesktopOrbit({ focusIndex }: { focusIndex: number }) {
  return (
    <div className="relative w-full h-[460px] flex items-center justify-center [perspective:1000px]">
      {/* Decorative rings - kept strictly behind cards so there is zero obstruction or blur */}
      <div className="absolute w-56 h-56 rounded-full border border-primary-200/40 pointer-events-none -z-10" />
      <div className="absolute w-96 h-96 rounded-full border border-primary-200/20 pointer-events-none -z-10" />
      <div className="absolute w-48 h-48 rounded-full bg-primary-100/30 blur-3xl pointer-events-none -z-10" />

      {orbitItems.map((item, index) => {
        const pos = getPosition(index, orbitItems.length, focusIndex);
        const isFocus = index === focusIndex;
        const scale = isFocus ? FOCUS_SCALE : ORBIT_SCALE;
        // Focused card is 100% visible and unblurred; background cards are slightly dimmed
        const opacity = isFocus ? 1 : pos.z < 0 ? 0.45 : 0.75;
        // Focused card stays strictly in the foreground
        const zIndex = isFocus ? 200 : Math.round((pos.z + 1) * 10) + 1;

        return (
          <motion.div
            key={item.id}
            className="absolute pointer-events-auto"
            initial={false}
            animate={{
              x: pos.x,
              y: pos.y,
              scale,
              opacity,
              zIndex,
            }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ zIndex }}
          >
            <div
              className={`rounded-2xl overflow-hidden bg-white transition-shadow duration-700 ${
                isFocus
                  ? 'shadow-2xl shadow-primary-900/20 ring-2 ring-primary-500'
                  : 'shadow-md ring-1 ring-slate-200/70'
              }`}
              style={{ width: BASE_CARD_W, height: BASE_CARD_H }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
                draggable={false}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function TabletOrbit({ focusIndex }: { focusIndex: number }) {
  return (
    <div className="relative w-full h-[350px] flex items-center justify-center [perspective:800px]">
      <div className="absolute w-40 h-40 rounded-full border border-primary-200/40 pointer-events-none -z-10" />
      <div className="absolute w-72 h-72 rounded-full border border-primary-200/20 pointer-events-none -z-10" />
      <div className="absolute w-36 h-36 rounded-full bg-primary-100/30 blur-2xl pointer-events-none -z-10" />

      {orbitItems.map((item, index) => {
        const pos = getPosition(index, orbitItems.length, focusIndex);
        const isFocus = index === focusIndex;
        const scale = isFocus ? 1.95 : 0.72;
        const opacity = isFocus ? 1 : pos.z < 0 ? 0.45 : 0.75;
        const zIndex = isFocus ? 200 : Math.round((pos.z + 1) * 10) + 1;

        return (
          <motion.div
            key={item.id}
            className="absolute"
            initial={false}
            animate={{
              x: pos.x * 0.75,
              y: pos.y * 0.75,
              scale,
              opacity,
              zIndex,
            }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ zIndex }}
          >
            <div
              className={`rounded-xl overflow-hidden bg-white transition-shadow duration-700 ${
                isFocus
                  ? 'shadow-2xl shadow-primary-900/20 ring-2 ring-primary-500'
                  : 'shadow-md ring-1 ring-slate-200/70'
              }`}
              style={{ width: 120, height: 82 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
                draggable={false}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function MobileOrbit({ focusIndex }: { focusIndex: number }) {
  const item = orbitItems[focusIndex];
  return (
    <div className="relative w-full h-[220px] flex items-center justify-center overflow-hidden">
      <div className="absolute w-32 h-32 rounded-full bg-primary-100/40 blur-2xl pointer-events-none -z-10" />
      {/* Side peek of adjacent cards — strictly behind focused card */}
      {[-1, 1].map((dir) => {
        const adjIndex = (focusIndex + dir + orbitItems.length) % orbitItems.length;
        const adjItem = orbitItems[adjIndex];
        return (
          <div
            key={adjItem.id}
            className="absolute opacity-25"
            style={{
              left: dir < 0 ? '0%' : 'auto',
              right: dir > 0 ? '0%' : 'auto',
              transform: `translateX(${dir < 0 ? '-20%' : '20%'}) scale(0.55)`,
              zIndex: 1,
            }}
          >
            <div className="rounded-xl overflow-hidden bg-white shadow-md ring-1 ring-slate-200/60" style={{ width: 160, height: 110 }}>
              <img src={adjItem.image} alt={adjItem.name} className="w-full h-full object-cover" draggable={false} />
            </div>
          </div>
        );
      })}
      <AnimatePresence mode="wait">
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.8, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -6 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
          style={{ zIndex: 10 }}
        >
          <div className="rounded-2xl overflow-hidden bg-white shadow-2xl shadow-primary-900/20 ring-2 ring-primary-500" style={{ width: 260, height: 170 }}>
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" draggable={false} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function ServiceOrbit() {
  const reduced = useReducedMotion();
  const [focusIndex, setFocusIndex] = useState(0);

  const next = useCallback(() => {
    setFocusIndex((prev) => (prev + 1) % orbitItems.length);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const interval = setInterval(next, ORBIT_INTERVAL);
    return () => clearInterval(interval);
  }, [next, reduced]);

  if (reduced) {
    return (
      <div className="w-full flex items-center justify-center">
        <MobileOrbit focusIndex={focusIndex} />
      </div>
    );
  }

  return (
    <>
      <div className="hidden lg:block">
        <DesktopOrbit focusIndex={focusIndex} />
      </div>
      <div className="hidden sm:block lg:hidden">
        <TabletOrbit focusIndex={focusIndex} />
      </div>
      <div className="sm:hidden">
        <MobileOrbit focusIndex={focusIndex} />
      </div>
    </>
  );
}

