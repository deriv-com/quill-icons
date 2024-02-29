import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletCaptionRegularIcon = (
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
      <path d='M1.875 4.25h9q.352.023.375.375-.023.352-.375.375h-9a1.22 1.22 0 0 0-.797.328 1.22 1.22 0 0 0-.328.797v6.75q.024.469.328.797.328.304.797.328h8.25q.469-.024.797-.328.304-.329.328-.797v-5.25a1.22 1.22 0 0 0-.328-.797 1.22 1.22 0 0 0-.797-.328h-7.5q-.352-.023-.375-.375.023-.352.375-.375h7.5q.797.023 1.336.54.515.538.539 1.335v5.25q-.023.797-.54 1.336-.538.515-1.335.539h-8.25q-.797-.023-1.336-.54-.515-.538-.539-1.335v-6.75q.023-.797.54-1.336.538-.516 1.335-.539M9 10.813q-.516-.048-.562-.563.045-.516.562-.562.515.045.563.562-.048.515-.563.563' />
    </g>
    <defs>
      <clipPath id='bfaa107fb2a03dddbbe19ae6088e0dae__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletCaptionRegularIcon);
export default ForwardRef;
