"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    id: "correct",
    title: "Idan na correct person",
    color: "linear-gradient(45deg, #FF7F50, #FFD700)",
    emoji: "👌",
  },
  {
    id: "bullet",
    title: "Idan sharp pass bullet",
    color: "linear-gradient(45deg, #00FF00, #FF00FF)",
    emoji: "💥",
  },
  {
    id: "sabi",
    title: "Idan sabi",
    color: "linear-gradient(45deg, #FFD700, #FF1493)",
    emoji: "🎓",
  },
  {
    id: "brain",
    title: "Idan dey burst brain",
    color: "linear-gradient(45deg, #00FF7F, #FF8C00)",
    emoji: "🤯",
  },
  {
    id: "vibes",
    title: "Idan na correct vibes",
    color: "linear-gradient(45deg, #FFA500, #4B0082)",
    emoji: "🎉🌟",
  },
];

export default function Idan() {
  const [featureInView, setFeatureInView] = useState(null);
  return (
    <div className="flex w-full gap-20">
      {/* features */}
      <div className="w-full py-[50vh]">
        {features.map((feature) => (
          <li key={feature.id} className="list-none">
            <FeatureTitle
              id={feature.id}
              view={featureInView}
              setId={setFeatureInView}
            >
              {feature.title}
            </FeatureTitle>
          </li>
        ))}
      </div>
      {/* card */}
      <div className="no-shrink sticky top-0 flex h-screen w-full items-center">
        <FeatureCard features={features} id={featureInView} />
      </div>
    </div>
  );
}

const FeatureCard = ({ features, id }) => {
  const inView = features.find((feature) => feature.id === id);
  return (
    <div
      style={inView?.color && { background: inView.color }}
      className={`ease flex aspect-square w-full items-center justify-center rounded-2xl bg-white/5 text-8xl transition-opacity`}
    >
      {/* {inView && inView?.emoji} */}
    </div>
  );
};

const FeatureTitle = ({ children, id, setId, view }) => {
  const ref = useRef();
  const isInView = useInView(ref, {
    margin: "-50% 0% -50% 0%",
  });

  useEffect(() => {
    if (isInView) setId(id);
    if (!isInView && view === id) setId(null);
  }, [isInView, view, id, setId]);

  return (
    <p
      ref={ref}
      className={`${
        isInView ? "text-white" : "text-white/20"
      } py-16 font-sans text-xl font-bold sm:text-3xl md:text-4xl lg:text-6xl`}
    >
      {children}
    </p>
  );
};
