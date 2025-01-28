import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzlePieceTwoLgRegularIcon = (
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
      <path d='M17.266 18.938c.43.351.664.898.664 1.523s-.235 1.133-.664 1.484c-.391.352-.938.547-1.485.586-.117.04-.234 0-.351-.039v.547c0 .508-.274.938-.664 1.25-.391.273-.899.469-1.446.469-.039 0-.078 0-.078-.04H11.68a.755.755 0 0 1-.547-1.288 1.73 1.73 0 0 0-.352-.86 1.14 1.14 0 0 0-.82-.351.99.99 0 0 0-.781.351c-.196.196-.313.508-.352.86a.755.755 0 0 1-.547 1.289H6.72c-.04.039-.078.039-.078.039-.547 0-1.094-.195-1.446-.469-.39-.312-.664-.742-.664-1.289v-5c0-.234-.039-.39-.039-.547 0-.195 0-.351.04-.703V15.5c0-.078 0-.312-.04-.508v-.039c-.078.04-.195.04-.312.04-.547-.04-1.094-.235-1.485-.548a1.87 1.87 0 0 1-.703-1.484c0-.625.274-1.133.703-1.445.43-.313.938-.43 1.485-.47.117 0 .234 0 .312.04V10.5c0-.508.313-.937.703-1.25.39-.273.899-.469 1.446-.469H7.93c-.04-.078-.04-.195-.04-.312q.06-.879.587-1.524c.351-.39.898-.664 1.523-.664s1.133.274 1.484.664q.528.645.586 1.524c.04.117 0 .234-.039.312h1.29a2.7 2.7 0 0 1 1.484.469c.39.313.664.742.664 1.25v6.758c-.04.117-.04.234-.04.625v.508c.118-.04.235-.04.352-.04a2.72 2.72 0 0 1 1.524.587zM6.563 23.78H7.93c-.04-.078-.04-.195-.04-.312q.06-.879.587-1.524c.351-.39.859-.664 1.484-.664s1.172.274 1.523.664q.528.645.586 1.524c0 .117 0 .234-.039.312h1.328c.352 0 .664-.117.86-.234.195-.195.312-.352.312-.508v-.898a.755.755 0 0 1 1.29-.547c.35-.04.663-.157.859-.352a.99.99 0 0 0 .351-.781c0-.39-.156-.625-.351-.82a1.74 1.74 0 0 0-.86-.352.755.755 0 0 1-1.289-.547V17.22H11.68c-.664 0-1.016-.82-.547-1.29-.04-.35-.156-.663-.352-.859s-.43-.351-.781-.351c-.39 0-.625.156-.82.351a1.74 1.74 0 0 0-.352.86.755.755 0 0 1-.547 1.289H5.47V23c0 .156.078.352.273.508.196.156.508.273.82.273m-1.094-7.5h2.46c-.038-.078-.038-.195-.038-.312q.058-.879.586-1.524c.351-.39.859-.664 1.484-.664s1.172.274 1.523.664q.528.645.586 1.524c0 .117 0 .234-.039.312h2.5V10.5c0-.156-.078-.312-.312-.508-.196-.156-.508-.273-.899-.273h-1.64a.755.755 0 0 1-.547-1.29c-.04-.35-.156-.663-.352-.859A.99.99 0 0 0 10 7.22c-.352 0-.625.156-.82.351a1.74 1.74 0 0 0-.352.86.755.755 0 0 1-.547 1.289h-1.64c-.352 0-.664.117-.899.273-.195.195-.273.352-.273.508v.04c0 .077 0 .35-.04.585-.038.156-.038.273-.077.43-.04.117-.118.312-.313.43-.156.117-.312.156-.43.117-.156 0-.234-.04-.312-.079 0 0-.04 0-.04-.039H4.22c-.43.04-.742.157-.977.274-.156.156-.273.351-.273.703 0 .351.117.586.312.742q.294.293.938.352h.039c0-.04.039-.04.039-.04.078-.038.156-.078.312-.078.118-.039.274 0 .43.118.195.117.274.312.313.43s.039.273.078.43c.039.233.039.507.039.585v.82z' />
    </g>
    <defs>
      <clipPath id='0d106d00a181aafc6b5a796fb00ab751__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzlePieceTwoLgRegularIcon);
export default ForwardRef;
