import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronLeftCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m.602 9.102 4.5-4.477c.21-.234.562-.234.796 0 .211.21.211.563 0 .773L1.773 9.5l4.102 4.125a.513.513 0 0 1 0 .773.513.513 0 0 1-.773 0l-4.5-4.5c-.235-.21-.235-.562 0-.796' />
    </g>
    <defs>
      <clipPath id='f927841c59cadcf1f4f51b2760e9b5a6__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronLeftCaptionBoldIcon);
export default ForwardRef;
