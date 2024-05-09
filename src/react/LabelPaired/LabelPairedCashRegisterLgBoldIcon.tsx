import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCashRegisterLgBoldIcon = (
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
      <path d='M2.5 5.5h8.75c.664 0 1.25.586 1.25 1.25v2.5c0 .703-.586 1.25-1.25 1.25H8.125v1.25h8.438c1.25 0 2.304.938 2.46 2.148l.938 6.446c0 .117.039.234.039.351V23c0 1.406-1.133 2.5-2.5 2.5h-15A2.47 2.47 0 0 1 0 23v-2.656l.938-6.446a2.486 2.486 0 0 1 2.46-2.148h2.227V10.5H2.5c-.703 0-1.25-.547-1.25-1.25v-2.5c0-.664.547-1.25 1.25-1.25m1.25 1.875A.64.64 0 0 0 3.125 8c0 .352.273.625.625.625H10A.64.64 0 0 0 10.625 8c0-.312-.312-.625-.625-.625zM1.875 23c0 .352.273.625.625.625h15a.64.64 0 0 0 .625-.625v-.625H1.875zm15.313-8.828a.63.63 0 0 0-.625-.547H3.398a.63.63 0 0 0-.625.547L1.875 20.5h16.21zm-12.813.39a.95.95 0 0 1 .938.938c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938 0-.508.39-.937.937-.937m2.813.938c0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938m-.938 2.188a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938 0-.508.39-.937.937-.937m4.688-2.188c0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938M10 17.688a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938 0-.508.39-.937.937-.937m4.688-2.188c0-.508.39-.937.937-.937a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938m-.938 2.188a.95.95 0 0 1 .938.937c0 .547-.43.938-.938.938-.547 0-.937-.391-.937-.938 0-.508.39-.937.937-.937' />
    </g>
    <defs>
      <clipPath id='e5da4b3aeb8c24c13b098b47b7b7e741__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCashRegisterLgBoldIcon);
export default ForwardRef;
