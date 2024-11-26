import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUserMdBoldIcon = (
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
      <path d='M9.5 8c0-.875-.5-1.687-1.25-2.156-.781-.438-1.75-.438-2.5 0C4.969 6.312 4.5 7.125 4.5 8c0 .906.469 1.719 1.25 2.188.75.437 1.719.437 2.5 0C9 9.718 9.5 8.906 9.5 8M3 8c0-1.406.75-2.719 2-3.437 1.219-.72 2.75-.72 4 0 1.219.718 2 2.03 2 3.437 0 1.438-.781 2.75-2 3.469-1.25.719-2.781.719-4 0A3.98 3.98 0 0 1 3 8M1.531 18.5h10.907A4.08 4.08 0 0 0 8.406 15H5.562a4.08 4.08 0 0 0-4.03 3.5M0 19.094C0 16 2.469 13.5 5.563 13.5h2.843C11.5 13.5 14 16 14 19.094c0 .5-.437.906-.937.906H.906A.907.907 0 0 1 0 19.094' />
    </g>
    <defs>
      <clipPath id='fcbac7806a99f949c74e4e368fca4f8c__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUserMdBoldIcon);
export default ForwardRef;
