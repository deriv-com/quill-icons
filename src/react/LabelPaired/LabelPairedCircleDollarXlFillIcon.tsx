import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleDollarXlFillIcon = (
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
      <path d='M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30m.938-17.719c0-.562-.422-1.031-.985-1.031a1.04 1.04 0 0 0-1.031 1.031v.75c-.281.094-.563.14-.797.281-.844.376-1.64 1.032-1.828 2.063-.188 1.078.234 2.063 1.172 2.625.656.422 1.547.703 2.25.89.094.047.234.047.328.094.562.141 1.125.328 1.594.61.562.375.328 1.078-.235 1.312-.422.14-1.078.235-1.875.094-.562-.094-1.078-.281-1.594-.422-.14-.047-.234-.094-.374-.14-.516-.188-1.079.093-1.266.656a.993.993 0 0 0 .61 1.265c.702.235 1.359.422 2.015.61v.797a1.04 1.04 0 0 0 1.031 1.03c.563 0 .985-.468.985-1.03v-.703c.421-.047.843-.141 1.218-.282.844-.375 1.594-1.078 1.781-2.11.188-1.077-.234-2.108-1.124-2.718-.704-.469-1.641-.75-2.391-.984-.094 0-.188-.047-.328-.047-.516-.188-1.078-.328-1.547-.61-.563-.375-.14-.937.375-1.125.562-.28 1.265-.328 1.922-.187.328.047.656.14.984.234.047 0 .14.047.188.047.562.14 1.125-.14 1.265-.703.14-.515-.187-1.078-.703-1.265-.094 0-.187-.047-.281-.047-.422-.141-.89-.282-1.36-.328z' />
    </g>
    <defs>
      <clipPath id='a72f06ce9edfb610d35a3308f4ca2af9__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDollarXlFillIcon);
export default ForwardRef;
