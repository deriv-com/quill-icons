import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartTrendDownLgFillIcon = (
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
      <path d='M8.164 5.656a1.24 1.24 0 0 1 1.68.547l4.648 9.297H20c.469 0 .898.273 1.094.703l3.75 7.5a1.24 1.24 0 0 1-.547 1.68 1.24 1.24 0 0 1-1.68-.547L19.22 18H13.75c-.508 0-.937-.234-1.133-.664L8.164 8.43l-6.367 3.203a1.24 1.24 0 0 1-1.68-.547 1.24 1.24 0 0 1 .547-1.68z' />
    </g>
    <defs>
      <clipPath id='6bb53df269d67ba6cd28f4577df4934d__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartTrendDownLgFillIcon);
export default ForwardRef;
