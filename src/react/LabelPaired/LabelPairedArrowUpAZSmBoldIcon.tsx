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
      <path d='M11.5 4.625q.41 0 .602.355l2.187 4.375q.191.574-.3.903-.575.19-.876-.301l-.383-.738h-2.46l-.383.738q-.3.52-.875.3-.52-.327-.301-.902l2.187-4.375a.76.76 0 0 1 .602-.355m-.574 3.281h1.148L11.5 6.758zm-6.89-3.09q.464-.382.929 0L7.59 7.441q.383.465 0 .93-.465.383-.93 0L5.156 6.867v9.352q-.054.601-.656.656-.602-.055-.656-.656V6.867L2.34 8.371q-.465.383-.93 0-.383-.465 0-.93zm5.714 6.809h3.5a.7.7 0 0 1 .602.383.64.64 0 0 1-.11.71L11.2 15.564h2.051q.602.054.656.656-.054.601-.656.656h-3.5a.7.7 0 0 1-.602-.383.64.64 0 0 1 .11-.71l2.543-2.844H9.75q-.602-.056-.656-.657.054-.601.656-.656' />
    </g>
    <defs>
      <clipPath id='5769ee93c1bec2eecb9e42432991d3d2__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpAZSmBoldIcon);
export default ForwardRef;
