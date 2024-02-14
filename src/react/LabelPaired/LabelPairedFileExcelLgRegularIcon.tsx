import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileExcelLgRegularIcon = (
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
      <path d='M12.5 24.25q.547 0 .898-.352.352-.35.352-.898V13H9.375a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328V6.75h-5q-.547 0-.898.352-.352.35-.352.898v15q0 .547.352.898.35.352.898.352zm-3.125-12.5h4.375a1 1 0 0 0-.195-.273L9.023 6.945a.6.6 0 0 0-.273-.156v4.336q.039.585.625.625M2.5 5.5h6.094q.78 0 1.328.547l4.531 4.531q.547.547.547 1.328V23q-.039 1.055-.742 1.758T12.5 25.5h-10q-1.055-.039-1.758-.742Q.04 24.054 0 23V8q.039-1.055.742-1.758T2.5 5.5m3.32 9.648 1.68 2.383 1.68-2.383q.35-.429.86-.156.43.352.155.86l-1.914 2.773 1.914 2.773q.274.508-.156.86-.507.273-.86-.156L7.5 19.719l-1.68 2.383q-.35.429-.86.156-.43-.352-.155-.86l1.953-2.773-1.953-2.773q-.274-.508.156-.86.507-.273.86.156' />
    </g>
    <defs>
      <clipPath id='90080e884eeb0cc93708302971a48b3a__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileExcelLgRegularIcon);
export default ForwardRef;
