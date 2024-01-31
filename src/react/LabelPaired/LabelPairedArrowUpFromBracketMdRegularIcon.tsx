import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromBracketMdRegularIcon = (
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
      <path d='m7.344 4.156 4 4q.312.345 0 .688-.345.312-.688 0L7.5 5.719V14.5q-.03.47-.5.5-.469-.03-.5-.5V5.719L3.344 8.844q-.345.312-.688 0-.312-.345 0-.688l4-4q.345-.312.688 0M1 14.5v3q.03.625.438 1.063.436.405 1.062.437h9a1.63 1.63 0 0 0 1.063-.437A1.63 1.63 0 0 0 13 17.5v-3q.031-.469.5-.5.47.031.5.5v3q-.03 1.062-.719 1.781-.719.688-1.781.719h-9q-1.062-.03-1.781-.719Q.03 18.562 0 17.5v-3q.031-.469.5-.5.47.031.5.5' />
    </g>
    <defs>
      <clipPath id='9b644d6260b17e86__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketMdRegularIcon);
export default ForwardRef;
