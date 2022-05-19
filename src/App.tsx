import useFetch from './useFetch'

const ImageFetch: (props: any) => JSX.Element = props => {
  const { response, error } = useFetch(
    'https://dog.ceo/api/breeds/image/random',
    {},
  )
  if (!response) return <div>Loading...</div>
  if (error) return <div>Something wrong happened 😒</div>
  const imageUrl = response.message
  return (
    <div>
      <img src={imageUrl} alt="avatar" width={400} height="auto" />
    </div>
  )
}

function App() {
  return <ImageFetch />
}

export default App
