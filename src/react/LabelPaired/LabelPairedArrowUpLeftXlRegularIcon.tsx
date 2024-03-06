import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpLeftXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.25 10.5h10.5q.703.047.75.75-.047.703-.75.75H4.078l12.188 12.234q.468.516 0 1.032-.516.468-1.032 0L3 13.078v8.672q-.046.704-.75.75-.703-.046-.75-.75v-10.5q.046-.703.75-.75' />
    </g>
    <defs>
      <clipPath id='059e0dc64c3884388e90fd3c394939b8__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpLeftXlRegularIcon);
export default ForwardRef;
