import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPercentCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m8.648 6.148-7.523 7.5a.513.513 0 0 1-.773 0c-.235-.21-.235-.562 0-.796l7.5-7.477c.21-.234.562-.234.796 0 .211.21.211.563 0 .773M2.625 6.5c0 .422-.234.773-.562.984-.352.211-.797.211-1.126 0a1.122 1.122 0 0 1 0-1.945c.329-.21.774-.21 1.126 0 .328.211.562.563.562.961m6 6c0 .422-.234.773-.562.984a1.08 1.08 0 0 1-1.126 0 1.122 1.122 0 0 1 0-1.945 1.08 1.08 0 0 1 1.125 0c.329.211.563.563.563.961' />
    </g>
    <defs>
      <clipPath id='7c08f7249090b60d9f0ed661ebaee8aa__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentCaptionBoldIcon);
export default ForwardRef;
