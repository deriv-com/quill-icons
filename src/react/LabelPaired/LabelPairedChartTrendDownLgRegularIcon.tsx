import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedChartTrendDownLgRegularIcon = (
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
        d='M24.023 24.836a.641.641 0 0 1-.859-.273l-3.555-7.188H13.75c-.273 0-.469-.117-.586-.313L8.438 7.61l-6.915 3.477c-.312.156-.703 0-.859-.274a.641.641 0 0 1 .273-.859l7.5-3.75a.641.641 0 0 1 .86.274l4.805 9.648H20c.234 0 .43.156.547.352l3.75 7.5a.641.641 0 0 1-.274.859Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendDownLgRegularIcon);
export default ForwardRef;
