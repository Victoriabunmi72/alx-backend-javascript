def makeChange(coins, total):
    # Create a list to store the minimum number of coins needed for each total amount
    dp = [float('inf')] * (total + 1)
    
    # Initialize dp[0] to 0 because it takes 0 coins to make a total of 0
    dp[0] = 0
    
    # Iterate through each coin value
    for coin in coins:
        # Update dp array for each total amount
        for i in range(coin, total + 1):
            dp[i] = min(dp[i], dp[i - coin] + 1)
    
    # If dp[total] is still infinity, it means the total cannot be met
    if dp[total] == float('inf'):
        return -1
    
    return dp[total]
