import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileInvoiceDollarLgBoldIcon = (
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
      <path d='M13.125 23V11.75H10q-.547 0-.898-.352-.352-.35-.352-.898V7.375H2.5q-.585.039-.625.625v15q.039.585.625.625h10q.585-.039.625-.625M0 8q.039-1.055.742-1.758T2.5 5.5h6.484q1.015 0 1.758.742l3.516 3.516Q15 10.5 15 11.555V23q-.039 1.055-.742 1.758T12.5 25.5h-10q-1.055-.039-1.758-.742Q.04 24.054 0 23zm7.5 5.938q.704.038.781.78v.391q.43.04.82.157.665.234.586.937-.234.664-.976.586a7 7 0 0 0-1.211-.195q-.508 0-.898.195-.235.156-.196.234 0 .04.157.118.39.195 1.093.351l.04.04h.038q.704.155 1.446.507.35.195.664.586.273.351.312.938-.078 1.21-1.015 1.68-.39.233-.86.312v.39q-.078.704-.781.782-.704-.079-.781-.782v-.43a10 10 0 0 1-1.016-.273q-.039 0-.078-.039-.078 0-.117-.039H5.39q-.664-.273-.508-.977.273-.664.976-.546.079.039.196.078h.078q.742.273 1.406.312.547 0 .86-.156.233-.156.195-.273.038-.04-.196-.196-.39-.195-1.093-.39h-.078a5.4 5.4 0 0 1-1.368-.508 2.3 2.3 0 0 1-.703-.547q-.273-.351-.312-.938 0-.624.312-1.015.313-.43.742-.625.39-.195.82-.274v-.39q.079-.742.782-.781M3.75 9.25h3.125q.585.039.625.625-.039.585-.625.625H3.75q-.586-.039-.625-.625.039-.585.625-.625m0 2.5h3.125q.585.039.625.625-.039.585-.625.625H3.75q-.586-.039-.625-.625.039-.585.625-.625' />
    </g>
    <defs>
      <clipPath id='3bf5ca6a6bc8bebe69e4c25945dba37b__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileInvoiceDollarLgBoldIcon);
export default ForwardRef;
