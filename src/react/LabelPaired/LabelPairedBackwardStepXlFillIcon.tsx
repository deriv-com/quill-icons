import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardStepXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={36}
    viewBox='0 0 15 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m12.516 26.672-9-7.5L3 18.703V25.5c0 .844-.703 1.5-1.5 1.5A1.48 1.48 0 0 1 0 25.5v-15C0 9.703.656 9 1.5 9c.797 0 1.5.703 1.5 1.5v6.797l.516-.422 9-7.5c.468-.375 1.078-.469 1.593-.234.516.28.891.797.891 1.359v15c0 .61-.375 1.125-.89 1.36-.516.28-1.126.187-1.594-.188' />
    </g>
    <defs>
      <clipPath id='e33f347f6a43e2d9f21892991b1e7e9e__a'>
        <path d='M0 0h15v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardStepXlFillIcon);
export default ForwardRef;
