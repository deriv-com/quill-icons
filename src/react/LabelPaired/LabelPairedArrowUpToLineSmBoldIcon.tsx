import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpToLineSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.906 4.625h9.188c.355 0 .656.3.656.656 0 .383-.3.657-.656.657H.906A.63.63 0 0 1 .25 5.28c0-.355.273-.656.656-.656m5.059 3.719 3.5 3.719c.246.273.246.683-.027.93-.274.245-.684.245-.93-.028l-2.352-2.516v5.77c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656v-5.77l-2.38 2.516c-.245.273-.655.273-.929.027-.273-.246-.273-.656-.027-.93l3.5-3.718a.69.69 0 0 1 .492-.219c.164 0 .355.082.465.219' />
    </g>
    <defs>
      <clipPath id='f0df2355c28f4aa66b01bb7dec5025ce__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpToLineSmBoldIcon);
export default ForwardRef;
