import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedYoutubeMdIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={24}
    viewBox='0 0 18 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M17.188 7.875a15 15 0 0 1 .25 1.656q.061.969.093 1.719v1.531q-.03.75-.093 1.688a15 15 0 0 1-.25 1.687q-.375 1.157-1.532 1.5-.75.156-2.312.25-1.562.063-2.906.094H7.563q-1.344-.03-2.907-.094-1.562-.094-2.312-.25-1.156-.343-1.531-1.5a15 15 0 0 1-.25-1.687 69 69 0 0 1-.094-1.688V11.25q.03-.75.094-1.719.093-.937.25-1.656.375-1.155 1.53-1.531.75-.157 2.313-.25Q6.218 6.03 7.563 6h2.875q1.343.03 2.906.094 1.562.093 2.312.25 1.156.375 1.531 1.531M7.25 14.563 11.719 12 7.25 9.469z' />
    </g>
    <defs>
      <clipPath id='0147f03ad88569c092ce62fd66b279b2__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedYoutubeMdIcon);
export default ForwardRef;
