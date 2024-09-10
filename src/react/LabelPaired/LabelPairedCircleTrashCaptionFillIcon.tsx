import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleTrashCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m-2.25-9a.385.385 0 0 0-.375.375c0 .21.164.375.375.375h4.5a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375h-.984l-.258-.258a.38.38 0 0 0-.258-.117h-1.5a.39.39 0 0 0-.281.117L4.71 6.5zm0 1.5.305 3.82c.023.399.351.68.75.68h2.367c.398 0 .726-.281.75-.68L8.25 8z' />
    </g>
    <defs>
      <clipPath id='f9edbc6121cc15d19ac2d527fcd9881c__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleTrashCaptionFillIcon);
export default ForwardRef;
