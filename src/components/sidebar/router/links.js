/**
 * Created by squad on 04/08/16.
 */

import { DASHBOARD_URL, ABOUT_URL } from '../../../modules/dashboard/router/paths'

// Sidebar Menu component links
export const links = [
  { title: 'Dashboard', icon: 'glyphicon glyphicon-dashboard', path: DASHBOARD_URL, permission: 'dashboard.index'},
  { title: 'Sobre', icon: 'glyphicon glyphicon-info-sign', path: ABOUT_URL}

]