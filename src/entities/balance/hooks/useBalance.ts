import { Erc20Abi__factory as ERC20 } from '@/shared/contracts'
import { formatEther } from 'ethers/lib/utils.js'
import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

// For example use gen types
export const useBalance = (address: string) => {
	const [balance, setBalance] = useState("0")
	const { connector, address: account } = useAccount()
	useEffect(() => {
		if (typeof window === 'undefined') return
		(async () => {
			const provider = await connector?.getProvider()

			if (!provider || !account) return null
			const contract = await ERC20.connect(address, provider)
			const result = await contract.balanceOf(account)
			setBalance(formatEther(result))
		})()
	}, [account, address, connector])
	return balance
}