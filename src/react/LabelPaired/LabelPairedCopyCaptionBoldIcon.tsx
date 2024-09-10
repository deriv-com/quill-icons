import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCopyCaptionBoldIcon = (
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
      <path d='M9.25 11.375A.385.385 0 0 0 9.625 11V6.219L8.031 4.625H4.75A.385.385 0 0 0 4.375 5v6c0 .21.164.375.375.375zM4.75 12.5a1.48 1.48 0 0 1-1.5-1.5V5c0-.82.656-1.5 1.5-1.5h3.281c.281 0 .586.14.797.352l1.57 1.57c.211.21.352.516.352.797V11c0 .844-.68 1.5-1.5 1.5zm-3-6h.75v1.125h-.75A.385.385 0 0 0 1.375 8v6c0 .21.164.375.375.375h4.5A.385.385 0 0 0 6.625 14v-.75H7.75V14c0 .844-.68 1.5-1.5 1.5h-4.5A1.48 1.48 0 0 1 .25 14V8c0-.82.656-1.5 1.5-1.5' />
    </g>
    <defs>
      <clipPath id='e0bd5b9c78e57af4ac7c0c933c2115d0__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyCaptionBoldIcon);
export default ForwardRef;
