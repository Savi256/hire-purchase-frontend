import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import Profile from "../components/Profile";
<<<<<<< HEAD

const ProfilePage = () => {
  return (
    <MainLayout>
      <Profile />
=======
import girl from '../img/bus-1.jpeg';

const ProfilePage = () => {

  const phone = +23408031344386;
  const amount = 25000;

  return (
    <MainLayout>
      <Profile 
       image = {girl}
       heading="Ikpa Esther Uchechukwu"
       phone={phone}
       email="Boy@gmail/com"
       address="22 Lion street, new heaven Enugu"
       state="Enugu"
       program="Tailor"
       timeOnHirePurchase="4 months"
       amounToBePaidThisMonth={amount}
       timeLeftForPayment = "15 days"
      />
>>>>>>> 5651f4bc11447f81c3f9b55997a00e0a8cb3b228
    </MainLayout>
    );
};

export default ProfilePage;
