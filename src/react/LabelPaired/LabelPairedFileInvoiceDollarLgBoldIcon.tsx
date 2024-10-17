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
      <path d='M13.125 23V11.75H10c-.703 0-1.25-.547-1.25-1.25V7.375H2.5A.64.64 0 0 0 1.875 8v15c0 .352.273.625.625.625h10a.64.64 0 0 0 .625-.625M0 8c0-1.367 1.094-2.5 2.5-2.5h6.445c.664 0 1.29.273 1.758.742l3.555 3.555c.469.469.742 1.094.742 1.758V23c0 1.406-1.133 2.5-2.5 2.5h-10A2.47 2.47 0 0 1 0 23zm7.5 5.938c.43 0 .781.351.781.78v.391c.274.04.547.118.781.157.43.117.704.547.586.937a.75.75 0 0 1-.937.586c-.43-.078-.86-.156-1.25-.156a1.55 1.55 0 0 0-.86.156c-.195.117-.195.195-.195.234s.04.079.157.157c.234.117.625.234 1.132.351.43.117 1.016.274 1.446.547.468.274.976.742.976 1.524.04.82-.43 1.367-.976 1.64a2.5 2.5 0 0 1-.899.313v.39c0 .43-.351.782-.781.782a.784.784 0 0 1-.781-.782v-.43c-.39-.078-.742-.195-1.055-.273-.078-.039-.156-.039-.234-.078a.78.78 0 0 1-.547-.977c.117-.43.586-.664.976-.507.117 0 .196.039.274.078.547.156.976.273 1.406.273.352.04.664-.039.898-.156.157-.078.196-.156.196-.273 0 0 0-.079-.196-.196a6.6 6.6 0 0 0-1.132-.351l-.04-.04c-.43-.117-.976-.273-1.406-.468-.468-.274-.976-.742-.976-1.524-.04-.82.508-1.328 1.015-1.601.274-.156.547-.235.86-.313v-.39c0-.43.351-.781.781-.781M3.75 9.25h3.125c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H3.75a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625m0 2.5h3.125c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H3.75a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625' />
    </g>
    <defs>
      <clipPath id='c5fdeab42b2ae24c05f15a062d80d33c__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileInvoiceDollarLgBoldIcon);
export default ForwardRef;
