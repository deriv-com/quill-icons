import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCopyLgRegularIcon = (
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
      <path d='M15.25 19.25q.547 0 .898-.352.352-.35.352-.898v-7.969a.52.52 0 0 0-.195-.43l-2.657-2.656a.52.52 0 0 0-.43-.195H9q-.547 0-.898.352-.352.35-.352.898v10q0 .547.352.898.35.352.898.352zm1.953-10.547q.547.547.547 1.328V18q-.039 1.055-.742 1.758-.704.703-1.758.742H9q-1.055-.039-1.758-.742Q6.54 19.054 6.5 18V8q.039-1.055.742-1.758Q7.946 5.54 9 5.5h4.219q.78 0 1.328.547zM2.75 10.5h2.5v1.25h-2.5q-.547 0-.898.352-.352.35-.352.898v10q0 .547.352.898.35.352.898.352H9q.547 0 .898-.352.352-.35.352-.898v-1.25h1.25V23q-.039 1.055-.742 1.758T9 25.5H2.75q-1.055-.039-1.758-.742Q.29 24.054.25 23V13q.039-1.055.742-1.758T2.75 10.5' />
    </g>
    <defs>
      <clipPath id='45894e859a76f2b39ca0aa0d7612a81f__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCopyLgRegularIcon);
export default ForwardRef;
