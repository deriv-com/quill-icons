import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedImageXlBoldIcon = (
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
      <path d='M21 9.75H3q-.703.047-.75.75v15l.234-.281 3.75-5.25q.33-.47.891-.469.563 0 .938.469l1.406 2.015 3.89-5.062q.33-.422.891-.422.563 0 .89.422l6.376 8.25.234.328v-15q-.046-.703-.75-.75M3 7.5h18q1.266.047 2.11.89.843.844.89 2.11v15q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89-.843-.844-.89-2.11v-15q.047-1.266.89-2.11.844-.843 2.11-.89m3.75 9q-1.266-.046-1.969-1.125-.562-1.125 0-2.25Q5.484 12.047 6.75 12q1.266.047 1.969 1.125.563 1.125 0 2.25-.703 1.079-1.969 1.125' />
    </g>
    <defs>
      <clipPath id='5646a40b9c03bf0a539279ca9069c765__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedImageXlBoldIcon);
export default ForwardRef;
