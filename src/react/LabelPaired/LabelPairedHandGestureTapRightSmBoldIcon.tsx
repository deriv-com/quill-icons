import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureTapRightSmBoldIcon = (
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
      <path d='M13.977 9c0 .82-.547 1.504-1.313 1.695l-1.23 2.598c.054.11.109.219.136.3l.192.438c.164.383.136.82-.028 1.203l-.082.164a2.6 2.6 0 0 1-2.132 1.477h-.055a2.74 2.74 0 0 1-1.313-.246l-1.941-.93a2.006 2.006 0 0 1-.984-2.707l.765-1.613c.246-.547.93-.793 1.45-.52.027 0 .054.028.081.028l.055.054c.3-.218.738-.273 1.094-.109.082.055.164.082.246.137.3-.219.738-.274 1.094-.11.027.028.054.028.082.055l.027.027.547-1.12A1.65 1.65 0 0 1 10.477 9c0-.957.793-1.75 1.75-1.75s1.75.793 1.75 1.75m-1.668-.082c.328.164.547.437.601.766a.969.969 0 0 0-.684-1.64c-.519-.001-.956.41-.956.929.3-.192.683-.22 1.039-.055m-2.27 5.441 1.723-3.664.328-.738a.275.275 0 0 0-.137-.3c-.11-.055-.273 0-.355.081l-.328.739-.684 1.421a.39.39 0 0 1-.41.22.356.356 0 0 1-.356-.302c-.027-.109-.082-.164-.164-.191-.11-.055-.3-.027-.355.11l-.055.136c-.082.137-.246.246-.41.219-.191 0-.328-.164-.356-.328a.37.37 0 0 0-.164-.192c-.136-.054-.3 0-.355.137a.43.43 0 0 1-.356.219.48.48 0 0 1-.382-.192.33.33 0 0 0-.137-.136c-.11-.055-.3 0-.356.136l-.765 1.614c-.274.601-.027 1.34.574 1.613l1.969.93q.41.204.902.164h.055a1.77 1.77 0 0 0 1.45-1.012l.081-.164a.64.64 0 0 0 0-.547l-.164-.41-.3.656a.314.314 0 0 1-.384.137c-.109-.055-.191-.219-.109-.356m4.676-9.734c.219 0 .41.191.41.383V16.52c0 .19-.191.382-.41.382a.39.39 0 0 1-.383-.383V5.009c0-.192.164-.383.383-.383' />
    </g>
    <defs>
      <clipPath id='14ce1838b13099bc7d856b5216b4045d__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureTapRightSmBoldIcon);
export default ForwardRef;