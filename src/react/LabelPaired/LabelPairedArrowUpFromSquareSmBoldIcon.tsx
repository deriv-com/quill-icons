import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromSquareSmBoldIcon = (
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
      <path d='M7.465 3.941 10.5 7.004c.273.273.273.684 0 .93-.246.273-.656.273-.93 0L7.63 5.992v6.727a.63.63 0 0 1-.656.656.65.65 0 0 1-.657-.656V5.992L4.375 7.934a.6.6 0 0 1-.902 0c-.274-.247-.274-.657 0-.93L6.535 3.94c.246-.246.656-.246.93 0m-5.496.684h.218c.356 0 .657.3.657.656 0 .383-.301.657-.656.657h-.22c-.382 0-.655.3-.655.656v9.187c0 .383.273.656.656.656H12.03a.65.65 0 0 0 .656-.656V6.594c0-.356-.3-.657-.656-.657h-.219a.63.63 0 0 1-.656-.656c0-.355.274-.656.656-.656h.22c1.066 0 1.968.902 1.968 1.969v9.187a1.98 1.98 0 0 1-1.969 1.969H1.97A1.96 1.96 0 0 1 0 15.781V6.594c0-1.067.875-1.969 1.969-1.969' />
    </g>
    <defs>
      <clipPath id='fc169c88119e3efccc49935007f72556__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareSmBoldIcon);
export default ForwardRef;
