import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeHighMdFillIcon = (
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
      <path d='M16.656 5.031C18.688 6.688 20 9.188 20 12c0 2.844-1.312 5.344-3.344 7a.754.754 0 0 1-1.062-.125.74.74 0 0 1 .125-1.031A7.51 7.51 0 0 0 18.5 12c0-2.344-1.094-4.437-2.781-5.812a.776.776 0 0 1-.125-1.063.78.78 0 0 1 1.062-.094m-1.875 2.313C16.125 8.469 17 10.125 17 12a5.97 5.97 0 0 1-2.219 4.656.744.744 0 0 1-1.062-.093c-.281-.313-.219-.782.094-1.063A4.42 4.42 0 0 0 15.5 12a4.4 4.4 0 0 0-1.687-3.469.78.78 0 0 1-.094-1.062.776.776 0 0 1 1.062-.125m-1.906 2.343C13.563 10.25 14 11.064 14 12c0 .969-.437 1.781-1.125 2.344a.754.754 0 0 1-1.062-.125.74.74 0 0 1 .124-1.031c.344-.282.563-.72.563-1.188 0-.469-.219-.875-.562-1.156a.776.776 0 0 1-.126-1.063.78.78 0 0 1 1.063-.094M9.406 5.095C9.75 5.25 10 5.625 10 6v12c0 .406-.25.75-.594.938a1.01 1.01 0 0 1-1.094-.188L4.095 15H2c-1.125 0-2-.875-2-2v-2c0-1.094.875-2 2-2h2.094l4.219-3.719a1.01 1.01 0 0 1 1.093-.187' />
    </g>
    <defs>
      <clipPath id='9979e6446557f89190bfe7ca28388a47__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeHighMdFillIcon);
export default ForwardRef;
