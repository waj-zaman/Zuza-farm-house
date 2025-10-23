import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; // Default styles

export default function LightboxComponent({ images, initialIndex = 0, isOpenProp, onClose }) {
  const [index, setIndex] = useState(initialIndex);
  const [isOpen, setIsOpen] = useState(isOpenProp);

  // Sync open state with parent
  React.useEffect(() => {
    setIsOpen(isOpenProp);
    setIndex(initialIndex);
  }, [isOpenProp, initialIndex]);

  return (
    <Lightbox
      open={isOpen}
      index={index}
      close={() => {
        setIsOpen(false);
        onClose(); // Notify parent
      }}
      slides={images.map((img, i) => ({
        src: img,
        title: `Image ${i + 1} of ${images.length}`,
      }))}
    />
  );
}
