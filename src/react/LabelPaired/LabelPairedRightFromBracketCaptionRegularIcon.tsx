import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightFromBracketCaptionRegularIcon = (
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
      <path d='M11.227 9.453 8.133 6.547Q8.086 6.5 8.039 6.5a.18.18 0 0 0-.164.164V8q-.023.352-.375.375H4.688q-.165.024-.188.188v1.874q.024.165.188.188H7.5q.352.023.375.375v1.336q.024.14.164.164.047 0 .094-.047l3.094-2.906q.023-.024.023-.047 0-.024-.023-.047M12 9.5q0 .351-.258.586l-3.094 2.93a.88.88 0 0 1-.609.234.9.9 0 0 1-.656-.258.9.9 0 0 1-.258-.656v-.961H4.688a.85.85 0 0 1-.657-.281.85.85 0 0 1-.281-.656V8.562q0-.398.281-.656a.85.85 0 0 1 .657-.281h2.437v-.96q0-.4.258-.657a.9.9 0 0 1 .656-.258q.351 0 .61.258l3.093 2.906A.76.76 0 0 1 12 9.5M4.125 5h-2.25a1.22 1.22 0 0 0-.797.328 1.22 1.22 0 0 0-.328.797v6.75q.024.469.328.797.328.304.797.328h2.25q.352.023.375.375-.023.352-.375.375h-2.25q-.797-.023-1.336-.54-.515-.538-.539-1.335v-6.75q.023-.797.54-1.336.538-.516 1.335-.539h2.25q.352.023.375.375-.023.352-.375.375' />
    </g>
    <defs>
      <clipPath id='e33a876911853c2a9ae24e2d82ae5425__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightFromBracketCaptionRegularIcon);
export default ForwardRef;
