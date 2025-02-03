import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilterMdRegularIcon = (
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
      <path d='M0 6.25C0 5.563.531 5 1.219 5H14.75c.688 0 1.25.563 1.25 1.25 0 .281-.125.563-.312.781L10 13.938v4.03c0 .563-.5 1.063-1.062 1.063-.25 0-.47-.093-.657-.25l-1.906-1.468a.98.98 0 0 1-.406-.782v-2.593L.28 7.03A1.2 1.2 0 0 1 0 6.25M1.219 6C1.094 6 1 6.125 1 6.25c0 .063 0 .094.031.156l5.844 7.032c.063.093.125.218.125.312v2.781L8.906 18h.031C8.97 18 9 18 9 17.969V13.75c0-.094.031-.219.094-.312l5.844-7.032c.03-.062.062-.093.062-.156a.27.27 0 0 0-.25-.25z' />
    </g>
    <defs>
      <clipPath id='7ea6a59af7f3b499866f9da6826cb020__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilterMdRegularIcon);
export default ForwardRef;
