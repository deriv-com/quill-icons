import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEllipsisCaptionBoldIcon = (
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
      <path d='M10.375 9.5c0 .422-.234.773-.562.984a1.08 1.08 0 0 1-1.126 0 1.122 1.122 0 0 1 0-1.945c.329-.21.774-.21 1.126 0 .328.211.562.563.562.961m-3.75 0c0 .422-.234.773-.562.984a1.08 1.08 0 0 1-1.125 0 1.122 1.122 0 0 1 0-1.945c.328-.21.773-.21 1.125 0 .328.211.562.563.562.961M1.75 10.625c-.422 0-.773-.21-.984-.562a1.08 1.08 0 0 1 0-1.126c.21-.328.562-.562.984-.562.398 0 .75.234.96.563.212.351.212.796 0 1.124-.21.352-.562.563-.96.563' />
    </g>
    <defs>
      <clipPath id='badc091c6270e1d2c4eb4e8704fb0b6f__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEllipsisCaptionBoldIcon);
export default ForwardRef;
