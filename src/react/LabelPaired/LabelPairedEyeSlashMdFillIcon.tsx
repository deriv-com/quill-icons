import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeSlashMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m1.188 4.188 3.5 2.718C6.094 5.844 7.844 5 10 5c2.5 0 4.531 1.156 6 2.531 1.469 1.344 2.438 2.969 2.906 4.094.094.25.094.531 0 .781-.406 1-1.25 2.438-2.5 3.688l3.282 2.593c.343.25.406.72.125 1.032-.25.343-.72.406-1.032.125l-18.5-14.5c-.343-.25-.406-.719-.125-1.032.25-.343.719-.406 1.032-.125m5.78 4.5 2.813 2.218c.125-.281.219-.562.219-.875 0-.25-.062-.437-.125-.656-.031-.156.063-.375.25-.344 1.281.031 2.406.906 2.75 2.219a3 3 0 0 1-.125 1.969l1.188.937A4.5 4.5 0 0 0 14.5 12c0-2.469-2.031-4.5-4.5-4.5-1.187 0-2.25.469-3.031 1.188m4.688 7.5L13.937 18A8.2 8.2 0 0 1 10 19c-2.531 0-4.562-1.125-6.031-2.5s-2.438-3-2.906-4.094a1.12 1.12 0 0 1 0-.781c.312-.719.812-1.625 1.53-2.562l2.938 2.312c-.031.219-.031.438-.031.625 0 2.5 2 4.5 4.5 4.5.563 0 1.125-.094 1.656-.312' />
    </g>
    <defs>
      <clipPath id='04edd7d18a48dc0d308047bc34acc695__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSlashMdFillIcon);
export default ForwardRef;
