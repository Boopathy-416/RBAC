import React, { useState } from "react";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css"; 




export default function Profilesection() {
  const [imageUrl, setImageUrl] = useState(null);
  

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
    }
  };

  const handlePhoneChange = (isValid, value, countryData) => {
    console.log("Phone number:", value);
    console.log("Country Data:", countryData);
  };


  return (
    <div className="container mx-auto py-10">
    {/* Profile Header */}
    <div className="flex flex-col items-center mb-8 space-y-4">
      <div className="relative">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
          <img src={imageUrl || "/placeholder.svg"} alt="Profile picture" className="object-cover w-full h-full" />
        </div>
        <label
          htmlFor="picture"
          className="absolute bottom-0 right-0 p-2 bg-blue-500 text-white rounded-full cursor-pointer hover:bg-blue-600"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.5 3.5L7.5 21m4.5-7l5-7M3 11.5l7.5 7"></path>
          </svg>
          <input
            id="picture"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Boopathy</h1>
        <p className="text-gray-500">Boopathy@example.com</p>
      </div>
    </div>

    {/* Profile Settings */}
    <div className="grid gap-6 md:grid-cols-2">
      {/* Personal Details */}
      <div className="p-6 border rounded-lg bg-white shadow">
        <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              id="fullName"
              type="text"
              defaultValue="Full name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              id="dob"
              type="date"
              defaultValue="2000-08-11"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              id="gender"
              defaultValue="male"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 sm:text-sm"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div >
            <IntlTelInput
              containerClassName="intl-tel-input mt-1"
              inputClassName="form-control  py-2  border rounded-sm focus:outline-none focus:ring focus:ring-blue-300"
              initialCountry="in"
              placeholder="+91 0000 000000"
              separateDialCode={true}
              preferredCountries={["us", "gb", "in"]}
              onPhoneNumberChange={handlePhoneChange}
            />
          </div>
          <div>
            <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">Nationality</label>
            <input
              id="nationality"
              type="text"
              defaultValue="Indian"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      {/* Account Details */}
      <div className="p-6 border rounded-lg bg-white shadow">
        <h2 className="text-xl font-semibold mb-4">Account Details</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="displayName" className="block text-sm font-medium text-gray-700">Display Name</label>
            <input
              id="displayName"
              type="text"
              defaultValue="Bpy_creation "
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Account Created</label>
            <p className="text-gray-500">Dec 06 , 2024</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Login</label>
            <p className="text-gray-500">dec 09 , 2024</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
