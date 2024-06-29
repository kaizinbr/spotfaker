import image1 from '../images/slide-1.jpg'
import image2 from '../images/slide-2.jpg'
import image3 from '../images/slide-3.jpg'
import image4 from '../images/slide-4.jpg'

export const images: string[] = []

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
