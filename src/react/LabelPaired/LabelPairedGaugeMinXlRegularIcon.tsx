import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGaugeMinXlRegularIcon = (
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
      <path d='M12 7.5q-2.859.047-5.25 1.406-2.39 1.407-3.844 3.844Q1.5 15.234 1.5 18t1.406 5.25q1.453 2.437 3.844 3.844Q9.141 28.454 12 28.5q2.859-.047 5.25-1.406 2.39-1.407 3.844-3.844Q22.5 20.766 22.5 18t-1.406-5.25q-1.453-2.437-3.844-3.844Q14.859 7.546 12 7.5M12 30q-3.28-.046-6-1.594Q3.282 26.813 1.594 24 0 21.141 0 18t1.594-6Q3.28 9.187 6 7.594 8.72 6.046 12 6q3.282.047 6 1.594Q20.719 9.187 22.406 12 24 14.859 24 18t-1.594 6Q20.72 26.813 18 28.406 15.282 29.954 12 30m1.125-19.5q-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125Q10.97 9.47 12 9.375q1.032.095 1.125 1.125m-2.625 12q0 .657.422 1.078Q11.343 24 12 24t1.078-.422q.422-.421.422-1.078 0-.656-.422-1.078Q12.657 21 12 21q-.656 0-1.078.422-.422.421-.422 1.078m4.5 0q-.047 1.266-.89 2.11-.844.843-2.11.89-1.266-.047-2.11-.89-.843-.844-.89-2.11 0-.421.14-.844l-5.015-3q-.563-.422-.281-1.031.422-.563 1.031-.281l5.016 3q.843-.798 2.109-.844 1.266.047 2.11.89.843.844.89 2.11m-7.125-9.75q-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125.095-1.03 1.125-1.125 1.032.095 1.125 1.125M19.5 19.125q-1.03-.093-1.125-1.125.094-1.03 1.125-1.125 1.032.094 1.125 1.125-.093 1.032-1.125 1.125m-1.125-6.375q-.093 1.032-1.125 1.125-1.03-.093-1.125-1.125.094-1.03 1.125-1.125 1.032.095 1.125 1.125' />
    </g>
    <defs>
      <clipPath id='e1baba67765460d3c831aca8b5110ac7__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGaugeMinXlRegularIcon);
export default ForwardRef;
