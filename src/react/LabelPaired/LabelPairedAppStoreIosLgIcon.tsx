import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAppStoreIosLgIcon = (
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
      <path d='M15.875 6.75c1.016 0 1.875.86 1.875 1.875v13.75c0 1.055-.86 1.875-1.875 1.875H2.125A1.85 1.85 0 0 1 .25 22.375V8.625c0-1.016.82-1.875 1.875-1.875zM5.211 20.54l.742-1.29c-.39-.508-.937-.664-1.562-.469l-.547.977c-.235.351-.078.86.273 1.055.39.234.86.117 1.094-.274m5.39-2.11c.352-.625-.078-1.563-.859-1.563H7.32l3.32-5.82c.235-.352.118-.82-.273-1.055-.351-.195-.86-.078-1.055.274l-.351.625-.352-.625c-.195-.352-.703-.47-1.054-.274-.39.235-.508.703-.313 1.055l.82 1.406-2.539 4.414H3.531a.784.784 0 0 0-.781.781c0 .43.352.782.781.782zm3.868 0c.43 0 .781-.352.781-.782a.784.784 0 0 0-.781-.78h-2.031c-1.055-1.759-1.797-3.087-2.305-3.985-.469.39-.938 1.523-.274 2.656.625 1.094 1.602 2.774 2.891 5a.757.757 0 0 0 1.055.273.757.757 0 0 0 .273-1.054l-.742-1.328z' />
    </g>
    <defs>
      <clipPath id='a601d52f83bc40b63396e67e3a0999e5__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppStoreIosLgIcon);
export default ForwardRef;
