import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4 5h12c1.094 0 2 .906 2 2v8h-2V7H4v8H2V7c0-1.094.875-2 2-2M.594 16h18.781c.344 0 .625.281.625.625C20 17.938 18.906 19 17.594 19H2.375A2.374 2.374 0 0 1 0 16.625C0 16.281.25 16 .594 16' />
    </g>
    <defs>
      <clipPath id='608bfa27c6e2d306061a5325fb3e8bef__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopMdFillIcon);
export default ForwardRef;
