import React from "react";
import { Image } from "@mantine/core";
function ProfileImage() {
  return (
    <div>
      <Image
        src="https://images.unsplash.com/photo-1645700489470-044de618d002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
        height={200}
        width={200}
        radius="100%"
        alt="Norway"
      />
    </div>
  );
}

export default ProfileImage;
