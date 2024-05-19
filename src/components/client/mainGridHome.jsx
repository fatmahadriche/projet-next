import React from 'react'
import Image from 'next/image'
const MainGridHome = () => { 
 return ( 
<div className="container overflow-hidden">
 <div className="row gy-5">
 <div className="col-6">
 <div className="p-3 border bg-light">
 <Image
 src="https://images.kikocosmetics.com/mediaObject/2023/info/Beauty-Services/Info_BeautyServices_HubPage-Banner-MakeupAndGo/webp-resolutions/res-720x600/Info_BeautyServices_HubPage-Banner-MakeupAndGo.webp"
 width={700}
 height={500}
 alt="Picture"
 />
 </div>
 </div>
 <div className="col-6">
 <div className="p-3 border bg-light"> 
 <Image
 src="https://images.kikocosmetics.com/mediaObject/2023/info/Beauty-Services/Info_BeautyServices_HubPage-Banner-BeautyPro/webp-resolutions/res-720x600/Info_BeautyServices_HubPage-Banner-BeautyPro.webp"
 width={700}
 height={500}
 alt="Picture"
 />
 </div>
 </div>
 </div>
</div>
 ) 
} 
export default MainGridHome
