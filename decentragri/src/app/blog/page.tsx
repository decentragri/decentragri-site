import Blog from "@/components/blogs/blog";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "",
};
const page = () => {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  )
}

export default page