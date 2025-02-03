import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedStopLossSmBoldIcon = (
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
      <path d='M6.102 14.55q-.985 0-1.641-.327c-.465-.22-.82-.52-1.149-.848l1.04-1.066c.52.547 1.12.847 1.859.847.383 0 .684-.082.848-.246a.83.83 0 0 0 .3-.656.76.76 0 0 0-.164-.492c-.11-.137-.355-.246-.683-.274l-.739-.11c-.765-.108-1.34-.327-1.695-.71-.355-.355-.547-.848-.547-1.477 0-.328.055-.629.192-.902.136-.273.3-.492.547-.684.218-.218.52-.355.847-.464.356-.11.738-.164 1.176-.164.547 0 1.039.082 1.45.273.41.164.792.41 1.093.766L7.77 9.082c-.192-.219-.383-.383-.657-.492-.246-.137-.547-.219-.93-.219-.355 0-.628.082-.792.191-.164.137-.274.301-.274.547s.082.41.219.547c.137.11.355.192.656.219l.738.137c.739.11 1.313.328 1.668.683.383.356.547.848.547 1.477 0 .355-.054.683-.191.957-.11.3-.3.547-.547.766a2.4 2.4 0 0 1-.902.492c-.356.11-.766.164-1.203.164m4.183-.136V7.086h1.586v5.934h2.79v1.394z' />
    </g>
    <defs>
      <clipPath id='c926a2a9133be20e008a7a6032f67df2__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedStopLossSmBoldIcon);
export default ForwardRef;
