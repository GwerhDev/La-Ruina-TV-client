import ContentUpdate from '../../components/Admin/ContentUpdate/ContentUpdate';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEdition } from '../../../middlewares/redux/actions/admin';

const ContentUpdatePage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);

  useEffect(() => {
    dispatch(setEdition(true));
  }, [dispatch]);

  return (
    currentUser &&
    <ContentUpdate />
  )
}

export default ContentUpdatePage;