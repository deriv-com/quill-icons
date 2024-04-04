import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpOneNineMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14 5.5V10h1c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-3a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h1V6.219l-.844.281c-.281.063-.562-.062-.656-.344a.52.52 0 0 1 .344-.625l1.5-.5c.125-.031.312-.031.437.063.125.093.219.25.219.406m-8.656-.344 3 3a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0L5.5 6.719V18.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V6.719L2.344 8.875a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719l3-3a.53.53 0 0 1 .719 0m8.031 11.094c.563 0 1.094-.281 1.406-.812.281-.5.281-1.094 0-1.626-.312-.5-.844-.812-1.406-.812-.594 0-1.125.313-1.437.813-.282.53-.282 1.124 0 1.624.312.532.843.813 1.437.813m-2.625-1.625A2.62 2.62 0 0 1 13.375 12 2.64 2.64 0 0 1 16 14.625c0 .063 0 .094-.031.125H16c0 .688-.25 1.313-.687 1.813l-1.938 2.28c-.187.22-.5.22-.719.063-.219-.187-.219-.5-.062-.718l.812-.938h-.031a2.6 2.6 0 0 1-2.625-2.625' />
    </g>
    <defs>
      <clipPath id='187272d2dec13cbb5535c2da5e83758c__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpOneNineMdRegularIcon);
export default ForwardRef;
