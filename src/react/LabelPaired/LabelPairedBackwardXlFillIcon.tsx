import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBackwardXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M21.516 26.672 13.5 19.969v-3.891l8.016-6.703c.468-.375 1.078-.469 1.593-.234.516.28.891.797.891 1.359v15c0 .61-.375 1.125-.89 1.36-.516.28-1.126.187-1.594-.188M12 22.5v3c0 .61-.375 1.125-.89 1.36-.516.28-1.126.187-1.594-.188l-9-7.5A1.52 1.52 0 0 1 0 18c0-.422.188-.844.516-1.125l9-7.5c.468-.375 1.078-.469 1.593-.234.516.28.891.797.891 1.359v12' />
    </g>
    <defs>
      <clipPath id='9ce49b3e94a2b9cc52fef0b44721d661__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBackwardXlFillIcon);
export default ForwardRef;
