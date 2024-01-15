import React, { useState } from "react";

const Images = ["img/Resim1.png", "img/Resim2.png"];
function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? Images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === Images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <button onClick={goToPreviousImage}>Geri</button>
      <img
        src={Images[currentImageIndex]}
        alt={`Resim ${currentImageIndex + 1}`}
      />
      <button onClick={goToNextImage}>İleri</button>
    </div>
  );
}

export default Carousel;
