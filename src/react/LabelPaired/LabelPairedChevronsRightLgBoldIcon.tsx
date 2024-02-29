import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsRightLgBoldIcon = (
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
      <path d='M18.164 14.836q.547.664 0 1.328l-7.5 7.5q-.664.547-1.328 0-.547-.664 0-1.328l6.836-6.836-6.836-6.836q-.547-.664 0-1.328.664-.548 1.328 0zm-15-7.5 7.5 7.5q.548.664 0 1.328l-7.5 7.5q-.664.547-1.328 0-.547-.664 0-1.328L8.672 15.5 1.836 8.664q-.547-.664 0-1.328.664-.548 1.328 0' />
    </g>
    <defs>
      <clipPath id='4918cb662fe60d8de20039c3a539527f__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsRightLgBoldIcon);
export default ForwardRef;
