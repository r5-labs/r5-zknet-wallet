import { useCallback, useEffect, useMemo } from "react";
import { useBlockNumber, useReadContract, useWriteContract } from "wagmi";
import ZknetABI from "../assets/abi/zknet.json";
import { testnetZknetAddress } from "../constants";
import { useAppKitAccount } from "@reown/appkit/react";
import { isAddress } from "viem";

const useZknetContract = () => {
  const { data: blockNumber } = useBlockNumber({ watch: true });
  const { address } = useAppKitAccount();

  const account = useMemo(() => {
    if (address && isAddress(address)) {
      return address;
    } else return undefined;
  }, [address]);

  const { writeContractAsync } = useWriteContract();
  const { writeContract, isPending, isSuccess, error } = useWriteContract();
  const { data: zkAccount, refetch } = useReadContract({
    abi: ZknetABI,
    address: testnetZknetAddress,
    functionName: "r5_accountResolve",
    args: [],
    account
  });

  const { data: zkBalance, refetch: refetchBalance } = useReadContract({
    abi: ZknetABI,
    address: testnetZknetAddress,
    functionName: "r5_balanceCheck",
    args: [],
    account
  });

  const createWallet = useCallback(() => {
    writeContract({
      abi: ZknetABI,
      address: testnetZknetAddress,
      functionName: "r5_accountCreate",
      args: ["defaultSalt"],
      value: 0n
    });
  }, [writeContract]);

  const depositFunds = useCallback(
    (value: bigint) => {
      return writeContractAsync({
        abi: ZknetABI,
        address: testnetZknetAddress,
        functionName: "r5_balanceDeposit",
        args: [value],
        value
      });
    },
    [writeContractAsync]
  );

  const withdrawFunds = useCallback(
    async (recipient: string, value: bigint) => {
      if (value > 0 && isAddress(recipient)) {
        return await writeContractAsync({
          abi: ZknetABI,
          address: testnetZknetAddress,
          functionName: "r5_balanceTransferExternal",
          args: [recipient, value],
          value: 0n
        });
      }
    },
    [writeContractAsync]
  );

  const transferFunds = useCallback(
    async (recipient: string, value: bigint) => {
      if (value > 0 && recipient) {
        return await writeContractAsync({
          abi: ZknetABI,
          address: testnetZknetAddress,
          functionName: "r5_balanceTransferInternal",
          args: [recipient, value],
          value: 0n
        });
      }
    },
    [writeContractAsync]
  );

  const destroyAccount = useCallback(async () => {
    if (account) {
      return await writeContractAsync({
        abi: ZknetABI,
        address: testnetZknetAddress,
        functionName: "r5_accountDestroy",
        args: [account],
        value: 0n
      });
    }
  }, [writeContract, account]);

  useEffect(() => {
    refetch();
    refetchBalance();
  }, [blockNumber, isSuccess]);

  return {
    createWallet,
    depositFunds,
    withdrawFunds,
    transferFunds,
    destroyAccount,
    isPending,
    isSuccess,
    error,
    zkAccount,
    zkBalance
  };
};

export default useZknetContract;
