import s from './OptionSelector.module.css';
import shieldIcon from '../../assets/images/svg/shield-icon.svg';
import settingsIcon from '../../assets/images/svg/settings-icon.svg';
import favoriteIcon from '../../assets/images/svg/like-icon.svg';
import billingIcon from '../../assets/images/svg/billing-icon.svg';
import userIcon from '../../assets/images/svg/profile-icon.svg';
import supportIcon from '../../assets/images/svg/support-icon.svg';
import contentIcon from '../../assets/images/svg/content-icon.svg';

export const OptionSelector = (props) => {
  const { settings, security, favorites, subscription, users, content, support } = props || null;

  return (
    <section className={s.container}>
      {
        content &&
        <li className={s.option}>
          <img src={contentIcon} alt="" height="25px" />
        </li>
      }
      {
        users &&
        <li className={s.option}>
          <img src={userIcon} alt="" height="25px" />
        </li>
      }
      {
        favorites &&
        <li className={s.option}>
          <img src={favoriteIcon} alt="" height="25px" />
        </li>
      }
      {
        subscription &&
        <li className={s.option}>
          <img src={billingIcon} alt="" height="25px" />
        </li>
      }
      {
        security &&
        <li className={s.option}>
          <img src={shieldIcon} alt="" height="25px" />
        </li>
      }
      {
        settings &&
        <li className={s.option}>
          <img src={settingsIcon} alt="" height="25px" />
        </li>
      }
      {
        support &&
        <li className={s.option}>
          <img src={supportIcon} alt="" height="25px" />
        </li>
      }
    </section>
  )
}
