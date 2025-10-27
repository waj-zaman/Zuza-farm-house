const images = import.meta.glob('./*.{png,jpg,jpeg,avif,webp}', { eager: true });
export default Object.values(images).map((img) => img.default);
