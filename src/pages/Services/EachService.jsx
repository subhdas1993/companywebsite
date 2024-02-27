import React from 'react'
import { useParams } from 'react-router-dom';

import Seo from './AllServices/Seo';
import SMMarket from './AllServices/SMMarket';
import WDev from './AllServices/WDev';
import LogoDesign from './AllServices/LogoDesign';
import ProductPack from './AllServices/ProductPack';
import LeadGen from './AllServices/LeadGen';

function EachService() {
    const { service } = useParams();
  return (
    <div>
        { service === 'seo' ? <Seo /> : ""}
        { service === 'social_media_marketing' ? <SMMarket /> : ""}
        { service === 'web_development' ? <WDev /> : ""}
        { service === 'logo_design' ? <LogoDesign /> : ""}
        { service === 'product_packaging' ? <ProductPack /> : ""}
        { service === 'lead_generation' ? <LeadGen /> : ""}
    </div>
  )
}

export default EachService