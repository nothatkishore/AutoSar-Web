#include "bits/stdc++.h"
using namespace std;

#define vi vector<int>
#define pb push_back
#define ll long long
#define all(x) (x).begin(), (x).end()
const ll MOD = 1e9+7;

void solve(int index, vi temp, vi nums)
{
    if(index < 0)
    {
        for(int x : temp)
            cout<<x<<" ";
        cout<<endl;
        return;
    }

    temp.push_back(nums[index]);
    solve(index - 2, temp, nums);

    temp.pop_back();
    solve(index - 2, temp, nums);
}

int main()
{
    vi nums = {1, 2, 3, 4, 7, 8, 9};
    int n = nums.size();
    if(n & 1)
        n--;
    else
        n -= 2;

    solve(n, {}, nums);
    return 0;
}
