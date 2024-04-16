import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDerivP2pSmFillIcon = (
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
      <path d='M5.91 9.574c-.11-.027-.219-.027-.355-.027h-.192c-.027 0-.054.027-.082.027H5.2v1.121H5.5c.3 0 .52-.027.684-.11.164-.081.218-.245.218-.464 0-.11 0-.219-.054-.273a.37.37 0 0 0-.164-.192c-.082-.027-.164-.054-.274-.082m6.317 0c-.082-.027-.22-.027-.329-.027h-.218c-.055 0-.082.027-.11.027h-.027v1.121h.273c.301 0 .547-.027.684-.11.164-.081.246-.245.246-.464 0-.11-.027-.219-.082-.273a.37.37 0 0 0-.164-.192c-.055-.027-.164-.054-.273-.082M4.625 3.75h8.75A2.626 2.626 0 0 1 16 6.375v8.75a2.626 2.626 0 0 1-2.625 2.625h-8.75A2.626 2.626 0 0 1 2 15.125v-8.75A2.626 2.626 0 0 1 4.625 3.75m.629 5.059h-.328c-.11.027-.219.027-.301.054-.11 0-.219.028-.3.028v3.882h.874v-1.312H5.5c.574 0 1.04-.11 1.34-.328.328-.192.492-.547.492-1.012s-.164-.82-.465-1.012c-.328-.218-.765-.328-1.367-.328-.082 0-.164.028-.246.028m4.73.601a1 1 0 0 0-.246-.355 1.5 1.5 0 0 0-.41-.22 1.9 1.9 0 0 0-.601-.081c-.247 0-.493.055-.711.164-.22.082-.41.219-.575.383l.41.574a.6.6 0 0 1 .137-.082c.055-.055.11-.11.192-.137.054-.054.136-.082.246-.11.082-.054.164-.054.273-.054.137 0 .274.028.356.082.11.082.136.192.136.356 0 .082 0 .164-.054.246a3 3 0 0 1-.137.219l-.465.464c-.055.055-.137.11-.191.164l-.164.165c-.11.109-.22.246-.328.382a3 3 0 0 0-.22.41 1.6 1.6 0 0 0-.081.52v.273h2.625v-.71H8.48a.6.6 0 0 0 .082-.137c.055-.055.11-.11.165-.192.054-.027.082-.082.136-.109 0-.027.028-.055.055-.082l.52-.52c.109-.082.19-.191.273-.3l.055-.055c.082-.11.164-.246.218-.383q.082-.205.082-.41c0-.164-.027-.328-.082-.465m1.86-.629h-.028c-.082 0-.136.028-.218.028h-.328c-.22.027-.438.054-.63.082v3.882h.903v-1.312h.273c.575 0 1.04-.11 1.368-.328.3-.192.464-.547.464-1.012s-.164-.82-.464-1.012c-.328-.191-.766-.3-1.368-.328z' />
    </g>
    <defs>
      <clipPath id='85860700113caea0a2e781958305afb7__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDerivP2pSmFillIcon);
export default ForwardRef;
