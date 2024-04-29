import React from 'react'
import SecurityIcon from "@mui/icons-material/Security";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import HomeIcon from "@mui/icons-material/Home";
import DevicesIcon from "@mui/icons-material/Devices";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PaidIcon from "@mui/icons-material/Paid";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import LockIcon from "@mui/icons-material/Lock";
import SettingsIcon from "@mui/icons-material/Settings";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import "./account.css";
const Account = () => {
  return (
    <div className="flex flex-row py-20 px-56">
      <div className="flex flex-col mt-16">
        <div>
          <HomeIcon className="mb-2 " />
          <button className="text-2xl mt-5 ml-2">Overview</button>
        </div>
        <div>
          <CreditCardIcon className="mb-2" />
          <button className="text-2xl mt-5 ml-2">Membership</button>
        </div>
        <div>
          <SecurityIcon className="mb-2" />
          <button className="text-2xl mt-5 ml-2">Security</button>
        </div>
        <div>
          <DevicesIcon className="mb-2" />
          <button className="text-2xl mt-5 ml-2">Devices</button>
        </div>
        <div>
          <ManageAccountsIcon className="mb-2" />
          <button className="text-2xl mt-5 ml-2">Profiles</button>
        </div>
      </div>
      <div className="ml-36 text-xl">
        <div>
          <h1 className="text-6xl">Account</h1>
          <h1 className="text-xl mt-3">Membership details</h1>
        </div>
        <div className=" mt-5 h-60 w-96 bg-slate-100 border-2 border-solid border-zinc-800 rounded-md">
          <div>
            <span className="bg-sky-500 border rounded-md ">
              Member since March 2024
            </span>
          </div>
          <div className="p-3">
            <h1 className="text-2xl font-medium">Basic Plan</h1>
            <div className="mt-4">Next payment: 12 May 2024</div>

            <div className="flex flex-row mt-2">
              <div>
                <PaidIcon />
              </div>

              <div className="ml-3  ">pppp@gmail.com</div>
            </div>
            <hr className="border-black my-2" />
          </div>
          <div className="flex justify-between p-2">
            <span>Manage Membership</span>
            <ChevronRightIcon />
          </div>
        </div>
        <div className="mt-10">
          <h1>Quick Links</h1>
          <div
            // style={{ width: "46rem" }}
            className=" mt-5 h-64 w-full bg-slate-100 border-2 border-solid border-zinc-800 rounded-md p-2 text-2xl"
          >
            <div className="flex justify-between mt-2">
              <div>
                <CardMembershipIcon />
                <button className="ml-2">Change Plan</button>
              </div>

              <ChevronRightIcon />
            </div>
            <hr className="border-black my-1" />
            <div className="flex justify-between mt-3">
              <div>
                <CreditCardIcon />
                <button className="ml-2">Manage Payment Method</button>
              </div>

              <ChevronRightIcon />
            </div>
            <hr className="border-black my-1" />
            <div className="flex justify-between mt-3">
              <div>
                <LockIcon />
                <button className="ml-2">Update Password</button>
              </div>

              <ChevronRightIcon />
            </div>
            <hr className="border-black my-1" />
            <div className="flex justify-between mt-3">
              <div>
                <SupervisorAccountIcon />
                <button className="ml-2">Adjust Parental control</button>
              </div>

              <ChevronRightIcon />
            </div>
            <hr className="border-black my-1" />
            <div className="flex justify-between mt-3">
              <div>
                <SettingsIcon />
                <button className="ml-2">Edit Settings</button>
              </div>

              <ChevronRightIcon />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account
