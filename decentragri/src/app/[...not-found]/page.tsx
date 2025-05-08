import NotFound from "@/components/pages/error";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "404 || ",
};
const page = () => {
  return (
    <Wrapper>
      <NotFound />
    </Wrapper>
  )
}

export default page