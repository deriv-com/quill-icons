import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHouseBlankSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m8.41 3.914 7.219 6.125c.273.246.3.656.082.93a.68.68 0 0 1-.93.082l-.656-.574v5.086c0 1.23-.984 2.187-2.187 2.187H4.061a2.16 2.16 0 0 1-2.187-2.187v-5.086l-.684.574a.68.68 0 0 1-.93-.082.68.68 0 0 1 .083-.93l7.219-6.125a.7.7 0 0 1 .847 0m4.403 5.441L8 5.281 3.188 9.355v6.208c0 .492.382.874.874.874h7.876a.88.88 0 0 0 .874-.875z' />
    </g>
    <defs>
      <clipPath id='d45b3e97aa2a961bb5a1b48d4fdac0e7__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHouseBlankSmBoldIcon);
export default ForwardRef;
