# function takes in 2 arrays
# the first array is an array of arrays each sub array represents a tournament match up the home team is listed first
# example [["home team", "away team"], ["Home-Teem", "A-Way-Teem"]]

# The second array represents the results of the corrisponding match ups
# A 1 means the home team won and a 0 means the away team won.
# example [1, 0] means "home team" won and "A-Way-Teem" won

#  each team will play every other team one time.
# each win results in 3 points each loss results in 0 points, there are no ties
# Determine the winner of the tournament and return the team name


def tournamentWinner(competitions, results):
    score = {}
    for i in range(len(competitions)):
        winner = 
        if results[i] == 1:
            if competitions[i][0] in score:
                score[competitions][i][0] += 3
            else: 
                score[competitions][i][0] = 3
        else:
            if competitions[i][1] in score:
                score[competitions][i][1] += 3
            else: 
                score[competitions][i][1] = 3
    return  max(score, key=score.get)


print(tournamentWinner([["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]], [0, 0, 1]))
