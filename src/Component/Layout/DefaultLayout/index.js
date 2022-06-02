import Header from '~/Component/Layout/component/Header';
import classNames from 'classnames/bind';
import style from './DefaultLayout.module.scss';
import Sidebar from './Sidebar';
function DefaultLayout({ children }) {
    const cx = classNames.bind(style);
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
export default DefaultLayout;
