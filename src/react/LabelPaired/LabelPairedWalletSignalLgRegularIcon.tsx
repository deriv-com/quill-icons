import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletSignalLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 9.875A3.11 3.11 0 0 1 3.125 6.75h15c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-15C2.07 8 1.25 8.86 1.25 9.875v11.25C1.25 22.18 2.07 23 3.125 23H13.75v1.25H3.125C1.367 24.25 0 22.883 0 21.125zm3.75 0c0-.312.273-.625.625-.625h12.5A3.134 3.134 0 0 1 20 12.375v2.734c-.43-.195-.82-.312-1.25-.468v-2.227c0-1.055-.86-1.875-1.875-1.875h-12.5a.64.64 0 0 1-.625-.625zM15 16.125c0-.312.273-.625.625-.625 5.156 0 9.375 4.219 9.375 9.375a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625c0-4.453-3.672-8.125-8.125-8.125a.617.617 0 0 1-.625-.625m0 3.75c0-.312.273-.625.625-.625 3.086 0 5.625 2.54 5.625 5.625a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625c0-2.383-1.992-4.375-4.375-4.375a.617.617 0 0 1-.625-.625m0 4.375c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25' />
    </g>
    <defs>
      <clipPath id='0e6a585c7e04fb07227e93c9e1f438c1__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletSignalLgRegularIcon);
export default ForwardRef;
