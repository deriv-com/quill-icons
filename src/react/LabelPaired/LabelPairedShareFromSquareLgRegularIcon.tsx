import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareFromSquareLgRegularIcon = (
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
      <path d='M15.875 16.438c0 .195.117.312.313.312.078 0 .156 0 .195-.078l5.039-4.766c.039-.039.039-.078.039-.156 0-.04 0-.078-.04-.117l-5.038-4.766a.22.22 0 0 0-.195-.117.31.31 0 0 0-.313.313V9.25a.64.64 0 0 1-.625.625H11.5c-2.773 0-5 2.266-5 5 0 1.406.586 2.422 1.29 3.164-.04-.195-.04-.39-.04-.586 0-2.11 1.68-3.828 3.79-3.828h3.71c.313 0 .625.313.625.625v2.188m-1.25-1.563h-3.086C10.133 14.875 9 16.047 9 17.453c0 .586.547 1.211.898 1.563.196.156.352.39.352.664v.039c0 .43-.39.781-.82.781-.078 0-.196 0-.274-.04-.703-.312-3.906-1.913-3.906-5.585a6.243 6.243 0 0 1 6.25-6.25h3.125V7.063c0-.86.703-1.563 1.563-1.563.39 0 .78.156 1.054.43l5.04 4.765c.273.274.468.664.468 1.055 0 .43-.195.781-.469 1.055l-5.039 4.765c-.273.313-.664.43-1.055.43-.859 0-1.562-.664-1.562-1.562v-1.563M2.75 6.75h1.875c.313 0 .625.313.625.625A.64.64 0 0 1 4.625 8H2.75c-.703 0-1.25.586-1.25 1.25V23c0 .703.547 1.25 1.25 1.25H16.5c.664 0 1.25-.547 1.25-1.25v-1.875c0-.312.273-.625.625-.625.313 0 .625.313.625.625V23c0 1.406-1.133 2.5-2.5 2.5H2.75A2.47 2.47 0 0 1 .25 23V9.25c0-1.367 1.094-2.5 2.5-2.5' />
    </g>
    <defs>
      <clipPath id='71f84a3bb7475055e0a606736ca737ba__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareFromSquareLgRegularIcon);
export default ForwardRef;
