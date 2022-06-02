import style from './Sidebar.module.scss';
import classNames from 'classnames/bind';
function Sidebar() {
    const cx = classNames.bind(style);
    return (
        <aside className={cx('wrapper')}>
            <h1>Sidebar</h1>
        </aside>
    );
}
export default Sidebar;
