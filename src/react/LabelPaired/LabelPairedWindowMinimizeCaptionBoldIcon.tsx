import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWindowMinimizeCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.563 13.625h10.875a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H.563A.54.54 0 0 1 0 14.188c0-.305.234-.563.563-.563' />
    </g>
    <defs>
      <clipPath id='2b5288077af726f2d79e753fe2ce2b71__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWindowMinimizeCaptionBoldIcon);
export default ForwardRef;
