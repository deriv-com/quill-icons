import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPasteCaptionRegularIcon = (
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
      <path d='M3.75 4.25q-.445.024-.54.445-.093.282-.374.305h-.211q-.352.023-.375.375v.375h3v-.375Q5.227 5.023 4.875 5h-.21q-.282-.024-.353-.305-.117-.421-.562-.445M1.5 5a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v6.75q0 .328.21.54.212.21.54.21h3V14h-3a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 0 12.5V5.75q.024-.632.445-1.055.423-.421 1.055-.445h1.055q.375-.703 1.195-.75.82.046 1.195.75H6q.632.024 1.055.445.421.423.445 1.055h-.75a.73.73 0 0 0-.21-.54A.73.73 0 0 0 6 5h-.07q.07.188.07.375v.375a.73.73 0 0 1-.21.54.73.73 0 0 1-.54.21h-3a.73.73 0 0 1-.54-.21.73.73 0 0 1-.21-.54v-.375q0-.187.07-.375zm5.25 9.75h3.75a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54V9.5H9.938a.85.85 0 0 1-.657-.281A.85.85 0 0 1 9 8.563V7.25H6.75a.73.73 0 0 0-.54.21A.73.73 0 0 0 6 8v6q0 .328.21.54.212.21.54.21m3-7.383v1.196q.024.163.188.187h1.195zm.75 8.133H6.75a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 5.25 14V8q.024-.632.445-1.055.423-.421 1.055-.445h2.719q.468 0 .797.328l1.406 1.406q.328.33.328.797V14a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445' />
    </g>
    <defs>
      <clipPath id='4bc18b8c5fe2cf79__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPasteCaptionRegularIcon);
export default ForwardRef;
