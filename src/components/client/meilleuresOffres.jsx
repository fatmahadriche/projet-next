import React from 'react'
import Image from 'next/image'
const MeilleuresOffres = () => { 
 const tabOffres = [ 
 {src: "https://images.kikocosmetics.com/sys-master/images/h96/h46/12144133636126/KM000000266001Bprincipale_608Wx608H.webp#k-product-retina"}, 
 {src: "https://images.kikocosmetics.com/sys-master/images/h67/h33/12439738253342/KM000000280001Bprincipale_900Wx900H#k-zoom"}, 
 {src: "https://images.kikocosmetics.com/sys-master/images/hd4/hc2/9359051030558/KS0200106300033principale_900Wx900H.jpg#k-zoom"}, 
 {src: "https://images.kikocosmetics.com/sys-master/images/h30/h8b/12263989510174/KM000000212001Bprincipale_900Wx900H#k-zoom"} 
 ]
 return ( 
    <div className="container overflow-hidden">
    <h2>Les meilleures ventes de KIKO</h2> 
    <div className="row gy-5">
    
    {tabOffres.map((tab, i) => <div className="col-3" key={i}> <div
   className="p-3 border bg-light">
    <div className="card">
    <Image 
    src={tab.src} 
    height={200}
    width={200}
    style={{maxWidth:'200px', maxHeight: "200px" }}
    alt="offres"/>
    </div>
    </div>
    </div>
    ) 
   }
   </div>
   </div>
    ); 
   } 
   export default MeilleuresOffres
