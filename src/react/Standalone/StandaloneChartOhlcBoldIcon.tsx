import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const StandaloneChartOhlcBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <path
      fillOpacity={0.72}
      d='M16 6.5a.95.95 0 0 1 .938.938V9H18.5a.95.95 0 0 1 .938.938c0 .546-.43.937-.938.937h-1.563v12.188c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.938V21.5H13.5c-.547 0-.938-.39-.938-.938 0-.507.391-.937.938-.937h1.563V7.437c0-.507.39-.937.937-.937ZM24.125 9a.95.95 0 0 1 .938.938v7.187h1.562a.95.95 0 0 1 .938.938c0 .546-.43.937-.938.937h-1.563v1.563c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.938v-7.187h-1.562c-.547 0-.938-.39-.938-.938 0-.507.391-.937.938-.937h1.563V9.937c0-.507.39-.937.937-.937Zm-16.25 5a.95.95 0 0 1 .938.938v7.187h1.562a.95.95 0 0 1 .938.938c0 .546-.43.937-.938.937H8.812v1.563c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.938v-7.187H5.375c-.547 0-.938-.39-.938-.938 0-.507.391-.937.938-.937h1.563v-1.563c0-.507.39-.937.937-.937Z'
    />
  </svg>
);
const ForwardRef = forwardRef(StandaloneChartOhlcBoldIcon);
export default ForwardRef;
