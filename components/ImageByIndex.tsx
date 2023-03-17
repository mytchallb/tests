import image1 from '../public/slaapkamerboekenkast.webp';
import image2 from '../public/zolderkamerplafond.webp';

export const images: string[] = [image1.src, image2.src]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
