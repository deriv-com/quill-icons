import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskPenCaptionRegularIcon = (
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
      <path d='M1 5.75v7.5c0 .422.328.75.75.75h4.734l-.187.75H1.75a1.48 1.48 0 0 1-1.5-1.5v-7.5c0-.82.656-1.5 1.5-1.5h5.742c.399 0 .774.164 1.055.445l1.758 1.758c.28.281.445.656.445 1.055V8.68l-.75.75V7.508a.76.76 0 0 0-.234-.54L8.03 5.235c-.094-.093-.187-.14-.281-.187V7.25c0 .422-.352.75-.75.75H2.5a.74.74 0 0 1-.75-.75V5a.755.755 0 0 0-.75.75M2.5 5v2.25H7V5zm1.875 6c0 .422.21.773.563.984.328.211.773.211 1.125 0 .328-.21.562-.562.562-.984 0-.398-.234-.75-.562-.96a1.08 1.08 0 0 0-1.125 0c-.352.21-.563.562-.563.96M5.5 12.875c-.68 0-1.29-.352-1.64-.937a1.91 1.91 0 0 1 0-1.876c.35-.562.96-.937 1.64-.937.656 0 1.266.375 1.617.938a1.91 1.91 0 0 1 0 1.874c-.351.586-.96.938-1.617.938m6.89-3.164a.332.332 0 0 0-.515 0l-.586.562.938.938.585-.563c.141-.164.141-.398 0-.539zm-4.124 3.586a.5.5 0 0 0-.094.187l-.281 1.149 1.148-.305c.047 0 .117-.047.164-.094l2.485-2.484-.938-.937zm3.07-4.125a1.12 1.12 0 0 1 1.594 0l.398.398a1.12 1.12 0 0 1 0 1.594l-3.586 3.61c-.164.14-.328.234-.539.304l-1.758.422c-.117.047-.258 0-.351-.094A.39.39 0 0 1 7 15.055l.445-1.758c.047-.188.14-.375.282-.516z' />
    </g>
    <defs>
      <clipPath id='536f357997699431bc74babd1621c0b4__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskPenCaptionRegularIcon);
export default ForwardRef;
