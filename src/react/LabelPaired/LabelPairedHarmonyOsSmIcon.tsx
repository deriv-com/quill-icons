import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedHarmonyOsSmIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 18 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M4.844 3.75h8.285A2.87 2.87 0 0 1 16 6.621v8.285c0 1.586-1.285 2.844-2.871 2.844H4.844A2.824 2.824 0 0 1 2 14.906V6.621C2 5.035 3.258 3.75 4.844 3.75m.547 3.227v3.144h.629v-1.34h1.367v1.34h.601V6.977h-.601v1.23H6.02v-1.23zm4.265 0v3.144h.602V8.562l-.055-.519h.055l.82 1.395h.356l.847-1.395h.028l-.028.52v1.558h.602V6.977h-.602l-1.011 1.64h-.028l-.984-1.64zm1.23 7.601c.137.027.274.055.41.055.138 0 .274-.027.411-.055a1.47 1.47 0 0 0 .355-.191c.11-.082.192-.164.274-.274.055-.136.11-.273.11-.437a.757.757 0 0 0-.083-.356.73.73 0 0 0-.164-.273c-.082-.082-.191-.137-.3-.192a4.44 4.44 0 0 0-.356-.164l-.191-.054c-.192-.055-.329-.137-.438-.192-.082-.054-.11-.136-.11-.246 0-.082.028-.164.137-.219.082-.082.192-.109.329-.109.136 0 .246.055.328.11a.645.645 0 0 1 .164.246l.574-.22c-.027-.081-.082-.136-.137-.218a.486.486 0 0 0-.191-.219.624.624 0 0 0-.328-.164c-.11-.054-.246-.054-.41-.054-.165 0-.329 0-.438.054a1.47 1.47 0 0 0-.355.192 1.068 1.068 0 0 0-.22.273.757.757 0 0 0 0 .684c.056.082.11.164.192.246.055.054.137.136.246.164.082.055.164.11.274.137l.191.054c.137.055.219.082.3.137a.55.55 0 0 1 .22.11c.027.027.082.081.11.136 0 .027.026.082.026.137 0 .082-.027.136-.054.164a.48.48 0 0 1-.11.137c-.054.027-.082.054-.164.054-.054.028-.11.028-.191.028a.557.557 0 0 1-.41-.164.598.598 0 0 1-.219-.383l-.602.218c.055.137.11.274.192.383.082.11.164.192.273.274.11.082.246.136.356.191m-4.183.055c.219 0 .438-.055.629-.137.191-.082.356-.191.52-.355a1.604 1.604 0 0 0 .437-1.148c0-.247-.027-.466-.11-.657a1.681 1.681 0 0 0-.327-.52c-.165-.136-.329-.273-.52-.355a1.605 1.605 0 0 0-.629-.11c-.219 0-.437.028-.629.11a1.46 1.46 0 0 0-.52.355 1.681 1.681 0 0 0-.327.52c-.082.191-.137.41-.137.656 0 .219.055.438.137.63.082.19.191.382.328.519.136.164.3.273.52.355.19.082.41.137.628.137m0-.574c-.137 0-.273-.028-.41-.082a1.144 1.144 0 0 1-.328-.22.983.983 0 0 1-.219-.327 1.278 1.278 0 0 1 0-.902c.055-.11.137-.247.219-.329.11-.082.219-.164.328-.219.137-.054.273-.082.41-.082.137 0 .274.028.383.082a.984.984 0 0 1 .328.22c.11.081.164.218.219.327a1.278 1.278 0 0 1 0 .903c-.055.136-.11.246-.219.328-.082.11-.191.164-.328.219a.875.875 0 0 1-.383.082m-1.176.847v.548h2.297v-.548z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHarmonyOsSmIcon);
export default ForwardRef;