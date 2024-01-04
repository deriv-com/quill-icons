import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartOhlcLgBoldIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12.5 5.5a.95.95 0 0 1 .938.938V8H15a.95.95 0 0 1 .938.938c0 .546-.43.937-.938.937h-1.563v12.188c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.938V20.5H10c-.547 0-.938-.39-.938-.938 0-.507.391-.937.938-.937h1.563V6.437c0-.507.39-.937.937-.937ZM20.625 8a.95.95 0 0 1 .938.938v7.187h1.562a.95.95 0 0 1 .938.938c0 .546-.43.937-.938.937h-1.563v1.563c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.938v-7.187h-1.562c-.547 0-.938-.39-.938-.938 0-.507.391-.937.938-.937h1.563V8.937c0-.507.39-.937.937-.937Zm-16.25 5a.95.95 0 0 1 .938.938v7.187h1.562a.95.95 0 0 1 .938.938c0 .546-.43.937-.938.937H5.312v1.563c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.938v-7.187H1.875c-.547 0-.938-.39-.938-.938 0-.507.391-.937.938-.937h1.563v-1.563c0-.507.39-.937.937-.937Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartOhlcLgBoldIcon);
export default ForwardRef;
