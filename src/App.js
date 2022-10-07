//import logo from './logo.svg';
import './App.css';
import Card from './Card';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {

  var getname=[{
    planName:"FREE",
    feature:"$0",
    detailes:[
      
        {   name:"Single User",
      isEnabled:true},
        { name: "5GB Storage",      isEnabled:true},
        {name:"Unlimited Public Projects",      isEnabled:true},
        {name:"Community Access",      isEnabled:true},
        {   name:"Unlimited  Private Projects",      isEnabled:false},
        { name: "Dedicated Phone Support",      isEnabled:false},
        {name:"Free Subdomain" ,      isEnabled:false},
        {name:"Monthly Status Reports",isEnabled:false}
      
    ]
},
{
  planName:"PLUS",
    feature:"$9",
    detailes:[
      {   name:"5 Users",
      isEnabled:true},
        { name: "50GB Storage",      isEnabled:true},
        {name:"Unlimited Public Projects",      isEnabled:true},
        {name:"Community Access",      isEnabled:true},
        {   name:"Unlimited  Private Projects",      isEnabled:true},
        { name: "Dedicated Phone Support",      isEnabled:true},
        {name:"Free Subdomain" ,      isEnabled:true},
        {name:"Monthly Status Reports",isEnabled:false}
     

      
        

    ],
    
    
},
{
  planName:"PRO",
    feature:"$49",
    detailes:[
      {   name:"unlimited Users",
      isEnabled:true},
        { name: "150GB Storage",      isEnabled:true},
        {name:"Unlimited Public Projects",      isEnabled:true},
        {name:"Community Access",      isEnabled:true},
        {   name:"Unlimited  Private Projects",      isEnabled:true},
        { name: "Dedicated Phone Support",      isEnabled:true},
        {name:"Free Subdomain" ,      isEnabled:true},
        {name:"Monthly Status Reports",isEnabled:true}

        
  

  ]
},
  
]

  return (
    <section className="pricing py-5">
      <div className="container">
    <div className="row">
      {
        getname.map((card)=>{
          return <Card card={card}></Card>
        })
      }
    
    

      </div>
      </div>
      </section>
    

  );
}

export default App;
