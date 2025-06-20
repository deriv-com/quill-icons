import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBankXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m12.516 6.14 10.64 5.907c.516.281.844.797.844 1.36 0 .89-.75 1.593-1.64 1.593H1.593A1.58 1.58 0 0 1 0 13.406c0-.562.281-1.078.797-1.36l10.64-5.905c.329-.188.75-.188 1.079 0m-1.828 6.61c-.141-.187-.188-.469-.188-.75 0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5 0 .281-.094.563-.234.75h6.562L12 8.438 4.125 12.75zM3 16.5h2.25V24h3v-7.5h2.25V24h3v-7.5h2.25V24h3v-7.5H21V24h.375c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H3c-.656 0-1.125-.469-1.125-1.125C1.875 24.515 2.344 24 3 24zM1.5 27.75h21.375c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 22.875 30H1.5c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='1d683796a6d05a06072d4a80253e6605__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBankXlBoldIcon);
export default ForwardRef;
