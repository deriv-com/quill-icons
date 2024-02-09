import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLifeRingMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.594 17.281 9.75 14.438Q9 14.968 8 15q-1-.03-1.75-.562L3.406 17.28Q5.312 18.937 8 19q2.688-.063 4.594-1.719m.687-.687Q14.937 14.688 15 12q-.063-2.688-1.719-4.594l-2.844 2.844Q10.97 11 11 12q-.03 1-.562 1.75zm.719.687.344.375q.312.345 0 .688-.345.312-.688 0L13.281 18Q11.125 19.938 8 20q-3.125-.062-5.281-2l-.375.344q-.345.312-.688 0-.312-.345 0-.688L2 17.281Q.063 15.094 0 12q.062-3.094 2-5.281l-.344-.375q-.312-.345 0-.688.345-.312.688 0L2.719 6Q4.907 4.063 8 4q3.094.063 5.281 2l.375-.344q.345-.312.688 0 .312.345 0 .688L14 6.719Q15.938 8.875 16 12q-.062 3.125-2 5.281M12.594 6.72Q10.688 5.063 8 5q-2.688.063-4.594 1.719L6.25 9.562Q7 9.033 8 9q1 .03 1.75.563zM5.563 13.75Q5.03 13 5 12q.03-1 .563-1.75L2.719 7.406Q1.063 9.312 1 12q.063 2.688 1.719 4.594zM6 12q.03 1.125 1 1.719 1 .562 2 0 .97-.594 1-1.719-.03-1.125-1-1.719-1-.562-2 0-.97.594-1 1.719' />
    </g>
    <defs>
      <clipPath id='bd6d1e900d421b4e02eb6b08316e15ea__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLifeRingMdRegularIcon);
export default ForwardRef;
