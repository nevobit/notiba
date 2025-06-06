import React, { ReactNode } from 'react';

type ProvidersType = [React.ElementType, Record<string, unknown>];
type ChildrenType = {
  children: ReactNode;
};

export const buildProvidersTree = (
  componentsWithProps: Array<ProvidersType>,
) => {
  const initialComponent = ({ children }: ChildrenType) => <>{children}</>;
  return componentsWithProps.reduce(
    (
      AccumulatedComponents: React.ElementType,
      [Provider, props = {}]: ProvidersType,
    ) => {
      return ({ children }: ChildrenType) => {
        return (
          <AccumulatedComponents>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComponents>
        );
      };
    },
    initialComponent,
  );
};

export default buildProvidersTree;
