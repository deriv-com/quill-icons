import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightToBracketCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.477 9.547Q7.5 9.523 7.5 9.5q0-.024-.023-.047L4.383 6.547Q4.336 6.5 4.289 6.5a.18.18 0 0 0-.164.164V8q-.023.352-.375.375H.938q-.165.024-.188.188v1.874q.024.165.188.188H3.75q.352.023.375.375v1.336q.024.14.164.164.047 0 .094-.047zM8.25 9.5q0 .351-.258.586l-3.094 2.93a.88.88 0 0 1-.609.234.9.9 0 0 1-.656-.258.9.9 0 0 1-.258-.656v-.961H.938a.85.85 0 0 1-.657-.281.85.85 0 0 1-.281-.656V8.562q0-.398.281-.656a.85.85 0 0 1 .657-.281h2.437v-.96q0-.4.258-.657a.9.9 0 0 1 .656-.258q.351 0 .61.258l3.093 2.906a.76.76 0 0 1 .258.586M7.875 14h2.25q.469-.024.797-.328.304-.329.328-.797v-6.75a1.22 1.22 0 0 0-.328-.797A1.22 1.22 0 0 0 10.125 5h-2.25q-.352-.023-.375-.375.023-.352.375-.375h2.25q.797.023 1.336.54.515.538.539 1.335v6.75q-.023.797-.54 1.336-.538.515-1.335.539h-2.25q-.352-.023-.375-.375.023-.352.375-.375' />
    </g>
    <defs>
      <clipPath id='58e5fe11f460f33266b5f1af21afdf72__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketCaptionRegularIcon);
export default ForwardRef;
