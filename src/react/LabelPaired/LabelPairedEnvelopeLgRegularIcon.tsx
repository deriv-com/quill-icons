import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEnvelopeLgRegularIcon = (
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
      <path d='M2.5 9.25q-.547 0-.898.352-.352.35-.352.898v1.563l7.656 5.585q1.095.743 2.188 0l7.656-5.585V10.5q0-.547-.352-.898-.35-.352-.898-.352zm-1.25 4.375V20.5q0 .547.352.898.35.352.898.352h15q.547 0 .898-.352.352-.35.352-.898v-6.875l-6.914 5.04a2.96 2.96 0 0 1-1.836.624q-1.016 0-1.836-.625zM0 10.5q.039-1.055.742-1.758T2.5 8h15q1.055.039 1.758.742T20 10.5v10q-.039 1.055-.742 1.758-.704.703-1.758.742h-15q-1.055-.039-1.758-.742Q.04 21.554 0 20.5z' />
    </g>
    <defs>
      <clipPath id='a6cf97174a5188806eb881178ccb3b3c__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeLgRegularIcon);
export default ForwardRef;
