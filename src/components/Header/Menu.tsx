"use client";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Link,
} from "@heroui/react";
import { Menu as MenuIcon } from "lucide-react";
import Logo from "../common/Logo";

const Menu = () => {
  const items = [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Blogs",
      href: "#blogs",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  return (
    <>
      <MenuIcon className="inline md:hidden" onClick={onOpen} />
      <Drawer
        placement="left"
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="none"
      >
        <DrawerContent>
          {() => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                <Logo />
              </DrawerHeader>
              <DrawerBody>
                <aside className="mt-4">
                  <nav>
                    <ul className="col-start gap-3">
                      {items.map((item, i) => (
                        <Link
                          key={"nav_item_" + i}
                          color="foreground"
                          href={item.href}
                          onPress={() => onClose()}
                          className="text-2xl font-medium"
                        >
                          <li>{item.label}</li>
                        </Link>
                      ))}
                    </ul>
                  </nav>
                </aside>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
