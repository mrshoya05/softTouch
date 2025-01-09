import React from "react";
import { Link } from "react-router-dom";

//here i want that if user is logged in in nav bar only show logout button and if user is not logged in show login and register button also if user is logged in i want profile button  and home
//if user is not logged in i want home and about button and contact button.

//i want to use protected route in this file to protect the dashboard page so that only logged in user can see the dashboard page.



// lets code now 


//first i will import the protected route component from utils folder
import ProtectedRoute from "../utils/ProtectedRoutes";

//now i will create a functional component called Dashboard
//this component will have a div with class name min-h-screen bg-gray-100
//inside this div i will create a main tag with class name container mx-auto p-6
//inside this main tag i will create a h2 tag with class name text-xl font-semibold text-gray-800
//inside this h2 tag i will write Welcome, User!
//then i will create a p tag with class name mt-4 text-gray-600
//inside this p tag i will write This is your dashboard. Track your skincare routines, progress, and get recommendations.
//then i will create a div with class name mt-6 grid grid-cols-1 md:grid-cols-3 gap-6

//inside this div i will create 3 divs with class name p-6 bg-white rounded-lg shadow-md
//inside these divs i will create h3 tag with class name text-lg font-bold text-gray-800
//inside these h3 tags i will write Your Routines, Progress Tracker, Recommendations
//then i will create a p tag with class name mt-2 text-sm text-gray-600
//inside these p tags i will write Manage your morning and evening routines., Upload photos and view your skincare progress., Get personalized skincare recommendations.


//now i will export this component


function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto p-6">
        <h2 className="text-xl font-semibold text-gray-800">Welcome, User!</h2>
        <p className="mt-4 text-gray-600">This is your dashboard. Track your skincare routines, progress, and get recommendations.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Your Routines</h3>
            <p className="mt-2 text-sm text-gray-600">Manage your morning and evening routines.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Progress Tracker</h3>
            <p className="mt-2 text-sm text-gray-600">Upload photos and view your skincare progress.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Recommendations</h3>
            <p className="mt-2 text-sm text-gray-600">Get personalized skincare recommendations.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
