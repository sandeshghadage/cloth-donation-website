import { Dropdown, DropdownItem } from "flowbite-react";

export default function FlowByteDropdown() {
  return (
    <Dropdown label="Self Drop Location" dismissOnClick={false}>
      <DropdownItem>Delhi NCR</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
  );
}
