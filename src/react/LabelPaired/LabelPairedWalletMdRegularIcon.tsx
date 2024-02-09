import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWalletMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 5h12q.47.031.5.5-.03.47-.5.5h-12a1.63 1.63 0 0 0-1.062.438A1.63 1.63 0 0 0 1 7.5v9q.03.625.438 1.063.436.405 1.062.437h11a1.63 1.63 0 0 0 1.063-.437A1.63 1.63 0 0 0 15 16.5v-7a1.63 1.63 0 0 0-.437-1.062A1.63 1.63 0 0 0 13.5 8h-10q-.469-.03-.5-.5.031-.469.5-.5h10q1.062.03 1.781.719.688.719.719 1.781v7q-.03 1.062-.719 1.781-.719.688-1.781.719h-11q-1.062-.03-1.781-.719Q.03 17.562 0 16.5v-9q.03-1.062.719-1.781Q1.438 5.03 2.5 5m9.5 8.75q-.687-.063-.75-.75.063-.687.75-.75.687.063.75.75-.063.687-.75.75' />
    </g>
    <defs>
      <clipPath id='d439e669897a7447ba460708a5eafa89__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWalletMdRegularIcon);
export default ForwardRef;
