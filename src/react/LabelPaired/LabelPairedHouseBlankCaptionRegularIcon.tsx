import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHouseBlankCaptionRegularIcon = (
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
      <path d='M6.742 3.594a.39.39 0 0 1 .492 0l6.375 5.625c.164.14.164.375.047.539-.14.164-.375.164-.539.023l-.867-.773v4.617a1.866 1.866 0 0 1-1.875 1.875h-6.75a1.85 1.85 0 0 1-1.875-1.875V9.008l-.89.773c-.141.14-.4.14-.516-.023-.14-.164-.14-.399.023-.54zM2.5 8.352v5.273a1.11 1.11 0 0 0 1.125 1.125h6.75c.61 0 1.125-.492 1.125-1.125V8.352L7 4.39z' />
    </g>
    <defs>
      <clipPath id='9732d0e5674667ff8db61fb18e571e8b__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankCaptionRegularIcon);
export default ForwardRef;
