import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e97866b51d5368d93c52cb6cff5ff52c~c5_100x100.jpeg?x-expires=1654531200&x-signature=BGoz%2BQbjkKt8wH1KKA80Lkgneoo%3D"
                alt="Nguyễn Nhân Lý"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span className="">Nguyễn Nhân Lý</span>
                    <FontAwesomeIcon className={cx('checkicon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>SpaceFull</span>
            </div>
        </div>
    );
}
export default AccountItem;
