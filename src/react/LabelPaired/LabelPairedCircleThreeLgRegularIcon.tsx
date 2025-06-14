import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleThreeLgRegularIcon = (
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
      <path d='M10 6.75a8.73 8.73 0 0 0-7.578 4.375c-1.602 2.734-1.602 6.055 0 8.75C3.984 22.609 6.836 24.25 10 24.25a8.63 8.63 0 0 0 7.54-4.375c1.6-2.695 1.6-6.016 0-8.75C15.976 8.43 13.124 6.75 10 6.75m0 18.75c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m-3.125-15v.04h5.586c.273 0 .508.155.586.39.117.234.039.508-.156.703L9.805 14.25h.78a3.134 3.134 0 0 1 3.126 3.125c0 1.758-1.367 3.164-3.125 3.164H9.18a3.48 3.48 0 0 1-2.735-1.367l-.078-.156a.584.584 0 0 1 .117-.86.585.585 0 0 1 .86.117l.117.118c.39.547 1.055.898 1.719.898h1.406c1.055 0 1.875-.86 1.875-1.914 0-1.016-.82-1.875-1.875-1.875H8.125a.7.7 0 0 1-.625-.39c-.078-.235 0-.508.195-.704l3.086-2.656H6.875a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625' />
    </g>
    <defs>
      <clipPath id='aad52c370372e9f810da1f70d85c0687__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleThreeLgRegularIcon);
export default ForwardRef;
