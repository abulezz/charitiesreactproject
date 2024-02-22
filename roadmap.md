# Roadmap

## Build sinlge Charity page

1. Create a component (page/view) for it ("CharityDetails.tsx).
2. Add route to navigate to that component. That route's path should include the id of the charity (look in spike how to have a dynamic route. or better in react-router docs).
3. In the Home component, create a Link (react router link) that takes to the details page, that link should contain the actual id of the charity (inserting a variable in the string).
4. in the CharityDetails component, we should use the useParams hook (React-router) to get the id from the charity.
   4.1 crete a state variable to store the information of that single charity
   4.2 do a fetch to the corresponding endpoint , sending the charit id, and set the state variable with the result of the fetch
   4.3 we will probably need an useEffect to call the fetch function when the component loads.
   4.4 display in JSX (in the html part) all the information stored inside the state variable
