import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Rootlayout from './common/RootLayout.jsx'
import DashboardData from './pages/dashboard/DashboardData.jsx'
import AddPropertyTypes from './pages/property-types/AddPropertyTypes.jsx'
import ViewPropertyTypes from './pages/property-types/ViewPropertyTypes.jsx'
import AddProperties from './pages/properties/AddProperties.jsx'
import ViewProperties from './pages/properties/ViewProperties.jsx'
import AddLocalities from './pages/localities/AddLocalities.jsx'
import ViewLocalities from './pages/localities/ViewLocalities.jsx'
import AddServices from './pages/services/AddServices.jsx'
import ViewServices from './pages/services/ViewServices.jsx'
import AddSubServices from './pages/sub-services/AddSubServices.jsx'
import ViewSubServices from './pages/sub-services/ViewSubServices.jsx'
import AddTestimonial from './pages/testimonial/AddTestimonial.jsx'
import ViewTestimonial from './pages/testimonial/ViewTestimonial.jsx'
import ViewUser from './pages/users/ViewUsers.jsx'
import Newsletter from './pages/enquiries/NewsLetter.jsx'
import Orders from './pages/orders/Orders.jsx'
import AddWhyChooseUs from './pages/why-choose-us/AddWhyChooseUs.jsx'
import ViewWhyChooseUs from './pages/why-choose-us/ViewWhyChooseUs.jsx'
import AddSubPropertyType from './pages/sub-property-type/AddSubPropertyType.jsx'
import ViewSubPropertyTypes from './pages/sub-property-type/ViewSubPropertyType.jsx'
import AddAmenities from './pages/amenities/AddAmenities.jsx'
import ViewAmenities from './pages/amenities/ViewAmenities.jsx'
import AccountSetting from './pages/web-presence-setting/AccountSetting.jsx'
import ViewSetting from './pages/web-presence-setting/ViewSetting.jsx'
import 'react-responsive-pagination/themes/classic-light-dark.css';
import PropertyEnquiries from './pages/enquiries/PropertyEnquiries.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Rootlayout/>}>
          <Route path='/' element={<DashboardData/>} />
          <Route path='/users/view' element={<ViewUser />} />

          <Route path='company-profile'>
          <Route path='add' element={<AccountSetting />} />
          <Route path='edit/:id' element={<AccountSetting />} />
          <Route path='view' element={<ViewSetting />} />
          </Route>

          <Route path='property' >
          <Route path='enquiries' element={<PropertyEnquiries />} />
          <Route path='newsletters' element={<Newsletter />} />
          </Route>

          <Route path='property-types'>
            <Route path='add' element={<AddPropertyTypes/>}/>
            <Route path='edit/:id' element={<AddPropertyTypes/>}/>
            <Route path='view' element={<ViewPropertyTypes/>}/>
          </Route>

          <Route path='sub-property-type'>
            <Route path='add' element={<AddSubPropertyType/>}/>
            <Route path='edit/:id' element={<AddSubPropertyType/>}/>
            <Route path='view' element={<ViewSubPropertyTypes/>}/>
          </Route>

          <Route path='localities'>
            <Route path='add' element={<AddLocalities/>}/>
            <Route path='edit/:id' element={<AddLocalities/>}/>
            <Route path='view' element={<ViewLocalities/>}/>
          </Route>

          <Route path='properties'>
            <Route path='add' element={<AddProperties/>}/>
            <Route path='edit/:id' element={<AddProperties/>}/>
            <Route path='view' element={<ViewProperties/>}/>
          </Route>

          <Route path='services'>
            <Route path='add' element={<AddServices/>}/>
            <Route path='edit/:id' element={<AddServices/>}/>
            <Route path='view' element={<ViewServices/>}/>
          </Route>

          <Route path='sub-services'>
            <Route path='add' element={<AddSubServices/>}/>
            <Route path='edit/:id' element={<AddSubServices/>}/>
            <Route path='view' element={<ViewSubServices/>}/>
          </Route>

          <Route path='orders' >
          <Route path='view' element={<Orders />} />
          </Route>

          {/* <Route path='why-choose-us'>
            <Route path='add' element={<AddWhyChooseUs/>}/>
            <Route path='edit/:id' element={<AddWhyChooseUs/>}/>
            <Route path='view' element={<ViewWhyChooseUs/>}/>
          </Route> */}

          <Route path='testimonial'>
            <Route path='add' element={<AddTestimonial/>}/>
            <Route path='edit/:id' element={<AddTestimonial/>}/>
            <Route path='view' element={<ViewTestimonial/>}/>
          </Route>

          <Route path='amenities'>
            <Route path='add' element={<AddAmenities/>}/>
            <Route path='edit/:id' element={<AddAmenities/>}/>
            <Route path='view' element={<ViewAmenities/>}/>
          </Route>

          </Route>
            
        </Routes>
    </BrowserRouter>
  </>,
)
