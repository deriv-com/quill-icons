import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAtCaptionBoldIcon = (
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
      <path d='M6 4.625c-2.695 0-4.875 2.203-4.875 4.875A4.87 4.87 0 0 0 6 14.375a.57.57 0 0 1 .563.563A.555.555 0 0 1 6 15.5c-3.328 0-6-2.672-6-6 0-3.305 2.672-6 6-6 3.305 0 6 2.695 6 6v.656a2.166 2.166 0 0 1-2.156 2.156c-.75 0-1.383-.351-1.781-.914A2.78 2.78 0 0 1 6 12.313 2.79 2.79 0 0 1 3.188 9.5 2.806 2.806 0 0 1 6 6.688c.656 0 1.29.257 1.758.632.117-.14.281-.258.492-.258a.57.57 0 0 1 .563.563v2.531c0 .586.445 1.031 1.03 1.031.563 0 1.032-.445 1.032-1.03V9.5c0-2.672-2.203-4.875-4.875-4.875M7.688 9.5c0-.586-.329-1.148-.844-1.453a1.67 1.67 0 0 0-1.688 0c-.539.305-.843.867-.843 1.453 0 .61.304 1.172.843 1.477a1.67 1.67 0 0 0 1.688 0c.515-.305.843-.868.843-1.477' />
    </g>
    <defs>
      <clipPath id='f13a5daf591f0b5959508f599e933137__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAtCaptionBoldIcon);
export default ForwardRef;
