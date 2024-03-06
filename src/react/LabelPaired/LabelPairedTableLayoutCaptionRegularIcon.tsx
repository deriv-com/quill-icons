import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTableLayoutCaptionRegularIcon = (
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
      <path d='M10.5 5h-9a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v1.5h10.5v-1.5a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21M.75 13.25q0 .328.21.54.212.21.54.21h2.25V8h-3zM4.5 14h6a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54V8H4.5zm-3-9.75h9q.633.024 1.055.445.421.423.445 1.055v7.5a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-9a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 13.25v-7.5q.024-.632.445-1.055.423-.421 1.055-.445' />
    </g>
    <defs>
      <clipPath id='08d9f8942f2e5ed0a074addf80c0a144__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTableLayoutCaptionRegularIcon);
export default ForwardRef;
