import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightToBracketMdRegularIcon = (
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
      <path d='M9.969 12.063q.03-.031.031-.063 0-.031-.031-.062L5.844 8.062Q5.78 8 5.719 8a.244.244 0 0 0-.219.219V10q-.03.47-.5.5H1.25q-.22.03-.25.25v2.5q.03.22.25.25H5q.47.031.5.5v1.781q.03.188.219.219.062 0 .125-.062zM11 12q0 .47-.344.781l-4.125 3.906Q6.187 17 5.72 17q-.531 0-.875-.344t-.344-.875V14.5H1.25q-.531 0-.875-.375Q0 13.781 0 13.25v-2.5q0-.531.375-.875.344-.375.875-.375H4.5V8.219q0-.531.344-.875T5.719 7q.468 0 .812.344l4.125 3.875q.345.313.344.781m-.5 6h3a1.63 1.63 0 0 0 1.063-.437A1.63 1.63 0 0 0 15 16.5v-9a1.63 1.63 0 0 0-.437-1.062A1.63 1.63 0 0 0 13.5 6h-3q-.469-.03-.5-.5.031-.469.5-.5h3q1.062.03 1.781.719.688.719.719 1.781v9q-.03 1.062-.719 1.781-.719.688-1.781.719h-3q-.469-.03-.5-.5.031-.469.5-.5' />
    </g>
    <defs>
      <clipPath id='b0127f2efeeedc5b__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketMdRegularIcon);
export default ForwardRef;
