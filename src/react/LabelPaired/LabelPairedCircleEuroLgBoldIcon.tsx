import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEuroLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18.125 15.5c0-2.89-1.562-5.547-4.062-7.031-2.54-1.446-5.626-1.446-8.126 0-2.539 1.484-4.062 4.14-4.062 7.031a8.13 8.13 0 0 0 4.063 7.07c2.5 1.446 5.585 1.446 8.125 0 2.5-1.484 4.062-4.14 4.062-7.07M0 15.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m5 .625h.625c-.04-.195-.04-.39-.04-.586s0-.43.04-.664H5a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h.938c.742-1.797 2.578-3.125 4.648-3.125h1.64a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937h-1.641c-1.016 0-1.914.508-2.5 1.25h3.164c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H7.5c-.04.234-.04.43-.04.664 0 .195 0 .43.04.586h3.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H8.047c.586.82 1.484 1.328 2.539 1.328h1.64a.95.95 0 0 1 .938.938.95.95 0 0 1-.937.937h-1.641a4.97 4.97 0 0 1-4.648-3.203H5a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625' />
    </g>
    <defs>
      <clipPath id='ad13d09cfbcd38def48c6fcd49653905__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEuroLgBoldIcon);
export default ForwardRef;
