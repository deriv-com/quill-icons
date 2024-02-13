import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBriefcaseCaptionRegularIcon = (
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
      <path d='M3.75 4.625V5.75h4.5V4.625q-.023-.352-.375-.375h-3.75q-.352.023-.375.375M3 5.75V4.625q.024-.468.328-.797.329-.304.797-.328h3.75q.469.024.797.328.304.329.328.797V5.75h1.5q.633.024 1.055.445.421.423.445 1.055v6a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-9a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 13.25v-6q.024-.632.445-1.055.423-.421 1.055-.445zm5.625.75H1.5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54V9.5h10.5V7.25a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21zm2.625 3.75H7.875v1.125a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21h-2.25a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54V10.25H.75v3q0 .328.21.54.212.21.54.21h9a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54zm-6.375 0v1.125h2.25V10.25z' />
    </g>
    <defs>
      <clipPath id='50ef38f4b61d47e2a251233b688c09e4__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBriefcaseCaptionRegularIcon);
export default ForwardRef;
