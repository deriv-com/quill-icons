import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.125 9.25v12.5c0 .352.273.625.625.625h12.5a.64.64 0 0 0 .625-.625v-9.57a.63.63 0 0 0-.195-.43l1.328-1.328c.469.469.703 1.094.703 1.758v9.57c0 1.406-1.094 2.5-2.5 2.5H2.75a2.47 2.47 0 0 1-2.5-2.5V9.25c0-1.367 1.094-2.5 2.5-2.5h9.57c.664 0 1.29.273 1.758.742l2.93 2.93-1.328 1.328-2.93-2.93v-.039 3.906c0 .547-.43.938-.937.938h-7.5c-.547 0-.938-.39-.938-.937V8.625H2.75a.64.64 0 0 0-.625.625m3.125-.625v3.125h5.625V8.625zM6.5 18c0-.86.469-1.68 1.25-2.148.742-.43 1.719-.43 2.5 0 .742.468 1.25 1.289 1.25 2.148 0 .898-.508 1.719-1.25 2.188-.781.43-1.758.43-2.5 0A2.54 2.54 0 0 1 6.5 18' />
    </g>
    <defs>
      <clipPath id='b34fbd51013cb75a83310de8e347b3be__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskLgBoldIcon);
export default ForwardRef;
