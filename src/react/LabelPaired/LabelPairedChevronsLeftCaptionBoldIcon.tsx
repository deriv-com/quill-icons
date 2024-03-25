import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsLeftCaptionBoldIcon = (
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
      <path d='m1.102 9.102 4.5-4.477c.21-.234.562-.234.796 0 .211.21.211.563 0 .773L2.273 9.5l4.102 4.125a.513.513 0 0 1 0 .773.513.513 0 0 1-.773 0l-4.5-4.5c-.235-.21-.235-.562 0-.796m9-4.5v.023c.21-.234.562-.234.796 0a.55.55 0 0 1 0 .773L6.773 9.523l4.102 4.102a.513.513 0 0 1 0 .773.513.513 0 0 1-.773 0l-4.5-4.5c-.235-.21-.235-.562 0-.796z' />
    </g>
    <defs>
      <clipPath id='d7a490d04f38efbb9c7ba93da4f5768d__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftCaptionBoldIcon);
export default ForwardRef;
