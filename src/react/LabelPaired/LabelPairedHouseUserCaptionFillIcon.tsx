import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHouseUserCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M13.727 9.5c0 .422-.352.75-.75.75h-.75L12.25 14c0 .844-.656 1.523-1.5 1.523h-7.5c-.844 0-1.5-.68-1.5-1.5V10.25H1a.74.74 0 0 1-.75-.75c0-.21.07-.398.234-.562l6-5.25c.164-.165.352-.188.516-.188s.352.047.492.164l5.977 5.274c.187.164.281.351.258.562M8.5 8.75c0-.516-.305-1.008-.75-1.29a1.55 1.55 0 0 0-1.5 0c-.469.282-.75.774-.75 1.29 0 .54.281 1.031.75 1.313a1.55 1.55 0 0 0 1.5 0c.445-.282.75-.774.75-1.313M6.25 11a1.866 1.866 0 0 0-1.875 1.875c0 .21.164.375.375.375h4.5a.385.385 0 0 0 .375-.375A1.88 1.88 0 0 0 7.75 11z' />
    </g>
    <defs>
      <clipPath id='006c7bfb97d838a2107ff9b10ab17dcb__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseUserCaptionFillIcon);
export default ForwardRef;
