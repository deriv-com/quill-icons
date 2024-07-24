import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSortUpCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.86 5.07 1.046 7.72C1 7.766 1 7.789 1 7.836c0 .094.07.164.164.164h5.649C6.906 8 7 7.93 7 7.836a.13.13 0 0 0-.07-.117L4.117 5.07A.13.13 0 0 0 4 5q-.105 0-.14.07m-.516-.562A.92.92 0 0 1 4 4.25c.234 0 .469.094.633.258L7.445 7.18a.9.9 0 0 1 .305.656.92.92 0 0 1-.937.914H1.164a.9.9 0 0 1-.914-.914c0-.234.094-.492.281-.656z' />
    </g>
    <defs>
      <clipPath id='f7f9c3042a80c2f5fd2f8ab9914a9284__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSortUpCaptionRegularIcon);
export default ForwardRef;
