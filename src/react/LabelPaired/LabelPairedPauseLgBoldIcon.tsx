import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.125 9.875v11.25H4V9.875zm-1.875 0C.25 8.859 1.07 8 2.125 8H4c1.016 0 1.875.86 1.875 1.875v11.25C5.875 22.18 5.015 23 4 23H2.125A1.85 1.85 0 0 1 .25 21.125zm8.75 0v11.25h1.875V9.875zm-1.875 0C7.125 8.859 7.945 8 9 8h1.875c1.016 0 1.875.86 1.875 1.875v11.25c0 1.055-.86 1.875-1.875 1.875H9a1.85 1.85 0 0 1-1.875-1.875z' />
    </g>
    <defs>
      <clipPath id='937bdb1e94339db67d67c82dfc811e8f__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseLgBoldIcon);
export default ForwardRef;
