import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImageCaptionBoldIcon = (
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
      <path d='M10.5 5.375h-9a.385.385 0 0 0-.375.375v7.523l.094-.14 1.875-2.625a.57.57 0 0 1 .469-.258c.164 0 .351.094.445.234l.726 1.008L6.68 8.984a.53.53 0 0 1 .445-.234c.164 0 .328.094.445.234l3.188 4.125.117.141v-7.5a.4.4 0 0 0-.375-.375m-9-1.125h9c.82 0 1.5.68 1.5 1.5v7.5c0 .844-.68 1.5-1.5 1.5h-9a1.48 1.48 0 0 1-1.5-1.5v-7.5c0-.82.656-1.5 1.5-1.5m1.875 4.5c-.422 0-.773-.21-.984-.562a1.08 1.08 0 0 1 0-1.126c.21-.328.562-.562.984-.562.398 0 .75.234.96.563.212.351.212.796 0 1.125-.21.351-.562.562-.96.562' />
    </g>
    <defs>
      <clipPath id='a144da8a9e15896b0291eba4dc85ffc2__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageCaptionBoldIcon);
export default ForwardRef;
