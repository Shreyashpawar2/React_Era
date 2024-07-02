
function customeRender(reactElemt,mainContainer) {
//tree graph
    const domElement=document.createElement(reactElemt.type)
    domElement.innerHTML=reactElemt.children
    domElement.setAttribute('href',reactElemt.props.href)
    domElement.setAttribute('target',reactElemt.props.target)
    mainContainer.appendChild(domElement);

    // const domElement=document.createElement(reactElemt.type)
    // domElement.innerHTML==reactElemt.children;
    // for (const prop of reactElemt.props) {
    //     if(prop=='children') continue;
    //     domElement.setAttribute(prop,reactElemt.props[prop])
    // }
    // mainContainer.appendChild(domElement);
}


const reactElemt={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click me to visit google'
}


const mainContainer=document.getElementById("root");

customeRender(reactElemt,mainContainer);