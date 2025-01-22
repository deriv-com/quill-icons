import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDerivP2pSmBoldIcon = (
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
      <path d='M5.5 8.781c-.164 0-.355.028-.574.028-.192.027-.41.054-.602.082v3.882H5.2v-1.312H5.5c.574 0 1.04-.11 1.34-.328.328-.192.492-.547.492-1.012s-.164-.82-.465-1.012c-.328-.218-.765-.328-1.367-.328m.055.766c.136 0 .246 0 .355.027.11.028.192.055.274.082.082.055.136.11.164.192.054.054.054.164.054.273 0 .219-.054.383-.218.465s-.383.11-.684.11h-.3V9.573c.054 0 .109-.027.163-.027zm4.511.328c0-.164-.027-.328-.082-.465a1 1 0 0 0-.246-.355 1.5 1.5 0 0 0-.41-.22 1.9 1.9 0 0 0-.601-.081c-.247 0-.493.055-.711.164-.22.082-.41.219-.575.383l.41.574a.6.6 0 0 1 .137-.082c.055-.055.11-.11.192-.137.054-.054.136-.082.246-.11.082-.054.164-.054.273-.054.137 0 .274.028.356.082.11.082.136.192.136.356 0 .082 0 .164-.054.246a3 3 0 0 1-.137.219l-.219.218-.246.246c-.11.11-.246.22-.355.329-.11.109-.22.246-.328.382a3 3 0 0 0-.22.41 1.6 1.6 0 0 0-.081.52v.273h2.625v-.71H8.48a.6.6 0 0 0 .082-.137c.055-.055.11-.11.165-.192.082-.054.136-.136.191-.191l.191-.191.329-.329c.136-.109.218-.218.328-.355.082-.11.164-.246.218-.383q.082-.205.082-.41m1.75-1.094h.028c-.164 0-.356.028-.574.028-.22.027-.438.054-.63.082v3.882h.903v-1.312h.273c.575 0 1.04-.11 1.368-.328.3-.192.464-.547.464-1.012s-.164-.82-.464-1.012c-.328-.218-.766-.328-1.368-.328m.082.766c.11 0 .247 0 .329.027.109.028.218.055.273.082.082.055.137.11.164.192.055.054.082.164.082.273 0 .219-.082.383-.246.465-.137.082-.383.11-.684.11h-.273V9.573c.027 0 .082-.027.137-.027zm1.477-4.485h-8.75c-.738 0-1.312.602-1.312 1.313v8.75c0 .738.574 1.313 1.312 1.313h8.75c.71 0 1.313-.575 1.313-1.313v-8.75a1.33 1.33 0 0 0-1.313-1.312M4.625 3.75h8.75A2.626 2.626 0 0 1 16 6.375v8.75a2.626 2.626 0 0 1-2.625 2.625h-8.75A2.626 2.626 0 0 1 2 15.125v-8.75A2.626 2.626 0 0 1 4.625 3.75' />
    </g>
    <defs>
      <clipPath id='21ced20192a2934de48170167f0c71a4__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDerivP2pSmBoldIcon);
export default ForwardRef;
