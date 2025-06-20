import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowLeftToLineSmRegularIcon = (
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
      <path d='M.375 15.563V5.938A.45.45 0 0 1 .813 5.5a.47.47 0 0 1 .437.438v9.625A.45.45 0 0 1 .813 16a.43.43 0 0 1-.438-.437m2.734-5.114 3.5-3.5a.463.463 0 0 1 .63 0 .463.463 0 0 1 0 .63l-2.762 2.734h7.711a.47.47 0 0 1 .437.437.45.45 0 0 1-.437.438H4.477l2.761 2.761a.463.463 0 0 1 0 .63.463.463 0 0 1-.629 0l-3.5-3.5a.463.463 0 0 1 0-.63' />
    </g>
    <defs>
      <clipPath id='c42287663bbac9ac3def2aadee0f38a8__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowLeftToLineSmRegularIcon);
export default ForwardRef;
