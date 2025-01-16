import ReactLoading from 'react-loading';
const Loading = () => {
  return (
    <div className='flex justify-center items-center h-full'>
        <ReactLoading type='spinningBubbles' color="#0A2240" />
    </div>
  )
}

export default Loading