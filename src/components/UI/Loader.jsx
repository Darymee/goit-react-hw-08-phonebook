import { MutatingDots } from 'react-loader-spinner';

export const Loader = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <MutatingDots
      height="100"
      width="100"
      color="grey"
      secondaryColor="grey"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      visible={true}
    />
  </div>
);
