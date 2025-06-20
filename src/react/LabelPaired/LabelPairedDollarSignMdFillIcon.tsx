import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDollarSignMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={24}
    viewBox='0 0 10 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5 4c.531 0 1 .469 1 1v1.125c.031 0 .094.031.125.031h.031l1.5.282a.99.99 0 0 1 .813 1.156 1.016 1.016 0 0 1-1.156.812l-1.5-.281c-.97-.156-1.844-.031-2.438.188-.594.25-.844.593-.906.874-.063.344 0 .532.031.657.063.125.188.25.406.406.5.344 1.281.563 2.313.813l.093.03c.875.25 1.97.532 2.782 1.063.437.281.875.688 1.125 1.219.281.563.312 1.188.219 1.875-.22 1.188-1.063 1.969-2.063 2.375-.437.188-.906.281-1.375.344V19c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-1.062c-.031-.032-.031-.032-.062-.032-.75-.093-2-.437-2.844-.812a.985.985 0 0 1-.532-1.313c.25-.5.813-.75 1.344-.5.625.281 1.719.563 2.344.656 1 .157 1.813.063 2.375-.156.531-.219.75-.531.844-.906.031-.344 0-.531-.063-.625A1 1 0 0 0 7 13.813C6.5 13.5 5.719 13.28 4.688 13l-.094-.031c-.875-.219-1.969-.531-2.782-1.063-.437-.281-.874-.687-1.124-1.219C.438 10.126.375 9.5.5 8.845c.219-1.219 1.125-1.969 2.125-2.375.438-.188.875-.282 1.375-.344V5c0-.531.438-1 1-1' />
    </g>
    <defs>
      <clipPath id='450960c2aa32e645abdc915c5912e701__a'>
        <path d='M0 0h10v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDollarSignMdFillIcon);
export default ForwardRef;
