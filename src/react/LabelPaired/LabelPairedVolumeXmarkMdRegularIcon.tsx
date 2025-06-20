import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeXmarkMdRegularIcon = (
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
      <path d='M4.719 9.875a.45.45 0 0 1-.313.125H1.75a.74.74 0 0 0-.75.75v2.5c0 .438.313.75.75.75h2.656c.094 0 .219.063.313.125L9 17.938V6.094zM9.063 5c.5 0 .937.438.937.938v12.156c0 .5-.437.906-.937.906-.25 0-.47-.062-.626-.219l.344-.375-.344.375L4.188 15H1.75C.781 15 0 14.219 0 13.25v-2.5C0 9.813.781 9 1.75 9h2.438l4.25-3.75A.87.87 0 0 1 9.062 5m3.78 4.156L15 11.312l2.125-2.156a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719L15.687 12l2.157 2.156a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0L15 12.719l-2.156 2.156a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719L14.281 12l-2.156-2.125a.53.53 0 0 1 0-.719.53.53 0 0 1 .719 0' />
    </g>
    <defs>
      <clipPath id='4653fd468bcea67163657a1d95274cde__a'>
        <path d='M0 0h18v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeXmarkMdRegularIcon);
export default ForwardRef;
