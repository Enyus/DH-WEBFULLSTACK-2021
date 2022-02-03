import '../App.css';

function Sidebar () {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<img className="fas fa-chart-line" src='teste.png' alt='teste' />
				</div>
				<div className="sidebar-brand-text mx-3">Admin</div>
			</a>

			<hr className="sidebar-divider my-0"/>

			<li className="nav-item active">
				<a className="nav-link" href="/">
					<img className="fas fa-fw fa-tachometer-alt" src='tachometer.png' style={{marginRight: "4px"}} alt='dashboard'/>
					<span>Dashboard</span></a>
			</li>

			<hr className="sidebar-divider"/>

			<div className="sidebar-heading">Actions</div>

			<li className="nav-item">
				<a className="nav-link collapsed" href="/">
					<img className="fas fa-fw fa-folder" src='pasta.png' alt='pasta' style={{marginRight: "4px"}}/>
					<span>Pages</span>
				</a>
			</li>

			<li className="nav-item">
				<a className="nav-link" href="/">
					<img className="fas fa-fw fa-chart-area" src='chart.png' alt='area' style={{marginRight: "4px"}}/>
					<span>Charts</span></a>
			</li>

			<li className="nav-item">
				<a className="nav-link" href="/">
					<img className="fas fa-fw fa-table" src='table.png' alt='table' style={{marginRight: "4px"}}/>
					<span>Tables</span></a>
			</li>

			<hr className="sidebar-divider d-none d-md-block"/>
		</ul>
    )
};

export default Sidebar;