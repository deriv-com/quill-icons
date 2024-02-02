import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSlashXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18.563 24.61h-.047l1.265.984q-1.78 1.171-4.031 1.36v2.296q-.047.704-.75.75-.703-.046-.75-.75v-2.297q-3.328-.328-5.625-2.578-2.25-2.296-2.578-5.625H3.75Q3.047 18.704 3 18q.046-.704.75-.75h2.297a9.8 9.8 0 0 1 .422-2.156l1.265.984A8 8 0 0 0 7.5 18q.094 3.187 2.203 5.297T15 25.5a7.35 7.35 0 0 0 3.563-.89M14.25 9.046V6.75q.047-.703.75-.75.703.046.75.75v2.297q3.329.328 5.625 2.578 2.25 2.297 2.578 5.625h2.297q.704.046.75.75-.046.704-.75.75h-2.297a9.8 9.8 0 0 1-.422 2.156l-1.265-.984A8 8 0 0 0 22.5 18q-.094-3.187-2.203-5.297T15 10.5q-1.921 0-3.516.89l-1.265-.984q1.78-1.171 4.031-1.36M15 22.5q-1.828-.046-3.094-1.219-1.265-1.171-1.406-3l2.625 2.063q.047 0 .047.047l2.625 2.062A7 7 0 0 1 15 22.5m-.75-8.953q.375-.047.75-.047 1.828.047 3.094 1.219t1.406 3l-2.625-2.063q-.047 0-.047-.047zM1.219 6.14l28.5 22.547q.515.468.14 1.03-.515.517-1.078.141L.281 7.36q-.515-.515-.14-1.078.515-.469 1.078-.14' />
    </g>
    <defs>
      <clipPath id='ad6f57241a9f7541__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSlashXlRegularIcon);
export default ForwardRef;
