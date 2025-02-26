import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserCheckMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={24}
    viewBox='0 0 20 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 8c0-1.406.75-2.719 2-3.437 1.219-.72 2.75-.72 4 0 1.219.718 2 2.03 2 3.437 0 1.438-.781 2.75-2 3.469-1.25.719-2.781.719-4 0A3.98 3.98 0 0 1 3 8M0 19.094C0 16 2.469 13.5 5.563 13.5h2.843C11.5 13.5 14 16 14 19.094c0 .5-.437.906-.937.906H.906A.907.907 0 0 1 0 19.094M19.531 9.53l-4 4c-.312.313-.781.313-1.062 0l-2-2a.684.684 0 0 1 0-1.031c.281-.312.75-.312 1.062 0L15 11.969l3.469-3.5a.736.736 0 0 1 1.031 0c.313.312.313.781 0 1.062z' />
    </g>
    <defs>
      <clipPath id='b62318fc859821fe438732e5e1f1c751__a'>
        <path d='M0 0h20v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserCheckMdFillIcon);
export default ForwardRef;
