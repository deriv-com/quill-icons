import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpToLineXlRegularIcon = (
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
      <path d='M.75 7.5h16.5q.704.046.75.75-.046.703-.75.75H.75Q.047 8.953 0 8.25q.047-.703.75-.75m8.766 4.734 6 6q.468.516 0 1.032-.516.468-1.032 0L9.75 14.578V27.75q-.047.704-.75.75-.703-.046-.75-.75V14.578l-4.734 4.688q-.516.468-1.032 0-.468-.516 0-1.032l6-6q.516-.468 1.032 0' />
    </g>
    <defs>
      <clipPath id='f65b41228481b0d732f4dc8e7832b8ef__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineXlRegularIcon);
export default ForwardRef;
