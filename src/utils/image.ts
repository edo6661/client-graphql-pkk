export const defaultImage = (image: string) => {
  return image ? image.includes(
    'http' || 'https'
  ) ? image : "https://i.pinimg.com/236x/42/92/f8/4292f8591dab26fcaa4b3ab213895e6f.jpg" : "https://i.pinimg.com/236x/42/92/f8/4292f8591dab26fcaa4b3ab213895e6f.jpg"
}