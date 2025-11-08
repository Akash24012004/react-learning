    const Parent=React.createElement(
        "div",
        {id:"parent"},
        [React.createElement(
            "div",
            {id:"child"},
           [React.createElement("h1",{},"i am nested"),
             React.createElement(  "h1",  {}, "i am in  nested shibling")]   
            ),
            React.createElement(
            "div",
            {id:"child"},
           [React.createElement("h1",{},"i am nested 2"),
             React.createElement(  "h1",  {}, "i am in  nested shibling 2")]   
            )]
        );

console.log(Parent)
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(Parent);