import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVideoCaptionRegularIcon = (
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
      <path d='M1.75 5.75a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v6q0 .328.21.54.212.21.54.21h6a.73.73 0 0 0 .54-.21.73.73 0 0 0 .21-.54v-6a.73.73 0 0 0-.21-.54.73.73 0 0 0-.54-.21zm-1.5.75q.024-.632.445-1.055Q1.117 5.024 1.75 5h6q.633.024 1.055.445.421.423.445 1.055v6a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445h-6a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 12.5zm12.164 6.633L10 11.797v-.844l2.79 1.524q.022.023.07.023.117 0 .14-.14V6.64a.17.17 0 0 0-.14-.14q-.048 0-.07.023L10 8.047v-.844l2.414-1.336a.9.9 0 0 1 .445-.117q.375 0 .633.258a.86.86 0 0 1 .258.633v5.718a.86.86 0 0 1-.258.633.86.86 0 0 1-.633.258.9.9 0 0 1-.445-.117' />
    </g>
    <defs>
      <clipPath id='bab0cc069cfa0b831237453b04b2495e__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVideoCaptionRegularIcon);
export default ForwardRef;
