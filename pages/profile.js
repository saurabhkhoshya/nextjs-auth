import { getSession } from "next-auth/client";
import { useContext } from "react";
import UserProfile from "../components/profile/user-profile";

function ProfilePage() {
  return <UserProfile />;
}

export async function getServerSideProps() {
  const session = await getSession({ req: useContext.req });
  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
export default ProfilePage;
