import React, { ReactNode } from 'react';
import userHasRole from './guard';

interface IAccessControlProps {
  roles?: string | string[];
  children: ReactNode;
  noAccessDisplayComponent?: ReactNode;
}

function AccessControl({
  roles,
  children,
  noAccessDisplayComponent,
}: IAccessControlProps): JSX.Element | null {
  if (noAccessDisplayComponent) {
    return userHasRole(roles) ? (<>{ children }</>) : (<>{ noAccessDisplayComponent }</>);
  }
  return userHasRole(roles) ? (<>{ children }</>) : null;
}

AccessControl.defaultProps = {
  roles: [],
  noAccessDisplayComponent: null,
};

export default AccessControl;
