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
      <path d='M10.5 5.375h-9q-.352.023-.375.375v7.5l.117-.14 1.875-2.626a.52.52 0 0 1 .446-.234q.28 0 .468.234l.703 1.008L6.68 8.961q.165-.21.445-.211.282 0 .445.21l3.188 4.126.117.164v-7.5q-.023-.352-.375-.375m-9-1.125h9q.633.024 1.055.445.421.423.445 1.055v7.5a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-9a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 13.25v-7.5q.024-.632.445-1.055.423-.421 1.055-.445m1.875 4.5a1.17 1.17 0 0 1-.984-.562 1.2 1.2 0 0 1 0-1.126q.351-.538.984-.562.633.024.984.563.282.563 0 1.125-.351.538-.984.562' />
    </g>
    <defs>
      <clipPath id='a2221b81c1d77f6d80db0ec2df513e90__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageCaptionBoldIcon);
export default ForwardRef;
