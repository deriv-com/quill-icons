import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpToLineLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.25 6.75h12.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H1.25C.547 9.25 0 8.703 0 8c0-.664.547-1.25 1.25-1.25m7.11 5.39 5 5c.507.47.507 1.29 0 1.758a1.205 1.205 0 0 1-1.758 0L8.75 16.047V23c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-6.953l-2.89 2.851a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l5-5a1.205 1.205 0 0 1 1.757 0' />
    </g>
    <defs>
      <clipPath id='e32d8ed28a802b852b1bbe1503511966__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineLgFillIcon);
export default ForwardRef;
