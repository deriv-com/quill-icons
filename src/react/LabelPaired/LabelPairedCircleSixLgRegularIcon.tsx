import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSixLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10 6.75a8.73 8.73 0 0 0-7.578 4.375c-1.602 2.734-1.602 6.055 0 8.75C3.984 22.609 6.836 24.25 10 24.25a8.63 8.63 0 0 0 7.54-4.375c1.6-2.695 1.6-6.016 0-8.75C15.976 8.43 13.124 6.75 10 6.75m0 18.75c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m1.68-14.766a.58.58 0 0 1-.04.86l-1.523 1.445c2.031.04 3.633 1.719 3.633 3.711a3.751 3.751 0 0 1-7.5 0c0-1.133.469-2.266 1.328-3.047l3.242-3.008a.58.58 0 0 1 .86.04M10 14.25c-.898 0-1.719.508-2.187 1.25-.43.781-.43 1.758 0 2.5A2.54 2.54 0 0 0 10 19.25c.86 0 1.68-.469 2.148-1.25.43-.742.43-1.719 0-2.5-.468-.742-1.289-1.25-2.148-1.25' />
    </g>
    <defs>
      <clipPath id='7524cb8e33246a690cd2f906fdf684f2__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSixLgRegularIcon);
export default ForwardRef;
