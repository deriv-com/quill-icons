import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartAreaSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.875 5.063v9.625c0 .738.574 1.312 1.313 1.312h11.375a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H2.188A2.16 2.16 0 0 1 0 14.688V5.063a.45.45 0 0 1 .438-.438.47.47 0 0 1 .437.438m7.246 4.566L6.125 7.633 3.609 10.12a.4.4 0 0 0-.109.3v2.954h8.75v-2.57c0-.11-.055-.192-.11-.274l-1.695-1.996L9.352 9.63a.85.85 0 0 1-.602.246.87.87 0 0 1-.629-.246m0-1.23L8.75 9l.602-.602.464-.464a.885.885 0 0 1 1.286.054l1.695 1.969c.191.246.328.547.328.848v2.57c0 .492-.41.875-.875.875H3.5a.864.864 0 0 1-.875-.875v-2.953c0-.328.137-.684.383-.93l2.488-2.488a.89.89 0 0 1 1.23 0z' />
    </g>
    <defs>
      <clipPath id='217f6dcb3a4561135ab42442e62d320a__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartAreaSmRegularIcon);
export default ForwardRef;
