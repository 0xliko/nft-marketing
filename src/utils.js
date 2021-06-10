
export const getEthBalance = async (account, web3) => {
    return await web3.eth.getBalance(account)
}