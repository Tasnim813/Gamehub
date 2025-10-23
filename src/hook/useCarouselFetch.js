import axios from "axios";
import { useEffect, useState } from "react";

const useCarouselFetch = () => {
  const [Carousel, setCarousel] = useState([]);
  const [CarouselLoading, setCarouselLoading] = useState(true);
  const [CarouselError, setCarouselError] = useState(null);

  useEffect(() => {
    setCarouselLoading(true);

    axios("/Carousel.json")
      .then((response) => setCarousel(response))
      .catch((error) => setCarouselError(error))
      .finally(() => setCarouselLoading(false));
  }, []);

  return { Carousel, CarouselLoading, CarouselError };
};

export default useCarouselFetch;