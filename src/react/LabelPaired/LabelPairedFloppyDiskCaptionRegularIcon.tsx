import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFloppyDiskCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1 5.75v7.5c0 .422.328.75.75.75h7.5c.398 0 .75-.328.75-.75V7.508a.76.76 0 0 0-.234-.54L8.03 5.235c-.094-.093-.187-.14-.281-.187V7.25c0 .422-.352.75-.75.75H2.5a.74.74 0 0 1-.75-.75V5a.755.755 0 0 0-.75.75M2.5 5v2.25H7V5zm-2.25.75c0-.82.656-1.5 1.5-1.5h5.742c.399 0 .774.164 1.055.445l1.758 1.758c.28.281.445.656.445 1.055v5.742c0 .844-.68 1.5-1.5 1.5h-7.5a1.48 1.48 0 0 1-1.5-1.5zM6.625 11c0-.398-.234-.75-.562-.96a1.08 1.08 0 0 0-1.125 0 1.122 1.122 0 0 0 0 1.945c.328.21.773.21 1.125 0 .328-.212.562-.563.562-.985M5.5 9.125c.656 0 1.266.375 1.617.938a1.91 1.91 0 0 1 0 1.874c-.351.586-.96.938-1.617.938-.68 0-1.29-.352-1.64-.937a1.91 1.91 0 0 1 0-1.876c.35-.562.96-.937 1.64-.937' />
    </g>
    <defs>
      <clipPath id='c281b1dd60da233be5b2f29c331363ce__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFloppyDiskCaptionRegularIcon);
export default ForwardRef;
