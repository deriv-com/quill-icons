import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromSquareXlBoldIcon = (
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
      <path d='m12.797 6.328 5.25 5.25q.656.797 0 1.594-.797.656-1.594 0l-3.328-3.328v11.531Q13.032 22.407 12 22.5q-1.03-.093-1.125-1.125V9.844l-3.328 3.328q-.797.656-1.594 0-.656-.797 0-1.594l5.25-5.25q.797-.656 1.594 0M3.375 7.5h.375q1.032.095 1.125 1.125Q4.782 9.657 3.75 9.75h-.375q-1.03.095-1.125 1.125v15.75q.095 1.032 1.125 1.125h17.25q1.032-.093 1.125-1.125v-15.75q-.093-1.03-1.125-1.125h-.375q-1.03-.093-1.125-1.125.094-1.03 1.125-1.125h.375q1.454.047 2.39.984.939.938.985 2.391v15.75q-.047 1.454-.984 2.39-.937.939-2.391.985H3.375q-1.454-.047-2.39-.984-.939-.937-.985-2.391v-15.75q.047-1.454.984-2.39.937-.939 2.391-.985' />
    </g>
    <defs>
      <clipPath id='bbcc3480eecfa0c9e89de0b5f6788867__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareXlBoldIcon);
export default ForwardRef;
