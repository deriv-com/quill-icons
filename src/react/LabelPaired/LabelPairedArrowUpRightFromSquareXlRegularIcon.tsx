import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightFromSquareXlRegularIcon = (
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
      <path d='M15.75 6h7.5q.704.046.75.75v7.5q-.046.703-.75.75-.704-.047-.75-.75V8.578L11.016 20.016q-.516.468-1.032 0-.468-.516 0-1.032L21.422 7.5H15.75q-.703-.046-.75-.75.047-.703.75-.75M3 7.5h6.75q.703.046.75.75-.047.703-.75.75H3q-.656 0-1.078.422Q1.5 9.843 1.5 10.5V27q0 .657.422 1.078.421.422 1.078.422h16.5q.657 0 1.078-.422Q21 27.657 21 27v-6.75q.046-.704.75-.75.704.046.75.75V27q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 28.265 0 27V10.5q.047-1.266.89-2.11.844-.843 2.11-.89' />
    </g>
    <defs>
      <clipPath id='025a34a03cc97151ed20fa96f2116102__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareXlRegularIcon);
export default ForwardRef;
