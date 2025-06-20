import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMobileScreenButtonXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.75 9c0-1.64 1.313-3 3-3h10.5c1.64 0 3 1.36 3 3v18c0 1.688-1.36 3-3 3H3.75c-1.687 0-3-1.312-3-3zm6 18c0 .422.328.75.75.75h3c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75h-3c-.422 0-.75.375-.75.75m7.5-18H3.75v15h10.5z' />
    </g>
    <defs>
      <clipPath id='e0ea5f13ac934924320bec6eec64ba9a__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMobileScreenButtonXlFillIcon);
export default ForwardRef;
