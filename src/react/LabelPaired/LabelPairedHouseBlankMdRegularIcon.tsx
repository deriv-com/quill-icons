import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHouseBlankMdRegularIcon = (
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
      <path d='M8.656 4.125q.345-.25.688 0l8.5 7.5q.312.344.031.719-.344.313-.719.031L16 11.344V17.5q-.03 1.062-.719 1.781-.719.688-1.781.719h-9q-1.062-.03-1.781-.719Q2.03 18.562 2 17.5v-6.156L.844 12.375q-.375.281-.719-.031-.28-.375.031-.719zM3 10.469V17.5q.03.625.438 1.063.436.405 1.062.437h9a1.63 1.63 0 0 0 1.063-.437A1.63 1.63 0 0 0 15 17.5v-7.031L9 5.156z' />
    </g>
    <defs>
      <clipPath id='4ce93784c22f8552a0ad69c5e911fc9f__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankMdRegularIcon);
export default ForwardRef;
