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
      <path d='M1.875 23q.039.585.625.625h10q.585-.039.625-.625V11.75H10q-.547 0-.898-.352-.352-.35-.352-.898V7.375H2.5q-.585.039-.625.625zM2.5 5.5h6.484q1.015 0 1.758.742l3.516 3.516Q15 10.5 15 11.555V23q-.039 1.055-.742 1.758T12.5 25.5h-10q-1.055-.039-1.758-.742Q.04 24.054 0 23V8q.039-1.055.742-1.758T2.5 5.5m5.938 10.938v5q-.079.858-.938.937-.86-.079-.937-.937v-5q.078-.86.937-.938.859.078.938.938m3.437 1.25v3.75q-.079.858-.937.937-.86-.079-.938-.937v-3.75q.078-.86.938-.938.858.078.937.938M5 18.938v2.5q-.079.858-.937.937-.86-.079-.938-.937v-2.5q.078-.86.938-.938.859.078.937.938' />
    </g>
    <defs>
      <clipPath id='edc0a0b99d4dac450bfb507c6012d033__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileChartColumnLgBoldIcon);
export default ForwardRef;
