import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMapXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M26.484 7.734c.328.188.516.563.516.891v15.75c0 .469-.328.89-.75 1.078l-7.875 3a1.03 1.03 0 0 1-.75 0L9 25.593l-7.5 2.86c-.328.14-.75.094-1.031-.14C.14 28.125 0 27.75 0 27.375v-15.75c0-.469.281-.844.703-1.031l7.875-3c.235-.094.516-.094.75 0l8.625 2.86 7.5-2.86c.328-.14.75-.094 1.031.14M2.25 12.422v13.36l5.625-2.157v-13.36zm14.625 13.406v-13.36l-6.75-2.25v13.36zm2.25-.047 5.625-2.156v-13.36l-5.625 2.157z' />
    </g>
    <defs>
      <clipPath id='fefe3e03b678ba18ec49d55a20819112__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMapXlBoldIcon);
export default ForwardRef;
