import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleDollarSmRegularIcon = (
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
      <path d='M13.125 10.75a6.1 6.1 0 0 0-3.062-5.277c-1.915-1.121-4.239-1.121-6.126 0A6.04 6.04 0 0 0 .876 10.75c0 2.215 1.148 4.21 3.063 5.305 1.886 1.12 4.21 1.12 6.124 0a6.11 6.11 0 0 0 3.063-5.305M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m7.438-3.719v.63c.355.027.71.136 1.066.245.055 0 .082.028.137.028.218.054.355.3.3.546-.054.22-.3.356-.546.301-.055-.027-.137-.027-.192-.054-.191-.055-.41-.137-.629-.165-.52-.054-.984 0-1.34.137-.355.164-.52.383-.546.547-.055.274.054.438.273.602.3.164.738.3 1.258.437v.027c.492.137 1.066.301 1.504.575.52.355.738.93.629 1.558-.11.575-.52.985-1.04 1.176-.246.11-.574.191-.902.191v.657a.43.43 0 0 1-.437.437.45.45 0 0 1-.438-.437v-.684c-.219-.055-.574-.164-.875-.246l-.574-.164a.46.46 0 0 1-.274-.574.465.465 0 0 1 .547-.274c.192.055.356.137.547.192.301.082.63.164.766.191.547.082 1.012.027 1.312-.082.301-.137.465-.328.52-.547.027-.3-.055-.52-.3-.683-.329-.22-.712-.328-1.122-.438-.055 0-.11-.027-.164-.055-.492-.109-1.012-.273-1.422-.546a1.65 1.65 0 0 1-.574-.575c-.137-.273-.164-.574-.11-.902.11-.574.547-.957 1.067-1.176a2.6 2.6 0 0 1 .656-.191V7.03a.45.45 0 0 1 .438-.437.45.45 0 0 1 .437.437z' />
    </g>
    <defs>
      <clipPath id='5af692b877df0c2789e136190b764709__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDollarSmRegularIcon);
export default ForwardRef;
