import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPresentationScreenLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.875 5.5h21.25q.585.039.625.625-.039.585-.625.625H.875Q.29 6.711.25 6.125.289 5.54.875 5.5M1.5 8h1.25v8.75q0 .547.352.898Q3.452 18 4 18h15q.547 0 .898-.352.352-.35.352-.898V8h1.25v8.75q-.039 1.055-.742 1.758-.704.703-1.758.742h-6.875v1.602l3.555 3.593q.39.43 0 .86-.43.39-.86 0l-3.32-3.282-3.32 3.282q-.43.39-.86 0-.39-.43 0-.86l3.555-3.593V19.25H4q-1.055-.039-1.758-.742-.703-.704-.742-1.758z' />
    </g>
    <defs>
      <clipPath id='924705c5960ffe30__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPresentationScreenLgRegularIcon);
export default ForwardRef;
