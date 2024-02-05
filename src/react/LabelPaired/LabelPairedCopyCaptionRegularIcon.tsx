import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCopyCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.25 11.75a.73.73 0 0 0 .54-.21A.73.73 0 0 0 10 11V6.219q0-.165-.117-.258L8.289 4.367a.31.31 0 0 0-.258-.117H5.5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v6q0 .328.21.54.212.21.54.21zm1.172-6.328q.328.328.328.797V11a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445H5.5a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 4 11V5q.024-.632.445-1.055.423-.421 1.055-.445h2.531q.469 0 .797.328zM1.75 6.5h1.5v.75h-1.5a.73.73 0 0 0-.54.21A.73.73 0 0 0 1 8v6q0 .328.21.54.212.21.54.21H5.5a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54v-.75H7V14a1.52 1.52 0 0 1-.445 1.055q-.423.421-1.055.445H1.75a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 14V8q.024-.632.445-1.055.422-.421 1.055-.445' />
    </g>
    <defs>
      <clipPath id='f4d873a2b52076d8523f43ae1355e51e__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyCaptionRegularIcon);
export default ForwardRef;
