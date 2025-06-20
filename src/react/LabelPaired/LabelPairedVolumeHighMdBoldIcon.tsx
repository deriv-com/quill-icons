import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeHighMdBoldIcon = (
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
      <path d='M16.656 5.031C18.688 6.688 20 9.188 20 12c0 2.844-1.312 5.344-3.344 7a.78.78 0 0 1-1.062-.094.776.776 0 0 1 .125-1.062A7.51 7.51 0 0 0 18.5 12c0-2.344-1.094-4.437-2.781-5.812a.776.776 0 0 1-.125-1.063.78.78 0 0 1 1.062-.094m-1.875 2.313v.031A5.97 5.97 0 0 1 17 12.031c0 1.875-.875 3.531-2.219 4.656a.776.776 0 0 1-1.062-.125.78.78 0 0 1 .094-1.062A4.42 4.42 0 0 0 15.5 12a4.4 4.4 0 0 0-1.687-3.469c-.313-.281-.376-.75-.094-1.062a.776.776 0 0 1 1.062-.125m-1.906 2.343C13.563 10.25 14 11.064 14 12c0 .969-.437 1.781-1.125 2.344a.78.78 0 0 1-1.062-.094.776.776 0 0 1 .124-1.062c.344-.282.563-.72.563-1.188 0-.469-.219-.875-.562-1.156a.776.776 0 0 1-.126-1.063.78.78 0 0 1 1.063-.094m-7.906.626a.7.7 0 0 1-.469.187H1.75a.246.246 0 0 0-.25.25v2.5c0 .156.094.25.25.25H4.5c.156 0 .344.094.469.219L8.5 16.813V7.219zM9.062 5c.5 0 .938.438.938.938v12.156c0 .5-.437.906-.937.906-.25 0-.47-.062-.626-.219L4.188 15H1.75C.781 15 0 14.219 0 13.25v-2.5C0 9.813.781 9 1.75 9h2.438l4.25-3.75A.87.87 0 0 1 9.062 5' />
    </g>
    <defs>
      <clipPath id='5b7ef548f4613a5afa73593b8efeaf92__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeHighMdBoldIcon);
export default ForwardRef;
