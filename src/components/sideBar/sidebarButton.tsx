const SidebarButton = ({setSidebar}: {setSidebar: VoidFunction}) => {
    return (
        <div className="desktop:hidden" onClick={setSidebar}>
            <svg id="toggle-button" xmlns="http://www.w3.org/2000/svg" className="size-8" viewBox="0 0 24 24">
                <path fill="#fff" d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"/>
            </svg>
        </div>
    );
}

export default SidebarButton;
