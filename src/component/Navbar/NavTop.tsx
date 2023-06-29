'use client';
import { Button, DarkThemeToggle, Navbar } from 'flowbite-react';

export default function NavTop() {
   return (
      <Navbar fluid rounded>
         <Navbar.Brand href="#">
            <span className="whitespace-nowrap text-xl font-semibold dark:text-white">
               ShakerNow
            </span>
         </Navbar.Brand>
         <div className="flex md:order-2">
            <DarkThemeToggle />
            <Navbar.Toggle />
         </div>
         <Navbar.Collapse>
            <Navbar.Link active href="#">
               <p>Home</p>
            </Navbar.Link>
         </Navbar.Collapse>
      </Navbar>
   );
}
