import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureTapLeftSmBoldIcon = (
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
      <path d='M3.996 9c0-.957.793-1.75 1.75-1.75s1.75.793 1.75 1.75c0 .3-.055.574-.191.82l.547 1.121.027-.027c.027-.027.055-.027.082-.055.355-.164.793-.109 1.121.11.055-.055.137-.082.219-.137.355-.164.793-.11 1.094.11.027-.028.054-.028.054-.055.028 0 .055-.028.082-.028a1.07 1.07 0 0 1 1.45.52l.765 1.613a2.006 2.006 0 0 1-.984 2.707l-1.942.93c-.41.191-.875.273-1.312.246h-.055a2.6 2.6 0 0 1-2.133-1.477l-.054-.164a1.43 1.43 0 0 1-.055-1.203l.191-.437c.028-.082.082-.192.137-.301l-1.23-2.598A1.76 1.76 0 0 1 3.996 9m1.668-.082a1.08 1.08 0 0 1 1.04.055c0-.52-.438-.93-.958-.93a.969.969 0 0 0-.684 1.64c.083-.328.274-.601.602-.765m2.297 5.441-.027-.027c.082.137 0 .3-.11.383-.164.055-.3 0-.383-.137l-.3-.656-.164.41a.64.64 0 0 0 0 .547l.082.164c.273.574.82.957 1.449 1.012h.055a1.67 1.67 0 0 0 .902-.164l1.969-.93c.601-.274.847-1.012.574-1.613l-.766-1.614c-.055-.136-.246-.191-.355-.136a.33.33 0 0 0-.137.136.48.48 0 0 1-.383.192.43.43 0 0 1-.355-.219c-.055-.137-.219-.191-.356-.137a.37.37 0 0 0-.164.192c-.027.164-.164.328-.355.328-.164.027-.328-.082-.41-.219l-.055-.137c-.055-.136-.246-.164-.356-.109-.082.027-.136.082-.164.191a.356.356 0 0 1-.355.301.39.39 0 0 1-.41-.219l-.684-1.421-.328-.739c-.082-.082-.246-.136-.355-.082a.275.275 0 0 0-.137.301l.328.738zM3.258 4.625a.39.39 0 0 0-.383.383V16.52c0 .19.164.382.383.382a.39.39 0 0 0 .383-.383V5.009a.39.39 0 0 0-.383-.383' />
    </g>
    <defs>
      <clipPath id='55872afd075c6554b63c5741ccca0b12__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureTapLeftSmBoldIcon);
export default ForwardRef;
