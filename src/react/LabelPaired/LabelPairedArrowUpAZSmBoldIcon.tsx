import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpAZSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.5 4.625c.246 0 .465.164.574.383l2.188 4.375a.647.647 0 0 1-.301.875c-.3.164-.711.027-.875-.301l-.356-.738c-.054 0-.109.027-.136.027h-2.352l-.355.711a.647.647 0 0 1-.875.3.647.647 0 0 1-.301-.874l2.187-4.375a.67.67 0 0 1 .602-.383m-.602 3.281h1.176L11.5 6.758zm-6.863-3.09a.644.644 0 0 1 .902 0l2.625 2.625c.274.274.274.684 0 .93a.6.6 0 0 1-.902 0L5.156 6.867v9.352c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V6.867L2.34 8.371c-.274.274-.684.274-.93 0a.6.6 0 0 1 0-.902l2.625-2.625zm5.715 6.809h3.5c.246 0 .492.164.574.41a.59.59 0 0 1-.11.684L11.2 15.563h2.051c.355 0 .656.3.656.656 0 .383-.3.656-.656.656h-3.5a.63.63 0 0 1-.602-.383.635.635 0 0 1 .11-.71l2.515-2.844H9.75a.63.63 0 0 1-.656-.657c0-.355.273-.656.656-.656' />
    </g>
    <defs>
      <clipPath id='c3fcaf3e75a70befaebc680dd6d891b1__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZSmBoldIcon);
export default ForwardRef;
