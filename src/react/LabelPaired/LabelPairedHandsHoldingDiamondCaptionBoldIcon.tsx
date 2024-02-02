import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandsHoldingDiamondCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6.96 3.71a.78.78 0 0 1 .54-.21q.305 0 .54.21l2.25 2.25q.21.235.21.54t-.21.54L8.04 9.29a.78.78 0 0 1-.54.21.78.78 0 0 1-.54-.21L4.71 7.04a.78.78 0 0 1-.21-.54q0-.305.21-.54zM1.689 5q.726.024 1.195.492.468.469.492 1.196V9.71q.445-.375 1.055-.399.68 0 1.148.47l1.453 1.452q.258.258.469.586.21-.328.492-.586l1.43-1.453a1.56 1.56 0 0 1 1.148-.469 1.7 1.7 0 0 1 1.055.399V6.687q.024-.726.492-1.195A1.76 1.76 0 0 1 13.312 5q.727.024 1.196.492.468.469.492 1.196v5.062q0 1.172-.82 1.992l-1.594 1.594q-.399.328-.797 0-.328-.399 0-.797l1.594-1.594q.492-.492.492-1.195V6.688q-.047-.516-.562-.563-.516.047-.563.563v3.421a2.17 2.17 0 0 1-.656 1.594l-.375.375-.633.633-.375.375q-.399.328-.797 0-.328-.399 0-.797l.375-.375.633-.633a.48.48 0 0 0 .14-.351q-.046-.445-.492-.492a.48.48 0 0 0-.351.14l-1.453 1.453a2.46 2.46 0 0 0-.703 1.711v1.195q-.048.516-.563.563-.516-.047-.562-.562v-1.196a2.46 2.46 0 0 0-.704-1.71l-1.453-1.454a.48.48 0 0 0-.351-.14q-.445.046-.492.492 0 .21.14.351l.633.633.375.375q.329.399 0 .797-.398.328-.797 0l-.375-.375-.633-.633-.351-.375a2.25 2.25 0 0 1-.68-1.594V6.688q-.047-.516-.562-.563-.516.047-.563.563v5.062q0 .703.492 1.195l1.594 1.594q.328.399 0 .797-.399.328-.797 0L.82 13.742q-.796-.82-.82-1.992V6.688q.024-.727.492-1.196Q.961 5.024 1.688 5' />
    </g>
    <defs>
      <clipPath id='adc17fd0eb1fea0a__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandsHoldingDiamondCaptionBoldIcon);
export default ForwardRef;
