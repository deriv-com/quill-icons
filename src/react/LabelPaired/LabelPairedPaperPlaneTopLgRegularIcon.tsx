import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPaperPlaneTopLgRegularIcon = (
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
      <path d='M.617 8.586A1.31 1.31 0 0 1 .813 7.14a1.33 1.33 0 0 1 1.406-.274l17.5 7.5c.468.195.781.664.781 1.133 0 .508-.312.977-.781 1.172l-17.5 7.5a1.27 1.27 0 0 1-1.406-.313 1.25 1.25 0 0 1-.196-1.406L4.094 15.5zm4.57 7.539L1.75 23l16.016-6.875zm12.579-1.25L1.75 8l3.438 6.875z' />
    </g>
    <defs>
      <clipPath id='6449568a6145596f5c521352396546a2__a'>
        <path d='M0 0h21v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPaperPlaneTopLgRegularIcon);
export default ForwardRef;
