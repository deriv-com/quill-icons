import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCloneCaptionRegularIcon = (
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
      <path d='M1.5 14.75h5.25a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54v-1.5h.75V14a1.52 1.52 0 0 1-.445 1.055q-.423.421-1.055.445H1.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 14V8.75q.024-.633.445-1.055.423-.421 1.055-.445H3V8H1.5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54V14q0 .328.21.54.212.21.54.21M5.25 11h5.25a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54V5a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21H5.25a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v5.25q0 .328.21.54.212.21.54.21m-1.5-.75V5q.024-.632.445-1.055.423-.421 1.055-.445h5.25q.633.024 1.055.445.421.423.445 1.055v5.25a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445H5.25a1.52 1.52 0 0 1-1.055-.445 1.52 1.52 0 0 1-.445-1.055' />
    </g>
    <defs>
      <clipPath id='8ab8b73a21e040da78a2c4e12cc95ca5__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneCaptionRegularIcon);
export default ForwardRef;
