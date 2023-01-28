import Dashboard from '@/Components/Dashboard';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div>
            <Dashboard></Dashboard>
            {children}
        </div>
    );
};

export default DashboardLayout;