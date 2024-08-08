import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendUpSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M17.258 3.86a.866.866 0 0 1 .383 1.175l-2.625 5.25c-.137.3-.438.465-.766.465h-3.855L7.14 17.285a.867.867 0 0 1-1.176.383l-5.25-2.625a.867.867 0 0 1-.383-1.176.866.866 0 0 1 1.176-.383l4.457 2.243 3.117-6.235A.85.85 0 0 1 9.875 9h3.828l2.379-4.758a.867.867 0 0 1 1.176-.383' />
    </g>
    <defs>
      <clipPath id='dcaf44c9b37d5985ee4a6132866c470f__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendUpSmFillIcon);
export default ForwardRef;
