import { ThreeDots } from 'react-loader-spinner';

const Loader = props => {
  return (
    <ThreeDots
      height="70"
      width="70"
      radius="9"
      color="#FF5F6D"
      ariaLabel="three-dots-loading"
      wrapperStyle={{display: 'flex', justifyContent: 'center'}}
      wrapperClassName=""
      visible={true}
      {...props}
    />
  );
};

export default Loader;