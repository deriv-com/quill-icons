import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenLgFillIcon = (
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
      <path d='M14.14 6.281a2.523 2.523 0 0 1 3.555 0l1.524 1.524a2.523 2.523 0 0 1 0 3.554l-1.875 1.875-5.078-5.078zm-2.773 2.774 5.078 5.078-9.101 9.101c-.39.391-.899.703-1.446.86L1.172 25.5a.89.89 0 0 1-.899-.273.8.8 0 0 1-.234-.899l1.367-4.726a3.4 3.4 0 0 1 .86-1.446z' />
    </g>
    <defs>
      <clipPath id='2909a33ce5b9f24e2c2fd3aa0f687ab4__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLgFillIcon);
export default ForwardRef;
