import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedQuestionCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={8}
    height={18}
    viewBox='0 0 8 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3.625 5a2.25 2.25 0 0 0-2.25 2.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375c0-1.64 1.336-3 3-3h.75c1.64 0 3 1.36 3 3A2.63 2.63 0 0 1 6.32 9.36l-1.43 1.078a1.28 1.28 0 0 0-.515 1.03v.282c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-.281c0-.633.305-1.242.82-1.64l1.43-1.079c.469-.352.75-.89.75-1.5A2.25 2.25 0 0 0 4.375 5zm-.187 9c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563' />
    </g>
    <defs>
      <clipPath id='825f2ead20678e9958c102aba6db3b28__a'>
        <path d='M0 0h8v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedQuestionCaptionRegularIcon);
export default ForwardRef;
