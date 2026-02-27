import imagemin from "imagemin";
import webp from "imagemin-webp";
import mozjpeg from "imagemin-mozjpeg";
import pngquant from "imagemin-pngquant";

(async () => {
  await imagemin(["public/products/*.{jpg,png}"], {
    destination: "public/products/optimized",
    plugins: [
      mozjpeg({ quality: 75 }),
      pngquant({ quality: [0.6, 0.8] }),
    ],
  });

  await imagemin(["public/products/*.{jpg,png}"], {
    destination: "public/products/optimized",
    plugins: [
      webp({ quality: 75 }),
    ],
  });

  console.log("Images optimized successfully!");
})();