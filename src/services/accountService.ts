import { getEthBalance } from '../utils'
import { BigNumber } from 'bignumber.js'

export const getUserBalance = async ({
                                         library,
                                         account,
                                     }: {
    library: any
    account?: string | null

}): Promise<BigNumber> => {
    if (!library || !account ) {
        return new BigNumber(0)
    }

        const balance = new BigNumber(await getEthBalance(account, library)).div(10 ** 18)
        return balance.gt(0) ? balance : new BigNumber(0)

}
