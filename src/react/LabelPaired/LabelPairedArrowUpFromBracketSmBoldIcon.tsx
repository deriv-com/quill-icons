import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromBracketSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m6.965 3.941 3.473 3.5c.273.274.273.684 0 .93-.247.274-.657.274-.93 0l-2.38-2.379v6.727a.63.63 0 0 1-.655.656.65.65 0 0 1-.657-.656V5.992l-2.378 2.38a.6.6 0 0 1-.903 0c-.273-.247-.273-.657 0-.93l3.5-3.5c.246-.247.656-.247.93 0m-5.277 9.215v2.188c0 .629.464 1.094 1.093 1.094h7.438a1.08 1.08 0 0 0 1.094-1.094v-2.188c0-.355.273-.656.656-.656.355 0 .656.3.656.656v2.188a2.41 2.41 0 0 1-2.406 2.406H2.78a2.39 2.39 0 0 1-2.406-2.406v-2.188c0-.355.273-.656.656-.656.356 0 .657.3.657.656' />
    </g>
    <defs>
      <clipPath id='d499e7c061d534a39a2515baf93206fc__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketSmBoldIcon);
export default ForwardRef;
