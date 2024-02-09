import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPercentXlRegularIcon = (
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
      <path d='M3 10.5q-.656 0-1.078.422Q1.5 11.343 1.5 12t.422 1.078Q2.343 13.5 3 13.5t1.078-.422T4.5 12t-.422-1.078Q3.657 10.5 3 10.5M3 15q-1.687-.047-2.578-1.5-.844-1.5 0-3Q1.312 9.047 3 9q1.687.047 2.578 1.5.844 1.5 0 3Q4.688 14.953 3 15m12 7.5q-.656 0-1.078.422-.422.421-.422 1.078t.422 1.078q.421.422 1.078.422t1.078-.422q.422-.421.422-1.078 0-.656-.422-1.078Q15.657 22.5 15 22.5m0 4.5q-1.687-.046-2.578-1.5-.844-1.5 0-3 .89-1.454 2.578-1.5 1.687.046 2.578 1.5.845 1.5 0 3-.89 1.454-2.578 1.5m2.766-16.734-16.5 16.5q-.516.468-1.032 0-.468-.516 0-1.032l16.5-16.5q.516-.468 1.032 0 .468.516 0 1.032' />
    </g>
    <defs>
      <clipPath id='4e53831a86a74a7037fb0019cb30c29d__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentXlRegularIcon);
export default ForwardRef;
