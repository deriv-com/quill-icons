import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHorizontalRuleDashedCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 9.5c0-.305.234-.562.563-.562h1.5a.57.57 0 0 1 .562.562.555.555 0 0 1-.562.563h-1.5A.54.54 0 0 1 0 9.5m4.125 0c0-.305.234-.562.563-.562h1.5a.57.57 0 0 1 .562.562.555.555 0 0 1-.562.563h-1.5a.54.54 0 0 1-.563-.563m4.125 0c0-.305.234-.562.563-.562h1.5a.57.57 0 0 1 .562.562.555.555 0 0 1-.562.563h-1.5A.54.54 0 0 1 8.25 9.5m4.125 0c0-.305.234-.562.563-.562h1.5A.57.57 0 0 1 15 9.5a.555.555 0 0 1-.562.563h-1.5a.54.54 0 0 1-.563-.563' />
    </g>
    <defs>
      <clipPath id='24b26246de19f66fd4ea8f1208fb4ed6__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHorizontalRuleDashedCaptionBoldIcon);
export default ForwardRef;
