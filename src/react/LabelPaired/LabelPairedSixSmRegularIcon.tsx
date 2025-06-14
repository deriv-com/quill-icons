import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSixSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={22}
    viewBox='0 0 9 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 12.5C8 10.586 6.414 9 4.5 9S1.027 10.531 1 12.418v.082A3.49 3.49 0 0 0 4.5 16C6.414 16 8 14.441 8 12.5M3.57 8.234c.301-.054.602-.109.93-.109A4.39 4.39 0 0 1 8.875 12.5 4.37 4.37 0 0 1 4.5 16.875 4.353 4.353 0 0 1 .125 12.5v-.137a4.44 4.44 0 0 1 1.121-2.816l4.238-4.758c.137-.191.438-.191.602-.027.191.136.191.437.027.601z' />
    </g>
    <defs>
      <clipPath id='ed345355498bc23f3f345e9a184e2e53__a'>
        <path d='M0 0h9v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSixSmRegularIcon);
export default ForwardRef;
