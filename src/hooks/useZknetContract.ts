import { useCallback, useEffect, useMemo } from "react";
import { useBlockNumber, useReadContract, useWriteContract } from "wagmi";
import ZknetABI from "../assets/abi/zknet.json";
import { testnetZknetAddress } from "../constants";
import { useAppKitAccount } from "@reown/appkit/react";
import { isAddress } from "viem";

const useZknetContract = () => {
    const { data: blockNumber } = useBlockNumber({ watch: true })
    const { address } = useAppKitAccount()

    const account = useMemo(() => {
        if (address && isAddress(address)) {
            return address
        } else return undefined
    }, [address])

    const { writeContract, isPending, isSuccess, error } = useWriteContract();
    const { data: zkAccount, refetch } = useReadContract({
        abi: ZknetABI,
        address: testnetZknetAddress,
        functionName: "r5_accountResolve",
        args: [],
        account
    })

    const { data: zkBalance, refetch: refetchBalance } = useReadContract({
        abi: ZknetABI,
        address: testnetZknetAddress,
        functionName: "r5_balanceCheck",
        args: [],
        account
    })


    const createWallet = useCallback(() => {
        writeContract({
            abi: ZknetABI,
            address: testnetZknetAddress,
            functionName: 'r5_accountCreate',
            args: ['defaultSalt'],
            value: 0n
        })
    }, [writeContract])

    const depositFunds = useCallback((value: bigint) => {
        writeContract({
            abi: ZknetABI,
            address: testnetZknetAddress,
            functionName: 'r5_balanceDeposit',
            args: [value],
            value
        })
    }, [writeContract])

    const withdrawFunds = useCallback((value: bigint) => {
        if (value > 0 && account) {
            writeContract({
                abi: ZknetABI,
                address: testnetZknetAddress,
                functionName: 'r5_balanceTransferExternal',
                args: [account, value],
                value: 0n
            })
        }
    }, [writeContract, account])

    const destoryAccount = useCallback(() => {
        if (account) {
            writeContract({
                abi: ZknetABI,
                address: testnetZknetAddress,
                functionName: 'r5_accountDestroy',
                args: [account],
                value: 0n
            })
        }
    }, [writeContract, account])

    useEffect(() => {
        refetch()
        refetchBalance()
    }, [blockNumber, isSuccess])

    return {
        createWallet,
        depositFunds,
        withdrawFunds,
        destoryAccount,
        isPending,
        isSuccess,
        error,
        zkAccount,
        zkBalance,
    }
}

export default useZknetContract