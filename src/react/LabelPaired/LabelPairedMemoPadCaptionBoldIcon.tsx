import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoPadCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.625 6.5h-8.25V14c0 .21.164.375.375.375h7.5A.385.385 0 0 0 9.625 14zm-7.875-3h7.5c.82 0 1.5.68 1.5 1.5v9c0 .844-.68 1.5-1.5 1.5h-7.5A1.48 1.48 0 0 1 .25 14V5c0-.82.656-1.5 1.5-1.5m.75 4.688c0-.305.234-.563.563-.563h4.874a.57.57 0 0 1 .563.563.555.555 0 0 1-.562.562H3.063a.54.54 0 0 1-.563-.562m0 2.25c0-.305.234-.563.563-.563h4.874a.57.57 0 0 1 .563.563.555.555 0 0 1-.562.562H3.063a.54.54 0 0 1-.563-.562m0 2.25c0-.305.234-.563.563-.563h2.625a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H3.063a.54.54 0 0 1-.563-.562' />
    </g>
    <defs>
      <clipPath id='e928f92e160fb42923435cf2dd31f65e__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoPadCaptionBoldIcon);
export default ForwardRef;
