// Get today's featured article from English Wikipedia

let today = new Date();
let year = today.getFullYear();
let month = String(today.getMonth() + 1).padStart(2,'0');
let day = String(today.getDate().padStart(2,'0'));
let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/featured/${year}/${month}/${day}`;

let response = await fetch( url,
    {
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJlOTQ3MzliODMyOGZiZTgxOTdjMWY3YmYzYzhkYWJmOCIsImp0aSI6ImU1YWQ3OWNiMWVkNzVmZTlhYWQ1MjM0ZTM4ZDlhNzBiZjkwODU4OWEyMDkyYTJiYjBiOTI5OTg5NGRkMTcxZDQ1MzU0MjMxMzBjNmIxMDkzIiwiaWF0IjoxNjc4MTgzNzUyLjQ1OTQyNSwibmJmIjoxNjc4MTgzNzUyLjQ1OTQyOSwiZXhwIjozMzIzNTA5MjU1Mi40NTcyNjQsInN1YiI6IjcyMjAwMjQ2IiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.n5PWvuGZhKU7VJOp5IUMwdTB_xNXzse1kiL2T6rvBQxnJhokgCkGL6tfedY2V9x843fzy45udNnyGEiMx8PZ3AE4QTPuzWJB1rhNYFuBsYatWTTvv3P77mmB1R6odtsPrJQzV0sASPJ8U49jxlR29nGf_MuecvXw_ExtA1rFZxIZRNHraA_A_Q4l56YlyP43A0UWVYkEK9nHZm3lsbV_-bJ_SC2vEUkwcxjqI6HrEMlJSOQcr87XOIk8zM4RxxF7g4aWJsGaEt6Hgq5luDbJMFNsa0d1iL4lXLaqCLVa3fXuy2SuZPwgbOxGqtkufatEIuYt9gP3vT9MeeYPstY9hVch1aX-geOOUEzRbuFx64ebsX_zBZi_52Ya6D9vi_Zl9YtPfGOFM2Zp6i8rw4z7hMojbX7h4ue2jIgFKyYl9hxBy1zabHYt88V54a9I02ovdLx8k8PQKIwVk4GPRukZd23dhLg2k8uvHfq6Zyvi_NbEP5n8w3dFob1EN1C964IX8DUoDlvU7QZwPKylBA2b2p8tBf0A6tHAEQe3K-EYuCmkPtbNQSl7MR0K-Gws9El-NLS99T0kOvVVpzLsSLvEQQw-_ckLFwTHdSJ_dO-VaXKUbDaxUg5ZgWWzV2Cf6LLHJx1y4-LEg4idMtA8q7wBgNniBAH7Aczdm7CcPEIZ3xI'
        }
    }
);
response.json()
    .then(console.log).catch(console.error);