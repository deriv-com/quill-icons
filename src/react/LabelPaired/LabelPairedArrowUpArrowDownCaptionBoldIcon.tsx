import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpArrowDownCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m12.648 12.336-2.25 2.25q-.397.328-.796 0l-2.25-2.25q-.33-.399 0-.797.397-.328.796 0l1.29 1.29V4.811q.045-.514.562-.562.515.047.563.563v8.015l1.289-1.289q.397-.328.796 0 .33.399 0 .797m-8.25-7.922 2.25 2.25q.33.399 0 .797-.397.328-.796 0l-1.29-1.29v8.017q-.045.514-.562.562-.516-.047-.562-.562V6.172L2.148 7.46q-.397.328-.796 0-.33-.399 0-.797l2.25-2.25q.397-.329.796 0' />
    </g>
    <defs>
      <clipPath id='8660d1bbdade91bd4b6a1cfc6ba28499__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpArrowDownCaptionBoldIcon);
export default ForwardRef;
