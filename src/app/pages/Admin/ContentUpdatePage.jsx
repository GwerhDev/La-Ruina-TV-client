import ContentUpdate from '../../components/Admin/ContentUpdate/ContentUpdate';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setEdition } from '../../../middlewares/redux/actions/admin';

const ContentUpdatePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setEdition(true));
  }, [dispatch]);

  return (
    <ContentUpdate />
  )
}

export default ContentUpdatePage;