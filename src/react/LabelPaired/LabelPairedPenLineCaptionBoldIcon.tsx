import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPenLineCaptionBoldIcon = (
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
      <path d='m.555 13.79.539-1.83q.164-.515.539-.866l7.125-7.149a1.48 1.48 0 0 1 1.055-.422q.586 0 1.054.422l.938.938q.093.093.187.234a1.5 1.5 0 0 1 .235.961 1.5 1.5 0 0 1-.422.914L4.68 14.117l-.094.094q-.351.304-.797.445l-1.828.54-.984.28a.54.54 0 0 1-.563-.14.6.6 0 0 1-.14-.563zm1.476-.962-.398 1.29 1.289-.376.562-.164q.212-.07.399-.234l5.344-5.367-1.454-1.454-5.343 5.344-.047.047q-.14.165-.211.352zm4.031 1.547h7.126q.514.047.562.563-.047.514-.562.562H6.062q-.514-.047-.562-.562.047-.516.563-.563' />
    </g>
    <defs>
      <clipPath id='82764fb85c1de6318e7b74ad34df7a59__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPenLineCaptionBoldIcon);
export default ForwardRef;
