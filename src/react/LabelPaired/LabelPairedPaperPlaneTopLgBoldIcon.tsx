import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperPlaneTopLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={30}
    viewBox='0 0 21 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.695 14.563h9.766L3.039 9.25zm0 1.874L3.04 21.79l12.422-5.352zM2.22 6.868l17.5 7.5c.468.195.781.664.781 1.172 0 .469-.312.938-.781 1.133l-17.5 7.5a1.27 1.27 0 0 1-1.406-.313c-.352-.351-.43-.937-.196-1.406L4.094 15.5.617 8.586A1.31 1.31 0 0 1 .813 7.14a1.33 1.33 0 0 1 1.406-.274' />
    </g>
    <defs>
      <clipPath id='f664566d989c2242f9155d9ab6ac55e2__a'>
        <path d='M0 0h21v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperPlaneTopLgBoldIcon);
export default ForwardRef;
