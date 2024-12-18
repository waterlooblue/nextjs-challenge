import { HeaderModel } from "@/models/Header";

interface Props {
  data?: HeaderModel;
}

const LayoutHeader = ({ data }: Props) => {
  return (
    <header>
      {data?.logo.url}
    </header>
  );
};

export default LayoutHeader;
