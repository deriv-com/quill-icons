import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToBracketMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m11.344 10.844-4 4q-.345.312-.688 0l-4-4q-.312-.345 0-.688.345-.312.688 0L6.5 13.281V4.5q.031-.469.5-.5.47.031.5.5v8.781l3.156-3.125q.345-.312.688 0 .312.345 0 .688M1 14.5v3q.03.625.438 1.063.436.405 1.062.437h9a1.63 1.63 0 0 0 1.063-.437A1.63 1.63 0 0 0 13 17.5v-3q.031-.469.5-.5.47.031.5.5v3q-.03 1.062-.719 1.781-.719.688-1.781.719h-9q-1.062-.03-1.781-.719Q.03 18.562 0 17.5v-3q.031-.469.5-.5.47.031.5.5' />
    </g>
    <defs>
      <clipPath id='df38d2ee5fbd4ff707fe6013b0abb5d5__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketMdRegularIcon);
export default ForwardRef;
