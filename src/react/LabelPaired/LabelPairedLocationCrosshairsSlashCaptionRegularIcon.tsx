import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSlashCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.281 12.805h-.023l.633.492a4.25 4.25 0 0 1-2.016.68v1.148q-.023.352-.375.375-.352-.023-.375-.375v-1.148q-1.665-.165-2.812-1.29-1.125-1.148-1.29-2.812H1.875Q1.523 9.852 1.5 9.5q.023-.352.375-.375h1.148a5 5 0 0 1 .211-1.078l.633.492a4 4 0 0 0-.117.961q.046 1.594 1.102 2.648Q5.906 13.203 7.5 13.25q.96 0 1.781-.445M7.125 5.023V3.875q.023-.352.375-.375.352.023.375.375v1.148q1.665.165 2.813 1.29 1.125 1.148 1.289 2.812h1.148q.352.023.375.375-.023.352-.375.375h-1.148a5 5 0 0 1-.211 1.078l-.633-.492q.117-.47.117-.961-.046-1.593-1.102-2.648Q9.094 5.797 7.5 5.75q-.96 0-1.758.445l-.633-.492a4.25 4.25 0 0 1 2.016-.68M7.5 11.75q-.915-.024-1.547-.61-.633-.585-.703-1.5l1.313 1.032q.023 0 .023.023l1.312 1.032q-.21.023-.398.023m-.375-4.477A3 3 0 0 1 7.5 7.25q.915.024 1.547.61.633.585.703 1.5L8.438 8.327q-.024 0-.024-.023zM.609 3.57l14.25 11.274q.258.234.07.515-.256.258-.538.07L.14 4.18q-.258-.256-.07-.538.256-.235.538-.07' />
    </g>
    <defs>
      <clipPath id='c2298e24dbd5485c9e25776196d030c5__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSlashCaptionRegularIcon);
export default ForwardRef;
