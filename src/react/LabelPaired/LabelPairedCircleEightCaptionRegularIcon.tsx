import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEightCaptionRegularIcon = (
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
      <path d='M11.25 9.5a5.4 5.4 0 0 0-.703-2.625 5.4 5.4 0 0 0-1.922-1.922 5.25 5.25 0 0 0-5.25 0 5.4 5.4 0 0 0-1.922 1.922A5.4 5.4 0 0 0 .75 9.5q.024 1.43.703 2.625a5.4 5.4 0 0 0 1.922 1.922 5.25 5.25 0 0 0 5.25 0 5.4 5.4 0 0 0 1.922-1.922A5.4 5.4 0 0 0 11.25 9.5M0 9.5a6.14 6.14 0 0 1 .797-3A6.2 6.2 0 0 1 3 4.297 6.1 6.1 0 0 1 6 3.5q1.57 0 3 .797A6.2 6.2 0 0 1 11.203 6.5q.774 1.359.797 3a6.14 6.14 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.1 6.1 0 0 1-3 .797 6.1 6.1 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.14 6.14 0 0 1 0 9.5m6.281-3q.68.024 1.125.469t.469 1.125a1.62 1.62 0 0 1-.54 1.195q.705.515.728 1.43-.024.75-.516 1.265-.516.493-1.266.516H5.72a1.85 1.85 0 0 1-1.266-.516 1.85 1.85 0 0 1-.516-1.265q.024-.915.727-1.43a1.62 1.62 0 0 1-.539-1.195q.024-.68.469-1.125T5.719 6.5zM5.72 8.938h.562q.352 0 .586-.258a.76.76 0 0 0 .258-.586.76.76 0 0 0-.258-.586.76.76 0 0 0-.586-.258H5.72a.76.76 0 0 0-.586.258.76.76 0 0 0-.258.586q0 .351.258.586a.76.76 0 0 0 .586.258m.562.75H5.72a.94.94 0 0 0-.727.304.94.94 0 0 0-.304.727q0 .445.304.726.282.305.727.305h.562q.446 0 .727-.305a.94.94 0 0 0 .305-.726.94.94 0 0 0-.305-.727.94.94 0 0 0-.727-.305' />
    </g>
    <defs>
      <clipPath id='130f1ed671d032f2__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEightCaptionRegularIcon);
export default ForwardRef;
