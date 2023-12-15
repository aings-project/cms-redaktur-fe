import React from "react";
import NewsTabBarMenuItem from "./NewsTabBarMenuItem";
import { parseNavigationToStatus } from "../../utils/draftAttributeParser";
import { useState } from "react";
import {
  drafStatus,
  navMenus,
  publicationStatus,
  rejectedStatus,
} from "../../utils/filterData";

export default function NewsDraftTabBar({
  onSetActiveStatus,
  status,
  setStatus,
}) {
  const [activeNavMenu, setActiveNavMenu] = useState(navMenus[0]);

  const handleSelectStatus = (event) => {
    onSetActiveStatus(parseNavigationToStatus(event.target.value));
  };

  const handleSelectNavMenu = (event) => {
    setActiveNavMenu(event.target.value);
    switch (event.target.value) {
      case navMenus[0]:
        setStatus(drafStatus);
        onSetActiveStatus(parseNavigationToStatus(drafStatus[0]));
        break;
      case navMenus[1]:
        setStatus(publicationStatus);
        onSetActiveStatus(parseNavigationToStatus(publicationStatus[0]));
        break;
      case navMenus[2]:
        setStatus(rejectedStatus);
        onSetActiveStatus(parseNavigationToStatus(rejectedStatus[0]));
        break;
    }
  };

  const handleTabNavMenu = (index) => {
    setActiveNavMenu(navMenus[index]);
    switch (index) {
      case 0:
        setStatus(drafStatus);
        onSetActiveStatus(parseNavigationToStatus(drafStatus[0]));
        return;
      case 1:
        setStatus(publicationStatus);
        onSetActiveStatus(parseNavigationToStatus(publicationStatus[0]));
        return;
      case 2:
        setStatus(rejectedStatus);
        onSetActiveStatus(parseNavigationToStatus(rejectedStatus[0]));
        return;
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between hover:cursor-pointer bg-white flex-wrap">
        <div className="hidden sm:flex">
          {navMenus.map((item, index) => {
            return (
              <NewsTabBarMenuItem
                key={index}
                title={item}
                isActive={navMenus[index] === activeNavMenu}
                onClick={() => {
                  handleTabNavMenu(index);
                }}
              />
            );
          })}
        </div>
        {/* ------- MOBILE START -------- */}
        <div className="flex flex-wrap sm:hidden w-full bg-white rounded-t-md">
          <p className="text-sky-800 mb-2">Filter</p>
          <select
            className="text-base font-normal px-4 mb-3 pb-1 flex hover:cursor-pointer bg-white border border-neutral-400 focus:outline-sky-800 rounded-md w-full"
            onChange={handleSelectNavMenu}
          >
            {navMenus.map((item, index) => {
              return <option key={index}>{item}</option>;
            })}
          </select>
          <div className="flex w-full">
            <div className="flex flex-col w-full">
              <p className="mb-2">Status</p>
              <select
                className="text-base font-normal px-4 mb-3 pb-1 flex hover:cursor-pointer border border-neutral-400 focus:outline-sky-800 rounded-md w-full"
                onChange={handleSelectStatus}
              >
                {status.map((item, index) => {
                  return <option key={index}>{item}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
        {/* ------- MOBILE END -------- */}
      </div>
      <div className="h-0.5 w-full bg-sky-50 sm:bg-slate-300" />
    </div>
  );
}
