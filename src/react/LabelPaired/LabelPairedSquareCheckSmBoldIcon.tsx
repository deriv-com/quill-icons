import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSquareCheckSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.125 5.938a.45.45 0 0 0-.437.437v8.75c0 .246.19.438.437.438h8.75a.45.45 0 0 0 .438-.438v-8.75a.47.47 0 0 0-.438-.437zm-1.75.437c0-.957.766-1.75 1.75-1.75h8.75c.957 0 1.75.793 1.75 1.75v8.75c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75zm9.215 3.09-3.5 3.5c-.274.273-.684.273-.93 0l-1.75-1.75a.6.6 0 0 1 0-.902c.246-.274.656-.274.93 0l1.285 1.285L8.66 8.535a.644.644 0 0 1 .902 0c.274.274.274.684 0 .93z' />
    </g>
    <defs>
      <clipPath id='a4c783ee403423ccbceb95891bc5bf33__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSquareCheckSmBoldIcon);
export default ForwardRef;
