import React from 'react';
import { useHistory } from 'react-router-dom';
import useAppSelector from '../../Hooks/useAppSelector';
import { RouteNames } from '../../Router';
import { removeDuplicateElements } from '../../utils/helpers/removeDuplicateElements';
import Sidebar from '../../Components/Sidebar/Sidebar';

const SidebarContainer: React.FC = React.memo(() => {
  const router = useHistory();
  const { company } = useAppSelector((state) => state.company);
  const result: Array<string> = [];

  React.useEffect(() => {
    company.map((item) => item.selected ? result.push(item.nameCompany) : null);

    return () => {
      result.length = 0;
    };
  }, [company]);

  const onClick = () => {
    console.log(removeDuplicateElements(result));
  };

  const handleRouter = () => {
    router.push(RouteNames.ABOUT);
  };

  return (
    <Sidebar onClick={onClick} handleRouter={handleRouter} />
  );
});

export default SidebarContainer;