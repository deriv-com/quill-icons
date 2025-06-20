import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpOneNineCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.797 4.39c.21.141.328.376.328.61v2.25h.375c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H9.25A.74.74 0 0 1 8.5 8c0-.398.328-.75.75-.75h.375V6.055l-.14.047a.79.79 0 0 1-.962-.47.79.79 0 0 1 .47-.96l1.124-.375a.78.78 0 0 1 .68.117zM4 4.25a.7.7 0 0 1 .54.258l2.062 2.25a.744.744 0 0 1-.047 1.055.744.744 0 0 1-1.055-.047l-.75-.82V14c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V6.945l-.773.82a.743.743 0 0 1-1.055.048.744.744 0 0 1-.047-1.055l2.063-2.25A.75.75 0 0 1 4 4.25m6.68 7.805a.72.72 0 0 0 .351-.985c-.164-.375-.61-.539-.984-.375a.75.75 0 0 0-.352 1.008c.164.375.61.54.985.352m-.938 1.289c-.844-.258-1.43-1.031-1.43-1.969 0-1.125.915-2.062 2.063-2.062a2.08 2.08 0 0 1 2.063 2.062 2.6 2.6 0 0 1-.516 1.547l-1.149 1.523c-.234.352-.703.422-1.054.164-.328-.234-.399-.703-.14-1.054z' />
    </g>
    <defs>
      <clipPath id='c94970aa4e317b3c6d26e16612c3efe5__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpOneNineCaptionFillIcon);
export default ForwardRef;
