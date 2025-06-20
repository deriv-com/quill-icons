import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLoaderLgBoldIcon = (
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
      <path d='M10.938 6.438v3.125c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937V6.437c0-.507.39-.937.937-.937a.95.95 0 0 1 .938.938m0 15v3.125c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937v-3.125c0-.508.39-.938.937-.938a.95.95 0 0 1 .938.938M0 15.5c0-.508.39-.937.938-.937h3.125A.95.95 0 0 1 5 15.5c0 .547-.43.938-.937.938H.938C.39 16.438 0 16.047 0 15.5m15.938-.937h3.124A.95.95 0 0 1 20 15.5c0 .547-.43.938-.937.938h-3.125c-.547 0-.938-.391-.938-.938 0-.508.39-.937.938-.937M17.07 8.43c.352.39.352.976 0 1.328l-2.226 2.226a.97.97 0 0 1-1.328 0 .97.97 0 0 1 0-1.328l2.226-2.226c.352-.352.938-.352 1.328 0M6.445 20.383 4.22 22.57a.856.856 0 0 1-1.29 0 .856.856 0 0 1 0-1.289l2.188-2.226a.97.97 0 0 1 1.328 0c.352.351.352.937 0 1.328M2.93 8.43a.92.92 0 0 1 1.289 0l2.226 2.226a.97.97 0 0 1 0 1.328c-.351.352-.937.352-1.328 0L2.93 9.758c-.39-.352-.39-.938 0-1.328m11.914 10.625 2.226 2.226a.92.92 0 0 1 0 1.29c-.39.39-.976.39-1.328 0l-2.226-2.188a.97.97 0 0 1 0-1.328.97.97 0 0 1 1.328 0' />
    </g>
    <defs>
      <clipPath id='67a2c8dbe65bba7ea52bdb3507fb1d5c__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLoaderLgBoldIcon);
export default ForwardRef;
