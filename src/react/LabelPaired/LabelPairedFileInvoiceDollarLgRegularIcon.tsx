import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileInvoiceDollarLgRegularIcon = (
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
      <path d='M13.75 23V13H9.375A1.85 1.85 0 0 1 7.5 11.125V6.75h-5c-.703 0-1.25.586-1.25 1.25v15c0 .703.547 1.25 1.25 1.25h10c.664 0 1.25-.547 1.25-1.25m-.04-11.25c-.038-.078-.077-.195-.155-.273L9.023 6.945c-.078-.078-.195-.117-.273-.156v4.336c0 .352.273.625.625.625zM0 8c0-1.367 1.094-2.5 2.5-2.5h6.094c.469 0 .976.234 1.328.586l4.492 4.492c.352.352.586.86.586 1.328V23c0 1.406-1.133 2.5-2.5 2.5h-10A2.47 2.47 0 0 1 0 23zm2.5.625c0-.312.273-.625.625-.625h2.5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-2.5a.617.617 0 0 1-.625-.625m0 2.5c0-.312.273-.625.625-.625h2.5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-2.5a.617.617 0 0 1-.625-.625m5.625 3.906v.547c.313.04.625.078.898.156.352.079.547.43.47.743a.617.617 0 0 1-.743.468c-.43-.078-.86-.156-1.29-.156-.312-.039-.702.04-.937.195-.234.118-.273.235-.273.352 0 .078 0 .156.234.273.274.157.664.235 1.172.391.43.117.977.273 1.407.508.468.234.898.703.937 1.406 0 .742-.43 1.211-.937 1.523-.274.157-.626.235-.938.313v.508a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-.547a9 9 0 0 1-1.21-.313c-.08-.039-.157-.039-.235-.078-.313-.078-.508-.43-.43-.78.117-.313.469-.509.781-.43.117.038.196.078.274.117.547.156.976.273 1.445.273.39.04.742-.04.977-.156.195-.117.273-.274.273-.43 0-.078-.04-.195-.273-.312-.274-.157-.665-.274-1.172-.391l-.04-.04c-.43-.116-.937-.233-1.367-.468C5.468 18.47 5 18.04 5 17.336c0-.742.469-1.211.938-1.484.312-.157.625-.235.937-.274v-.547c0-.351.273-.625.625-.625s.625.274.625.625' />
    </g>
    <defs>
      <clipPath id='638327c2c6a2bd024e36d29c17523103__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileInvoiceDollarLgRegularIcon);
export default ForwardRef;
