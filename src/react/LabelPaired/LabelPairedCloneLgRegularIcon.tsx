import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCloneLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 24.25h8.75q.547 0 .898-.352.352-.35.352-.898v-2.5h1.25V23q-.039 1.055-.742 1.758t-1.758.742H2.5q-1.055-.039-1.758-.742Q.04 24.054 0 23v-8.75q.039-1.055.742-1.758T2.5 11.75H5V13H2.5q-.547 0-.898.352-.352.35-.352.898V23q0 .547.352.898.35.352.898.352M8.75 18h8.75q.547 0 .898-.352.352-.35.352-.898V8q0-.547-.352-.898-.35-.352-.898-.352H8.75q-.547 0-.898.352Q7.5 7.452 7.5 8v8.75q0 .547.352.898.35.352.898.352m-2.5-1.25V8q.039-1.055.742-1.758.704-.703 1.758-.742h8.75q1.055.039 1.758.742T20 8v8.75q-.039 1.055-.742 1.758-.704.703-1.758.742H8.75q-1.055-.039-1.758-.742-.703-.704-.742-1.758' />
    </g>
    <defs>
      <clipPath id='173e19dab0bbac861f7015e90abab2ff__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneLgRegularIcon);
export default ForwardRef;
