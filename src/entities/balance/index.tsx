import { FC } from 'react';
import { useBalance } from './hooks/useBalance';

type Props = {
  address: string;
};
const Balance: FC<Props> = ({ address }) => {
  const balance = useBalance(address);
  return <div>balance: {balance}</div>;
};

export default Balance;
