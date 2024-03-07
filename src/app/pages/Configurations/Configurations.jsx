import { useSelector } from "react-redux";
import { MyConfigurations } from "../../components/MyConfigurations/MyConfigurations";

const Configurations = () => {
  const currentUser = useSelector(state => state.currentUser);

  return (
    currentUser &&
    <MyConfigurations />
  )
};

export default Configurations;