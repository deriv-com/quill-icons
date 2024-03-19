import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlusCaptionBoldIcon = (
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
      <path d='M6.063 5.188v3.75h3.75a.57.57 0 0 1 .562.562.555.555 0 0 1-.562.563h-3.75v3.75a.555.555 0 0 1-.563.562.54.54 0 0 1-.562-.562v-3.75h-3.75A.54.54 0 0 1 .625 9.5c0-.305.234-.562.563-.562h3.75v-3.75c0-.305.234-.563.562-.563a.57.57 0 0 1 .563.563' />
    </g>
    <defs>
      <clipPath id='9b3a4584a8e89be23ccc0d5c6ce49d50__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlusCaptionBoldIcon);
export default ForwardRef;
