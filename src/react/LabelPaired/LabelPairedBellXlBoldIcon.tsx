import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBellXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.5 6c.797 0 1.5.703 1.5 1.5v.938c3.422.656 6 3.703 6 7.312v1.219c0 2.11.703 4.172 2.016 5.86l.703.843c.281.375.328.844.14 1.219-.187.375-.562.609-.984.609H1.125c-.469 0-.844-.234-1.031-.61-.188-.374-.14-.843.14-1.218l.704-.844C2.25 21.141 3 19.078 3 16.968V15.75c0-3.61 2.578-6.656 6-7.312V7.5c0-.797.656-1.5 1.5-1.5m0 4.5c-2.906 0-5.25 2.39-5.25 5.25v1.219c0 2.25-.656 4.406-1.875 6.281h14.203c-1.219-1.875-1.828-4.031-1.828-6.281V15.75c0-2.86-2.39-5.25-5.25-5.25m3 16.5c0 .797-.328 1.594-.89 2.156S11.296 30 10.5 30s-1.594-.281-2.156-.844S7.5 27.796 7.5 27h6' />
    </g>
    <defs>
      <clipPath id='54c199376d3bb79cec7be262502452bc__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellXlBoldIcon);
export default ForwardRef;
