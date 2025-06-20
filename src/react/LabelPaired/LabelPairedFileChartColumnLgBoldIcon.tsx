import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileChartColumnLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.875 23c0 .352.273.625.625.625h10a.64.64 0 0 0 .625-.625V11.75H10c-.703 0-1.25-.547-1.25-1.25V7.375H2.5A.64.64 0 0 0 1.875 8zM2.5 5.5h6.445c.664 0 1.29.273 1.758.742l3.555 3.555c.469.469.742 1.094.742 1.758V23c0 1.406-1.133 2.5-2.5 2.5h-10A2.47 2.47 0 0 1 0 23V8c0-1.367 1.094-2.5 2.5-2.5m5.938 10.938v5c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937v-5c0-.508.39-.938.937-.938a.95.95 0 0 1 .938.938m3.437 1.25v3.75c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937v-3.75c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938M5 18.938v2.5c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937v-2.5c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938' />
    </g>
    <defs>
      <clipPath id='c88eeb8bacaf9602c7e7ceef51ad537c__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileChartColumnLgBoldIcon);
export default ForwardRef;
