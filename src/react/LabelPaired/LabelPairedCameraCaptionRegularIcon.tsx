import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCameraCaptionRegularIcon = (
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
      <path d='M4.477 4.25h3.046q.773.048 1.079.773l.234.727H10.5q.633.024 1.055.445.421.423.445 1.055v6a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-9a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 13.25v-6q.024-.632.445-1.055.423-.421 1.055-.445h1.664l.258-.727q.28-.726 1.055-.773m-.352 1.008-.328.984a.39.39 0 0 1-.352.258H1.5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v6q0 .328.21.54.212.21.54.21h9a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54v-6a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21H8.555a.39.39 0 0 1-.352-.258l-.328-.984A.39.39 0 0 0 7.523 5H4.477a.39.39 0 0 0-.352.258M6 12.875q-.703 0-1.312-.352a2.6 2.6 0 0 1-.961-.96 2.6 2.6 0 0 1-.352-1.313q0-.703.352-1.312.351-.61.96-.961A2.6 2.6 0 0 1 6 7.625q.703 0 1.313.352.609.351.96.96.352.61.352 1.313t-.352 1.313a2.6 2.6 0 0 1-.96.96A2.6 2.6 0 0 1 6 12.875M4.125 10.25q.024 1.054.938 1.617.938.516 1.875 0 .913-.562.937-1.617-.024-1.055-.937-1.617-.937-.516-1.875 0-.915.563-.938 1.617' />
    </g>
    <defs>
      <clipPath id='d1a9e0c066e4c337d31da58594d536c9__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCameraCaptionRegularIcon);
export default ForwardRef;
