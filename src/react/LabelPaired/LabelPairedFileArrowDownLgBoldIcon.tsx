import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileArrowDownLgBoldIcon = (
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
      <path d='M1.875 23c0 .352.273.625.625.625h10a.64.64 0 0 0 .625-.625V11.75H10c-.703 0-1.25-.547-1.25-1.25V7.375H2.5A.64.64 0 0 0 1.875 8zM2.5 5.5h6.445c.664 0 1.29.273 1.758.742l3.555 3.555c.469.469.742 1.094.742 1.758V23c0 1.406-1.133 2.5-2.5 2.5h-10A2.47 2.47 0 0 1 0 23V8c0-1.367 1.094-2.5 2.5-2.5m5.938 9.063v4.023l1.21-1.211c.352-.39.938-.39 1.329 0a.92.92 0 0 1 0 1.29l-2.813 2.812c-.39.39-.976.39-1.328 0l-2.813-2.813a.856.856 0 0 1 0-1.289c.352-.39.938-.39 1.329 0l1.21 1.21v-4.023c0-.507.391-.937.938-.937a.95.95 0 0 1 .938.938' />
    </g>
    <defs>
      <clipPath id='49c21dae54bee91d421e0a565c3d2130__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileArrowDownLgBoldIcon);
export default ForwardRef;
