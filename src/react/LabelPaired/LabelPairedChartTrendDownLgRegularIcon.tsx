import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendDownLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M24.023 24.836a.64.64 0 0 1-.859-.273l-3.555-7.188H13.75c-.273 0-.469-.117-.586-.312L8.438 7.608l-6.915 3.477c-.312.156-.703 0-.859-.274a.64.64 0 0 1 .273-.859l7.5-3.75a.64.64 0 0 1 .86.274l4.805 9.648H20c.234 0 .43.156.547.352l3.75 7.5a.64.64 0 0 1-.274.859' />
    </g>
    <defs>
      <clipPath id='831b0cd557c60e081b6b069fb04f6018__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendDownLgRegularIcon);
export default ForwardRef;
