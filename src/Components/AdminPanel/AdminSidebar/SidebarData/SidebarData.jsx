import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChartLine, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';

export const SidebarData = [
    {
        title: "Admin Home",
        path: '/admin',
        icon: <FontAwesomeIcon icon={faHome} />
    },
    {
        title: "Add Product Information",
        path: '/admin/addProduct',
        icon: <FontAwesomeIcon icon={faCartPlus} />
    },
    {
        title: "Edit Product Information",
        path: '/admin/editProduct',
        icon: <FontAwesomeIcon icon={faEdit} />
    },
    {
        title: 'Delete Product Information',
        path: '/admin/deleteProduct',
        icon: <FontAwesomeIcon icon={faTrashAlt} />
    },
    {
        title: 'Statistics',
        path: '/admin/statistics',
        icon: <FontAwesomeIcon icon={faChartLine} />
    }
]

