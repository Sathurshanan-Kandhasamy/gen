import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Button,
} from '@nextui-org/react';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">GEN</p>
      </NavbarBrand>

      {isAuthenticated === false ? (
        <NavbarContent justify="end">
          <NavbarItem className="lg:flex">
            <Button as={Link} color="primary" href="/login" variant="light">
              Log in
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="/register" variant="ghost">
              Create account
            </Button>
          </NavbarItem>
        </NavbarContent>
      ) : (
        <NavbarContent as="div" justify="end">
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="/create-post"
              variant="ghost"
            >
              Create post
            </Button>
          </NavbarItem>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="default"
                name="John Doe"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">John Doe</p>
                <p className="font-semibold">@john</p>
              </DropdownItem>
              <DropdownItem key="dashboard">Dashboard</DropdownItem>
              <DropdownItem key="create-post">Create Post</DropdownItem>
              <DropdownItem key="reading-list">Reading List</DropdownItem>
              <DropdownItem key="settings">Settings</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      )}
    </Navbar>
  );
};

export default Header;
