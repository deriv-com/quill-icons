import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDealCancellationSmRegularIcon = (
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
      <path d='M2.71 7.086H5.31c.464 0 .875.082 1.257.246.383.137.711.383.985.684.273.3.465.683.629 1.148.136.465.218.984.218 1.586 0 .629-.082 1.148-.218 1.613-.164.465-.356.848-.63 1.149-.273.3-.6.52-.984.683a3.1 3.1 0 0 1-1.257.246H2.71zm2.599 6.289c.546 0 .984-.164 1.312-.52.328-.328.492-.847.492-1.503v-1.176c0-.656-.164-1.176-.492-1.504-.328-.356-.766-.52-1.312-.52H3.887v5.223zm7.3 1.176c-.957 0-1.695-.328-2.242-.957-.547-.656-.82-1.586-.82-2.844 0-.602.055-1.148.219-1.613.136-.465.328-.875.601-1.176.274-.328.574-.574.957-.738s.82-.246 1.285-.246c.657 0 1.176.136 1.614.41.437.273.765.71 1.011 1.258l-1.011.546c-.11-.355-.301-.629-.575-.847-.273-.192-.601-.301-1.039-.301-.546 0-1.011.191-1.312.574-.328.383-.492.903-.492 1.586v1.121c0 .684.164 1.203.492 1.586.3.383.765.574 1.312.574.438 0 .82-.109 1.094-.328s.465-.52.602-.875l.957.574c-.246.52-.575.957-1.012 1.258-.465.301-.984.438-1.64.438' />
    </g>
    <defs>
      <clipPath id='66f0cb41a49cf017626f9c462ec06d7f__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDealCancellationSmRegularIcon);
export default ForwardRef;
